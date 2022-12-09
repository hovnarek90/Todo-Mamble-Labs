import { useState } from "react";
import "./App.css";
import AddTodo from "./components/add-todo/AddTodo";
import TodoList from "./components/todo-list/TodoList";
import Content from "./components/content/Content";
import Completed from "./components/completed/Completed";
import PopUp from "./components/pop-up/PopUp";
function App() {
  const [popUpId, setPopUpId] = useState(null);
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "learn React",
      completed: false,
    },
    {
      id: Math.random(),
      text: "learn Vue",
      completed: false,
    },
    {
      id: Math.random(),
      text: "learn Js",
      completed: false,
    },
  ]);
  return (
    <div className="App">
      {popUpId && (
        <PopUp
          setPopUpId={setPopUpId}
          onDelete={() => {
            setTodos(todos.filter((t) => t.id !== popUpId));
          }}
        />
      )}
      <Completed
        todos={todos}
        hiddenCompleted={() => {
          setTodos(todos.filter((todo) => !todo.completed));
        }}
      />
      <AddTodo
        onAdd={(text) => {
          setTodos([
            ...todos,
            { id: Math.random(), text: text, completed: false },
          ]);
        }}
        todos={todos}
      />
      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          onDelete={(todo) => {
            setPopUpId(todo.id);
          }}
          onChange={(newTodo) => {
            setTodos(
              todos.map((todo) => {
                if (todo.id == newTodo.id) {
                  return newTodo;
                }
                return todo;
              })
            );
          }}
        />
      ) : (
        <Content />
      )}
    </div>
  );
}

export default App;
