import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import AnimatedImage from "./components/allcourses/AnimatedImage"
import AdmissionForm from "./components/allcourses/ApplicationForm"
import PaymentForm from "./components/allcourses/PaymentForm"
import InquiryForm from "./components/allcourses/InquiryForm"
import Payment from "./components/payment/Payment"
import Login from "./components/Login"
import Signup from "./Signup"
import CourseDetail from "./components/allcourses/CourseDetail"
import HomeAdmin from "./components/adminHome/Home"
import Dashboard from "./components/adminNew/dashboard"
import AdmissionTable from "./components/adminNav/AdmissionDetails"
import PaymentDetails from "./components/adminNav/PaymentDetails"
import InquiryAdmin from "./components/adminNav/InquiryAdmin"
import AddCourses from "./components/adminNav/AddCourses"
function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        {/* <HeaderAdmin/> */}
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/adminHome' element={<HomeAdmin/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/courses' element={<CourseHome/>} />
          <Route exact path='/team' element={<Team/>} />
          <Route exact path='/pricing' element={<Pricing/>} />
          <Route exact path='/journal' element={<Blog/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/admissionform' element={<AdmissionForm/>} />
          <Route exact path='/paymentform' element={<PaymentForm/>} />
          <Route exact path='/animated' element={<AnimatedImage/>} />
          <Route exact path='/inquiryform' element={<InquiryForm/>} />
          <Route exact path='/payment' element={<Payment/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/signup' element={<Signup/>} />
          <Route exact path='/coursedetails' element={<CourseDetail/>} />
          <Route exact path='/dashboard' element={<Dashboard/>} />
          <Route exact path='/admissiondetails' element={<AdmissionTable/>} />
          <Route exact path='/paymentdetails' element={<PaymentDetails/>} />
          <Route exact path='/inquireadmin' element={<InquiryAdmin/>} />
          <Route exact path='/addcourses' element={<AddCourses/>} />
          {/* <Route exact path='/admindashboard' element={<Dashboard/>} /> */}
          
        </Routes>
        {/* <Footer /> */}
        {/* <FooterAdmin /> */}
      </Router>
    </>
  )
}

export default App
