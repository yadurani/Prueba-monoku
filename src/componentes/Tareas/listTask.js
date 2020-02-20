import React, { Component, useState } from "react";
import { ListContainer, EmptyContainer } from "./style";
import Trash from "../../images/trash.svg";
import axios from "axios";

function ListTask(props) {
  // Declare a new state variable, which we'll call "count"
  const [detail, setDetail] = useState([]);

  const handleUpdate = (e, itemId) => {
    const checkeded = { checked: e.target.checked };

    axios
      .put(
        `https://monoku-tasks.herokuapp.com/YZgQZzKRQUkEYW5R8How/${itemId}/update`,
        checkeded
      )
      .then(response => {
        props.fetchData();
      });
  };
  const handleDelete = itemId => {
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
        setDetail({
          name: nuevo
        });
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
                    // onChange={handleCheck}
                    onClick={e => handleUpdate(e, list.id)}
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
