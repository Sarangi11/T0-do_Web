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

  const styles = {
    container: {
      backgroundImage:"url('https://images.pexels.com/photos/7582013/pexels-photo-7582013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      fontFamily: 'Arial, sans-serif',
      padding: '100px',
      maxWidth: '300px',
      margin: 'auto',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    input: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    textarea: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    button: {
      background: '#007bff',
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
  };

  return (
    <div style={styles.container} className="create-task-page">
      <h2 style={styles.header}>Create Task</h2>
      <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          style={styles.input}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={styles.textarea}
        ></textarea>
        <button type="button" onClick={handleAddTask} style={styles.button}>Add Task</button>
      </form>
    </div>
  );
};

export default CreateTaskPage;
