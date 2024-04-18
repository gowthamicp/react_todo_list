import React,{useState} from 'react';

import ToDos from './components/ToDos';
import ToDo from './model/ToDo';
import NewToDo from './components/NewToDo';
import { ToDoContext, ToDoContextProvider } from './store/todo-context';

function App() {
 
  return (
    <div>
      <ToDoContextProvider>
      <NewToDo />
     <ToDos />
      </ToDoContextProvider>
      
    </div>
  );
}

export default App;
