import React, { useState } from "react";
import "../add-todo/addTodo.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label id="label" htmlFor="input">
          Task
        </label>
        <input
          type="text"
          id="input"
          className="input-field"
          placeholder="write here"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <button className="btn" type="submit" disabled={!text}>
          Add
        </button>
        
      </form>
    </div>
  );
}
