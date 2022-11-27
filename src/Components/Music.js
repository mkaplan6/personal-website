import React from 'react'
import banner from '.././images/banner.png';

export const Music = () => {
  return (
    <div>
      <img style={{position:"absolute", bottom: -850, width:1545, height:"60%"}}src={banner} alt=""/>
      
      <iframe src='https://www.youtube.com/embed/SPdjqo2h0ZA'
      frameborder='0'
      allow='autoplay; encrypted-media'
      allowfullscreen
      title='video'
      width="768"
      height="432"
      position="relative"
      
      
      />
      <iframe src='https://www.youtube.com/embed/SJc63TQAO-A'
      frameborder='0'
      allow='autoplay; encrypted-media'
      allowfullscreen
      title='video2'
      width="768"
      height="432"
      position="relative"
      />

      <iframe src='https://www.youtube.com/embed/o-atBCp8T8c'
      frameborder='0'
      allow='autoplay; encrypted-media'
      allowfullscreen
      title='video3'
      width="768"
      height="432"
      position="relative"
      />

      <h2 style={{position:"relative", left: 850, bottom: 250, color:"white"}}>Here's a few videos of The Dads and some solo songs.</h2>
      
    </div>
  )
}