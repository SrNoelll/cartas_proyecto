import React from 'react'
import "./InfoComponent.css"
const InfoComponent = ({persona}) => {
    console.log(persona.transformaciones)
  return (
    <div className='info'>
        <div className='descrip'>
            <div>
                Raza : {persona.raza}
            </div>
            <div>
                Planeta : {persona.planeta}
            </div>
            Transformaciones:
            <div className='transformaciones'>
            {persona.transformaciones.map((element)=>(
            <div>
                <p>{element.title}</p>
                <img className='imagenTrans' src={element.image} alt=""/>
            </div>
            ))}
            </div>
            
            <details>
                <summary>Descripción</summary>
                <p>{persona.descripcion}</p>
            </details>
            
        </div> 
    </div>
  )
}

export default InfoComponent
