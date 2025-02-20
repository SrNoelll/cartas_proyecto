import React, { useEffect, useState } from "react";
import logoZ from "../images/DBZ.png";
import logoDB from "../images/DB1.webp";
import logoS from "../images/DBS.webp";
import logoGT from "../images/DBGT.webp";
import carga from "../images/goku.gif";
import { useNavigate } from "react-router-dom";

const useSagas = () => {
const [saga, setSaga] = useState(sessionStorage.getItem("saga"));
  const [personajesu, setPersonajesu] = useState([]);
  const [url, setUrl] = useState("");
  const [logo, setLogo] = useState("");
  const [clase, setClase] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (saga) {
      switch (saga) {
        case "DGBZ":
          setUrl("https://www.dragonballapi.com/dragonballz/");
          setLogo(logoZ);
          setClase("z");
          break;
        case "DGBS":
          setUrl("https://www.dragonballapi.com/dragonballsuper/");
          setLogo(logoS);
          setClase("s");
          break;
        case "DGBGT":
          setUrl("https://www.dragonballapi.com/dragonballgt/");
          setLogo(logoGT);
          setClase("gt");
          break;
        case "DGB":
          setUrl("https://www.dragonballapi.com/dragonball/");
          setLogo(logoDB);
          setClase("clasic");
          break;
        default:
          setUrl("");
          break;
      }
    }
  }, [saga]);

  const funcionAsn = async () => {
    if (url) {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPersonajesu(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        console.log(personajesu)
        setLoading(false);
      }
    }
  };
  
  useEffect(() => {
    funcionAsn();
  }, [url]);

  const navigate = useNavigate();
  const navegar = () => {
    navigate("/personaje");
  };
  return {
    personajesu,
    navegar,
    logo,
    clase,
    loading
  }
    
}

export default useSagas
