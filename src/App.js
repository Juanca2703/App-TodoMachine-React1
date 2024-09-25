import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import './App.css';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text: 'cortar cebolla', completed: true},
  {text: 'Tomar curso de react', completed: false},
  {text: 'Ser mejor', completed: true},
  {text: 'ir a gym', completed: true},
]

function App() {
  return (
    <React.Fragment>

    <TodoCounter completed={16} total={25}/>
    <TodoSearch />


      <TodoList>

        {defaultTodos.map(todo=>(<TodoItem 
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        />))}
        
     </TodoList>


     <CreateTodoButton />


     </React.Fragment>
  );
}

export default App;
