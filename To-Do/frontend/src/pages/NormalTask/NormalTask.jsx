import React, { useState } from 'react';
import axios from 'axios';

const AddTaskPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = async () => {
    try {
      await axios.post('http://localhost:8070/task/', { title, description });
      setTitle('');
    setDescription('');
    alert('Task added successfully!');
      // Optionally, you can redirect the user to another page after adding the task
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTask();
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Add Task</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="title" style={styles.label}>Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="description" style={styles.label}>Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ ...styles.input, height: '100px' }}
            required
          ></textarea>
        </div>
        <button type="submit" style={styles.button}>Add Task</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: "url('https://images.pexels.com/photos/6446668/pexels-photo-6446668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      fontFamily: 'Arial, sans-serif',
      margin: 'auto',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh', 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
      flexDirection: 'column',
  },
  title: {
    fontSize: '50px',
      color: 'white',
      fontFamily: 'Times New Roman',
    marginBottom: '20px',
    textAlign: 'center',
  },
  form: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '5px',
    width:'600px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    cursor: 'pointer',
  },
};

export default AddTaskPage;
