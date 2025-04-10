import React, { useEffect, useState } from 'react';
import api from '../api';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    const res = await api.get('/tasks');
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addOrUpdateTask = async (task) => {
    if (task.id) {
      await api.put(`/tasks/${task.id}`, task);
    } else {
      await api.post('/tasks', task);
    }
    fetchTasks();
    setEditingTask(null);
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm onSubmit={addOrUpdateTask} task={editingTask} />
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} onDelete={deleteTask} onEdit={setEditingTask} />
      ))}
    </div>
  );
};

export default TaskList;
