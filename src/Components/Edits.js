import React from 'react'
import ava1 from '.././images/ava1.png'
import ava2 from '.././images/ava2.jpg'
import gd1 from '.././images/gd1.jpg'
import gd2 from '.././images/gd2.jpg'
import sum1 from '.././images/sum1.png'
import sum2 from '.././images/sum2.jpg'
import weez1 from '.././images/weez1.png'
import weez2 from '.././images/weez2.jpg'
import banner from '.././images/banner.png';

export const Edits = () => {
  return (
    <div>
      <img style={{position:"relative", bottom: -750, width:"100%", height:"100%"}}src={banner} alt=""/>

      <h2 style={{position:"relative", left:25, bottom:400, color:"white"}}>I sometimes edit myself and friends onto covers of albums I like. Here are a few. </h2>
      <img style={{position:"absolute", left: 25, bottom: 250, width:300, height:300}}src={weez1} alt=""/>
      <img style={{position:"absolute", left: 375, bottom: 250, width:300, height:300}}src={weez2} alt=""/>

      <img style={{position:"absolute", left: 850, bottom: 250, width:300, height:300}}src={ava1} alt=""/>
      <img style={{position:"absolute", left: 1200, bottom: 250, width:300, height:300}}src={ava2} alt=""/>

      <img style={{position:"absolute", left: 25, bottom: -100, width:300, height:300}}src={gd1} alt=""/>
      <img style={{position:"absolute", left: 375, bottom: -100, width:300, height:300}}src={gd2} alt=""/>

      <img style={{position:"absolute", left: 850, bottom: -100, width:300, height:300}}src={sum1} alt=""/>
      <img style={{position:"absolute", left: 1200, bottom: -100, width:300, height:300}}src={sum2} alt=""/>

      
    </div>
  )
}