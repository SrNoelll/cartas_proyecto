import React from 'react'
import "./HeroComponent.css"
import logo from "../../images/logoH.png"
import { FaArrowDown } from "react-icons/fa";

const HeroComponent = () => {
  return (
    <div>
      <div className='hero'>
        <div className='contenidoHero'>
            <img className='titulo' src={logo} alt="KAMEHOUSE.NET" />
            <a className='flecha' href="#personajes"><FaArrowDown /></a>
        </div>
      </div>
    </div>
  )
}

export default HeroComponent
