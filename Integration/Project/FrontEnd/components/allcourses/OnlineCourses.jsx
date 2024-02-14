
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"
import Footer from "../common/footer/Footer"
const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='' title='Browse Our Online Courses' />
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box' key={val.id}>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
       
    </>
  )
}

export default OnlineCourses
