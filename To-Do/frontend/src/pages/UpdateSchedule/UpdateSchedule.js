import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateScheduleForm() {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        Date: '',
        Member_id: '',
        timeslot: '',
        Trainer_name: '',
        status: ''
    });

    useEffect(() => {
        fetchSchedule();
    }, []);

    const fetchSchedule = async () => {
        try {
            const response = await axios.get(`http://localhost:8070/TrainerSchedule/get/${id}`);
            const scheduleData = response.data.user; // Assuming the schedule data is nested under 'user' key
            setFormData(scheduleData);
        } catch (error) {
            console.error('Error fetching schedule:', error);
        }
    };

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
            await axios.put(`http://localhost:8070/TrainerSchedule/update/${id}`, formData);
            alert('Schedule updated successfully');
        } catch (error) {
            console.error('Error updating schedule:', error);
            alert('Error updating schedule. Please try again.');
        }
    };

    const styles = {
        container: {
            backgroundImage: 'url("https://img.freepik.com/free-photo/dumbbells-floor-gym-ai-generative_123827-23745.jpg?t=st=1713283579~exp=1713287179~hmac=88148a50af04270b1e736b43797c8833ddac168d5e59b5e05a8a1c991c2eb387&w=1060")',
            backgroundSize: 'cover',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
            color: '#fff',
        },
        form: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
            padding: '40px',
            borderRadius: '10px',
            maxWidth: '500px',
            width: '100%',
        },
        inputGroup: {
            marginBottom: '20px',
        },
        label: {
            marginRight: '10px',
            fontSize: '18px',
        },
        input: {
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: 'none',
            width: '100%',
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
            <div style={styles.form}>
                <h2>Update Schedule</h2>
                <form onSubmit={handleSubmit}>
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
                    <div style={styles.inputGroup}>
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
                    <div style={styles.inputGroup}>
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
                    <div style={styles.inputGroup}>
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
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Status:</label>
                        <input
                            type="text"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <button type="submit" style={styles.button}>Update Schedule</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateScheduleForm;
