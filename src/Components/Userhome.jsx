// Import React and necessary styles
import  { useState } from 'react';
import './../Styles/Userhome.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const StyledAppName = styled.span`
  font-family: 'Pacifico', cursive;
  font-weight: 400;
  font-style: normal;
  /* Add any additional styles like color, size, etc. */
`;

const DropdownContainer = styled.div`
  @media (max-width: 768px) {
    display: ${props => props.isVisible ? 'block' : 'none'};
  }
`;
const MobileMenuIcon = styled.div`
  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: block;
    text-align: right;
    padding: 10px;
    cursor: pointer;
  }
`;





const Userhome = () => {
  // State to track the selected values for each dropdown
  const [dropdownValues, setDropdownValues] = useState({
    dropdown1: '',
    dropdown2: '',
    dropdown3: '',
    dropdown4: '',
  });

  // Function to handle dropdown value changes
  const handleDropdownChange = (dropdownName, selectedValue) => {
    setDropdownValues((prevValues) => ({
      ...prevValues,
      [dropdownName]: selectedValue,
    }));
  };

  return (
    <div className="homepage">
      <header>
        <div className="header-content">
        <div className="head-content">
          
        <StyledAppName className="manager-login">EduTrackr</StyledAppName>
          </div>
          {/* Dropdown 1 */}
          <DropdownContainer className="dropdown">
            <button className="dropdown-btns">{dropdownValues.dropdown1 || 'Products'}</button>
            <div className="dropdown-content">
            <Link to="/add" className='link'>
              <div onClick={() => handleDropdownChange('Product', 'Add Product')}>Add Product</div>
              </Link>
              <div onClick={() => handleDropdownChange('Product', 'Edit Product')}>Edit Product</div>
              <div onClick={() => handleDropdownChange('Product', 'Remove Product')}>Remove Product</div>
              <Link to='/producttable'>
              <div onClick={() => handleDropdownChange('Product', 'View Product')}>View Product</div></Link>
            </div>
          </DropdownContainer>

          {/* Dropdown 2 */}
          <DropdownContainer className="dropdown">
            <button className="dropdown-btns">{dropdownValues.dropdown2 || 'Stock Analysis'}</button>
           
            <div className="dropdown-content"> <Link to='/salestrends'>
                <div onClick={() => handleDropdownChange('dropdown2', 'Sales trends')}>Sales trends</div></Link>
              <div onClick={() => handleDropdownChange('dropdown2', 'Stock History')}>Stock History</div>
              <Link to='/reporting'>
              <div onClick={() => handleDropdownChange('dropdown2', 'Generate report')}>Generate report</div></Link>
              {/* <div onClick={() => handleDropdownChange('dropdown2', 'Option 4')}>Option 4</div> */}
            </div>
          </DropdownContainer>

          <DropdownContainer className="dropdown">
            <button className="dropdown-btns">{dropdownValues.dropdown2 || 'Stock Level'}</button>
            <div className="dropdown-content">
                <Link to='/lowstock'>
              <div onClick={() => handleDropdownChange('dropdown2', 'Option 1')}>Low Stock</div></Link>
              <div onClick={() => handleDropdownChange('dropdown2', 'Option 2')}>Old Stock</div>
              {/* <div onClick={() => handleDropdownChange('dropdown2', 'Option 3')}>Option 3</div>
              <div onClick={() => handleDropdownChange('dropdown2', 'Option 4')}>Option 4</div> */}
            </div>
          </DropdownContainer>

          {/* Dropdown 3 */}
          <DropdownContainer className="dropdown">
            <button className="dropdown-btns">{dropdownValues.dropdown3 || 'Dashboard'}</button>
            <div className="dropdown-content">
              <Link to='/profile'>
              <div onClick={() => handleDropdownChange('dropdown3', 'Profile')}>Profile</div></Link>
              <Link to='/'>
              <div onClick={() => handleDropdownChange('dropdown3', 'Logout')}>Logout</div></Link>
              {/* <div onClick={() => handleDropdownChange('dropdown3', 'Option 3')}>Option 3</div>
              <div onClick={() => handleDropdownChange('dropdown3', 'Option 4')}>Option 4</div> */}
            </div>
          </DropdownContainer>
           {/* Mobile Menu Icon */}
           <MobileMenuIcon>
            {/* Add an icon or button for the mobile menu */}
            {/* For example, you can use a hamburger icon */}
            <div className='menu'>&#9776;</div>
          </MobileMenuIcon>
        </div>
      </header>

      <div className="main-content" style={{ marginTop: '730px' }}>
      
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showThumbs={false}
          className="carousel"
          style={{ maxWidth: '100%', height: 'auto' }}
        >
  <div>
    <img
      src="https://echo360.com/wp-content/uploads/2015/02/Students_Outside_in_Study_Group.jpg"
      alt="Slide 1"
      style={{ width: '100%', height: 'auto' }}
    />
  </div>
  <div>
    <img
      src="https://getwallpapers.com/wallpaper/full/a/b/4/891455-wallpaper-of-study-2560x1440-for-hd-1080p.jpg"
      alt="Slide 2"
      style={{ width: '100%', height: 'auto' }}
    />
  </div>
  <div>
    <img
      src="https://www.ox.ac.uk/sites/files/oxford/field/field_image_main/learning.jpg"
      alt="Slide 3"
      style={{ width: '100%', height: 'auto' }}
    />
  </div>
  </Carousel>
  <div><br></br>
  <div className="CourseGrid">
          {/* Course 1 */}
          <div className="CourseCard">
            <img className="CourseImage" src="https://fresheropenings.com/wp-content/uploads/2020/08/selection-064-500x500-java.png" alt="Course 1" />
            <div className="CourseDetails">
              <h3>Java Programming</h3>
              <p>Course 1 Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Price: $99.99</p>
              <button>Enroll Now</button>
              <button>Make an Enquiry</button>
            </div>
          </div>

          {/* Course 2 */}
          <div className="CourseCard">
            <img className="CourseImage" src="course2.jpg" alt="Course 2" />
            <div className="CourseDetails">
              <h3>Course 2 Name</h3>
              <p>Course 2 Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Price: $129.99</p>
              <button>Enroll Now</button>
              <button>Make an Enquiry</button>
            </div>
          </div>
         
          </div>
          {/* Add more course cards as needed */}
        </div>
      

        
      </div>
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          {/* Social Media */}
          <div className="footer-option">
            <span className="footer-heading">Follow Us:</span>
            <div className="social-media-icons">
              <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-option">
            <span className="footer-heading">Subscribe to Our Newsletter:</span>
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-btn">Subscribe</button>
          </div>

          {/* Contact Information */}
          <div className="footer-option">
            <span className="footer-heading">Contact Us:</span>
            <div className="contact-details">
              <p>Phone: xxx-xxx-xxxx</p>
              <p>Address: 123 Main St, Cityville</p>
              <p>Fax: xxx-xxx-xxxx</p>
            </div>
          </div>
         
        </div><div className="copyright">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </div>
      </footer>
    </div>
  );
};


export default Userhome;
