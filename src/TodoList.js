import React, { useContext } from "react";
import Todo from "./Todo";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import { TodoContext } from "./context/todos.context";

function TodoList() {
  const  todos  = useContext(TodoContext);
  if (todos.length)
    return (
      <Paper>
          {todos.map((todo, i) => (
            // To add a key to a fragment, we have to use the long-hand version
            // rather than <> </>, we have to use <React.Fragment>
            <React.Fragment key={i}>
              <Todo {...todo} key={todo.id} />
              {i < todos.length - 1 && <Divider />}
            </React.Fragment>
          ))}
      </Paper>
    );
  return null;
}
export default TodoList;