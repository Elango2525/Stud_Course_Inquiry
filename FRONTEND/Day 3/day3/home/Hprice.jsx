import React from "react"
import Heading from "../common/heading/Heading"
import PriceCard from "../pricing/PriceCard"
import Footer from "../common/footer/Footer"
const Hprice = () => {
  return (
    <>
      <section className='hprice padding'>
        <Heading subtitle='Affordable Packages' title='Value plans & Packages' />
        <div className='price container grid'>
          <PriceCard />
        </div>
      </section>
        <Footer/>
    </>
  )
}

export default Hprice
