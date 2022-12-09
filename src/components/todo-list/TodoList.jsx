import React from "react";
import TodoItem from "../todo-item/TodoItem";
import "./todoList.css";
export default function TodoList({ todos, onChange, onDelete }) {
  return (
    <div className="todoList">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onChange={onChange}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
}
