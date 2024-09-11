import React, { useEffect, useRef } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Aboutme from "./Components/AboutMe/AboutMe";
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import SkillAndTech from './Components/SkillAndTech/SkillAndTech';
import Projects from './Components/Projects/Projects';
import ScrollToTopButton from './Components/ScrollToTopButton/ScrollToTopButton';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const sections = [
      { id: '/', ref: homeRef },
      { id: 'about', ref: aboutRef },
      { id: 'skill-tech', ref: skillRef },
      { id: 'projects', ref: projectsRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.history.pushState(null, '', `${entry.target.id}`);
          }
        });
      },  
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    sections.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.id = id; // Set the id dynamically
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="app vertical-scroll-container">
      <Header/>
      <div ref={homeRef}><Home/></div>
      <div ref={aboutRef}><Aboutme/></div>
      <div ref={skillRef}><SkillAndTech/></div>
      <div ref={projectsRef}><Projects/></div>
      <div><Footer/></div>
      {/* <ScrollToTopButton /> */}
    </div>
  );
}

export default App;
