import { Box, Modal } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import React, { useState } from 'react';
import Scroll from '../../Scroll';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import './ApplicationForm.css';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    nationality: '',
    contactNumber: '',
    emailAddress: '',
    qualification: '',
    schoolCollege: '',
    yearOfPassing: '',
    selectedCourse: '',
    batchTiming: '',
    emergencyContact: '',
    specialRequirements: '',
    termsAndConditions: false,
    signature: '',
  });
  const [contactNumberError, setContactNumberError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nationality, setNationality] = React.useState(formData.nationality);
  const [qualification, setQualification] = React.useState(formData.qualification);
  const [batchtime, setBatchtime] = React.useState(formData.batchTiming);
  const [year, setYear] = React.useState(formData.yearOfPassing);
  const [successMessageOpen, setSuccessMessageOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token not found. Please log in again.');
        return;
      }

      const response = await axios.post('http://localhost:8080/admissions/apply', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccessMessageOpen(true);

      setFormData({
        fullName: '',
        gender: '',
        nationality: '',
        contactNumber: '',
        emailAddress: '',
        qualification: '',
        schoolCollege: '',
        yearOfPassing: '',
        selectedCourse: 'Java Programming',
        batchTiming: '',
        emergencyContact: '',
        specialRequirements: '',
        termsAndConditions: false,
        signature: '',
      });
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };
  

  const handleChangen = (event) => {
    setNationality(event.target.value);
    handleChange(event); // Call handleChange to update form data
  };

  const handleChangenn = (event) => {
    setQualification(event.target.value);
    handleChange(event); // Call handleChange to update form data
  };

  const handleChangennn = (event) => {
    setBatchtime(event.target.value);
    handleChange(event); // Call handleChange to update form data
  };

  const handleChangenm = (event) => {
    setYear(event.target.value);
    handleChange(event); // Call handleChange to update form data
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'contactNumber') {
      validateContactNumber(value);
    } else if (name === 'emailAddress') {
      validateEmail(value);
    }
  };

  const validateContactNumber = (value) => {
    const isValid = /^\d{10}$/.test(value);

    if (isValid) {
      setContactNumberError('');
      return true;
    } else {
      setContactNumberError(
        'Invalid contact number. Please enter a 10-digit numeric value.'
      );
      return false;
    }
  };

  const validateEmail = (value) => {
    const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);

    if (isValid) {
      setEmailError('');
      return true;
    } else {
      setEmailError('Invalid email address. Please enter a valid email.');
      return false;
    }
  };

  return (
    <>
      <Header />
      <form className="multi-step-form" onSubmit={handleSubmit}>
        <div className="form-step">
          <div><Scroll /></div>
          <TextField
            id="fullName"
            name="fullName"
            label="Full Name"
            variant="outlined"
            value={formData.fullName}
            onChange={handleChange}
            required
            sx={{ marginTop: 2, width: '100%' }}
          />
          <div className="gender-radio-group">
            <label className="radio-label">
              <Radio
                checked={formData.gender === 'male'}
                onChange={handleChange}
                value="male"
                name="gender"
                inputProps={{ 'aria-label': 'Male' }}
              />
              Male
            </label>
            <label className="radio-label" >
              <Radio
                checked={formData.gender === 'female'}
                onChange={handleChange}
                value="female"
                name="gender"
                inputProps={{ 'aria-label': 'Female' }}
              />
              Female
            </label>
            <label className="radio-label">
              <Radio
                checked={formData.gender === 'other'}
                onChange={handleChange}
                value="other"
                name="gender"
                inputProps={{ 'aria-label': 'Other' }}
              />
              Others
            </label>
          </div>
          <FormControl sx={{ m: 1, minWidth: 360, marginLeft: 0 }}>
            <InputLabel id="demo-simple-select-helper-label">Nationality</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={nationality}
              label="Nationality"
              onChange={handleChangen}
            >
              <MenuItem value="IND">India</MenuItem>
              <MenuItem value="USA">United States</MenuItem>
              <MenuItem value="CAN">Canada</MenuItem>
            </Select>
          </FormControl>
          <TextField
            type="text"
            name="qualification"
            label="Qualification"
            variant="outlined"
            value={formData.qualification}
            onChange={handleChange}
            required
            sx={{ marginTop: 2, width: '100%' }}
          />
          <TextField
            type="text"
            name="schoolCollege"
            label="School/College"
            variant="outlined"
            value={formData.schoolCollege}
            onChange={handleChange}
            required
            sx={{ marginTop: 2, width: '100%' }}
          />
          <FormControl sx={{ m: 2, minWidth: 270, marginLeft: 0 }}>
            <InputLabel id="demo-simple-select-helper-label">Year of Passing</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={year}
              label="Year"
              onChange={handleChangenm}
            >
              {Array.from({ length: 40 }, (_, index) => 1990 + index).map((yearValue) => (
                <MenuItem key={yearValue} value={yearValue}>
                  {yearValue}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            id="selectedCourse"
            name="selectedCourse"
            label="Course"
            defaultValue="Java Programming"
            variant="outlined"
            onChange={handleChange}
            InputProps={{
              readOnly: true,
            }}
            sx={{ marginTop: 2, width: '50%' }}
          />
          <FormControl sx={{ m: 1, minWidth: 260 }}>
            <InputLabel id="demo-simple-select-helper-label">Batch Number</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={batchtime}
              label="Batchtime"
              onChange={handleChangennn}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
          <button type="submit">Submit</button>
        </div>
      </form>
      <Footer />

      <Modal
        open={successMessageOpen}
        onClose={() => setSuccessMessageOpen(false)}
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

export default ApplicationForm;
