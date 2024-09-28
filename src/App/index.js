import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { useLocalStorage } from './useLocalStorage';
import React from 'react';

// const defaultTodos = [
//   {text: 'cortar cebolla', completed: true},
//   {text: 'Tomar curso de react', completed: false},
//   {text: 'Ser mejor', completed: false},
//   {text: 'ir a gym', completed: false},
// ]


// Starting with Todo logic trough component App

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue,  setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(
    (todo) => { 
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText)
  }
  )

  const completeTodo =(text)=>{
    const newTodos=[...todos];
    const todoIndex=newTodos.findIndex((todo)=>todo.text===text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }


  const deleteTodo=(text)=>{
    const newTodos=[...todos];
    const todoIndex=newTodos.findIndex((todo)=>todo.text===text);
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }
  
  
  return (

    <React.Fragment>

    <TodoCounter 
      completed={completedTodos} 
      total={totalTodos}
      />
    <TodoSearch  searchValue={searchValue} setSearchValue={setSearchValue}/>


      <TodoList>

        {searchedTodos.map(todo=>(<TodoItem 
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        onComplete={()=>completeTodo(todo.text)}
        onDelete={()=>deleteTodo(todo.text)}
        
        />))}
        
     </TodoList>


     <CreateTodoButton />


     </React.Fragment>
  );
}

export default App;
