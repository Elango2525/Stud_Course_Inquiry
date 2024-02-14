import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Select, MenuItem, Button, CircularProgress, Snackbar } from '@mui/material'; // Added Snackbar and CircularProgress
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../admin/header/Header';
import Footer from '../admin/footer/Footer';

const InquiryHistoryPage = () => {
  const [inquiries, setInquiries] = useState([]);
  const [error, setError] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState({ open: false, success: false });
  const isAdmin = checkAdmin();

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('Token not found. Please log in again.');
          return;
        }
        
        const response = await axios.get('http://localhost:8080/inquiries/form', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setInquiries(response.data);
      } catch (error) {
        if (error.response && error.response.status === 403) {
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

  const updateInquiryStatus = async (id, status) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:8080/inquiries/${id}/status`, { status }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setInquiries(prevInquiries =>
        prevInquiries.map(inquiry =>
          inquiry.id === id ? { ...inquiry, status: status } : inquiry
        )
      );
    } catch (error) {
      console.error('Error updating inquiry status:', error);
    }
  };

  const updateInquiryResponse = async (id, response) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:8080/inquiries/${id}/response`, { response }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setInquiries(prevInquiries =>
        prevInquiries.map(inquiry =>
          inquiry.id === id ? { ...inquiry, response: response } : inquiry
        )
      );
      // Show success message
      setSubmissionStatus({ open: true, success: true });
    } catch (error) {
      console.error('Error updating inquiry response:', error);
      // Show error message
      setSubmissionStatus({ open: true, success: false });
    }
  };

  function checkAdmin() {
    return true; // Assuming isAdmin is true for admin users
  }

  const handleCloseSnackbar = () => {
    setSubmissionStatus({ ...submissionStatus, open: false });
  };

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
              <TableCell>Response</TableCell>
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
                {isAdmin && (
                  <TableCell>
                    <Select
                      value={inquiry.status}
                      onChange={(e) => updateInquiryStatus(inquiry.id, e.target.value)}
                    >
                      <MenuItem value="In Progress">In Progress</MenuItem>
                      <MenuItem value="Completed">Completed</MenuItem>
                      <MenuItem value="Pending">Pending</MenuItem>
                    </Select>
                  </TableCell>
                )}
                <TableCell>
                  {isAdmin ? (
                    <input
                      type="text"
                      value={inquiry.response}
                      onChange={(e) => {
                        updateInquiryResponse(inquiry.id, e.target.value);
                      }}
                    />
                  ) : (
                    inquiry.response
                  )}
                </TableCell>
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
      <Snackbar
        open={submissionStatus.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={submissionStatus.success ? 'Response sent successfully!' : 'Failed to send response.'}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleCloseSnackbar}>
              CLOSE
            </Button>
          </React.Fragment>
        }
      />
      <Footer />
    </>
  );
};

export default InquiryHistoryPage;
