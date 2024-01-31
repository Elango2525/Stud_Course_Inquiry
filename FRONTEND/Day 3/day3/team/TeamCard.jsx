import React from "react"
import { team } from "../../dummydata"

const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className='items shadow' key={val.id}>
          <div className='img'>
            <img src={val.cover} alt='' />
            <div className='overlay'>
              <i className='fab fa-facebook-f icon'><img src="./images/team/linkedin.webp" style={{borderRadius:'20px'}}></img></i>
              <i className='fab fa-twitter icon'><img src="./images/team/github.webp" style={{borderRadius:'20px'}}></img></i>
              <i className='fab fa-instagram icon'><img src="./images/team/dribbble.webp" style={{borderRadius:'20px'}}></img></i>
              <i className='fab fa-tiktok icon'><img src="./images/team/twitter.webp" style={{borderRadius:'20px'}}></img></i>
            </div>
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default TeamCard
