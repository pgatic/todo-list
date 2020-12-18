import React, { useEffect } from "react";

const Alert = ({ msg, type, removeAlert, todos }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
  }, [todos]);

  return <p className={`${type} w-75 center br2 o-70 pv1 white`}>{msg}</p>;
};

export default Alert;
