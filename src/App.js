import { useState } from "react";
import "./App.css";
import AddTodo from "./components/add-todo/AddTodo";
import TodoList from "./components/todo-list/TodoList";
import Content from "./components/content/Content";
import Completed from "./components/completed/Completed";
import PopUp from "./components/pop-up/PopUp";
function App() {
  const [popUpId, setPopUpId] = useState(null);
  const [hiddenTodo, setHiddenTodo] = useState(false);
  let getItems = localStorage.getItem("todos");
  const [todos, setTodos] = useState(
    getItems != null && JSON.parse(getItems).length > 0
      ? JSON.parse(getItems)
      : []
  );

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
          setHiddenTodo(!hiddenTodo);

          // setHiddenTodo(todos);
          // setTodos(todos.filter((todo) => !todo.completed));
        }}
      />
      <AddTodo
        onAdd={(text) => {
          const todo = { id: Math.random(), text: text, completed: false };
          let store = window.localStorage.getItem("todos");
          if (store == null) {
            localStorage.setItem("todos", JSON.stringify([...todos, todo]));
          } else {
            let getStore = JSON.parse(localStorage.getItem("todos"));
            getStore.push(todo);
            localStorage.setItem("todos", JSON.stringify(getStore));
          }
          setTodos([...todos, todo]);
        }}
        todos={todos}
      />
      {todos.length > 0 ? (
        <TodoList
          hiddenTodo={hiddenTodo}
          todos={todos}
          onDelete={(todo) => {
            setPopUpId(todo.id);
            let getStore = JSON.parse(localStorage.getItem("todos"));
            let indexTodo = todos.indexOf(todo);
            getStore.splice(indexTodo, 1);
            localStorage.setItem("todos", JSON.stringify(getStore));
          }}
          onChange={(newTodo) => {
            // console.log(newTodo);
            let getStore = JSON.parse(localStorage.getItem("todos"));
            let x = getStore.filter((todo) => {
              if (todo.id == newTodo.id) {
                todo.completed = !todo.completed;
              }
              return todo;
            });
            localStorage.setItem("todos", JSON.stringify(x));
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
