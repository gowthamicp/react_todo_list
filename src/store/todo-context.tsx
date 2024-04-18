import React, { useState } from "react"
import ToDo from "../model/ToDo"

type ToDoContextObj ={
       items:ToDo[];
        addToDo:(text:string)=>void;
        removeToDo:(id:string)=>void;
  
}
export const ToDoContext = React.createContext<ToDoContextObj>({
items:[],
addToDo:(text:string)=>{},
removeToDo:(id:string)=>{}
});

export const ToDoContextProvider:React.FC = (props)=>{
    const [todoList,setTodoList] = useState<ToDo[]>([]) ;
    const addToDoHandler = (enteredToDo:string) =>{
      const toDo = new ToDo(enteredToDo);
      setTodoList((prevState)=>{
        return [...prevState,toDo];
      })
    }
  
    const handleToDoRemove = (id :string) =>{
      setTodoList(prevState =>{
        return prevState.filter(todo => todo.id !== id);
      })
    }
    const toDoContext:ToDoContextObj ={
        items:todoList,
        addToDo:addToDoHandler,
        removeToDo:handleToDoRemove
    }
    return <ToDoContext.Provider value={toDoContext}>{props.children}</ToDoContext.Provider>
}