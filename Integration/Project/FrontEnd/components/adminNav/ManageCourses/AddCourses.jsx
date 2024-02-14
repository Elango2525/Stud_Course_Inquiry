import React, { useState } from 'react';
import {
  TextField,
  Button,
  Modal,
  Box,
  Container,
  Paper,  
} from '@mui/material';
import Header from '../../admin/header/Header';
import Footer from '../../admin/footer/Footer';
import Scroll from '../../../Scroll';
import axios from 'axios';
const AddCourseForm = ({ onAddCourse }) => {
  const [courseInfo, setCourseInfo] = useState({
    title: '',
    description: '',
    instructor: '',
    totalHours: '',
    totalPackage: '',
    amountPerMonth: '',
    coverImage: '',
    teacherImage: '',
  });
  const [successMessageOpen, setSuccessMessageOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem('token');

      if (!token) { 
        throw new Error('Token not found. Please log in again.');
      }

      const response = await axios.post('http://localhost:8080/addCourses', courseInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccessMessageOpen(true);

      setCourseInfo({
        title: '',
        description: '',
        instructor: '',
        totalHours: '',
        totalPackage: '',
        amountPerMonth: '',
        coverImage: '',
        teacherImage: '',
      });
    } catch (error) {
      setErrorMessage('Form submission failed: ' + error.message);
      console.error('Form submission failed:', error);
    }
  };

  const handleCloseSuccessMessage = () => {
    setSuccessMessageOpen(false);
  };

  return (
    <>
      <Scroll />
      <Header />
      <Container component="main" maxWidth="md">
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
          <div style={{ marginBottom: '10px' }}>
            <h3 style={{ fontWeight: '800', letterSpacing: '1.5px', color: '#526D82', textTransform: 'uppercase', fontSize: '22px', marginTop: '20px', marginLeft: '20px' }}>ADD NEW COURSE</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Title"
              name="title"
              value={courseInfo.title}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Description"
              name="description"
              value={courseInfo.description}
              onChange={handleChange}
              fullWidth
              multiline
              required
              margin="normal"
            />
            <TextField
              label="Instructor"
              name="instructor"
              value={courseInfo.instructor}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Total Hours with Description"
              name="totalHours"
              value={courseInfo.totalHours}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Total Package"
              name="totalPackage"
              value={courseInfo.totalPackage}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Amount Per Month"
              name="amountPerMonth"
              value={courseInfo.amountPerMonth}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Cover Image URL"
              name="coverImage"
              value={courseInfo.coverImage}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Teacher Image URL"
              name="teacherImage"
              value={courseInfo.teacherImage}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
      <Footer />
      <Modal
        open={successMessageOpen}
        onClose={handleCloseSuccessMessage}
        aria-labelledby="success-message"
        aria-describedby="success-message-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2 id="success-message">Success!</h2>
          <p id="success-message-description">Course has been successfully added.</p>
        </Box>
      </Modal>

      {errorMessage && (
        <p style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>{errorMessage}</p>
      )}
    </>
  );
};

export default AddCourseForm;
