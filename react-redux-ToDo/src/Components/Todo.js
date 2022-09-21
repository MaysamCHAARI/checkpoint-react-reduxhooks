import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions/TodoActions";
import { editTodo } from "../redux/actions/TodoActions";

export const Todo = ({ todo }) => {
  const [input, setInput] = useState(todo);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };
  const handleToggle = () => dispatch(toggleTodo(todo.id));
  const handleEdit = () => dispatch(editTodo(input));
  return (
    <div>
      <div style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
        <input type="checkbox" onClick={handleToggle} />
        {todo.description}
      </div>
      <div>
        <input
          value={input.description}
          onChange={(e) => setInput({ ...input, description: e.target.value })}
        />
        <button onClick={handleEdit}>Save</button>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
export default Todo;
