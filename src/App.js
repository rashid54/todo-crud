import './App.css';
import React, {useState} from 'react';
import TodoCard from './components/TodoCard';
import TodoForm from './components/TodoForm';

function App() {
  const initialTodo = [
    {
      username: "User1",
      email: "user.1@mail.com",
      todo: "This is Todo 1 ",
      saved: true,

    },
    {
      username: "User2",
      email: "user.2@mail.com",
      todo: "This is Todo 2",
      saved: true,
    },
  ]

  const [todoList, setList] = useState(initialTodo)

  function createItem(todoItem){
    setList(todoList.concat(todoItem));
  }

  function modifyItem(todoItem,id){
   setList(todoList.map((val,idx)=>((id===idx)?todoItem:val)));
  }

  function deleteItem(id){
    setList(todoList.filter((val,idx)=>(id!==idx)));
  }

  return (
    <div className="App md:text-lg bg-indigo-200 p-8 pt-4 break-all lg:px-24 xl:px-56 2xl:px-72">
      <h1 className="bg-indigo-500 font-extrabold font-serif text-2xl rounded-xl my-1">
        Todo CRUD
      </h1>

      <TodoForm saveAction={createItem}/>

      <h1 className="bg-indigo-500 font-bold font-serif text-base rounded-xl my-0 mt-6">
        {(todoList.length<1)?'No':todoList.length} {(todoList.length>1)?'Todos':'Todo'} left
      </h1>
      <div className="flex flex-col-reverse sm:flex-wrap sm:flex-row">
        {todoList.map((a,id)=>{
          return a.saved?<TodoCard key={id} id={id} deleteItem={deleteItem} modifyItem={modifyItem} todoItem={a} />:<TodoForm key={id} id={id} saveAction={modifyItem} oldItem={a}/> ;
        })}
      </div>
    </div>
  );
}

export default App;
