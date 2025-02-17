import React from 'react'
import "./SagaComponent.css"
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import logoZ from "../../images/DBZ.png"
const SagasComponent = () => {
  return (
    <div>
      <div className='sagaHero z'>
      <HeaderComponent></HeaderComponent>
      <div>
        <img className='logoSaga' src={logoZ} alt="" />
      </div>
      </div>
    En Construccion....

    </div>
  )
}

export default SagasComponent
