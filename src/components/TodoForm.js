import React, { useContext, useState } from 'react';
import { TodosContext } from '../contexts/TodosProvider';


function TodoForm({id, oldItem }) {
  const [todos, setTodos] = useContext(TodosContext);
  const [todoItem, setTodoItem] = useState(oldItem ? oldItem : {
    username: "",
    email: "",
    todo: "",
    updatingItem: false,
  });

  function handleChange(e) {
    setTodoItem({ ...todoItem, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    if(oldItem){
      // Updates the Todo
      setTodos(todos.map((val,idx)=>((id===idx)?{...todoItem, updatingItem: false}:val)));
    }
    else{
      // Creates a new Todo
      setTodos(todos.concat(todoItem));
      setTodoItem({ username: "", email: "", todo: "", updatingItem: false, });
    }
  }

  console.log("Rendering TodoForm");
  return (
    <div className="bg-indigo-400 rounded-xl m-2">
      <form className="flex flex-col flex-wrap items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="bg-green-100 rounded-md p-1 my-1 mt-2"
          onChange={handleChange}
          name="username"
          value={todoItem.username}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-green-100 rounded-md p-1 my-1"
          onChange={handleChange}
          name="email"
          value={todoItem.email}
          required
        />
        <input
          type="text"
          placeholder="Describe your TODO"
          className="bg-green-100 rounded-md p-1 my-1"
          onChange={handleChange}
          name="todo"
          value={todoItem.todo}
          required
        />
        <button
          type="submit"
          className="transition hover:-translate-y-0.5 transform hover:bg-blue-300 shadow-lg bg-blue-400 px-4 py-1 rounded-lg my-2 mt-1"
        >
          {oldItem ? "Save" : "Create"}
        </button>
      </form>
    </div>
  )
}

export default TodoForm;