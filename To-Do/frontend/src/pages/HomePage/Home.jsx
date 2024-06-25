import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import new3 from "./new3.png";
import new4 from "./new4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const styles = {
    home: {
      textAlign: 'center',
      padding: '20px',
      backgroundImage: `url('https://images.pexels.com/photos/243337/pexels-photo-243337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      
       
      
    },
    header: {
      
      padding: '50px 20px',
      borderBottom: '4px solid #ddd',
      backgroundImage: `url('https://images.pexels.com/photos/243337/pexels-photo-243337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center center', 
      backgroundRepeat: 'no-repeat'
    },
    headerTitle: {
      fontSize: '100px',
      marginBottom: '10px',
      textAlign:'left',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
    },
    headerDescription: {
      fontSize: '2.6em',
      marginBottom: '20px',
      color: '#ADCFD8',
      textAlign:'left',
    },
    buttons: {
      marginBottom: '20px',
      textAlign: 'left',
    },
    button: {
      display: 'inline-block',
      margin: '10 10px',
      padding: '10px 23px',
      fontSize: '2em',
      color: 'black',
      backgroundColor: '#D0D8E9',
      border: '4px solid #1E1E1E', 
      bordercolor: '#8094BE',
      borderRadius: '10px',
      textDecoration: 'none',
      fontFamily: 'Times New Roman',
     
      
    },
    buttonHover: {
      backgroundColor: '#0056b3'
    },
    slideshow: {
      margin: '30px 10px'
    },
    slideshowTitle: {
      marginBottom: '20px'
    },
    slideshowImage: {
      width: '50%',
      maxHeight: '400px'
    },
    videos: {
      margin: '40px 0'
    },
    videosTitle: {
      marginBottom: '20px'
    },
    videoGrid: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
    },
    video: {
      width: '300px',
      margin: '10px'
    }
  };

  return (
    <div style={styles.home}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Welcome to the To-Do List App</h1>
        <p style={styles.headerDescription}>Manage your tasks efficiently <br></br>and stay organized</p>
        <div style={styles.buttons}>
        <br></br><br></br>
          <Link to="/signin" style={styles.button}>Login</Link>
          <Link to="/register" style={styles.button}>Register</Link>
        </div>
        <br></br><br></br><br></br><br></br>
        
      </header>
    

    </div>
  );
}

export default Home;
