import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import "./App.css";
import { filterTodo } from "./redux/actions/TodoActions";

function App2() {
  const todos = useSelector((state) => state.TodoReducers.todos);
  const todoFiltred = useSelector((state) => state.TodoReducers.filter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="App-header">
        <AddTodo></AddTodo>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <button onClick={() => dispatch(filterTodo("All"))}>All </button>
          <button onClick={() => dispatch(filterTodo(true))}>Done </button>
          <button onClick={() => dispatch(filterTodo(false))}>UnDone</button>
        </div>
        <TodoList
          todos={
            todoFiltred === "All"
              ? todos
              : todos.filter((el) => el.isDone === todoFiltred)
          }
        />
      </div>
    </div>
  );
}

export default App2;
