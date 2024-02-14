import DeleteIcon from '@mui/icons-material/Delete';
import { Box, FormControl, FormGroup, IconButton, InputLabel, MenuItem, Modal, Paper, Select, TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import Scroll from '../../Scroll';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import { coursesCard } from "../../dummydata"
const InquiryForm = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    courseId: '',
    studentName: '',
    studentId: '',
    contactInformation: '',
    inquiryType: '',
    message: '',
    attachment: null,
    preferredContactMethod: '',
    urgencyLevel: '',
  });

  const [successMessageOpen, setSuccessMessageOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      attachment: file,
    }));
  };

  const handleRemoveFile = () => {
    setFormData((prevData) => ({
      ...prevData,
      attachment: null,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token not found. Please log in again.');
        return;
      }

      const response = await axios.post('http://localhost:8080/inquiries', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccessMessageOpen(true);

      setFormData({
        courseName: '',
        courseId: '',
        studentName: '',
        studentId: '',
        contactInformation: '',
        inquiryType: '',
        message: '',
        attachment: null,
        preferredContactMethod: '',
        urgencyLevel: '',
      });
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  const handleCloseSuccessMessage = () => {
    setSuccessMessageOpen(false);
  };

  return (
    <>
      <Header />
      <Scroll />
      <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px', background: '#f8f8f8', borderRadius: '10px' }}>

        <div style={{ maxWidth: '400px', width: '50%' }}>

          <FormGroup>
            <TextField label="Course Name" name="courseName" value={formData.courseName} onChange={handleChange} required fullWidth size="medium" margin="normal" variant="outlined"
              />
            <TextField label="Course ID" name="courseId" value={formData.courseId} onChange={handleChange} required fullWidth size="medium" margin="normal" variant="outlined"  />
            <TextField label="Student Name" name="studentName" value={formData.studentName} onChange={handleChange} required fullWidth size="medium" margin="normal" variant="outlined" />
            <TextField label="Student ID" name="studentId" value={formData.studentId} onChange={handleChange} required fullWidth size="medium" margin="normal" variant="outlined" />
            <TextField label="Contact Information" name="contactInformation" value={formData.contactInformation} onChange={handleChange} required fullWidth size="medium" margin="normal" variant="outlined" />
            <FormControl fullWidth margin="normal">
              <InputLabel>Inquiry Type</InputLabel>
              <Select name="inquiryType" value={formData.inquiryType} onChange={handleChange} required variant="outlined" style={{ minWidth: '120px' }}>
                <MenuItem value="course">Course</MenuItem>
                <MenuItem value="content schedule">Content Schedule</MenuItem>
                <MenuItem value="prerequisites">Prerequisites</MenuItem>
                <MenuItem value="others">Others</MenuItem>
              </Select>
            </FormControl>
          </FormGroup>
        </div>
        <div style={{ maxWidth: '400px', width: '50%' }}>
          <FormGroup>
            <TextField label="Message/Question" name="message" value={formData.message} onChange={handleChange} multiline rows={4} fullWidth size="medium" margin="normal" variant="outlined" required />
            <FormControl fullWidth margin="normal">
              <Paper elevation={3} variant="outlined" style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                <input type="file" onChange={handleFileUpload} style={{ display: 'none' }} id="fileInput" />
                <label htmlFor="fileInput" style={{ cursor: 'pointer', marginRight: '10px', padding: '8px', background: '#f0cfcf', color: '#03857a', borderRadius: '5px', fontWeight: '600' }}>
                  Choose Attachment to upload
                </label>
                {formData.attachment && (
                  <Box display="flex" alignItems="center">
                    <span style={{ marginRight: '10px' }}>{formData.attachment.name}</span>
                    <IconButton size="small" onClick={handleRemoveFile} style={{ color: 'red' }}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                )}
              </Paper>
            </FormControl>
            {formData.attachment && (
              <Box mt={2} display="flex" justifyContent="start">
                <a href={URL.createObjectURL(formData.attachment)} target="_blank" rel="noopener noreferrer" style={{ color: '#2196F3', textDecoration: 'underline' }}>
                  View Uploaded Image
                </a>
              </Box>
            )}
            <FormControl fullWidth margin="normal">
              <InputLabel>Preferred Contact Method</InputLabel>
              <Select name="preferredContactMethod" value={formData.preferredContactMethod} onChange={handleChange} required variant="outlined" style={{ minWidth: '120px' }}>
                <MenuItem value="email">Email</MenuItem>
                <MenuItem value="phone">Phone</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Urgency Level</InputLabel>
              <Select name="urgencyLevel" value={formData.urgencyLevel} onChange={handleChange} required variant="outlined" style={{ minWidth: '120px' }}>
                <MenuItem value="low">Low</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="high">High</MenuItem>
              </Select>
            </FormControl>
            <button style={{ fontSize: '15px' }}>Submit Inquiry</button>
          </FormGroup>
        </div>
      </form>
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
          <p id="success-message-description">Your inquiry has been successfully submitted.</p>
        </Box>
      </Modal>
    </>
  );
};

export default InquiryForm;
