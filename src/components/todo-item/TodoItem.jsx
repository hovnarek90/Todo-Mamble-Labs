import React from "react";
import "./todoItem.css";

export default function ({ todo, onChange, onDelete, hiddenTodo}) {
  return (
    <div className={todo.completed&&hiddenTodo? "display-none": "todoItem"}>
      <input
        type="checkbox"
        id={todo.id}
        checked={todo.completed}
        onChange={(e) => {
          onChange({
            ...todo,
            completed: e.target.checked,
          });
        }}
      />
      <label htmlFor={todo.id}>
        <span className={todo.completed ? "span-completed" : "span-text"}>
          {todo.text}
        </span>
      </label>
      <button
        onClick={() => {
          onDelete(todo);
        }}
      >
        X
      </button>
    </div>
  );
}
