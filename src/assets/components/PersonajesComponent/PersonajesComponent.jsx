import React, { useEffect, useState } from "react";
import "./PersonajesComponent.css";
import { useNavigate } from "react-router-dom";

const PersonajesComponent = () => {
  const [saga, setSaga] = useState("1");
  const [personajesu, setPersonajesu] = useState([]);
  const [url, setUrl] = useState("https://www.dragonballapi.com/dragonball/");
  const [modalData, setModalData] = useState(null);

  const funcionAsn = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPersonajesu(data);
  };

  useEffect(() => {
    switch (saga) {
      case "1":
        setUrl("https://www.dragonballapi.com/dragonball/");
        break;
      case "z":
        setUrl("https://www.dragonballapi.com/dragonballz/");
        break;
      case "gt":
        setUrl("https://www.dragonballapi.com/dragonballgt/");
        break;
      case "s":
        setUrl("https://www.dragonballapi.com/dragonballsuper/");
        break;
      default:
        break;
    }
  }, [saga]);

  useEffect(() => {
    funcionAsn();
  }, [url]);

  const handleOpenModal = (personaje) => {
    setModalData(personaje);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  const navigate = useNavigate();
  const navegar = () =>{
    navigate("/personaje")
  } 

  return (
    <section id="personajes">
      <div className="barraSaga">
        <select className="saga" name="sagaSelect" onChange={(e) => setSaga(e.target.value)}>
          <option value="1">Dragon Ball</option>
          <option value="z">Dragon Ball Z</option>
          <option value="gt">Dragon Ball GT</option>
          <option value="s">Dragon Ball Super</option>
        </select>
      </div>
      <div className="listado">
        {personajesu.map(({ id, name, image, race, planet, description, transformations }) => (
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
                <span className="see-more" onClick={()=>{
                  const persona = {
                    id : id,
                    nombre : name,
                    imagen : image,
                    raza : race,
                    planeta : planet,
                    descripcion : description,
                    transformaciones : transformations
                  }
                  sessionStorage.setItem("persona", JSON.stringify(persona))
                  navegar()
                }}>
                  Ver más
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalData && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={handleCloseModal}>&times;</span>
            <h2>{modalData.name}</h2>
            <img src={modalData.image} alt={modalData.name} className="modal-image" />
            <p>{modalData.description}</p>
            <p>Raza: {modalData.race}</p>
            <p>Planeta: {modalData.planet}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PersonajesComponent;
