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

  const taskListStyle = {
    margin: '20px auto',
    maxWidth: '800px',
  };

  const container = {
    fontFamily: 'Times New Roman',
      padding: '20px',
      maxWidth: '1700px',
      margin: 'auto',
      backgroundImage: `url('https://images.pexels.com/photos/4110453/pexels-photo-4110453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      minHeight: '100vh', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
  };


  const taskItemStyle = {
    backgroundImage: "url('https://images.pexels.com/photos/6446668/pexels-photo-6446668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      marginBottom: '10px',
      padding: '10px',
      color: 'black',
      border: '1px solid #ccc',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '700px',
  };

  const taskActionsStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const buttonStyle = {
    padding: '5px 10px',
    marginRight: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    background: '#D30000',
      color: 'white',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '5px',
      cursor: 'pointer',
  };

  const editButtonStyle = {
    ...buttonStyle,
    background: '#10146D',
      color: 'white',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '5px',
      cursor: 'pointer',
  };

  const checkboxStyle = {
    margin: '0 30px',
    width: '24px', 
  height: '20px',
    padding: '30px', 
    borderRadius: '10px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    marginTop: '10px',
  };

  const editFormStyle = {
    background: '#f9f9f9',
      backgroundImage: "url('https://images.pexels.com/photos/5546907/pexels-photo-5546907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      marginTop: '20px',
  };

  const inputStyle = {
    width: '100%',
    padding: '5px',
    marginBottom: '10px',
    border: '3px solid #ccc',
    borderRadius: '5px',
  };

  const submitButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#28a745',
    color: 'white',
  };

  return (
    <div style={container}>
    <div style={taskListStyle}>
      <h1>Task List</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {tasks.map(task => (
          <li key={task._id} style={taskItemStyle}>
            <div className="task-info">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
            <div style={taskActionsStyle}>
              <button style={deleteButtonStyle} onClick={() => handleDeleteTask(task._id)}>Delete</button>
              <button style={editButtonStyle} onClick={() => handleEditTask(task)}>Edit</button>
              <input type="checkbox" checked={task.completed} onChange={() => handleCheckboxChange(task)} style={checkboxStyle} />
            </div>
          </li>
        ))}
      </ul>
      {editingTask && (
        <div style={editFormStyle}>
          <h3>Edit Task</h3>
          <form onSubmit={handleUpdateTask}>
            <input type="text" value={editingTask.title} onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })} style={inputStyle} />
            <textarea value={editingTask.description} onChange={(e) => setEditingTask({ ...editingTask, description: e.target.value })} style={inputStyle} />
            <button type="submit" style={submitButtonStyle}>Update</button>
          </form>
        </div>
      )}
    </div></div>
  );
};

export default TaskListPage;
