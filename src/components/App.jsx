import React, { useState } from "react";

function App() {
  const [inputText, setItem] = useState("");
  const [itemText, setItemText] = useState([]);

  function handleChange(event) {
    let newValue = event.target.value;
    setItem(newValue);
  }
  function handleClick(event) {
    console.log("clicked");
    setItemText((prevValue) => {
      return [...prevValue, inputText];
    });
    // console.log(itemText);
    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          name="inputName"
          value={inputText}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemText.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
