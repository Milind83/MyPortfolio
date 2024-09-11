import React from 'react'
import './AboutMe.css'
function Aboutme() {
  return (
    <div id="about" className='about'>
      <div className='about_heading'>
        <h2>About Me</h2>
      </div>
      <div class="container" >
        <div class="container_image">
          <img src="/images/About-me.png" />
        </div><div class="about-container">
          <p>I am a dedicated and passionate React Developer with over 2 years of hands-on experience in building dynamic and responsive web applications. My journey in web development has equipped me with a solid understanding of front-end technologies and a deep expertise in ReactJS, allowing me to craft seamless user experiences.
          <h3>Professional Summary</h3>
          Throughout my career, I have been driven by a commitment to writing clean, efficient code and developing user-friendly interfaces. My professional experience spans various high-impact projects, where I have successfully contributed to enhancing the performance, scalability, and accessibility of web applications. I have a keen eye for detail and a problem-solving mindset, which helps me tackle challenges with creativity and precision.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Aboutme
