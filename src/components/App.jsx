import React, { useState } from "react";
import ToDoList from "./To-Do-List";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newVal = event.target.value;
    setInputText(newVal);
  }

  function handleClick() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  // // enter button to click btn
  function handleKeyDown(event) {
    let key = event.key;
    if (key === "Enter") {
      // console.log(key);
      handleClick();
    }
  }

  return (
    <div>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            type="text"
            value={inputText}
          />
          <button onClick={handleClick}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {items.map((todolist) => (
              <ToDoList text={todolist} />
            ))}
          </ul>
        </div>
      </div>
      <p>@Sumedh Wature❤️</p>
    </div>
  );
}

export default App;
