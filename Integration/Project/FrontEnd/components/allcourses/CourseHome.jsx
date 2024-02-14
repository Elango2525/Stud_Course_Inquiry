
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import Company from "./Company"
import Scroll from '../../Scroll'; 

const CourseHome = () => {
  return (
    <>
    <Scroll/>
      <Back title='' />
      <Company />
      <CoursesCard />
      <OnlineCourses />
    </>
  )
}

export default CourseHome
