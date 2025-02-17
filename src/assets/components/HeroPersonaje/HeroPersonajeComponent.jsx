import React from 'react'
import "./HeroPersonajeComponent.css"
const HeroPersonajeComponent = ({persona}) => {
  return (
    <div>
      <div className='heroPer'>
        <h1>{persona.nombre}</h1>
        <img src={persona.imagen} alt=""/>
      </div>
    </div>
  )
}

export default HeroPersonajeComponent
