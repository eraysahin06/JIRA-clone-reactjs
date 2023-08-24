import { useState } from 'react';
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const deleteTaskById = (id) => {
    const afterDeletion = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletion);
  };

  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc,
      },
    ];
    setTasks(createdTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Task List</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} />
    </div>
  );
}

export default App;
