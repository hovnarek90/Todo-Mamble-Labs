import React from "react";
import "./todoItem.css";

export default function ({ todo, onChange, onDelete }) {
  return (
    <div className="todoItem">
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
        <span>{todo.text}</span>
      </label>
      <button onClick={()=>{
        onDelete(todo)
      }}>X</button>
    </div>
  );
}
