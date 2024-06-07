import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DisplaySchedule() {
    const [schedules, setSchedules] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchSchedules();
    }, []);

    const fetchSchedules = async () => {
        try {
            const response = await axios.get('http://localhost:8070/TrainerSchedule/');
            setSchedules(response.data);
        } catch (error) {
            console.error('Error fetching schedules:', error);
        }
    };

    const confirmDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this schedule?')) {
            await deleteSchedule(id);
        }
    };

    const deleteSchedule = async (id) => {
        try {
            await axios.delete(`http://localhost:8070/TrainerSchedule/delete/${id}`);
            alert('Schedule deleted successfully');
            fetchSchedules(); // Refresh the list after deletion
        } catch (error) {
            console.error('Error deleting schedule:', error);
            alert('Error deleting schedule');
        }
    };

    const handleUpdate = (id) => {
        // Logic to handle update action
        alert(`Update schedule with ID: ${id}`);
    };

    const styles = {
        container: {
            backgroundColor: '#222', // Background color
            color: '#fff', // Text color
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start', // Position at the bottom
            padding: '20px',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
        },
        table: {
           
            borderCollapse: "collapse"
        },
        th: {
            backgroundColor: "#343a40",
            color: "#fff",
            padding: "10px"
        },
        td: {
            border: "1px solid #ddd",
            padding: "10px"
        },
        button: {
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "5px 10px",
            cursor: "pointer",
            marginRight: "5px"
        },
        deleteButton: {
            backgroundColor: "red",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "5px 10px",
            cursor: "pointer"
        }
    };

    return (
        <div style={styles.container}>
            <h2>Schedule Details</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Date</th>
                        <th style={styles.th}>Member ID</th>
                        <th style={styles.th}>Timeslot</th>
                        <th style={styles.th}>Trainer Name</th>
                        <th style={styles.th}>Status</th>
                        <th style={styles.th}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.map(schedule => (
                        <tr key={schedule._id}>
                            <td style={styles.td}>{schedule.Date}</td>
                            <td style={styles.td}>{schedule.Member_id}</td>
                            <td style={styles.td}>{schedule.timeslot}</td>
                            <td style={styles.td}>{schedule.Trainer_name}</td>
                            <td style={styles.td}>{schedule.status}</td>
                            <td style={styles.td}>
                                <button style={styles.button} onClick={() => navigate(`/update/${schedule._id}`)}>Edit</button>
                                <button style={styles.deleteButton} onClick={() => confirmDelete(schedule._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DisplaySchedule;
