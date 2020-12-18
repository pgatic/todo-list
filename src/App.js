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
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) {
      showAlert(true, "Can not add empty item!", "danger");
    } else if (todo && isEditing) {
      setTodos(
        todos.map((item) => {
          if (item.id === editId) {
            return { ...item, todo };
          } else {
            return item;
          }
        })
      );
      setTodo("");
      setEditId(null);
      setIsEditing(false);
      showAlert(true, "Item updated!", "info");
    } else {
      const obj = { id: new Date().getTime().toString(), checked: false, todo };
      setTodos([...todos, obj]);
      showAlert(true, "New item added!", "success");
      setTodo("");
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const deleteItem = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    showAlert(true, "Item deleted!", "danger");
    setTodos(filtered);
  };

  const editItem = (id) => {
    const itemToEdit = todos.find((todo) => todo.id === id);
    setIsEditing(true);
    setEditId(id);
    setTodo(itemToEdit.todo);
  };

  const checkItem = (id) => {
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

  const clearItems = () => {
    setTodos([]);
    showAlert(true, "List is cleared!", "danger");
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
        isEditing={isEditing}
      />
      {todos.length > 0 && (
        <>
          <List
            todos={todos}
            deleteItem={deleteItem}
            editItem={editItem}
            checkItem={checkItem}
            editId={editId}
          />
          <div>
            <button
              onClick={clearItems}
              className="link bn bg-white black dim f4 fw6 pointer"
            >
              Clear All
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
