const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <div className="task-item">
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p>Status: {task.isCompleted ? '✅ Completed' : '🕓 Pending'}</p>
      <div className="buttons">
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>

  );
};

export default TaskItem;
