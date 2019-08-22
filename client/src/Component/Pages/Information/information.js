import React from "react";
import "./style.css";
import DropdownMenu from "../../CommonComponent/DropdownMenu";

const information = () => {
  return (
    <div className="info-container">
      <h1 className="info-title">Nova Information</h1>
      <DropdownMenu />
    </div>
  );
};

export default information;