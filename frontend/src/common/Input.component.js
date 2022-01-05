import React from "react";

function Input({ onChangeSearchTitle, searchHandle }) {

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Search by Github handle"
      value={searchHandle}
      onChange={onChangeSearchTitle}
    />
  );
}

export default Input;
