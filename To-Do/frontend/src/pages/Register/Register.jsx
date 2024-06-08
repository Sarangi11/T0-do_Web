import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:8070/user/register', { email, password });
      // Handle successful registration, such as redirecting the user to another page
    } catch (error) {
      console.error('Error registering:', error);
      // Handle registration error, such as displaying an error message to the user
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister();
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Register</h2>
        <div style={styles.formGroup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    backgroundImage: "url('https://images.pexels.com/photos/5408689/pexels-photo-5408689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
  },
  form: {
    width: '350px',
    padding: '50px',
    borderRadius: '5px',
    boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  title: {
    margin: '0 0 20px',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  formGroup: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '15px',
    borderRadius: '5px',
    border: '1px solid #dee2e6',
    fontSize: '16px',
    boxSizing: 'border-box',
    marginBottom: '20px',
  },
  button: {
    width: '100%',
    padding: '15px',
    borderRadius: '5px',
    border: 'none',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    cursor: 'pointer',
  },
};

export default Register;
