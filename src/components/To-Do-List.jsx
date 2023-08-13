import React, { useState } from "react";

function ToDoList(props) {
  const [clicked, setState] = useState(false);


  function handleClick() {
    setState((prevVal) => !prevVal)
    console.log("hey");
  }

  return (
    <li onClick={handleClick} style={{textDecoration: clicked ? "line-through" : "none"}}>
      {props.text}
    </li>
  );
}

export default ToDoList;
