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

  const handleCompleteTask = async (id) => {
    try {
      await axios.patch(`http://localhost:8070/week/${id}`, { completed: true });
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

  return (
    <div className="show-tasks-page">
      <h2>All Tasks</h2>
      <Calendar onClickDay={handleDateClick} value={selectedDate} />
      <h3>Tasks for {selectedDate.toDateString()}</h3>
      {error && <p>Error: {error}</p>}
      <ul>
        {showTasks.map(task => (
          <li key={task._id}>
            <strong>{task.title}</strong> - {task.description} - {task.time}
            <button onClick={() => handleCompleteTask(task._id)}>Complete</button>
            <button onClick={() => handleEditTask(task)}>Edit</button>
            <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>

      {editingTask && (
        <div>
          <h3>Edit Task</h3>
          <form onSubmit={(e) => { e.preventDefault(); handleUpdateTask(); }}>
            <input
              type="text"
              placeholder="Title"
              value={editingTask.title}
              onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
              required
            />
            <input
              type="date"
              value={editingTask.date}
              onChange={(e) => setEditingTask({ ...editingTask, date: e.target.value })}
              required
            />
            <input
              type="time"
              value={editingTask.time}
              onChange={(e) => setEditingTask({ ...editingTask, time: e.target.value })}
              required
            />
            <textarea
              placeholder="Description"
              value={editingTask.description}
              onChange={(e) => setEditingTask({ ...editingTask, description: e.target.value })}
              required
            ></textarea>
            <button type="submit">Update Task</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ShowTasksPage;
