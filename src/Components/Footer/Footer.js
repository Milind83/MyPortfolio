import React, { useEffect, useState } from 'react'
import './Footer.css'

function Footer() {
    const [whatsappLink, setWhatsappLink] = useState('');

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      setWhatsappLink('https://wa.me/7218812642');
    } else {
      setWhatsappLink('https://web.whatsapp.com/send?phone=7218812642');
    }
  }, []);
  return (
    <div className='footer'>
      <div className='follow-me'>
        <span className='folloe-me-text'>Follow me</span>
        <div className='social-icons'>
            <a href='https://github.com/Milind83' target='_blank' title='github-logo'>
              <img src='Images/icons8-git-24.png' alt='github' title='github-logo'></img>
            </a>
            <a href='https://www.linkedin.com/in/milind-khariwale-195827214' target='_blank' title='linkedin-logo'>
            <img src='Images/icons8-linkedin-24.png' alt='linkedin' title='linkedin-logo'></img>
            </a>
            <a href="https://www.instagram.com/_mickey_83" target="_blank"  title='insta-logo'>
            <img src='Images/icons8-instagram-24.png' alt='insta' title='insta-logo'></img>
            </a>
            <a href={whatsappLink ||'https://web.whatsapp.com/send?phone=7218812642'} target='_blank'  title='whatsapp-logo'>
            <img src='Images/icons8-whatsapp-24.png' alt='whatsapp' title='whatsapp-logo'></img>
            </a>
            <a href="https://www.facebook.com/yourprofile" target="_blank"  title='FB-logo'>
            <img src='Images/icons8-facebook-24.png' alt='FB' title='FB-logo'></img>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
