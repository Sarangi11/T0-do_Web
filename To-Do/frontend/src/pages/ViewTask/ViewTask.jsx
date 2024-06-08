import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskListPage = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8070/task/');
      setTasks(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:8070/task/delete/${id}`);
      fetchTasks();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCheckboxChange = async (task) => {
    try {
      await axios.patch(`http://localhost:8070/task/${task._id}`, { completed: !task.completed });
      fetchTasks();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleUpdateTask = async () => {
    try {
      await axios.put(`http://localhost:8070/task/${editingTask._id}`, editingTask);
      setEditingTask(null);
      fetchTasks();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div style={{ margin: '20px auto', maxWidth: '800px' }}>
      <h2>Task List</h2>
      {error && <p>Error: {error}</p>}
      <ul>
        {tasks.map(task => (
          <li key={task._id} style={{ backgroundColor: '#f8f9fa', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px', padding: '10px' }}>
            <div className="task-info">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
            <div className="task-actions">
              <button className="delete-button" onClick={() => handleDeleteTask(task._id)}>Delete</button>
              <button className="edit-button" onClick={() => handleEditTask(task)}>Edit</button>
              <input type="checkbox" checked={task.completed} onChange={() => handleCheckboxChange(task)} style={{ marginLeft: '10px' }} />
            </div>
          </li>
        ))}
      </ul>
      {editingTask && (
        <div style={{ backgroundColor: '#f8f9fa', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px', padding: '10px' }}>
          <h3>Edit Task</h3>
          <form onSubmit={handleUpdateTask}>
            <input type="text" value={editingTask.title} onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })} />
            <textarea value={editingTask.description} onChange={(e) => setEditingTask({ ...editingTask, description: e.target.value })} />
            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskListPage;
