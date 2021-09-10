import React, {useState} from 'react';

function TodoForm({saveAction, id, oldItem}){
    const [todoItem, setTodoItem] = useState(oldItem?oldItem:{
        username:"",
        email:"",
        todo:"",
        saved:false,
    })


    function handleChange(e){
        setTodoItem({...todoItem,[e.target.name]: e.target.value});
        console.log(todoItem)
    }

    function handleSubmit(e){
        e.preventDefault();
        saveAction({...todoItem,saved:true}, id);
        // setTodoItem({username:"", email:"", todo:"", saved:false,});
    }

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
            {oldItem?"Save":"Create"}
          </button>
        </form>
      </div>
    )
}

export default TodoForm;