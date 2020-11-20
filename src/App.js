import React, { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      const obj = { id: new Date().getTime().toString(), checked: false, todo };
      setTodos([...todos, obj]);
      setTodo("");
    } else {
      alert("You can not add empty todo!");
    }
  };

  const handleDelete = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
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

  return (
    <div className="App mw7 center">
      <h1 className="f3 tracked-tight green">TODO LIST</h1>
      <Input
        todo={todo}
        onInputChange={handleChange}
        onInputSubmit={handleSubmit}
      />
      <List todos={todos} onDelete={handleDelete} onCheck={handleCheck} />
    </div>
  );
}

export default App;
