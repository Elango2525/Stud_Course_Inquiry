import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper'; 
import Header from '../admin/header/Header';
import Footer from '../admin/footer/Footer';
import Scroll from '../../Scroll';
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


const AdmissionTable = ({ admissionData, onDelete, onEdit, onView }) => {
  return (
    <><Scroll/><Header/>
    <div style={{ marginTop: '30px', padding: '20px', maxWidth: '1500px', margin: 'auto' }}>
    <div style={{marginBottom:'10px'}}>
      <h3 style={{fontWeight:'800',letterSpacing:'1.5px',color:'#526D82',textTransform:'uppercase',fontSize:'22px',paddingBottom:'30px',marginTop:'20px',marginLeft:'20px'}}>ADMISSION DETAILS</h3>
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
          <StyledTableRow>
            <StyledTableCell>John Doe</StyledTableCell>
            <StyledTableCell>Male</StyledTableCell>
            <StyledTableCell>USA</StyledTableCell>
            <StyledTableCell>1234567890</StyledTableCell>
            <StyledTableCell>john.doe@example.com</StyledTableCell>
            <StyledTableCell>Bachelor</StyledTableCell>
            <StyledTableCell>ABC School</StyledTableCell>
            <StyledTableCell>2022</StyledTableCell>
            <StyledTableCell>Computer Science</StyledTableCell>
            <StyledTableCell>1</StyledTableCell>
            <StyledTableCell>
              <IconButton onClick={() => onEdit({})}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => onDelete(1)}>
                <DeleteIcon />
              </IconButton>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell>John Doe</StyledTableCell>
            <StyledTableCell>Male</StyledTableCell>
            <StyledTableCell>USA</StyledTableCell>
            <StyledTableCell>1234567890</StyledTableCell>
            <StyledTableCell>john.doe@example.com</StyledTableCell>
            <StyledTableCell>Bachelor</StyledTableCell>
            <StyledTableCell>ABC School</StyledTableCell>
            <StyledTableCell>2022</StyledTableCell>
            <StyledTableCell>Computer Science</StyledTableCell>
            <StyledTableCell>1</StyledTableCell>
            <StyledTableCell>
              <IconButton onClick={() => onEdit({})}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => onDelete(1)}>
                <DeleteIcon />
              </IconButton>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
    </div>
    <Footer/>
    </>
  );
};

export default AdmissionTable;
