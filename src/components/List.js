import React from "react";

const List = ({ todos, onDelete, onCheck }) => {
  return (
    <div className="pa3 w-100">
      {todos.map((item) => (
        <div
          key={item.id}
          className="flex shadow-4 items-center justify-between mb2"
        >
          <input
            className="mh3"
            type="checkbox"
            id={item.id}
            onClick={() => onCheck(item.id)}
            defaultChecked={item.checked}
          />
          <label htmlFor={item.id} className="w-80 fw3 tl">
            {item.todo}
          </label>
          <i
            className="fa fa-trash-o fa-lg dark-red mv2 pointer w-10"
            aria-hidden="true"
            onClick={() => onDelete(item.id)}
          ></i>
        </div>
      ))}
    </div>
  );
};

export default List;
