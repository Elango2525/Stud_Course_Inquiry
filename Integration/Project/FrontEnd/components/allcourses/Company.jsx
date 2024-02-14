
import "./courses.css"
import { online1 } from "../../dummydata"
import Heading from "../common/heading/Heading"
import Scroll from '../../Scroll'; 
import Header from "../common/header/Header";
const Company = () => {
  return (
    <>
    <Scroll/>
    <Header/>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='COURSES' title='Industry-Recognized Courses' />
          <h4 style={{marginBottom:'17px',display:'flex',fontWeight:'800',letterSpacing:'1.5px',color:'#1B4242',textTransform:'uppercase',fontSize:'20px'}}>PRESENTED BY</h4>
          <div className='content grid3'>
            {online1.map((val) => (
                <div className='box1' key={val.id}>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                
              </div>
            ))}
          </div>
            <h4 style={{marginTop:'45px',fontWeight:'400',letterSpacing:'1.5px',color:'#424769',fontSize:'20px'}}>Immerse yourself in courses recognized by top companies. Elevate your expertise and stay ahead in your field with our industry-backed educational offerings</h4>
        </div>
      </section>
    </>
  )
}

export default Company
