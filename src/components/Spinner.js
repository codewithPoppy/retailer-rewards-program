import React from "react";
import "../styles/Spinner.css"; // Make sure to create this CSS file

const Spinner = ({ className }) => {
  return <span className={`spinner ml-2 ${className || ""}`}></span>;
};

export default Spinner;
