
import React, { useState } from 'react';
import './Header.css';
import Footer from '../Footer/Footer';

function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const handleScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(targetId);
            window.history.pushState(null, null, `${targetId}`);
        }
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className='header'>
            <div className="row header__inner">
                <div className="header__logo">
                    <a className="logo" href="/"  title='logo' onClick={handleScroll}>
                        <img src="suitcase.png" alt="Homepage" title='logo'/>
                    </a>
                </div>
                <button className="header__hamburger" onClick={toggleSidebar}>
                    ☰
                </button>
                <nav className={`header__nav ${isSidebarOpen ? 'open' : ''}`}>
                    <div className='nav-header'>
                        <div className="header-nav">
                            <a className='resume' href="Resume/Milind_Khariwale_Resume 1.pdf" download="Milind_Resume.pdf" title='Resume' >Resume</a>
                        </div>
                        <button className="header__close" onClick={toggleSidebar}>
                            &times;
                        </button>
                    </div>
                    <ul className='header-mobile'>
                        <li><a href="/about" className={activeSection === 'about' ? 'active' : ''} onClick={(e)=>{handleScroll(e);toggleSidebar()}}   title='about'>About</a></li>
                        <li><a href="/skill-tech" className={activeSection === 'skill-tech' ? 'active' : ''} onClick={(e)=>{handleScroll(e);toggleSidebar()}}   title='skill-tech'>Skills and Technologies</a></li>
                        <li><a href="/projects" className={activeSection === 'projects' ? 'active' : ''} onClick={(e)=>{handleScroll(e);toggleSidebar()}}   title='projects'>Projects</a></li>
                    </ul>
                    {/* {isSidebarOpen && <Footer/>} */}
                </nav>
                <ul className='header-desktop'>
                    <li><a href="/about" className={activeSection === 'about' ? 'active' : ''} onClick={handleScroll}  title='about'>About</a></li>
                    <li><a href="/skill-tech" className={activeSection === 'skill-tech' ? 'active' : ''} onClick={handleScroll}  title='skill-tech'>Skills and Technologies</a></li>
                    <li><a href="/projects" className={activeSection === 'projects' ? 'active' : ''} onClick={handleScroll}  title='projects'>Projects</a></li>
                </ul>
                <div className="header__cta">
                    <a href="Resume/Milind_Khariwale_Resume 1.pdf" download="Milind_Resume.pdf"  title='resume'>Resume</a>
                </div>
            </div>
        </header>
    );
}

export default Header;

