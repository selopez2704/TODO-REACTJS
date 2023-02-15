import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoHeader } from '../TodoHeader';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem'
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";


function AppUI(){
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        totalTodos, 
        completedTodos,
        setSearchValue,
    } = React.useContext(TodoContext);
    return(
    <React.Fragment>
        <TodoHeader>
            <TodoCounter 
                totalTodos={totalTodos} 
                completedTodos={completedTodos}
            />
            <TodoSearch
                setSearchValue={setSearchValue}
            />
        </TodoHeader>
        <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError error={error}/>}
            {(!loading&&!searchedTodos.length) && <EmptyTodos />}
            {searchedTodos.map(todo=>(
            <TodoItem 
                key={todo.id} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={()=>completeTodo(todo.text)}
                onDelete={()=>deleteTodo(todo.text)}
            />
            ))}
        </TodoList>
        {!!openModal&&(
            <Modal>
                <TodoForm />
            </Modal>
        )}
        <CreateTodoButton
            setOpenModal={setOpenModal}
        />
   </React.Fragment>

    );
}

export{AppUI};