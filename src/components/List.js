import React from "react";

const List = ({ todos, editId, deleteItem, checkItem, editItem }) => {
  return (
    <div className="pa3 w-100">
      {todos.map(({ id, checked, todo }) => (
        <div
          key={id}
          className={`flex shadow-4 items-center justify-between mb2 ${
            checked ? "bg-green o-60" : ""
          }`}
        >
          <input
            className="mh3"
            type="checkbox"
            id={id}
            onClick={() => checkItem(id)}
            defaultChecked={checked}
          />
          <label htmlFor={id} className="w-80 mv2 fw3 tl">
            {todo}
          </label>
          <div className="icon-container w-20 w-10-ns">
            <i
              className="fa fa-pencil-square-o fa-lg mt1 mr2 blue pointer"
              aria-hidden="true"
              onClick={() => editItem(id)}
            ></i>
            {editId !== id && (
              <i
                className="fa fa-trash-o fa-lg dark-red mv2 pointer"
                aria-hidden="true"
                onClick={() => deleteItem(id)}
              ></i>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
