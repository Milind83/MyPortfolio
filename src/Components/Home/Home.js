import React from 'react'
import './Home.css'
function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <div className='home_intro'>
                    <h3>Hello i'm</h3>
                    <h1 className='name'>
                        Milind Khariwale
                    </h1>
                    <div class="content">
                        <ul class="content__container__list">
                            <li class="content__container__list__item">Web Developer</li>
                            <li class="content__container__list__item">Frontend Developer</li>
                            <li class="content__container__list__item">React Developer</li>
                        </ul>
                    </div>
                    <a href="mailto:milindkhariwale83@gmail.com?subject=Hire%20for%20React%20JS%20Developer&body=Hi,%20I%20am%20interested%20in%20hiring%20you%20for%20a%20React%20JS%20Developer%20position.%20Please%20provide%20more%20details." target="_blank" title='hireMe'>
                        <button className='hire_me' type="button"  title='hireMe'>Hire Me!</button>
                    </a>
                </div>
                <div className='home_image'>
                    <img src='Images/image_no_bg.png' alt='Me' title='milind'/>
                </div>
            </div>
        </div>
    )
}

export default Home
