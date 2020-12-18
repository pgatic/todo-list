import React from "react";

const Input = ({ todo, handleChange, handleSubmit, isEditing }) => {
  let buttonBg = isEditing ? "gold" : "green";
  return (
    <form className="pa3 black-80 shadow-4" onSubmit={handleSubmit}>
      <input
        id="todo"
        name="todo"
        value={todo}
        className="input-reset ba b--black-20 pa2 mb2 w-80"
        type="text"
        placeholder="Enter new todo"
        onChange={handleChange}
      />
      <input
        className={`w-20 br2 f5-ns b-ns input-reset pointer bg-${buttonBg} white grow pv2`}
        type="submit"
        value={isEditing ? "EDIT" : "ADD"}
      />
    </form>
  );
};

export default Input;
