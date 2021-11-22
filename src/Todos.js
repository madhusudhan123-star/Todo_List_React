import React from "react";
import Listli from "./Listli";

function Todos({ setTodo, todo }) {
  return (
    <div>
      <ul>
        {todo.map((todos) => (
          <Listli
            setTodo={setTodo}
            todo={todo}
            text={todos.text}
            todos={todos}
            key={todos.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
