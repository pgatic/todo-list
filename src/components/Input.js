import React from "react";

const Input = ({ todo, onInputChange, onInputSubmit }) => {
  return (
    <form className="pa3 black-80" onSubmit={onInputSubmit}>
      <input
        id="todo"
        name="todo"
        value={todo}
        className="input-reset ba b--black-20 pa2 mb2 w-80"
        type="text"
        placeholder="Enter new todo"
        onChange={onInputChange}
      />
      <input
        className="w-20 br2 f7 f5-ns input-reset pointer bg-green white dim pv2"
        type="submit"
        value="Add to list"
      />
    </form>
  );
};

export default Input;
