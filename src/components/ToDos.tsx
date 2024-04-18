import React, { useContext } from "react";

import ToDoList from "./ToDoList";
import classes from './ToDos.module.css';
import {ToDoContext} from '../store/todo-context';

const ToDos :React.FC=()=> {
  const todoCtx = useContext(ToDoContext);
  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item)=>(
         <ToDoList item={item} onRemoveToDo={todoCtx.removeToDo.bind(null,item.id)}/>
      ))}
    </ul>
  );
}

export default ToDos;
