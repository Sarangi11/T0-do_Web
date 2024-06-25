import { Link } from 'react-router-dom'; 
import new5 from "./new5.png";
import new6 from "./new6.png";

function Page() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Completed Task</h1>

        <div style={styles.imagesContainer}>
          <div style={styles.imageWrapper}>
            <img src={new5} alt="" style={{ ...styles.image, opacity: 0.7 }} />
            <Link to="/complete" style={styles.link}>
              <button style={styles.button} id="button11">Date By Task</button>
            </Link>
          </div>
          
          <div style={styles.imageWrapper}>
            <img src={new6} alt="" style={{ ...styles.image, opacity: 0.7 }} />
            <Link to="/taskscom" style={styles.link}>
              <button style={styles.button} id="button22">Normal Plan</button>
            </Link>
          </div>
        </div>
      </div>
    </div>  
  );
}

const styles = {
  page: {
    backgroundImage: `url('https://images.pexels.com/photos/4110453/pexels-photo-4110453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    minHeight: '100vh', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center center', 
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    marginBottom: '30px',
    fontSize: '50px',
    color: 'black',
    fontFamily: 'Times New Roman',
  },
  imagesContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: '20px',
  },
  imageWrapper: {
    position: 'relative',
    maxWidth: '800px',
    maxHeight: '800px',
    borderRadius: '10px',
    overflow: 'hidden',
    border: '2px solid #9FA9A2', 
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  link: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textDecoration: 'none',
    zIndex: 1,
  },
  button: {
    backgroundColor: '#9FA9A2',
    border: 'none',
    color: 'black',
    padding: '15px',
    textAlign: 'center',
    border: '4px solid black', 
    fontSize: '24px',
    cursor: 'pointer',
    borderRadius: '10px',
    width: '200px',
    zIndex: 2,
  },
};

export default Page;
