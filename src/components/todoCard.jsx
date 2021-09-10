
import React from 'react';

function TodoCard({todoItem:{username, email, todo}}){
    
    return (
        <div id="cardItem" className="bg-indigo-500 rounded-lg px-1 py-1 m-2">
          <div className="px-7">
            <h4 className="text-left py-0 font-bold my-0">
              {username}
            </h4>
            <h6 className="font-medium text-left py-0 my-0">
              {email}
            </h6>
          </div>
          <p className="text-left bg-yellow-100 px-2 py-0 rounded-xl mx-2 my-2">
              {todo}
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
    );
}

export default TodoCard;