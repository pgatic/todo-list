import React from "react";

const List = ({ todos, onDelete, onCheck }) => {
  return (
    <div className="pa3 w-100">
      {todos.map((item) => (
        <div key={item.id} className="flex items-center justify-between mb2">
          <input
            className="mh3"
            type="checkbox"
            id={item.id}
            onClick={() => onCheck(item.id)}
            defaultChecked={item.checked}
          />
          <label htmlFor={item.id} className="w-80 fw2 tl ttu">
            {item.todo}
          </label>
          <input
            className="b w-15 br2 ph2 pv2 input-reset ba bg-dark-red white grow pointer f6 mr3 dib"
            type="submit"
            value="Delete"
            onClick={() => onDelete(item.id)}
          ></input>
        </div>
      ))}
    </div>
  );
};

export default List;
