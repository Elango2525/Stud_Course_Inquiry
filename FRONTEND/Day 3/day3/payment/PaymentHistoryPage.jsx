// PaymentHistoryPage.jsx

import React, { useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GetAppIcon from '@mui/icons-material/GetApp';
import Footer from '../common/footer/Footer';
const PaymentHistoryPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [hiddenEntries, setHiddenEntries] = useState([]);

  const paymentHistoryData = [
    {
      id: 1,
      date: '2024-01-23',
      course : 'EduTrackr Java',
      amount: '50.00',
      status: 'Completed',
      transactionId: 'TRX123456',
      paymentMethod: 'Credit Card',
    },
    {
      id: 2,
      date: '2024-01-04',
      course : 'FDS',
      amount: '30.00',
      status: 'Pending',
      transactionId: 'TRX789012',
      paymentMethod: 'PayPal',
    },
    {
      id: 3,
      date: '2024-01-15',
      course : 'C#',
      amount: '30.00',
      status: 'Failed',
      transactionId: 'TRX789012',
      paymentMethod: 'PayPal',
    },
    // Add more payment history data as needed
  ];

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleDownloadInvoice = (transactionId) => {
    // Add logic to download the invoice based on the transaction ID
    console.log(`Downloading invoice for transaction ID: ${transactionId}`);
    handleCloseMenu();
  };

  const handleHidePayment = (id) => {
    // Add logic to hide the payment history entry based on the ID
    console.log(`Hiding payment with ID: ${id}`);
    setHiddenEntries((prevHiddenEntries) => [...prevHiddenEntries, id]);
    handleCloseMenu();
  };

  const isEntryHidden = (id) => hiddenEntries.includes(id);

  const visiblePayments = paymentHistoryData.filter((payment) => !isEntryHidden(payment.id));

  return (
    <>
      <div style={{marginBottom:'10px'}}>
      <h3 style={{fontWeight:'800',letterSpacing:'1.5px',color:'#526D82',textTransform:'uppercase',fontSize:'22px',paddingBottom:'30px'}}>Payment History</h3>
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
              <TableCell>Date</TableCell>
              <TableCell>Transaction ID</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visiblePayments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.date}</TableCell>
                <TableCell>{payment.transactionId}</TableCell>
                <TableCell>{payment.course}</TableCell>
                <TableCell>{payment.paymentMethod}</TableCell>
                
                <TableCell>${payment.amount}</TableCell>
                <TableCell>
                  <span
                    style={{
                      color:
                        payment.status === 'Completed'
                          ? 'green'
                          : payment.status === 'Pending'
                          ? '#F6D776'
                          : 'red',
                    }}
                  >
                    {payment.status}
                  </span>
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={handleOpenMenu}
                    color="primary"
                    aria-label="More Options"
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                  >
                    <MenuItem onClick={() => handleDownloadInvoice(payment.transactionId)}>
                      Download Invoice
                    </MenuItem>
                    <MenuItem onClick={() => handleHidePayment(payment.id)}>
                      Hide
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      </>
  );
};

export default PaymentHistoryPage;
