import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import TodoCard from './components/todoCard';

function App() {
  const [todoList, setList] = useState([
    {
      username: "Rashid",
      email: "rashidul.hasan@dsinnovators.com",
      todo: "This is the task which I'll do ",
    },
    {
      username: "Emon",
      email: "mahfuzur.emon@dsinnovators.com",
      todo: "This is the task which he has already done last night ",
    },
  ])
  return (
    <div className="App bg-indigo-200 p-2">
      <h1 className="bg-indigo-500 font-extrabold font-serif text-2xl rounded-xl my-1">
        Todo CRUD
      </h1>

      <div className="bg-indigo-400 rounded-xl">
        <form className="flex flex-col flex-wrap items-center">
          <input
            type="text"
            placeholder="Username"
            className="bg-green-100 rounded-md p-1 my-1 mt-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-green-100 rounded-md p-1 my-1"
          />
          <input
            type="email"
            placeholder="Describe your TODO"
            className="bg-green-100 rounded-md p-1 my-1"
          />
          <button
            type="submit"

            className="shadow-lg bg-blue-400 px-4 py-1 rounded-lg my-2 mt-1"
          >
            Create
          </button>
        </form>
      </div>

      <h1 className="bg-indigo-500 font-bold font-serif text-base rounded-xl my-0 mt-6">
        Todo List
      </h1>
      <div className="">
        <TodoCard todoItem={todoList[0]}/>
        <TodoCard todoItem={todoList[1]}/>
      </div>
    </div>
  );
}

export default App;
