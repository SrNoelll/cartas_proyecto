import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InicioComponent from '../components/InicioComponent/InicioComponent';
import PersonajeComponent from '../components/PersonajeComponent/PersonajeComponent';
import SagasComponent from '../components/SagasComponent/SagasComponent';


const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<InicioComponent></InicioComponent>} />
        <Route path="/personaje" element={<PersonajeComponent></PersonajeComponent>} />
        <Route path="/sagas" element={<SagasComponent></SagasComponent>} />
      </Routes>
  );
};

export default AppRouter;
