// import React from "react"
import { useLocation } from "react-router-dom"
// import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@mui/material'

const Back = ({ title }) => {
  const location = useLocation();

  var items = [
    {   
        url:"/images/bg2.webp"
      },
      {
        
        url:"/images/bg1.webp"
    },
      {
       
        url:"../../../../public/images/coursela.webp"
    }
]

  return (
    <>
      <section >
        {/* <img src={title} />
        <img src="../../../../public/images/coursess.webp" style={{width:'15%', justifyContent:'center'}}/>
      <Carousel autoPlay="true" duration={200} animation="slide" height={630}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel> */}
      </section>
    </>
  )
}

function Item(props)
{
    return (
        <div>
          <img src={props.item.url} style={{width:"100%"}}/>
        </div>
    )
}

export default Back
