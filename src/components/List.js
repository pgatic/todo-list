import React from "react";

const List = ({ todos, handleDelete, handleCheck }) => {
  return (
    <div className="pa3 w-100">
      {todos.map(({ id, checked, todo }) => (
        <div
          key={id}
          className="flex shadow-4 items-center justify-between mb2"
        >
          <input
            className="mh3"
            type="checkbox"
            id={id}
            onClick={() => handleCheck(id)}
            defaultChecked={checked}
          />
          <label htmlFor={id} className="w-80 fw3 tl">
            {todo}
          </label>
          <i
            className="fa fa-trash-o fa-lg dark-red mv2 pointer w-10"
            aria-hidden="true"
            onClick={() => handleDelete(id)}
          ></i>
        </div>
      ))}
    </div>
  );
};

export default List;
