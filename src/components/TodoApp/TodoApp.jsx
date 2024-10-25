import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

let id = 4;

let items = [
  {
    id: 1,
    todo: "Buy eggs",
    isEditModeOn: false,
  },
  {
    id: 2,
    todo: "Buy olive oils",
    isEditModeOn: false,
  },
  {
    id: 3,
    todo: "Buy veggies",
    isEditModeOn: false,
  },
];

export default function TodoApp() {
  const [todos, setTodos] = useState(items);
  let [currTodo, setCurrTodo] = useState("");

  function handleAddTodo() {
    setTodos((prevTodos) => {
      let newTodos = {
        id: ++id,
        todo: currTodo,
        isEditModeOn: false,
      };

      return [...prevTodos, newTodos];
    });
    setCurrTodo("");
  }

  function handleEditTodo(todoId) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isEditModeOn: !todo.isEditModeOn };
        } else {
          return todo;
        }
      });
    });
  }

  function handleUpdateTodo(updatedTodo, todoId) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, todo: updatedTodo };
        } else {
          return todo;
        }
      });
    });
  }

  function handleDeleteTodo(todoId) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  }

  return (
    <div>
      <TodoInput
        currTodo={currTodo}
        setCurrTodo={setCurrTodo}
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        todos={todos}
        handleUpdateTodo={handleUpdateTodo}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}
