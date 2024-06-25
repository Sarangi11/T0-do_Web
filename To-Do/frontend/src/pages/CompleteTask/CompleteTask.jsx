import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompletedTasksPage = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    fetchCompletedTasks();
  }, []);

  const fetchCompletedTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8070/week/completed');
      const completed = response.data.filter(task => task.completed);
      setCompletedTasks(completed);
    } catch (error) {
      console.error('Error fetching completed tasks:', error);
    }
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
      
      
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '50px',
    },
    taskList: {
      listStyleType: 'none',
      padding: '0',
    },
    taskItem: {
      marginBottom: '10px',
      padding: '20px',
      color: 'white',
      border: '3px solid #ccc',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#3B3F3C',
    },
    taskContent: {
      flex: '1',
    },
  };

  return (
    <div style={styles.container} className="completed-tasks-page">
    <div>
      <h2 style={styles.header}>Completed Tasks</h2>
      <ul style={styles.taskList}>
        {completedTasks.map((task, index) => (
          <li key={task._id} style={styles.taskItem}>
            <div style={styles.taskContent}>
              <strong>Task {index + 1}:</strong> {task.title} - {task.description} - {task.time} - Completed on: {new Date(task.date).toLocaleDateString()}
            </div>
          </li>
        ))}
      </ul>
    </div></div>
  );
};

export default CompletedTasksPage;
