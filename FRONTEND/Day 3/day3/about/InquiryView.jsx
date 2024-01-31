// InquiryHistoryPage.jsx

import React, { useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from '../common/header/Header';
const InquiryHistoryPage = () => {
  const [hiddenEntries, setHiddenEntries] = useState([]);

  const inquiryData = {
    id: 1,
    courseName: 'Python Programming',
    courseId: 134,
    studentName: 'John Doe',
    studentId: '12345',
    contactInformation: 'john@example.com',
    inquiryType: 'course',
    message: 'Hi, I have some queries about this course',
    preferredContactMethod: 'email',
    urgencyLevel: 'medium',
    attachment: null,
  };

  const handleDeleteInquiry = (id) => {
    // Add logic to delete the inquiry history entry based on the ID
    console.log(`Deleting inquiry with ID: ${id}`);
    setHiddenEntries((prevHiddenEntries) => [...prevHiddenEntries, id]);
  };

  const isEntryHidden = (id) => hiddenEntries.includes(id);

  const visibleInquiries = !isEntryHidden(inquiryData.id) ? [inquiryData] : [];

  return (
    <>
    <Header/>
      <div style={{ marginBottom: '10px' }}>
        <h3 style={{ fontWeight: '800', letterSpacing: '1.5px', color: '#526D82', textTransform: 'uppercase', fontSize: '22px', paddingBottom: '30px' ,marginTop:'50px',marginLeft:'20px'}}>Inquiry History</h3>
      </div>

      <TableContainer
        component={Paper}
        sx={{
          width: '100%', // Set to 100% to increase the width
        }}
      >
        <Table
          sx={{
            minWidth: 650,
            '@media (max-width:600px)': {
              // Adjust styles for smaller screens
              minWidth: '100%', // Full width on smaller screens
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Course ID</TableCell>
              <TableCell>Course Name</TableCell>
              <TableCell>Student ID</TableCell>
              <TableCell>Student Name</TableCell>
              <TableCell>Contact Information</TableCell>
              <TableCell>Inquiry Type</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Contact Method</TableCell>
              <TableCell>Urgency Level</TableCell>
              <TableCell>Attachment</TableCell>
              {/* <TableCell>Actions</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleInquiries.map((inquiry) => (
              <TableRow key={inquiry.id}>
                <TableCell>{inquiry.courseId}</TableCell>
                <TableCell>{inquiry.courseName}</TableCell>
                <TableCell>{inquiry.studentId}</TableCell>
                <TableCell>{inquiry.studentName}</TableCell>
                <TableCell>{inquiry.contactInformation}</TableCell>
                <TableCell>{inquiry.inquiryType}</TableCell>
                <TableCell>{inquiry.message}</TableCell>
                <TableCell>{inquiry.preferredContactMethod}</TableCell>
                <TableCell>{inquiry.urgencyLevel}</TableCell>
                <TableCell>{inquiry.attachment ? 'Yes' : 'No'}</TableCell>
                <TableCell>
                  <Tooltip title="Delete">
                    <IconButton
                      onClick={() => handleDeleteInquiry(inquiry.id)}
                      color="error"
                      aria-label="Delete Inquiry"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </>
  );
};

export default InquiryHistoryPage;
