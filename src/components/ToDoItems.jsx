import React, { useState } from "react";

function ToDoItems(props) {
  const [styleDescription, updateStyle] = useState({ textDecoration: "none" });
  const [decorated, updateState] = useState(false);
  function handleClick(event) {
    console.log("clicked");
    if (decorated === false) {
      updateStyle({ textDecoration: "line-through" });
      updateState(true);
    } else if (decorated === true) {
      updateStyle({ textDecoration: "none" });
      updateState(false);
    }
  }

  return (
    <div>
      <li style={styleDescription} onClick={handleClick}>
        {props.value}
      </li>
    </div>
  );
}

export default ToDoItems;
