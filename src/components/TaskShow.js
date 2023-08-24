function TaskShow({ task, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  return (
    <div className="task-show">
      <h3 className="task-title">Your Task</h3>
      <p>{task.title}</p>
      <h3 className="task-title">To Do:</h3>
      <p>{task.taskDesc}</p>
      <div>
        <button className="task-delete" onClick={handleDeleteClick}>
          Delete
        </button>
        <button className="task-edit">Edit</button>
      </div>
    </div>
  );
}

export default TaskShow;
