import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [itemText, setItemText] = useState([]);

  function handleChange(event) {
    let newValue = event.target.value;
    setInputText(newValue);
  }
  function handleClick(event) {
    setItemText((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText("");
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
