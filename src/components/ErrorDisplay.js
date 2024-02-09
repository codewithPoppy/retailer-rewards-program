import React from "react";
import "../styles/Error.css";

const ErrorDisplay = ({ message }) => {
  console.log(message)
  return (
    <div className="errorDisplay">
      <p className="errorMessage">{message}</p>
    </div>
  );
};

export default ErrorDisplay;
