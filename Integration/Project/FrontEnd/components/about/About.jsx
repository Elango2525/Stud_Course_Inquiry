import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import AboutCard1 from "./AboutCard1"
import InquiryView from "./InquiryView"
import Scroll from "../../Scroll"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
const About = () => {
  return (
    <>
      <Back title='About Us' />
      <Scroll/>
      <InquiryView/>
      <AboutCard1 />
      
    </>
  )
}

export default About
