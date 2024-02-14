import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../common/header/Header';

const InquiryHistoryPage = () => {
  const [inquiries, setInquiries] = useState([]);
  const [error, setError] = useState(null); // State to hold error information
  const isAdmin = checkAdmin(); // Function to check if the user is an admin

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const token = localStorage.getItem('token');
        // Make sure token is available
        if (!token) {
          console.error('Token not found. Please log in again.');
          // Handle the absence of token, e.g., redirect to login page
          return;
        }
        
        const response = await axios.get('http://localhost:8080/inquiries/form', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setInquiries(response.data);
      } catch (error) {
        if (error.response.status === 403) {
          setError('Access to inquiries is forbidden. Please check your permissions.');
        } else {
          setError('Error fetching inquiries. Please try again later.');
        }
      }
    };

    fetchInquiries();
  }, []);

  const handleDeleteInquiry = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8080/inquiries/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setInquiries(prevInquiries => prevInquiries.filter(inquiry => inquiry.id !== id));
    } catch (error) {
      console.error('Error deleting inquiry:', error);
    }
  };

  function checkAdmin() {
    // Logic to check if the user is an admin
    // You may implement this based on your authentication system
    // For demonstration, let's assume isAdmin is true for admin users
    return true; // Change this according to your authentication logic
  }

  return (
    <>
      <Header />
      <div style={{ marginBottom: '10px' }}>
        <h3 style={{ fontWeight: '800', letterSpacing: '1.5px', color: '#526D82', textTransform: 'uppercase', fontSize: '22px', paddingBottom: '30px', marginTop: '50px', marginLeft: '20px' }}>Inquiry History</h3>
      </div>

      {error && <p>{error}</p>}

      <TableContainer
        component={Paper}
        sx={{
          width: '100%',
        }}
      >
        <Table
          sx={{
            minWidth: 650,
            '@media (max-width:600px)': {
              minWidth: '100%',
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
              {isAdmin && <TableCell>Status</TableCell>}
              <TableCell>Response</TableCell> {/* New column for displaying response */}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inquiries.map((inquiry) => (
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
                {isAdmin && <TableCell>{inquiry.status}</TableCell>}
                <TableCell>{inquiry.response}</TableCell> {/* Display response */}
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
