
import {Link} from "react-router-dom";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
const AnimatedImage = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh',
  };

  const imageStyle = {
    display: 'block',
    margin: 'auto',
    maxWidth: '50%',
    maxHeight: '50%',
    marginTop: '40px',
  };

  const textStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 'auto',
    
    color: 'blue',
    animation: 'fadeInDown 1s ease', // Apply the animation directly
  };

  return (
    <><Header/>
    <div style={containerStyle}>
      <img src='../images/courses/ver.gif' alt="Animated Image" style={imageStyle} />
      <h1 style={textStyle}>Payment Successful</h1>
     <p>Congratulations! Your payment has been processed successfully.</p>
     <p>Note: If there are any specific details or notes you did like to associate with this transaction, please provide them for our records</p>
     <Link to='/courses'> <button>BACK TO COURSES</button></Link>

      {/* Define the animation directly within the component */}
      <style>
        {`
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
    <Footer/>
    </>
  );
};

export default AnimatedImage;
