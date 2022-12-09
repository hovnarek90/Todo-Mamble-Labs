import React from "react";
import "./completed.css"

export default function Completed({ todos, hiddenCompleted }) {
  const completedLength = todos.filter((todo) => todo.completed).length;
  return (
    <div className="hidden">
      <span>
        {completedLength}/{todos.length}
      </span>
      <input
        type="checkbox"
        name=""
        id="checkbox_id"
        onClick={hiddenCompleted}
      />
      <label htmlFor="checkbox_id">Hide completed </label>
    </div>
  );
}
