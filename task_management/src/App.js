
import Todolist from './components/Todolist';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <div classname="container">
        <h1>My Tasks</h1>
        <div className="top">
          <input type="text" placeholder="Add Tasks"/>
          <div className='add'>Add</div>
        </div>
        <div className='list'>
           <Todolist text="Hi"/>
           <Todolist text="Hi"/>
           <Todolist text="Hi"/>
        </div>
      </div>
    </div>
  );
}

export default App;

