import React from "react"
import {Link} from "react-router-dom";
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'style={{marginTop:"20px"}}>
        <div className='container flexSB'>
          <div className='left row' >
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>The Joy Learning Begins here</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            
            {/* <i className='fa fa-paper-plane'></i> */}
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
          <div className='logo' >
          <Link to='/'>
    <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPPt3_Gxr3BtiMHRgQNlmZKnhZE0nafRH4383iyCtoFhi6EH3Fc8JNnjAStW_Nw8kbSm4uRfdr5YrvfTgslCesLfznl3YRDkgXAkFmKZuSD52qSRSAJPBh5uxNAt4e2HXIEjGoQwbzL-YQQS-Nzw93chFn88Dgk_5D0scrgOKfK_dk0BLVWjlJVb5J4Vo/s320/LOGOx-removebg-preview.png'  style={{marginLeft:'-18px'}} alt='Academia Logo'/>
    </Link></div>
            <span>ELITE, ENROLL, EXCEL</span>
            <p>Simplifying course enrollment with a user-friendly interface, diverse course options, and comprehensive resources for a seamless educational experience.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link' style={{justifyContent:"center", alignItems:"center", textAlign:"justify"}}>
            <h3>Explore</h3>
            <ul>
              <li ><Link to='/team' style={{color:"black"}}>About Us</Link></li>
              <li><Link to='/courses' style={{color:"black"}}>Services</Link></li>
              <li><Link to='/journal' style={{color:"black"}}>Events</Link></li>
              <li><Link to='/contact' style={{color:"black"}}>Contact us</Link></li>
              <li><Link to='/team' style={{color:"black"}}>FAQ</Link></li>
              
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
            <li><Link to='/contact' style={{color:"black"}}>Contact us</Link></li>
            <li><Link to='/pricing' style={{color:"black"}}>Packages</Link></li>
            <li><Link to='/contact' style={{color:"black"}}>Terms & Conditions</Link></li>
            <li><Link to='/contact' style={{color:"black"}}>Privacy policy</Link></li>
            <li><Link to='/contact' style={{color:"black"}}>Feedbacks</Link></li>
            </ul>
          </div>
          <div className='box' style={{display:"flex", flexDirection:"column", textAlign:"center", alignItems:"center"}}>
            <h3>Follow us</h3>
           
              <div className='flexSB' style={{margin:"5px"}}>
                <div className='img'>
                  <img src='../../../../public/images/instagram.webp' alt='' width={50}/>
                </div>
                
              </div>
              <div className='flexSB' style={{margin:"5px"}}>
                <div className='img'>
                  <img src='../../../../public/images/facebook.webp' alt='' width={50}/>
                </div>
                
              </div>
              <div className='flexSB' style={{margin:"5px"}}>
                <div className='img'>
                  <img src='../../../../public/images/twitter.webp' alt='' width={50}/>
                </div>
                
              </div>
          
          </div>
          <div className='box'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                106, Hall of Residence (Men), SKCET, Coimbatore 641008
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
            6384318848
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                elangovans@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved <i className='fa fa-heart'></i> 
        </p>
      </div>
    </>
  )
}

export default Footer
