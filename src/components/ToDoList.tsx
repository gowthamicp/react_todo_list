import React,{useContext} from 'react'
import ToDo from '../model/ToDo'
import classes from './ToDoList.module.css'


const ToDoList :React.FC<{item:ToDo,onRemoveToDo:()=>void}> =(props)=> {
  
  return (
    <li className={classes.item} key={props.item.id} onClick={props.onRemoveToDo}>{props.item.text}</li>
  )
}

export default ToDoList