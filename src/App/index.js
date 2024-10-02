import { TodoProvider } from '../TodoContext';
import { AppUi} from './AppUi';
import React from 'react';

// const defaultTodos = [
//   {text: 'cortar cebolla', completed: true},
//   {text: 'Tomar curso de react', completed: false},
//   {text: 'Ser mejor', completed: false},
//   {text: 'ir a gym', completed: false},
// ]


// Starting with Todo logic trough component App

function App() {

  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
