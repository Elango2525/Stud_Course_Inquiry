// AdminEditCourseForm.jsx

import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
  IconButton,
} from '@mui/material';
import Header from '../../admin/header/Header';
import Footer from '../../admin/footer/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Scroll from '../../../Scroll';

const AdminEditCourseForm = ({ courseData, onEditCourse, onCancel }) => {
  const [courseInfo, setCourseInfo] = useState(courseData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleAddTeacher = () => {
    setCourseInfo((prevInfo) => ({
      ...prevInfo,
      courTeacher: [...prevInfo.courTeacher, { name: '', dcover: '', totalTime: '' }],
    }));
  };

  const handleTeacherChange = (index, field, value) => {
    setCourseInfo((prevInfo) => {
      const updatedTeachers = [...prevInfo.courTeacher];
      updatedTeachers[index][field] = value;
      return {
        ...prevInfo,
        courTeacher: updatedTeachers,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditCourse(courseInfo);
  };

  return (
    <>
      <Scroll />
      <Header />
      <Container component="main" maxWidth="md">
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
          <Box display="flex" alignItems="center" marginBottom="20px">
            <IconButton onClick={onCancel} color="primary">
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h5">Edit Course</Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <TextField label="Title" name="title" value={courseInfo.title} onChange={handleChange} fullWidth required margin="normal" />
            <TextField label="Description" name="desc" value={courseInfo.desc} onChange={handleChange} fullWidth multiline required margin="normal" />
            <TextField label="Instructor" name="instructor" value={courseInfo.instructor} onChange={handleChange} fullWidth required margin="normal" />
            <TextField label="Total Hours with Description" name="totalHours" value={courseInfo.totalHours} onChange={handleChange} fullWidth required margin="normal" />
            <TextField label="Total Package" name="totalPackage" value={courseInfo.totalPackage} onChange={handleChange} fullWidth required margin="normal" />
            <TextField label="Amount Per Month" name="amountPerMonth" value={courseInfo.amountPerMonth} onChange={handleChange} fullWidth required margin="normal" />
            <TextField label="Cover Image URL" name="coverImage" value={courseInfo.coverImage} onChange={handleChange} fullWidth required margin="normal" />

            <Typography variant="h6" style={{ marginTop: '20px' }}>Course Teachers</Typography>
            {courseInfo.courTeacher.map((teacher, index) => (
              <Box key={index} style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                <TextField label="Teacher Name" value={teacher.name} onChange={(e) => handleTeacherChange(index, 'name', e.target.value)} fullWidth required margin="normal" />
                <TextField label="Teacher Image URL" value={teacher.dcover} onChange={(e) => handleTeacherChange(index, 'dcover', e.target.value)} fullWidth required margin="normal" />
                <TextField label="Total Time" value={teacher.totalTime} onChange={(e) => handleTeacherChange(index, 'totalTime', e.target.value)} fullWidth required margin="normal" />
              </Box>
            ))}
            <div>
              <button onClick={handleAddTeacher} style={{ marginTop: '10px' }}>Add Teacher</button>
              <button color="primary" style={{ marginTop: '20px' }}>Submit</button>
            </div>
          </form>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default AdminEditCourseForm;
