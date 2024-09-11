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
                <FlipBox logo={'/Images/CSS3_HTML5.png'}headingTag={'h1'} headingText={'HTML & CSS'} pTag={'p'} pText={'Crafting responsive, cross-browser compatible layouts with a focus on accessibility.'} />
                <FlipBox logo={'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png'} headingTag={'h1'} headingText={'State Management'} pTag={'p'} pText={'Experience with Redux and Context API for handling application state.'} />
                <FlipBox logo={'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg'} headingTag={'h1'} headingText={'Version Control'} pTag={'p'} pText={'Proficient in Git for managing code versions and collaborating with teams.'} />
                <FlipBox logo={'https://upload.wikimedia.org/wikipedia/commons/f/f5/Rest-api-icon.svg'} headingTag={'h1'} headingText={'API Integration'} pTag={'p'} pText={'Integrating RESTful APIs to connect front-end applications with back-end services.'} />
            </div>
            {/* <h3>Key Skills</h3>

            <p>
                <h5><img src='/Images/react_js.png' alt='react' title='react'/>ReactJS:</h5> Building interactive user interfaces and single-page applications.
                <h5><img src='/Images/javascript.png' alt='js' title='js'/>JavaScript (ES6+):</h5> Writing modern, efficient, and maintainable JavaScript code.
                <h5>HTML & CSS:</h5> Crafting responsive, cross-browser compatible layouts with a focus on accessibility.
                <h5>State Management:</h5> Experience with Redux and Context API for handling application state.
                <h5>Version Control:</h5> Proficient in Git for managing code versions and collaborating with teams.
                <h5>API Integration:</h5> Integrating RESTful APIs to connect front-end applications with back-end services.
            </p>
            <h3>Technologies:</h3>

            <p>
                <h5>Front-End:</h5> ReactJS, Redux, HTML5, CSS3, JavaScript (ES6+), Typescript.
                <h5>Tools:</h5> Git, Webpack, Babel, NPM/Yarn.
                <h5>Methodologies:</h5> Agile development, responsive design, RESTful API.
            </p> */}


        </div>
    )
}

export default SkillAndTech
