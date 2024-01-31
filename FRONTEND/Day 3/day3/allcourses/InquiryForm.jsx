import  { useState } from 'react';
import { TextField, Select, MenuItem,  FormControl, InputLabel, FormGroup, Box, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// import { coursesCard } from "../../dummydata"
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import Scroll from '../../Scroll';
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <Header/>
    <Scroll/>
    <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px', background: '#f8f8f8', borderRadius: '10px' }}>
      
      <div style={{ maxWidth: '400px', width: '50%' }}>
      
        <FormGroup>
          <TextField label="Course Name" name="courseName" defaultValue="Python Programming" onChange={handleChange} required fullWidth size="medium" margin="normal" variant="outlined"  
          InputProps={{
            readOnly: true,
          }} />
          {/* value={formData.courseId} */}
          <TextField label="Course ID" name="courseId" defaultValue={134} onChange={handleChange} required fullWidth size="medium" margin="normal" variant="outlined"InputProps={{
            readOnly: true,
          }} />
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
          <TextField label="Message/Question" name="message" value={formData.message} onChange={handleChange} multiline rows={4} fullWidth size="medium" margin="normal" variant="outlined" required/>
          <FormControl fullWidth margin="normal">
            <Paper elevation={3} variant="outlined" style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
              <input type="file" onChange={handleFileUpload} style={{ display: 'none' }} id="fileInput" />
              <label htmlFor="fileInput" style={{ cursor: 'pointer', marginRight: '10px', padding: '8px', background: '#f0cfcf', color: '#03857a', borderRadius: '5px',fontWeight:'600' }}>
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
          <button style={{fontSize:'15px'}}>Submit Inquiry</button>
        </FormGroup>
      </div>
    </form>
    <Footer/>
    </>
  );
};

export default InquiryForm;
