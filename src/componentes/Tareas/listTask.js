import React, { Component, useState } from "react";
import { ListContainer, EmptyContainer, Modal } from "./style";
import Trash from "../../images/trash.svg";
import Edit from "../../images/edit.svg";
import axios from "axios";

function ListTask(props) {
  // Declare a new state variable, which we'll call "count"
  const [detail, setDetail] = useState([]);
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const handleUpdate = async (e, itemId) => {
    const checkeded = { checked: e.target.checked };
    const response = await axios.put(
      `https://monoku-tasks.herokuapp.com/YZgQZzKRQUkEYW5R8How/${itemId}/update`,
      checkeded
    );
    if (response.status === 200) {
      props.fetchData();
    }
  };

  const handleDelete = async itemId => {
    const response = await axios.delete(
      `https://monoku-tasks.herokuapp.com/YZgQZzKRQUkEYW5R8How/${itemId}/delete`
    );
    if (response.status === 200) {
      props.fetchData();
    }
  };

  const handleDetail = (e, id) => {
    const Lista = props.listTask.concat();
    setOpen(true);
    for (let i = 0; i < Lista.length; i++) {
      if (Lista[i].id === id) {
        const nuevo = Lista[i];
        const { text, id } = nuevo;
        setDetail(nuevo);
        console.log(text, id);
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
        <>
          <ListContainer>
            {props.listTask.map(list => (
              <li key={list.id} className={list.checked === true && "done"}>
                <div>
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
                <button
                  className="icon edit"
                  onClick={e => handleDetail(e, list.id)}
                >
                  <img src={Edit}></img>
                </button>
                <button className="icon" onClick={() => handleDelete(list.id)}>
                  <img src={Trash} />
                </button>
              </li>
            ))}
          </ListContainer>
          {open && (
            <Modal>
              <div className="Modal__container">
                <button
                  onClick={() => onClose()}
                  className="Modal__close-button"
                >
                  X
                </button>
                <h2> {detail.text}</h2>
              </div>
            </Modal>
          )}
        </>
      )}
    </>
  );
}

export default ListTask;
