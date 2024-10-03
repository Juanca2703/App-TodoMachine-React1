import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoError } from '../TodoError';
import { TodoLoading } from '../TodoLoading';
import { TodoEmpty } from '../TodoEmpty';
import { TodoForm } from '../TodoForm';
import React from "react";
import { Modal } from '../Modal'
import { TodoContext } from'../TodoContext'; 

function AppUi() {


  const {loading,error,searchedTodos,completeTodo,deleteTodo,openModal,setOpenModal} = React.useContext(TodoContext)


  return (
    <>
      <TodoCounter />
      <TodoSearch />

    
        <TodoList>
        {loading && <TodoLoading />}
        {error && <TodoError />}
        {(!loading && searchedTodos.length === 0) && <TodoEmpty />}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>)

      
      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />

      { openModal && (
        <Modal >
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUi };