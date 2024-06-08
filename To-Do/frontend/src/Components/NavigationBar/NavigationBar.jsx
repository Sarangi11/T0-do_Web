import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    
    <nav style={styles.nav}>
    
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li style={styles.li}>
          <Link to="/addTask" style={styles.link}>Add Tasks</Link>
        </li>
        <li style={styles.li}>
          <Link to="/updateTask" style={styles.link}>View Tasks</Link>
        </li>
        <li style={styles.li}>
          <Link to="/completeTa" style={styles.link}>Complete Tasks</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#626462',
    padding: '20px',
  },
  ul: {
    listStyleType: 'none',
    margin: '0 10px',
    padding: '0',
    display: 'flex',
    justifyContent: 'right',
  },
  li: {
    margin: '0 30px',
  },
  li1:{
    justifyContent: 'left',
    TextAlign: 'left',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

export default NavigationBar;
