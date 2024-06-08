import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
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
      padding: '20px'
    },
    header: {
      backgroundColor: '#f8f9fa',
      padding: '40px 20px',
      borderBottom: '1px solid #ddd',
      backgroundImage: "url('https://i.pinimg.com/564x/ed/86/89/ed8689f6f5fe641bc9729aefa98b1cb3.jpg')",
    },
    headerTitle: {
      fontSize: '2.5em',
      marginBottom: '10px'
    },
    headerDescription: {
      fontSize: '1.2em',
      marginBottom: '20px'
    },
    buttons: {
      marginBottom: '20px'
    },
    button: {
      display: 'inline-block',
      margin: '0 10px',
      padding: '10px 20px',
      fontSize: '1em',
      color: 'white',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '5px',
      textDecoration: 'none'
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
    maxHeight: '400px', // Decrease the maxHeight to reduce the size of the images
    objectFit: 'cover',

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
        <p style={styles.headerDescription}>Manage your tasks efficiently and stay organized</p>
        <div style={styles.buttons}>
          <Link to="/login" style={{ ...styles.button, ':hover': styles.buttonHover }}>Login</Link>
          <Link to="/register" style={{ ...styles.button, ':hover': styles.buttonHover }}>Sign Up</Link>
        </div>
      </header>
      
      <section style={styles.slideshow}>
        <h2 style={styles.slideshowTitle}>Features</h2>
        <Slider {...sliderSettings}>
          <div>
            <img src="https://images.pexels.com/photos/7150986/pexels-photo-7150986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Feature 1" style={styles.slideshowImage} />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/5717442/pexels-photo-5717442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Feature 2" style={styles.slideshowImage} />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/5408818/pexels-photo-5408818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Feature 3" style={styles.slideshowImage} />
          </div>
        </Slider>
      </section>

      <section style={styles.videos}>
        <h2 style={styles.videosTitle}>Learn More About the App</h2>
        <div style={styles.videoGrid}>
          <video controls style={styles.video}>
            <source src="https://youtube.com/shorts/d5aXIsJ_wSU?si=qrPNCsKNxzgPRq60" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video controls style={styles.video}>
            <source src="video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video controls style={styles.video}>
            <source src="video3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
}

export default Home;
