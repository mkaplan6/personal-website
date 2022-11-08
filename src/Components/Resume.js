import React, { Component } from 'react';
import banner from '.././images/banner.png';

 export const Resume = () => {
    return (
        <div className='Res'>
            <object data = 'https://drive.google.com/file/d/1KP24nYSE6rFhWTwRwW52c__jchzXZ3CR/view?usp=sharing' type="application/pdf" width="100%" height={100}>
            <iframe src="https://drive.google.com/file/d/1pY-DMFQXFt2kO4rcaN0cm5FMQxSvGtlw/preview" width="100%" height="1100" allow="autoplay"></iframe>
            </object>
            <img style={{position:"relative", bottom: -10, width:"100%", height:"100%"}}src={banner} alt=""/>
        </div>
    )
 } 

