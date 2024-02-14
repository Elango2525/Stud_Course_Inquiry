import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Scroll from '../../Scroll';
import Footer from '../admin/footer/Footer';
import Header from '../admin/header/Header';

const StyledTableContainer = styled(TableContainer)({
  width: '100%',
  marginBottom: '10px',
});

const StyledTable = styled(Table)({
  minWidth: 650,
  '@media (max-width:600px)': {
    minWidth: '100%',
  },
});

const StyledTableCell = styled(TableCell)({
  fontWeight: 'bold',
  borderBottom: '1px solid #ddd',
  padding: '16px',
});

const StyledTableRow = styled(TableRow)({
  '&:hover': {
    background: '#f5f5f5',
  },
});

const AdmissionTable = ({ onEdit }) => {
  const [admissionData, setAdmissionData] = useState([]);

  useEffect(() => {
    const fetchAdmissionData = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          throw new Error('Token not found. Please log in again.');
        }

        const response = await axios.get('http://localhost:8080/admissions', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAdmissionData(response.data);
      } catch (error) {
        console.error('Error fetching admission data:', error);
      }
    };

    fetchAdmissionData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token not found. Please log in again.');
        return;
      }

      await axios.delete(`http://localhost:8080/admissions/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Remove the deleted admission from the local state
      setAdmissionData(admissionData.filter((admission) => admission.id !== id));
    } catch (error) {
      console.error('Error deleting admission:', error);
    }
  };
  

  return (
    <>
      <Scroll />
      <Header />
      <div style={{ marginTop: '30px', padding: '20px', maxWidth: '1500px', margin: 'auto' }}>
        <div style={{ marginBottom: '10px' }}>
          <h3 style={{ fontWeight: '800', letterSpacing: '1.5px', color: '#526D82', textTransform: 'uppercase', fontSize: '22px', paddingBottom: '30px', marginTop: '20px', marginLeft: '20px' }}>ADMISSION DETAILS</h3>
        </div>
        <StyledTableContainer component={Paper}>
          <StyledTable>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Full Name</StyledTableCell>
                <StyledTableCell>Gender</StyledTableCell>
                <StyledTableCell>Nationality</StyledTableCell>
                <StyledTableCell>Contact Number</StyledTableCell>
                <StyledTableCell>Email Address</StyledTableCell>
                <StyledTableCell>Qualification</StyledTableCell>
                <StyledTableCell>School/College</StyledTableCell>
                <StyledTableCell>Year of Passing</StyledTableCell>
                <StyledTableCell>Selected Course</StyledTableCell>
                <StyledTableCell>Batch Number</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {admissionData.map((admission) => (
                <StyledTableRow key={admission.id}>
                  <StyledTableCell>{admission.fullName}</StyledTableCell>
                  <StyledTableCell>{admission.gender}</StyledTableCell>
                  <StyledTableCell>{admission.nationality}</StyledTableCell>
                  <StyledTableCell>{admission.contactNumber}</StyledTableCell>
                  <StyledTableCell>{admission.email}</StyledTableCell>
                  <StyledTableCell>{admission.qualification}</StyledTableCell>
                  <StyledTableCell>{admission.school}</StyledTableCell>
                  <StyledTableCell>{admission.yearOfPassing}</StyledTableCell>
                  <StyledTableCell>{admission.selectedCourse}</StyledTableCell>
                  <StyledTableCell>{admission.batchNumber}</StyledTableCell>
                  <StyledTableCell>
                    <IconButton onClick={() => handleEdit(admission)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(admission.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </StyledTable>
        </StyledTableContainer>
      </div>
      <Footer />
    </>
  );
};

export default AdmissionTable;
