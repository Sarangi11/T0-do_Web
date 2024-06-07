import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ShowTasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showTasks, setShowTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8070/week/');
      setTasks(response.data);
    } catch (error) {
      console.error(error);
      alert('Failed to fetch tasks.');
    }
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    const tasksForSelectedDate = tasks.filter(task => task.date === date.toISOString().split('T')[0]);
    setShowTasks(tasksForSelectedDate);
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:8070/week/${id}`);
      fetchTasks();
    } catch (error) {
      console.error(error);
      alert('Failed to delete task.');
    }
  };

  const handleCompleteTask = async (id) => {
    try {
      await axios.patch(`http://localhost:8070/week/${id}`, { completed: true });
      fetchTasks();
    } catch (error) {
      console.error(error);
      alert('Failed to mark task as complete.');
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleUpdateTask = async () => {
    try {
      await axios.put(`http://localhost:8070/week/${editingTask.id}`, editingTask);
      setEditingTask(null);
      fetchTasks();
    } catch (error) {
      console.error(error);
      alert('Failed to update task.');
    }
  };

  return (
    <div className="show-tasks-page">
      <h2>All Tasks</h2>
      <Calendar onClickDay={handleDateClick} value={selectedDate} />
      <h3>Tasks for {selectedDate.toDateString()}</h3>
      <ul>
        {showTasks.map(task => (
          <li key={task.id}>
            <strong>{task.title}</strong> - {task.description} - {task.time}
            <button onClick={() => handleCompleteTask(task.id)}>Complete</button>
            <button onClick={() => handleEditTask(task)}>Edit</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
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
