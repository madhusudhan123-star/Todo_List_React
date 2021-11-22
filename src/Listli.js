import React, { useState } from "react";
import "./Listli.css";

function Listli({ text, todos, todo, setTodo }) {
  const [toggle, setToggle] = useState(false);

  const togg = () => {
    setToggle(!toggle);
  };
  const hi = () => {
    setTodo(todo.filter((el) => el.id !== todos.id));
  };
  return (
    <div className="lidiv">
      <li className={toggle ? "hide" : ""}>{text}</li>
      <i className="fas fa-eraser" onClick={hi}></i>
      <i className="fas fa-check" onClick={togg}></i>
    </div>
  );
}

export default Listli;
