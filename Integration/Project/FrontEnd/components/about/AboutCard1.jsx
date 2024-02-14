import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout1 } from "../../dummydata"
// import Awrapper from "./Awrapper"
import Footer from "../common/footer/Footer"
const AboutCard1 = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row' style={{paddingTop:"80px", minHeight:"100vh"}}>
            <img src='./images/dis.webp' alt='' />
          </div>
          <div className='right row' style={{paddingTop:"125px"}}>
            <Heading subtitle='EDUTRACKR LEARNING' title='Important Guidelines' />
            <div className='items'>
              {homeAbout1.map((val) => {
                return (
                  <div className='item flexSB' key={val.id}>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer/>
      {/* <Awrapper /> */}
    </>
  )
}

export default AboutCard1
