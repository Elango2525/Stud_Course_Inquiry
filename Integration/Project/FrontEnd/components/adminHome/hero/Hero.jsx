import React from "react";
import Heading from "../../admin/heading/Heading";
import "./Hero.css";
import { Link } from "react-router-dom";
import Scroll from "../../../Scroll";
import Header from "../../admin/header/Header";
import Footer from "../../admin/footer/Footer"

const Hero = () => {
  return (
    <>
    <Header/>
      <div><Scroll/></div>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            {/* Updated heading and subtitle */}
            <Heading subtitle='ADMIN PORTAL' title='Manage Your Education Platform' />

            {/* Updated main text */}
            <h2 id="typewriter-text">
              Empower Your Admin Skills, Streamline Education Management!
            </h2>

            <div className='button'>
              {/* Updated button text and link */}
              <Link to='/admin-dashboard'>
                <button className='primary-btn'>
                  GO TO DASHBOARD <i className='fa fa-long-arrow-alt-right'></i>
                </button>
              </Link>

              {/* You can add additional buttons if needed */}
              {/* <button>
                VIEW REPORTS <i className='fa fa-long-arrow-alt-right'></i>
              </button> */}
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
      <Footer/>
    </>
  );
};

export default Hero;
