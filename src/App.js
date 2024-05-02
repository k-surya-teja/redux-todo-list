
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <br />
      <TaskInput />
      <br />
      <TaskList />
    </div>
  );
}

export default App;
