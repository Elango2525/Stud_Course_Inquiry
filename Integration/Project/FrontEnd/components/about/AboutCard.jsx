import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
// import Awrapper from "./Awrapper"
import Scroll from "../../Scroll"
const AboutCard = () => {
  return (
    <>
    <Scroll/>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row' style={{paddingTop:"80px", minHeight:"100vh"}}>
            <img src='./images/about.webp' alt='' />
          </div>
          <div className='right row' style={{paddingTop:"125px"}}>
            <Heading subtitle='EDUTRACKR LEARNING' title='Elite, Enroll, Excel!' />
            <div className='items'>
              {homeAbout.map((val) => {
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
      {/* <Awrapper /> */}
    </>
  )
}

export default AboutCard
