// import Todo from "./Todo";

import { useState } from "react";

export default function TodoList({
  todos,
  handleEditTodo,
  handleUpdateTodo,
  handleDeleteTodo,
}) {
  //   const [editTodo, setEditTodo] = useState("");

  function handleEditDeleteTodo(e) {
    const action = e.target.dataset.action;
    const todoId = Number(e.target.dataset.id);
    if (action === "edit") {
      handleEditTodo(todoId);
    } else if (action === "del") {
      handleDeleteTodo(todoId);
    } else if (action === "save") {
      handleEditTodo(todoId);
    }
  }

  return (
    <div onClick={handleEditDeleteTodo}>
      <p>Todo list</p>
      {todos.map((item, idx) => {
        return (
          <div key={item.id}>
            {item.isEditModeOn ? (
              <input
                type="text"
                value={item.todo}
                onChange={(e) => handleUpdateTodo(e.target.value, item.id)}
              />
            ) : (
              <p>{item.todo}</p>
            )}

            {item.isEditModeOn ? (
              <button type="button" data-id={item.id} data-action="save">
                🗒 save
              </button>
            ) : (
              <button type="button" data-id={item.id} data-action="edit">
                🗒 edit
              </button>
            )}
            <button type="button" data-id={item.id} data-action="del">
              ❌ del
            </button>
          </div>
        );
      })}
    </div>
  );
}
