import React from "react"
import { price } from "../../dummydata"

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className='items shadow' key={val.id}>
          <h4>{val.name}</h4>
          <h1 style={{color:'#526D82'}}>
            <span >$</span>
            {val.price}
          </h1>
          <p style={{color:'#27374D'}}><img src="../images/blog/tick1.webp" style={{width:'20px',height:'20px'}}/>{val.desc}</p>
          <p style={{color:'#27374D'}}><img src="../images/blog/tick1.webp" style={{width:'20px',height:'20px'}}/>{val.desc1}</p>
          <p style={{color:'#27374D'}}><img src="../images/blog/tick1.webp" style={{width:'20px',height:'20px'}}/>{val.desc2}</p>
          
          <button className='outline-btn'>BUY PLAN</button>
        </div>
      ))}
    </>
  )
}

export default PriceCard
