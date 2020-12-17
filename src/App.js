import React, { useState, useEffect } from "react";
import Alert from "./components/Alert";
import Input from "./components/Input";
import List from "./components/List";
import "./App.css";

const getLocalStorage = () => {
  let todos = localStorage.getItem("todos");
  if (todos) {
    return (todos = JSON.parse(localStorage.getItem("todos")));
  } else {
    return [];
  }
};

function App() {
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [todos, setTodos] = useState(getLocalStorage);
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      const obj = { id: new Date().getTime().toString(), checked: false, todo };
      setTodos([...todos, obj]);
      showAlert(true, "New todo added!", "success");
      setTodo("");
    } else {
      showAlert(true, "Can not add empty todo!", "danger");
    }
  };

  const handleDelete = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    showAlert(true, "Todo deleted!", "danger");
    setTodos(filtered);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheck = (id) => {
    const upd = todos.map((todo) => {
      if (todo.id === id) {
        todo["checked"] = !todo["checked"];
      }
      return todo;
    });
    setTodos(upd);
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App mw7 center">
      <h1 className="f3 tracked-tight green">TODO LIST</h1>
      <div className="h2">
        {alert.show && (
          <Alert {...alert} removeAlert={showAlert} todos={todos} />
        )}
      </div>
      <Input
        todo={todo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {todos.length > 0 && (
        <List
          todos={todos}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      )}
    </div>
  );
}

export default App;
