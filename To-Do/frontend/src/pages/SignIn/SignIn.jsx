import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://localhost:8070/user/signin', { email, password });
      const token = response.data.token;
      // Handle successful sign-in, such as storing the token in local storage
    } catch (error) {
      console.error('Error signing in:', error);
      // Handle sign-in error, such as displaying an error message to the user
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn();
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src="https://images.pexels.com/photos/5408810/pexels-photo-5408810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Illustration" style={styles.image} />
      </div>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Sign In</h2>
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
        <button type="submit" style={styles.button}>Sign In</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  form: {
    flex: 1,
    padding: '40px',
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

export default SignIn;
