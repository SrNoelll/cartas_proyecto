import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'
import './FooterComponent.css'

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-name">
          <h2>Noel</h2>
        </div>
        <div className="footer-contact">
          <p><a href="https://noel-alarcon.netlify.app/" target="_blank" rel="noopener noreferrer">Mi Portfolio</a></p>
          <p><a href="mailto:srnoelll@proton.me">srnoelll@proton.me</a></p>
        </div>
        <div className="footer-socials">
          <a href="https://github.com/SrNoelll" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/noel-alar/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/noell.py/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.youtube.com/@noelClimb" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={30} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
