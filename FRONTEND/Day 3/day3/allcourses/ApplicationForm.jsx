import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ApplicationForm.css';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Scroll from '../../Scroll'; 
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';

const ApplicationForm = () => {
  const [step, setStep] = useState(1);
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
  const [nationality,setNationality] = React.useState('');
  const [qualification,setQualification] = React.useState('');
  const [batchtime,setBatchtime] = React.useState('');
  const [year,setYear] = React.useState('');

  const handleChangen = (event) => {
    setNationality(event.target.value);
  };
  const handleChangenn = (event) => {
    setQualification(event.target.value);
  };
  const handleChangennn = (event) => {
    setBatchtime(event.target.value);
  };
  const handleChangenm = (event) => {
    setYear(event.target.value);
  };

  const handleNext = () => {
    if (validateContactNumber(formData.contactNumber) && validateEmail(formData.emailAddress)) {
      setContactNumberError('');
      setEmailError('');
      setStep((prevStep) => prevStep + 1);
    } else {
      setContactNumberError(
        'Invalid contact number. Please enter a 10-digit numeric value.'
      );
      setEmailError('Invalid email address. Please enter a valid email.');
    }
  };
  const years = Array.from({ length: 40 }, (_, index) => 1990 + index);

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
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

  const renderPersonalInformationStep = () => (
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
      <FormControl sx={{ m: 1, minWidth: 360,marginLeft:0 }}>
        <InputLabel id="demo-simple-select-helper-label">Nationality</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={nationality}
          label="Nationality"
          onChange={handleChangen}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
        <MenuItem value="IND">India</MenuItem>
          <MenuItem value="USA">United States</MenuItem>
        <MenuItem value="CAN">Canada</MenuItem>
        </Select>
      </FormControl>
      <TextField
        type="tel"
        name="contactNumber"
        label="Contact Number"
        variant="outlined"
        value={formData.contactNumber}
        onChange={handleChange}
        error={!!contactNumberError}
        helperText={contactNumberError}
        required
        sx={{ marginTop: 2, width: '100%' }}
      />
      <TextField
        type="email"
        name="emailAddress"
        label="Email Address"
        variant="outlined"
        value={formData.emailAddress}
        onChange={handleChange}
        error={!!emailError}
        helperText={emailError}
        required
        sx={{ marginTop: 2, width: '100%' }}
      />
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
      {/* <FormControl sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id="demo-simple-select-helper-label">Qualification</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={qualification}
          label="Qualification"
          onChange={handleChangenn}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        
      </FormControl> */}
      <FormControl sx={{ m: 2, minWidth: 270, marginLeft: 0 }}>
      <InputLabel id="demo-simple-select-helper-label">Year of Passing</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={year}
        label="Year"
        onChange={handleChangenm}
      >
        {/* <MenuItem value="">
          <em>None</em>
        </MenuItem> */}
        {years.map((yearValue) => (
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
        // value={formData.selectedCourse}
        onChange={handleChange}
        
        InputProps={{
            readOnly: true,
          }}
        
        sx={{ marginTop: 2, width: '50%' }}
      />
      <FormControl sx={{ m: 1, minWidth: 260}}>
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
        
      <div>
        <Link to='/courses'>
        {/* <button onClick={handleBack} disabled={step === 1}> */}
        <button>
          Back
        </button></Link>
        <Link to="/paymentform">
          <button onClick={handleNext}>Next</button>
        </Link>
      </div>
    </div>
  );

  const renderAdditionalInformationStep = () => (
    <div className="form-step">
      {/* ... existing code */}
    </div>
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return renderPersonalInformationStep();
      case 2:
        return renderAdditionalInformationStep();
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <form className="multi-step-form">
        {renderStep()}
      </form>
      <Footer />
    </>
  );
};

export default ApplicationForm;
