import React from 'react'
import HeroComponent from '../HeroComponent/HeroComponent'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import PersonajesComponent from '../PersonajesComponent/PersonajesComponent'

const InicioComponent = () => {
  sessionStorage.clear()
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <HeroComponent></HeroComponent>
      <PersonajesComponent></PersonajesComponent>
    </>
  )
}

export default InicioComponent
