import React from 'react'
import logo from "../../images/logo2.webp"
import DB1 from "../../images/DB1.webp"
import DBS from "../../images/DBS.webp"
import DBZ from "../../images/DBZ.png"
import DBGT from "../../images/DBGT.webp"
import "./HeaderComponent.css"
const HeaderComponent = () => {
  return (
    <header>
      <div className='cabecera'>
        <a href="/"><img className='imgCatego' src={logo} alt="" /></a>
        <a href="/sagas" onClick={()=>{
          sessionStorage.setItem("saga", "DGB")
        }}><img className='imgCatego' src={DB1} alt="" /></a>
        <a href="/sagas" onClick={()=>{
          sessionStorage.setItem("saga", "DGBZ")
        }}><img className='imgCatego' src={DBZ} alt="" /></a>
        <a href="/sagas" onClick={()=>{
          sessionStorage.setItem("saga", "DGBS")
        }}><img className='imgCatego' src={DBS} alt="" /></a>
        <a href="/sagas" onClick={()=>{
          sessionStorage.setItem("saga", "DGBGT")
        }}><img className='imgCatego' src={DBGT} alt="" /></a>
      </div>
    </header>
  )
}

export default HeaderComponent
