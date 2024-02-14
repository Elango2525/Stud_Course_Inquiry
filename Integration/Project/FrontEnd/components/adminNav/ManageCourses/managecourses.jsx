// CourseManagement.jsx

import React from 'react';
import Header from '../../admin/header/Header';
import Footer from '../../admin/footer/Footer';
import './managecourses.css'
import {Link} from 'react-router-dom'

const CourseManagement = () => {
  return (
    <>
    <Header/>
    <div className="course-management-container">
      <div className="grid-item add-course">
       <Link to ='/addcourses'> <h2>Add Course</h2></Link>
        {/* Add Course Form */}
      </div>

      <div className="grid-item edit-course">
        <h2>View Courses</h2>
        {/* Edit Course Form */}
      </div>

      <div className="grid-item delete-course">
        <Link to='/editcourses'><h2>Edit Course</h2></Link>
        {/* Delete Course Section */}
      </div>

      <div className="grid-item view-courses">
        <h2>Delete Course</h2>
        {/* View Courses Section */}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CourseManagement;
