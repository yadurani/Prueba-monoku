import React, { Component, useState } from "react";
import { ListContainer, EmptyContainer } from "./style";
import Trash from "../../images/trash.svg";
import axios from "axios";

function ListTask(props) {
  // Declare a new state variable, which we'll call "count"
  const [done, setDone] = useState(false);
  const [checkeado, setChecked] = useState(!done);
  const [detail, setDetail] = useState([]);
  // console.log(done);
  const handleCheck = e => {
    const done = e.target.checked;
    setDone(done);
    console.log(done);
  };
  const handleUpdate = itemId => {
    setChecked(!done);
    const checkeded = { checked: checkeado };
    console.log(checkeded);

    axios
      .put(
        `https://monoku-tasks.herokuapp.com/YZgQZzKRQUkEYW5R8How/${itemId}/update`,
        checkeded
      )
      .then(response => {
        console.log(response);
        props.fetchData();
      });
  };
  const handleDelete = itemId => {
    console.log(itemId);
    axios
      .delete(
        `https://monoku-tasks.herokuapp.com/YZgQZzKRQUkEYW5R8How/${itemId}/delete`
      )
      .then(response => {
        props.fetchData();
      });
  };
  const handleDetail = id => {
    const Lista = props.listTask.concat();
    for (let i = 0; i < Lista.length; i++) {
      if (Lista[i].id === id) {
        const nuevo = Lista[i].text;
        console.log(nuevo);
        setDetail({
          name: nuevo
        });
        console.log(detail);
        break;
      }
    }
  };
  return (
    <>
      {props.listTask.length === 0 ? (
        <EmptyContainer>
          No has añadido ninguna tarea hasta ahora
        </EmptyContainer>
      ) : (
        <ListContainer>
          {props.listTask.map(list => (
            <li key={list.id} className={list.checked === true && "done"}>
              <div onClick={() => handleDetail(list.id)}>
                <label className="check">
                  <input
                    id={list.id}
                    type="checkbox"
                    name={list.id}
                    defaultChecked={list.checked}
                    onChange={handleCheck}
                    onClick={() => handleUpdate(list.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label htmlFor={list.id}>{list.text}</label>
              </div>
              <button className="icon" onClick={() => handleDelete(list.id)}>
                <img src={Trash} />
              </button>
            </li>
          ))}
        </ListContainer>
      )}
    </>
  );
}

export default ListTask;
