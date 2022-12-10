import React, { useState } from "react";
import "../add-todo/addTodo.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const [focus, setFocus] = useState(false);

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
        {/* <input
          type="text"
          id="input"
          className="input-field"
          placeholder="write here"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        /> */}

        <input
          type="text"
          className={text.length > 54 ? "input-field-red" : "input-field"}
          id={text.length > 54 ? "active" : "input"}
          value={text}
          placeholder="write here"
          onChange={(e) => setText(e.target.value)}
          onFocus={(e) => {
            setFocus(true);
          }}
        />
        <i
          className={
            focus ? "fa-sharp fa-solid fa-xmark" : "fa-sharp fa-solid "
          }
          onClick={(e) => {
            setFocus(false);
            setText("");
          }}
        ></i>

        <button
          className="btn"
          type="submit"
          disabled={!text}
          onClick={(e) => {
            e.preventDefault();
            if (text.length < 54) {
              onAdd(text);
              setText("");
            }
          }}
        >
          Add
        </button>

        {text.length > 54 ? (
          <p className="input-p">Task content can contain max 54 characters.</p>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}
