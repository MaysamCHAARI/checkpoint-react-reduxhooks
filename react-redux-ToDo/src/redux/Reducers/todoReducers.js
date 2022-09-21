import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  TOGGLE_FILTER,
} from "../actions/TodoType";

const initState = {
  filter: "All",
  todos: [
    {
      id: "01",
      description: "travel to sfax",
      isDone: false,
    },
    {
      id: "02",
      description: "travel to sousse",
      isDone: false,
    },
  ],
};
const todoReducers = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, payload] };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((elm) => elm.id !== payload),
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((elm) =>
          elm.id === payload ? { ...elm, isDone: !elm.isDone } : elm
        ),
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((elm) =>
          elm.id === payload.id ? payload : elm
        ),
      };

    case TOGGLE_FILTER:
      return { ...state, filter: payload };
    default:
      return state;
  }
};

export default todoReducers;
