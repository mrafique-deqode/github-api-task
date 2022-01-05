import React from "react";

function Button({ handleSearchTitle }) {

  return (
    <button
      className="btn btn-outline-secondary"
      type="button"
      onClick={handleSearchTitle}
    >
      Search
    </button>
  );
}

export default Button;
