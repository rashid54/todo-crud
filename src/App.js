import React from 'react';
import Home from './components/Home';
import TodosProvider from './contexts/TodosProvider';


function App() {

  return (
    <TodosProvider>
      <Home />
    </TodosProvider>
  );
}

export default App;
