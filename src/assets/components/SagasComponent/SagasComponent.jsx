import React, { useEffect, useState } from "react";
import "./SagaComponent.css";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import carga from "../../images/goku.gif";
import useSagas from "../../hooks/useSagas";
import FooterComponent from "../FooterComponent/FooterComponent";

const SagasComponent = () => {
  const {
    personajesu,
    navegar,
    logo,
    clase,
    loading
  } = useSagas()

  return (
    <div>
      <div className={`sagaHero ${clase}`}>
        <HeaderComponent />
        <div>
          <img className="logoSaga" src={logo} alt="" />
        </div>
      </div>
      <div className="listado">
        {loading ? (
          <div className="loading-container">
            <img src={carga} alt="Cargando..." className="loading-gif" />
            Cargando...
          </div>
        ) : (
          personajesu.map(
            ({ id, name, image, race, planet, description, transformations }) => (
              <div key={id} className="parent">
                <div className="card">
                  <div className="content-box">
                    <span className="card-title">{name}</span>
                    <p className="card-content">
                      <div>
                        <img className="personage" src={image} alt={name} />
                      </div>
                      Raza: {race} | Planeta: {planet}
                    </p>
                    <span
                      className="see-more"
                      onClick={() => {
                        const persona = {
                          id: id,
                          nombre: name,
                          imagen: image,
                          raza: race,
                          planeta: planet,
                          descripcion: description,
                          transformaciones: transformations,
                        };
                        sessionStorage.setItem("persona", JSON.stringify(persona));
                        navegar();
                      }}
                    >
                      Ver más
                    </span>
                  </div>
                </div>
              </div>
            )
          )
        )}
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default SagasComponent;
