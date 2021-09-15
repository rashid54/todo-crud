import React, { useContext } from 'react';
import { TodosContext } from '../contexts/TodosProvider';
import TodoCard from './TodoCard';
import TodoForm from './TodoForm';


function Home() {
  const [todos] = useContext(TodosContext);

  return (
    <div className="App md:text-lg bg-indigo-200 p-8 pt-4 break-all lg:px-24 xl:px-56 2xl:px-72 text-center">
      <h1 className="bg-indigo-500 font-extrabold font-serif text-2xl rounded-xl my-1">
        Todo CRUD
      </h1>

      <TodoForm />

      <h1 className="bg-indigo-500 font-bold font-serif text-base rounded-xl my-0 mt-6 text-center">
        {(todos.length < 1) ? 'No' : todos.length} {(todos.length > 1) ? 'Todos' : 'Todo'} left
      </h1>
      <div className="flex flex-col-reverse sm:flex-wrap sm:flex-row">
        {todos.map((a, id) => {
          return a.updatingItem ? <TodoForm key={id} id={id} oldItem={a} /> : <TodoCard key={id} id={id} todoItem={a} />;
        })}
      </div>
    </div>
  );
}

export default Home;
