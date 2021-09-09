import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
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
      <div className="bg-indigo-200">
        <div id="cardItem" className="bg-indigo-500 rounded-lg px-1 py-1 m-2">
          <div className="px-7">
            <h4 className="text-left py-0 font-bold my-0">
              Rashidul Hasan
            </h4>
            <h6 className="font-medium text-left py-0 my-0">
              rashidul.hasan@dsinnovators.com
            </h6>
          </div>
          <p className="text-left bg-yellow-100 px-2 py-0 rounded-xl mx-2 my-2">
              This is the task I'm going to do
          </p>
          <div>
            <button className="shadow-lg bg-blue-400 px-3 py-0 rounded-lg my-0 mx-2 text-sm">
              Change
            </button>
            <button className="shadow-lg bg-blue-400 px-3 py-0 rounded-lg my-0 mx-2 text-sm">
              Delete
            </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
