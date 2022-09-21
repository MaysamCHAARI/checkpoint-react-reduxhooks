import React from "react";
import Todo from "./Todo";

export const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((elm, d) => (
        <Todo todo={elm} key={d} />
      ))}
    </div>
  );
};
export default TodoList;
