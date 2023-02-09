// import './App.css';
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';



function App() {
  // console.log('Render before useEffect');
  // React.useEffect(()=>{
  //   console.log('useEffect calling');
  // },[totalTodos]);
  // console.log('Render after useEffect');


  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
