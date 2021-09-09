import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App bg-indigo-500">
      {/* <div className="bg-blue-300">
        <form className="flex flex-col flex-wrap items-center bg-indigo-200">
          <input 
            type="text"
            placeholder="Username"
            className="bg-green-200 rounded-md p-1 my-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-green-200 rounded-md p-1 my-2"
          />
          <input 
            type="email"
            placeholder="Describe your TODO"
            className="bg-green-200 rounded-md p-1 my-2"
          />
          <button 
            type="submit" 
            
            className="bg-blue-400 px-4 py-1 rounded-lg my-2"
          >
            Create
          </button>
        </form>
      </div> */}

      <div className="bg-indigo-200">
        <div id="cardItem" className="bg-indigo-500">
          <div id="cardup" className="flex bg-yellow-200">
            <div id="cardLeft">
              <h4 className="bg-red-400 text-left py-0 px-6 font-bold">
                bolbo na
              </h4>
              <h6 className="font-medium text-left px-6 py-0 my-0">
                naimail@nomail.com
              </h6>
            </div>
            <div className="">
              <button className="bg-blue-400 px-3 py-0 rounded-lg m-1 text-sm">
                Change
              </button>
              <button className="bg-blue-400 px-3 py-0 rounded-lg m-1 text-sm">
                Delete
              </button>
          </div>
          </div>
          <p id="cardBottom" className="text-left bg-yellow-100 px-3 py-1 rounded-xl mx-2 my-4">
              This is the task I'm going to do
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
