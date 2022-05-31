import React, { createContext } from "react";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";
import todoReducer from "../reducers/todo.reducer.js";

const defaultTodos = [
  { id: "1", task: "blablabla", completed: false },
  { id: "2", task: "huhuhu", completed: true },
];

export const TodoContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  );
  return (
    <TodoContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodoContext.Provider>
  );
}
