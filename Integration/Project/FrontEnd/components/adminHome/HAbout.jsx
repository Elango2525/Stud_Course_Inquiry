import React from "react"
import OnlineCourses from "../allcourses/OnlineCourses"
import Heading from "../admin/heading/Heading"
import "../allcourses/courses.css"
import { coursesCard } from "../../dummydata"
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom"
const HAbout = () => {
  return (
    <>
      <section className='homeAbout'>
        <div className='container'>
          <Heading subtitle='our courses' title='explore edutrackr&apos;s popular courses' />

          <div className='coursesCard'>
            {/* copy code form  coursesCard */}
            <div className='grid2'>
              {coursesCard.slice(0, 3).map((val) => (
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
                      <p>{val.courseDescription}</p>
                      {/* <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <label htmlFor=''>(5.0)</label>
                      </div> */}
                      <div className='details'>
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
                  {/* <div className='price'>
                    <h3>
                      {val.priceAll} / {val.pricePer}
                    </h3>
                  </div> */}
                  </div>
                  <div>
              <div style={{display:"flex", justifyContent:"space-between", marginBottom:"20px"}}>
              <button className='outline1-btn'>MAKE INQUIRY </button>
              <div>
                <div><Rating name="read-only" value={4} readOnly /></div>
                <div><h4 style={{textDecoration:'underline',color:'#3E432E'}}>3.4k reviews</h4></div>
              </div>
              </div>
              <button className='outline-btn'>ENROLL NOW </button>
              </div>
            </div>
              
              ))}
            </div>
          </div>
          <Link to='/courses'>
          <button className='outline2-btn'>EXPLORE COURSES</button>
          </Link>         
        </div>
        <OnlineCourses />
      </section>
    </>
  )
}

export default HAbout
