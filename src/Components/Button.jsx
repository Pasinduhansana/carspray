import React from "react";

const Button = ({ children }) => {
  return (
    <button className="book-btn">
      <span>{children}</span>
    </button>
  );
};

export default Button;
