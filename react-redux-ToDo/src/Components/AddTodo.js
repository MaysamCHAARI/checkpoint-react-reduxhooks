import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/TodoActions";

const AddTodo = () => {
  const [newtodo, setNewTodo] = useState({ description: "" });
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    if (newtodo.description.length !== 0) dispatch(addTodo(newtodo));
    setNewTodo({ description: "" });
  };
  return (
    <div>
      <input
        value={newtodo.description}
        type="text"
        placeholder="put your task"
        onChange={(e) => setNewTodo({ description: e.target.value })}
      />
      <button onClick={handleAdd}>Add </button>
      <br></br>
    </div>
  );
};

export default AddTodo;
