import React, { useState } from "react";
import Todoform from "./Todoform";
import Todos from "./Todos";
import "./App.css";
// import { IconName } from "react-icons/ai";

function App() {
  const [todo, setTodo] = useState([]);
  const [list, setList] = useState("");
  return (
    <div className="appdiv">
      <Todoform list={list} setList={setList} setTodo={setTodo} todo={todo} />
      <Todos todo={todo} setTodo={setTodo} list={list} />
    </div>
  );
}

export default App;
