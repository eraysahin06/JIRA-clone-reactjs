import { useState } from 'react';

function TaskCreate({ onCreate }) {
  const [title, setTitle] = useState('');
  const [taskDesc, setTaskDesc] = useState('');

  console.log(title, taskDesc);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title, taskDesc);
    setTitle('');
    setTaskDesc('');
  };

  return (
    <div className="task-create">
      <h3>Please add a new task.</h3>
      <form className="task-form">
        <label className="task-label">Label</label>
        <input
          value={title}
          onChange={handleChange}
          type="text"
          className="task-input"
        />
        <label className="task-label">Task</label>
        <textarea
          value={taskDesc}
          onChange={handleTaskChange}
          rows={5}
          className="task-input"
        />
        <button className="task-button" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}

export default TaskCreate;
