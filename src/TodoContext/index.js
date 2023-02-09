import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {

    const {item:todos, saveItem:saveTodos,loading,errorState:error}=useLocalStorage('TODOS_V1',[]);

    const [openModal,setOpenModal]=React.useState(false);

    const [searchValue, setSearchValue]=React.useState("");
  
    const completedTodos=todos.filter(todo=>!!todo.completed).length;
    const totalTodos=todos.length;
  
    let searchedTodos=[];
    if(!searchValue.length>=1){
      searchedTodos=todos;
    }else{
      searchedTodos=todos.filter((todo)=>{
        const todoText=todo.text.toLowerCase();
        const searchText=searchValue.toLowerCase();
        return todoText.includes(searchText);
      });
    }
    
    
    const createTodo=(text)=>{
      const newTodos=[...todos];
      newTodos.push({text:text,complete:false})
      saveTodos(newTodos);
    }
    const completeTodo=(text)=>{
      const todoindex=todos.findIndex(todo=>todo.text===text);
      const newTodos=[...todos];
      newTodos[todoindex].completed=!newTodos[todoindex].completed;
      saveTodos(newTodos);
    }
    const deleteTodo=(text)=>{
      const todoindex=todos.findIndex(todo=>todo.text===text);
      const newTodos=[...todos];
      newTodos.splice(todoindex,1);
      saveTodos(newTodos);
    }
  

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            createTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>

    )
}


export{ TodoContext, TodoProvider}