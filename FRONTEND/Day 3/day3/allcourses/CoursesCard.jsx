
import "./courses.css";
import {Link} from "react-router-dom";

import Rating from '@mui/material/Rating';
import { coursesCard } from "../../dummydata"

const CoursesCard = () => {
  return (
    <>
      <section className='coursesCard'>
        
        
        <div className='container grid2'>
          {coursesCard.map((val) => 
          (
            <div className='items' key={val.id} style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
              <div>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='details'>
                    <p style={{fontSize:'15px'}}>{val.courseDescription}</p>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={details.dcover} style={{width:'30px',height:'30px'}}alt='' />
                          </div>
                          <h4 style={{paddingRight:'8px'}}>Instructor : </h4>
                          <div className='para'>
                            <h4 style={{textDecoration:'underline'}}>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                        
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3 style={{color:'#0F3460'}}>
                ${val.priceAll}Total package / ${val.pricePer} per month
                </h3>
              </div>
                </div>
              <div>
              <div style={{display:"flex", justifyContent:"space-between", marginBottom:"20px"}}>
                <Link to='/inquiryform'>
                  <button className='outline1-btn'>MAKE INQUIRY</button>
                </Link>
              <div>
                <div><Rating name="read-only" value={4} readOnly /></div>
                <div><h4 style={{textDecoration:'underline',color:'#3E432E'}}>3.4k reviews</h4></div>
              </div>
              </div>
              <Link to='/admissionform'>
              <button className='outline-btn'>ENROLL NOW </button></Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard
