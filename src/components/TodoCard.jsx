
import React from 'react';

function TodoCard({todoItem,deleteItem,modifyItem,id}){
    
    function handleEdit(e){
      modifyItem({...todoItem,saved:false}, id);
    }

    return (
        <div id="cardItem" className="bg-indigo-500 rounded-lg px-1 py-1 m-2 flex-grow"
        >
          <h4 className="text-left py-0 px-7 font-bold my-0">
            {todoItem.username}
          </h4>
          <h6 className="font-medium text-left py-0 px-7 my-0">
            {todoItem.email}
          </h6>
          <p className="text-left bg-yellow-100 px-2 py-0 rounded-xl mx-2 my-2">
              {todoItem.todo}
          </p>
          <div>
            <button onClick={handleEdit} className="hover:-translate-y-0.5 transform transition hover:bg-blue-300 shadow-lg bg-blue-400 px-3 py-0 rounded-lg my-0 mx-2 text-sm">
              Edit
            </button>
            <button onClick={(e)=>deleteItem(id)} className="hover:-translate-y-0.5 transform transition hover:bg-blue-300 shadow-lg bg-blue-400 px-3 py-0 rounded-lg my-0 mx-2 text-sm">
              Delete
            </button>
          </div>
        </div>
    );
}

export default TodoCard;