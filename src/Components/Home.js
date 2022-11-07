import React from 'react'
import pfp from '.././images/pfp.jpg';
import banner from '.././images/banner.png';

export const Home = () => {
  return (
    <div>
      <img style={{position:"relative", bottom: -400, width:"100%", height:"100%"}}src={banner} alt=""/>
      <img style={{position:"absolute", left: 25, bottom: 250, width:255.75, height:337}}src={pfp} alt=""/>
      <h2 style={{position:"relative", left: 735, bottom:375, textAlign: 'left', color:"white"}}><b>About Me</b></h2>
      <p style={{position:"relative", left: 735, bottom:375, textAlign: 'left', color:"white"}}>
        Hey! My name is Malcolm and I'm a student of Computer Science and Anthropology at UIUC. <br></br>
        "What a strange combination of fields," you're probably thinking. I agree, but at the same time <br></br>
        it's an awesome discipline that I can't praise enough. Through it, students gain the same <br></br>
        core knowledge of computer science as full CS majors as well as a strong background in the <br></br>
        humanities to provide a unique perspective on technological challenges. I think the most important<br></br>
        part of creating technology is making sure it is as user-friendly and helpful as possible. <br></br>
        My interests include software engineering, computer-human interaction, web design, UI/UX design,<br></br>
        and game design. <br></br>
        <br></br>
        Outside of class, I play drums in a rock band called "The Dads" (videos on the Misc tab!) I love all kinds <br></br>
        of pop punk and alternative rock music, my favorite bands being blink-182, Angels and Airwaves, <br></br>
        and Sum 41. I'm also huge fan of hard video games like Dark Souls and Sekiro and I have a YouTube <br></br>
        channel where I post memes I create with Sony Vegas and Photoshop. <br></br>
      </p>
    </div>
  )
}
