import { Link } from 'react-router-dom'; 
import new1 from "./new1.png";
import new2 from "./new2.png";

function page() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>All Tasks</h1>
      
      <Link to="/WeekTask" style={styles.link}>
        <button style={styles.button} id="button11">Date By Task</button>
      </Link>
      <Link to="/tasks" style={styles.link}>
        <button style={styles.button} id="button22">Normal Plan</button>
      </Link>

      <div>
      <img src={new1} alt=""  style={styles.Image}/>
      <img src={new2} alt="" style={styles.Image} />
      </div>
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
  Image:{
    width: '90%',
    maxHeight: '600px', 
  },
};

export default page;
