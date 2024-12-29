import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [tasks ,SetTasks] =useState([])
  const [input,Setinput] = useState("")
  
  function AddTask()
  {
    if(input.trim()!==''){
      SetTasks([...tasks,{id:Date.now(),text:input,completed:false}]);
      Setinput("")
      
    }
  }
  const toggleComplete = (id) => {
    SetTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  function DeleteTask(id){
    SetTasks(tasks.filter((task)=>task.id!==id));

  };
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => Setinput(e.target.value)}
        />
         <button onClick={AddTask}>Add</button>
         </div>
         <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>{task.text}
            <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
            <button onClick={() => DeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
