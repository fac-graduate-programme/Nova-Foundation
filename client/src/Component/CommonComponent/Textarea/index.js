import React from "react";
import "./style.css";

export default ({ id, label, placeholder, action }) => {
  return (
    <>
      <label htmlFor={id} > {label}  </label>
        <textarea id={id} name={id} placeholder={placeholder} onBlur={action}/>

    </>
  );
};
