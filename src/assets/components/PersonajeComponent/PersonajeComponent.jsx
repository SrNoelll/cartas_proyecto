import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import HeroPersonajeComponent from '../HeroPersonaje/HeroPersonajeComponent'
import "./PersonajeComponent.css"
import InfoComponent from '../InfoComponent/InfoComponent'
import FooterComponent from '../FooterComponent/FooterComponent'

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
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default PersonajeComponent
