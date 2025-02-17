import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import HeroPersonajeComponent from '../HeroPersonaje/HeroPersonajeComponent'
import "./PersonajeComponent.css"
import InfoComponent from '../InfoComponent/InfoComponent'

const PersonajeComponent = () => {
  const persona = JSON.parse(sessionStorage.getItem("persona"))
  console.log(persona["nombre"])
  return (
    
    <div>
      <div className='cabeceraPer'>
        <HeaderComponent></HeaderComponent>
        <HeroPersonajeComponent persona={persona}></HeroPersonajeComponent>
      </div>
      <InfoComponent persona={persona}></InfoComponent>
    </div>
  )
}

export default PersonajeComponent
