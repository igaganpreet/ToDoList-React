import React, { useState } from "react";

function ToDoItems(props) {
  const [decorated, updateState] = useState(false);
  function handleClick(event) {
    updateState((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div>
      <li
        style={{ textDecoration: decorated ? "line-through" : "none" }}
        onClick={handleClick}
      >
        {props.value}
      </li>
    </div>
  );
}

export default ToDoItems;
