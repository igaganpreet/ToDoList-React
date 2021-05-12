import React from "react";

function ToDoItems(props) {
  return (
    <div>
      <li
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        {props.value}
      </li>
    </div>
  );
}

export default ToDoItems;
