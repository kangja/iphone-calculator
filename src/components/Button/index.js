import React from "react";
import "./Button.css"

// instead of hard coding/putting AC, replace it with deconstructed content.

// if the content is 0, then assign that content's className to "zero". Otherwise, className is empty string.
const Button = ({content, onButtonClick, type}) => {
  return (
    <div className={`Button ${content === "0" ? "zero" : ""} ${type || ""}`} onClick={onButtonClick(content)}>
    {content}
  </div>
  );
}

export default Button;