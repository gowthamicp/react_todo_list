import React, { useRef ,useContext} from 'react'
import classes from './NewToDo.module.css'
import {ToDoContext} from '../store/todo-context';

const NewToDo:React.FC =() => {
    const todoCtx = useContext(ToDoContext);
    const toDoText = useRef<HTMLInputElement>(null);
    const submitHandler =(event:React.FormEvent)=>{
        event.preventDefault();
        const enteredToDo = toDoText.current!.value;
        if(enteredToDo.trim().length === 0){
           // throw Error('Entered empty value');
           return;
        }
        todoCtx.addToDo(enteredToDo);
    }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor='todo'>To Do</label>
        <input type="text" id="todo" ref={toDoText}/>
        <button>Add ToDo</button>
    </form>
  )
}

export default NewToDo;