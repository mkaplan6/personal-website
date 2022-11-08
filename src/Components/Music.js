import React from 'react'
import banner from '.././images/banner.png';

export const Music = () => {
  return (
    <div>
      <iframe src='https://www.youtube.com/embed/SPdjqo2h0ZA'
      frameborder='0'
      allow='autoplay; encrypted-media'
      allowfullscreen
      title='video'
      width="640"
      height="360"
      
      
      />
      <iframe src='https://www.youtube.com/embed/SJc63TQAO-A'
      frameborder='0'
      allow='autoplay; encrypted-media'
      allowfullscreen
      title='video'
      width="640"
      height="360"
      />

      <iframe src='https://www.youtube.com/embed/o-atBCp8T8c'
      frameborder='0'
      allow='autoplay; encrypted-media'
      allowfullscreen
      title='video'
      width="640"
      height="360"
      />

      <h2 style={{position:"absolute", left: 680, bottom: 100, color:"white"}}>Here's a few videos of The Dads and some solo songs.</h2>
      <img style={{position:"relative", bottom: -100, width:"100%", height:"100%"}}src={banner} alt=""/>
    </div>
  )
}