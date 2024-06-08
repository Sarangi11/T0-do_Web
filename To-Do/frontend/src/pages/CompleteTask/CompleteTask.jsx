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
      fontFamily: 'Arial, sans-serif',
      backgroundImage: "url('https://i.pinimg.com/564x/ed/86/89/ed8689f6f5fe641bc9729aefa98b1cb3.jpg')",
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
      marginBottom: '10px',
      padding: '10px',
      color: 'white',
      border: '1px solid #ccc',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#1B1C55',
    },
    taskContent: {
      flex: '1',
    },
  };

  return (
    <div style={styles.container} className="completed-tasks-page">
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
    </div>
  );
};

export default CompletedTasksPage;
