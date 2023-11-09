
import { useEffect, useState } from 'react';
import Todolist from './components/Todolist';
import 'bootstrap/dist/css/bootstrap.min.css'
import { getAllTodo } from './utils/HandleApi';


function App() {
  const [toDo, setToDo]= useState([])
  useEffect(() => {
    getAllTodo(setToDo)
  }, [])
  return (
    <div className="App">
      <div classname="container">
        <h1>My Tasks</h1>
        <div className="top">
          <input type="text" placeholder="Add Tasks"/>
          <div className='add'>Add</div>
        </div>
        <div className='list'>
          {toDo.map((item) => <toDo key={item._id} text={item.text} />)}

        </div>
      </div>
    </div>
  );
}

export default App;

