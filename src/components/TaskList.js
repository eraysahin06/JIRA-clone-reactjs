import TaskShow from './TaskShow';

function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map((task) => {
        return <TaskShow key={task.id} task={task} />;
      })}
    </div>
  );
}

export default TaskList;
