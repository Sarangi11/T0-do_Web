import { Link } from 'react-router-dom'; 

function Workoutpage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Complete Tasks</h1>
      
      <Link to="/complete" style={styles.link}>
        <button style={styles.button} id="button11">Date By Task</button>
      </Link>
      <Link to="/taskscom" style={styles.link}>
        <button style={styles.button} id="button22">Normal Plan</button>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '36px',
    color: '#333',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    fontSize: '24px',
    margin: '10px',
    cursor: 'pointer',
    borderRadius: '10px',
    width: '400px', 
    height: '100px', 
    backgroundImage: "url('https://images.unsplash.com/photo-1516557070061-c3d1653fa646?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", 
    backgroundSize: 'cover', 
  },
};

export default Workoutpage;
