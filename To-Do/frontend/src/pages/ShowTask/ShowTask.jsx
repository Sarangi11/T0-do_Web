import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ShowTasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showTasks, setShowTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8070/week/');
      setTasks(response.data);
      filterTasks(selectedDate);
    } catch (error) {
      setError(error.message);
    }
  };

  const filterTasks = (date) => {
    const filteredTasks = tasks.filter(task => task.date === date.toISOString().split('T')[0]);
    setShowTasks(filteredTasks);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    filterTasks(date);
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:8070/week/delete/${id}`);
      fetchTasks();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCompleteTask = async (id, completed) => {
    try {
      await axios.patch(`http://localhost:8070/week/${id}`, { completed });
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
      await axios.put(`http://localhost:8070/week/${editingTask._id}`, editingTask);
      setEditingTask(null);
      fetchTasks();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCheckboxChange = (task) => {
    const updatedTasks = tasks.map(t =>
      t._id === task._id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
    handleCompleteTask(task._id, !task.completed);
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      maxWidth: '800px',
      margin: 'auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    taskList: {
      listStyleType: 'none',
      padding: '0',
    },
    taskItem: {
      backgroundImage: "url('https://images.pexels.com/photos/5546907/pexels-photo-5546907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      marginBottom: '10px',
      padding: '10px',
      color: 'white',
      border: '1px solid #ccc',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    taskContent: {
      flex: '1',
    },
    taskActions: {
      display: 'flex',
      gap: '10px',
    },
    editButton: {
      background: '#10146D',
      color: 'white',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    deleteButton: {
      background: '#D30000',
      color: 'white',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '5px',
      cursor: 'pointer',
      
    },
    checkbox: {
    margin: '0 30px',
    width: '24px', 
  height: '20px',
    padding: '30px', 
    borderRadius: '10px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    marginTop: '10px',
      
    },
    editForm: {
      background: '#f9f9f9',
      backgroundImage: "url('https://images.pexels.com/photos/5546907/pexels-photo-5546907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      marginTop: '20px',
    },
    formInput: {
      width: '100%',
      padding: '10px',
      margin: '5px 0',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    formTextarea: {
      width: '100%',
      padding: '10px',
      margin: '5px 0',
      border: '1px solid #ccc',
      borderRadius: '5px',
      resize: 'vertical',
    },
    formButton: {
      background: '#10146D',
      border: 'none',
      color: 'white',
      padding: '10px 15px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '16px',
      margin: '2px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    cancelButton: {
      background: '#10146D',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>All Tasks</h1>
      <h3 style={styles.header}>Select Task Date</h3>
      <Calendar onClickDay={handleDateClick} value={selectedDate} />
      <h3>Tasks for {selectedDate.toDateString()}</h3>
      {error && <p>Error: {error}</p>}
      <ul style={styles.taskList}>
        {showTasks.map(task => (
          <li key={task._id} style={styles.taskItem}>
            <div style={styles.taskContent}>
              <strong>{task.title}</strong> - {task.description} - {task.time}
            </div>
            <div style={styles.taskActions}>
              <button style={styles.editButton} onClick={() => handleEditTask(task)}>Edit</button>
              <button style={styles.deleteButton} onClick={() => handleDeleteTask(task._id)}>Delete</button>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheckboxChange(task)}
                style={styles.checkbox}
              />
            </div>
          </li>
        ))}
      </ul>

      {editingTask && (
        <div style={styles.editForm}>
          <h3>Edit Task</h3>
          <form onSubmit={(e) => { e.preventDefault(); handleUpdateTask(); }}>
            <input
              type="text"
              placeholder="Title"
              value={editingTask.title}
              onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
              required
              style={styles.formInput}
            />
            <input
              type="date"
              value={editingTask.date}
              onChange={(e) => setEditingTask({ ...editingTask, date: e.target.value })}
              required
              style={styles.formInput}
            />
            <input
              type="time"
              value={editingTask.time}
              onChange={(e) => setEditingTask({ ...editingTask, time: e.target.value })}
              required
              style={styles.formInput}
            />
            <textarea
              placeholder="Description"
              value={editingTask.description}
              onChange={(e) => setEditingTask({ ...editingTask, description: e.target.value })}
              required
              style={styles.textarea}
            ></textarea>
            <button type="submit" style={styles.formButton}>Update Task</button>
            <button
              type="button"
              style={styles.formButton}
              onClick={() => setEditingTask(null)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ShowTasksPage;
