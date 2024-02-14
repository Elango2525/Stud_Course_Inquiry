
import "./coursesDetail.css";
import { Link } from "react-router-dom";

// import Rating from '@mui/material/Rating';
// import { coursesCard } from "../../dummydata";

const CourseDetails = () => {
  // Extract the first item from the coursesCard array
  // const defaultCourse = coursesCard.slice(0, 1);

  return (
    <div className="course">
      <div className="imgs">
      <img src='../images/courses/c1.png' alt='ms' className="course-image" />
      </div><div className="course-details">
        <div className="text1"><h2>ff</h2></div>
        
        <p>wfw</p>
        <p>Instructor: few</p>
        <div className="price-details">
          <p>Price: f33</p>
          <p>Full Package: 3RQAQ</p>
          <p>EMI: R3Q</p>
        </div>
        <p>Modules Covered:REQ</p>
        <p>Hours to Complete: 130 hours</p>
        <div className="rating">
          Rating: {Array(5).fill().map((_, index) => <span key={index}>⭐</span>)}
        </div>
        <button className="enroll-button">Enroll Now</button>
        <button className="enquiry-button">Make Inquiry</button>
      </div>
    </div>
  );
};

export default CourseDetails;
