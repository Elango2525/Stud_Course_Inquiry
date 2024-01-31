import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';
import Header from '../admin/header/Header';
import Scroll from '../../Scroll';
import Footer from '../admin/footer/Footer';
const InquiryAdmin = () => {
  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      courseName: 'Python Programming',
      studentName: 'Gova',
      contactInformation: 'gova@gmail.com',
      inquiryType: 'Course',
      message: 'Is Emi option applicable?',
      attachment: null,
      preferredContactMethod: 'Email',
      urgencyLevel: 'medium',
      status: 'pending',
      response: '',
    },
    {
      id: 1,
      courseName: 'Python Programming',
      studentName: 'Gova',
      contactInformation: 'gova@gmail.com',
      inquiryType: 'Course',
      message: 'Is Emi option applicable?',
      attachment: null,
      preferredContactMethod: 'Email',
      urgencyLevel: 'medium',
      status: 'pending',
      response: '',
    },
    // Add more inquiry objects as needed
  ]);

  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [response, setResponse] = useState('');

  const handleResponse = (id, status) => {
    const updatedInquiries = inquiries.map((inquiry) =>
      inquiry.id === id ? { ...inquiry, status } : inquiry
    );
    setInquiries(updatedInquiries);
  };

  const handleReply = () => {
    if (selectedInquiry) {
      const updatedInquiries = inquiries.map((inquiry) =>
        inquiry.id === selectedInquiry.id
          ? { ...inquiry, response }
          : inquiry
      );
      setInquiries(updatedInquiries);
      setSelectedInquiry(null);
      setResponse('');
    }
  };

  return (
    <><Scroll/><Header/>
    <div style={{ marginTop: '30px', padding: '20px', maxWidth: '1500px', margin: 'auto' }}>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontWeight: '800', letterSpacing: '1.5px', color: '#526D82', textTransform: 'uppercase', fontSize: '22px', paddingBottom: '30px' }}>Inquiries Response</h2>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead style={{ backgroundColor: '#F0F3F7' }}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Course Name</TableCell>
              <TableCell>Student Name</TableCell>
              <TableCell>Contact Information</TableCell>
              <TableCell>Inquiry Type</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Attachment</TableCell>
              <TableCell>Preferred Contact Method</TableCell>
              <TableCell>Urgency Level</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Response</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inquiries.map((inquiry) => (
              <TableRow key={inquiry.id}>
                <TableCell>{inquiry.id}</TableCell>
                <TableCell>{inquiry.courseName}</TableCell>
                <TableCell>{inquiry.studentName}</TableCell>
                <TableCell>{inquiry.contactInformation}</TableCell>
                <TableCell>{inquiry.inquiryType}</TableCell>
                <TableCell>{inquiry.message}</TableCell>
                <TableCell>{inquiry.attachment ? 'Yes' : 'No'}</TableCell>
                <TableCell>{inquiry.preferredContactMethod}</TableCell>
                <TableCell>{inquiry.urgencyLevel}</TableCell>
                <TableCell>{inquiry.status}</TableCell>
                <TableCell>{inquiry.response || '-'}</TableCell>
                <TableCell>
                  <FormControl>
                    <InputLabel>Status</InputLabel>
                    <Select
                      value={inquiry.status}
                      onChange={(e) => handleResponse(inquiry.id, e.target.value)}
                    >
                      <MenuItem value="pending">Pending</MenuItem>
                      <MenuItem value="inprogress">In Progress</MenuItem>
                      <MenuItem value="success">Success</MenuItem>
                      <MenuItem value="declined">Declined</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    label="Response"
                    value={response}
                    onChange={(e) => setResponse(e.target.value)}
                    multiline
                  />
                 <button onClick={() => setSelectedInquiry(inquiry)}>Reply</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedInquiry && (
        <div style={{ marginTop: '20px' }}>
          <h3 style={{ marginBottom: '10px' }}>Reply to Inquiry ID: {selectedInquiry.id}</h3>
          <TextField
            label="Response"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            multiline
            fullWidth
          />
         <button onClick={handleReply}>Submit Response</button>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default InquiryAdmin;
