import  { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import './courses.css'
import {Link} from "react-router-dom";
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';

const PaymentPage = () => {
  const [paymentOption, setPaymentOption] = useState('card');
  const [formData, setFormData] = useState({
    card: { cardNumber: '', cardName: '', expiryDate: '', cvv: '' },
    upi: { upiId: '', name: '', amount: '' },
  });

  const handlePaymentOptionChange = (event) => {
    setPaymentOption(event.target.value);
  };

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [paymentOption]: {
        ...formData[paymentOption],
        [field]: event.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your payment gateway logic here
    console.log('Form submitted:', formData[paymentOption]);
  };

  return (
    <><Header/>
        <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
      <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Select Payment Option
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="payment-option"
            name="payment-option"
            value={paymentOption}
            onChange={handlePaymentOptionChange}
          >
            <FormControlLabel value="card" control={<Radio />} label="Card" />
            <FormControlLabel value="upi" control={<Radio />} label="UPI" />
          </RadioGroup>
        </FormControl>

        {paymentOption === 'card' && (
            
          <form onSubmit={handleSubmit}>
            
            <div>
            <TextField sx={{ m: 1, minWidth: 430,marginLeft:0}}
              label="Amount"
              variant="filled"
            //   fullWidth
              margin="normal"
              required
              defaultValue="$1000"
            //   value={formData.upi.amount}
              onChange={handleInputChange('amount')}
              InputProps={{
                readOnly: true,
              }}
            />
            </div>
            <TextField sx={{ m: 1, minWidth: 430,marginLeft:0}}
              label="Card Number"
              variant="outlined"
            //   fullWidth
              margin="normal"
              required
              value={formData.card.cardNumber}
              onChange={handleInputChange('cardNumber')}
            />
             <div style={{ display: 'flex', gap: '16px' }}></div>
            <TextField sx={{ m: 1, minWidth: 430,marginLeft:0}}
              label="Name on Card"
              variant="outlined"
              
              margin="normal"
              required
              value={formData.card.cardName}
              onChange={handleInputChange('cardName')}
            />
            
            <div style={{ display: 'flex', gap: '16px' }}>
              <TextField
                label="Expiry Date"
                variant="outlined"
                margin="normal"
                required
                value={formData.card.expiryDate}
                onChange={handleInputChange('expiryDate')}
              />
              <TextField
                label="CVV"
                variant="outlined"
                margin="normal"
                type="password"
                required
                value={formData.card.cvv}
                onChange={handleInputChange('cvv')}
              />
            </div>
            {/* <Button type="submit" variant="contained" color="primary" fullWidth> */}
            <button className="custom-button" type="submit">Pay Now</button>
            {/* </Button> */}
          </form>
        )}

        {paymentOption === 'upi' && (
          <form onSubmit={handleSubmit}>
            <div>
            <TextField sx={{ m: 1, minWidth: 430,marginLeft:0}}
              label="Amount"
              variant="filled"
            //   fullWidth
              margin="normal"
              required
              defaultValue="$1000"
            //   value={formData.upi.amount}
              onChange={handleInputChange('amount')}
              InputProps={{
                readOnly: true,
              }}
            />
            </div>
            <div>
            <TextField sx={{ m: 1, minWidth: 430,marginLeft:0}}
              label="Name"
              variant="outlined"
            //   fullWidth
              margin="normal"
              required
              value={formData.upi.name}
              onChange={handleInputChange('name')}
            />
            </div>
            <div>
            <TextField sx={{ m: 1, minWidth: 430,marginLeft:0}}
              label="UPI ID"
              variant="outlined"
            //   fullWidth
              margin="normal"
              required
              value={formData.upi.upiId}
              onChange={handleInputChange('upiId')}
            />
            </div>

            
            
            {/* <Button type="submit" variant="contained" color="primary" fullWidth> */}
            <Link to='/animated'>
                <button className="custom-button" type="submit">Pay Now </button>
                </Link>
            {/* </Button> */}
          </form>
        )}
      </CardContent>
    </Card>
    </div>
    <Footer/>
    </>

  );
};

export default PaymentPage;
