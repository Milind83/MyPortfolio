import React from 'react'
import './SkillAndTech.css'
import FlipBox from '../FlipBox/FlipBox'
function SkillAndTech() {
    return (
        <div id="skill-tech" className='skill-tech'>
            <h2>Skill & Tech.</h2>
            <div className='skill-flipbox'>
                <FlipBox logo={'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'}headingTag={'h1'} headingText={'ReactJS'} pTag={'p'} pText={'Building interactive user interfaces and single-page applications.'} />
                <FlipBox logo={'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'} headingTag={'h1'} headingText={'JavaScript (ES6+)'} pTag={'p'} pText={' Writing modern, efficient, and maintainable JavaScript code.'} />
                <FlipBox logo={'/Images/CSS3 HTML5.png'}headingTag={'h1'} headingText={'HTML & CSS'} pTag={'p'} pText={'Crafting responsive, cross-browser compatible layouts with a focus on accessibility.'} />
                <FlipBox logo={'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png'} headingTag={'h1'} headingText={'State Management'} pTag={'p'} pText={'Experience with Redux and Context API for handling application state.'} />
                <FlipBox logo={'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg'} headingTag={'h1'} headingText={'Version Control'} pTag={'p'} pText={'Proficient in Git for managing code versions and collaborating with teams.'} />
                <FlipBox logo={'/Images/rest_api.png'} headingTag={'h1'} headingText={'API Integration'} pTag={'p'} pText={'Integrating RESTful APIs to connect front-end applications with back-end services.'} />
            </div>
        </div>
    )
}

export default SkillAndTech
