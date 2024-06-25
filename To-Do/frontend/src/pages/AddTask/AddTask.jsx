import { Link } from 'react-router-dom'; 
import new1 from "./new1.png";
import new2 from "./new2.png";

function Page() {
  return (
  <div style={styles.page}>
    <div style={styles.container}>
      <h1 style={styles.heading}>All Tasks</h1>

      <div style={styles.imagesContainer}>
        <div style={styles.imageWrapper}>
          <img src={new1} alt="" style={{ ...styles.image, opacity: 0.7 }} />
          <Link to="/WeekTask" style={styles.link}>
            <button style={styles.button} id="button11">Date By Task</button>
          </Link>
        </div>
        
        <div style={styles.imageWrapper}>
          <img src={new2} alt="" style={{ ...styles.image, opacity: 0.7 }} />
          <Link to="/tasks" style={styles.link}>
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
    borderRadius: '20px',
    overflow: 'hidden',
    border: '4px solid #D2BAD3', 
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
    backgroundColor: '#D2BAD3',
    border: 'none',
    color: '#000000',
    padding: '15px',
    textAlign: 'center',
    border: '4px solid #000000', 
    fontSize: '24px',
    cursor: 'pointer',
    borderRadius: '10px',
    width: '180px',
    zIndex: 2,
    fontFamily: 'Times New Roman',
  },
};

export default Page;

