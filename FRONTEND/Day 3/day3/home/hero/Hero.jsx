import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css";
import {Link} from "react-router-dom";
import Scroll from "../../../Scroll"
import Header from "../../common/header/Header";

const Hero = () => {
  return (
    <>
    <Header/>
    <div><Scroll/></div>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO EDUTRACKR' title='Best Online Education Expertise' />
            <h2 id="typewriter-text"  >Unlock Your Potential, Enroll Today for a Journey of Knowledge and Growth!</h2>
            <div className='button'>
             <Link to='/courses'> <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button></Link>
              {/* <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button> */}
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
     
    </>
  )
}

export default Hero
