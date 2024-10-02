import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoError } from '../TodoError';
import { TodoLoading } from '../TodoLoading';
import { TodoEmpty } from '../TodoEmpty';
import React from "react";
import { TodoContext } from '../TodoContext';

function AppUi() {


  const {loading,error,searchedTodos,completeTodo,deleteTodo,} = React.useContext(TodoContext)


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

      
      <CreateTodoButton />
    </>
  );
}

export { AppUi };