import React, { useState } from 'react';
import axios from 'axios';

const AddScheduleForm = () => {
  const [formData, setFormData] = useState({
    Date: '',
    Member_id: '',
    timeslot: '',
    Trainer_name: '',
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8070/TrainerSchedule/add', formData);
      alert('Schedule added successfully');
      // Optionally, reset form fields after successful submission
      setFormData({
        Date: '',
        Member_id: '',
        timeslot: '',
        Trainer_name: '',
        status: ''
      });
    } catch (error) {
      console.error('Error adding schedule:', error);
      alert('Error adding schedule. Please try again.');
    }
  };


  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundImage: 'url("https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?w=1060&t=st=1713280008~exp=1713280608~hmac=b33b160b321193f0b8d4ee63ac372676ddf5082a1947517ed1b21a87f00c9741")',
      backgroundSize: '100% 100%',
      textAlign: 'center',
      padding: '20px',
      height: '100vh',
    },
    heading: {
      fontSize: '30px',
      marginBottom: '20px',
      color: 'white',
    },
    form: {
      display: 'flex',
      margin: 'auto',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px',
      borderRadius: '10px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add background color with opacity
      backdropFilter: 'blur(10px)', 
      maxWidth: '500px', // Set maximum width
      width: '100%',
      alignItems: 'center',
      
    },
    inputGroup: {
      marginBottom: '20px',
      alignItems: 'center',
    },
    
    label: {
      marginRight: '10px',
      fontSize: '18px',
      alignItems: 'center',
    },
    input: {
      padding: '5px',
      fontSize: '20px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      width: '100%',
      alignItems: 'center',
    },
    button: {
        padding: '12px 24px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      width: '100%',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add Schedule</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Date:</label>
          <input
            type="date"
            name="Date"
            value={formData.Date}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div>
          <label style={styles.label}>Member ID:</label>
          <input
            type="text"
            name="Member_id"
            value={formData.Member_id}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div>
          <label style={styles.label}>Timeslot:</label>
          <input
            type="text"
            name="timeslot"
            value={formData.timeslot}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div>
          <label style={styles.label}>Trainer Name:</label>
          <input
            type="text"
            name="Trainer_name"
            value={formData.Trainer_name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div>
          <label style={styles.label}>Status:</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div><br/>
        <button type="submit" style={styles.button}>Add Schedule</button>
      </form>
    </div>
  );
};

export default AddScheduleForm;
