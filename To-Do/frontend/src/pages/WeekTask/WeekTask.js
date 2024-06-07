import React, { useState } from 'react';
import axios from 'axios';

const WeekPlanPage = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [day, setDay] = useState('');

  const handleAddTask = () => {
    const newTask = { title, description, day, time };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
    setDate('');
    setTime('');
    setDay('');
  };

  const handleSaveTasks = async () => {
    try {
      await axios.post('http://localhost:8070/week/week/tasks', { tasks });
      setTasks([]);
      alert('Tasks saved successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to save tasks.');
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const selectedDay = new Date(selectedDate).getDay();
    setDay(days[selectedDay]);
  };

  return (
    <div className="week-plan-page">
      <h2>Add Task for the Week</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Day"
          value={date}
          onChange={handleDateChange}
          required
        />
        <input
          type="time"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <p>Selected Day: {day}</p>
        <button type="button" onClick={handleAddTask}>Add Task</button>
        <button type="button" onClick={handleSaveTasks}>Save Tasks</button>
      </form>
      
      <div className="task-list">
        <h3>Tasks</h3>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <strong>{task.title}</strong> - {task.description} - {task.day} - {task.time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeekPlanPage;
