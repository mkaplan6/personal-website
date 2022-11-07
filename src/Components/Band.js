import React from 'react'
import banner from '.././images/banner.png';

export const Band = () => {
  return (
    <div>
      <h2 style={{position:"relative", left:50, bottom:300, color:"white"}}>band</h2>
      <img style={{position:"relative", bottom: -400, width:"100%", height:"100%"}}src={banner} alt=""/>
    </div>
  )
}
