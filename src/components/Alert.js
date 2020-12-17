import React, { useEffect } from "react";

const Alert = ({ msg, type, removeAlert, todos }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
  }, [todos]);

  return <p className={`${type} pv1 white`}>{msg}</p>;
};

export default Alert;
