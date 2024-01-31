import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css"
import Profile from "./Profile";

const Header = () => {
  const [click, setClick] = useState(false)

  const [isLogin, setLogin] = useState(false)

  return (
    <>
      <header style={{top:0, position:"sticky", zIndex:"1000", backdropFilter:"blur(3px)", backgroundColor:"rgba(236, 236, 236, 0.29)"}}>
        <nav style={{display:"flex", justifyContent:"space-between", flexDirection:"row-reverse"}}>
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>HOME</Link>
            </li>
            <li>
              <Link to='/courses'>COURSES</Link>
            </li>
            <li>
              <Link to='/about'>INQUIRIES</Link>
            </li>
            <li>
              <Link to='/payment'>PAYMENT</Link>
            </li>
            {/* <li>
              <Link to='/pricing'>PRICING</Link>
            </li> */}
            <li>
              <Link to='/journal'>EVENTS</Link>
            </li>
            <li>
              <Link to='/team'>ABOUT US</Link>
            </li>
            <li>
              <Link to='/contact'>CONTACT</Link>
            </li>
            {
              isLogin ? <div className="profile-dropdown"><Profile/></div> : (<li>
                <Link to='/login'>SIGN IN</Link>
              </li>)
            }
          </ul>
          <div style={{padding:"5px"}}>
           <div className='logo'>
            <Link to='/'>
             <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPPt3_Gxr3BtiMHRgQNlmZKnhZE0nafRH4383iyCtoFhi6EH3Fc8JNnjAStW_Nw8kbSm4uRfdr5YrvfTgslCesLfznl3YRDkgXAkFmKZuSD52qSRSAJPBh5uxNAt4e2HXIEjGoQwbzL-YQQS-Nzw93chFn88Dgk_5D0scrgOKfK_dk0BLVWjlJVb5J4Vo/s320/LOGOx-removebg-preview.png'  style={{marginLeft:'-18px'}} alt='Academia Logo'/>
             </Link>
             <div id="logo-side-profile">
              {
                isLogin && <Profile/>
              }
             </div>
           </div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <FaTimes/> : <FaBars/>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
