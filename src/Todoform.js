import React from "react";
function Todoform({ list, setList, setTodo, todo }) {
  const handleChange = (e) => {
    setList(e.target.value);
  };
  const handleset = (e) => {
    e.preventDefault();
    if (list) {
      setTodo([...todo, { id: Math.floor(Math.random() * 10000), text: list }]);
      setList("");
    } else {
      console.log("empty");
    }
  };
  return (
    <div className="inputdiv">
      <input placeholder="Add to task" value={list} onChange={handleChange} />
      <div className="addicon">
        <i className="fas fa-plus" onClick={handleset}></i>
      </div>
    </div>
  );
}

export default Todoform;
