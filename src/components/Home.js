import React, {useState} from 'react';
import TodoCard from './TodoCard';
import TodoForm from './TodoForm';

function Home() {
  const initialTodos = [
    {
      username: "User1",
      email: "user.1@mail.com",
      todo: "This is Todo 1 ",
      updatingItem: false,

    },
    {
      username: "User2",
      email: "user.2@mail.com",
      todo: "This is Todo 2",
      updatingItem: false,
    },
  ]

  const [todos, setTodos] = useState(initialTodos)

  function createItem(todoItem){
    // add new Todo
    setTodos(todos.concat(todoItem));
  }

  function modifyItem(todoItem,id){
    // modify existing Todo 
   setTodos(todos.map((val,idx)=>((id===idx)?todoItem:val)));
  }

  function deleteItem(id){
    // delete exiting todo
    setTodos(todos.filter((val,idx)=>(id!==idx)));
  }

  return (
    <div className="App md:text-lg bg-indigo-200 p-8 pt-4 break-all lg:px-24 xl:px-56 2xl:px-72">
      <h1 className="bg-indigo-500 font-extrabold font-serif text-2xl rounded-xl my-1 text-center">
        Todo CRUD
      </h1>

      <TodoForm saveAction={createItem}/>

      <h1 className="bg-indigo-500 font-bold font-serif text-base rounded-xl my-0 mt-6 text-center">
        {(todos.length<1)?'No':todos.length} {(todos.length>1)?'Todos':'Todo'} left
      </h1>
      <div className="flex flex-col-reverse sm:flex-wrap sm:flex-row">
        {todos.map((a,id)=>{
          return a.updatingItem?<TodoForm key={id} id={id} saveAction={modifyItem} oldItem={a}/>:<TodoCard key={id} id={id} deleteItem={deleteItem} modifyItem={modifyItem} todoItem={a} /> ;
        })}
      </div>
    </div>
  );
}

export default Home;
