import React from "react"
import Back from "../common/back/Back"
// import TeamCard from "./TeamCard"
// import "./team.css"
// import Awrapper from "../about/Awrapper"
import "../about/about.css"
import PaymentHistoryPage from "./PaymentHistoryPage"
import Scroll from "../../Scroll"
import Footer from "../common/footer/Footer"
import Header from "../common/header/Header"
const Payment = () => {
  return (
    <>
    <Header/>
      <Back title='/images/coursess.webp' />
      <section className='team padding'>
        <div className='container'>
        <Scroll/>
          <PaymentHistoryPage />
        </div>
      </section>
      <Footer/>
      {/* <Awrapper /> */}
    </>
  )
}

export default Payment
