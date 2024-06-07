import React, { useState } from 'react';
import axios from 'axios';

const CreateTaskPage = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = async () => {
    const newTask = { title, date, time, description };

    try {
      await axios.post('http://localhost:8070/week/', newTask);
      setTitle('');
      setDate('');
      setTime('');
      setDescription('');
      alert('Task added successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to add task.');
    }
  };

  return (
    <div className="create-task-page">
      <h2>Create Task</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button type="button" onClick={handleAddTask}>Add Task</button>
      </form>
    </div>
  );
};

export default CreateTaskPage;
