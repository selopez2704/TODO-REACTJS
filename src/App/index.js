// import './App.css';
import React from 'react';
// import { AppUI } from './AppUI';
// import { TodoProvider } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoHeader } from '../TodoHeader';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem'
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { useTodos } from "./useTodos";

function App() {
  const {
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
  } = useTodos();
  return (
    <>
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
        {error && <TodosError error={error} />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm
            createTodo={createTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </>

  );
}

export default App;
