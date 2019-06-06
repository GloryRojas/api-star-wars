import React from 'react';
import './App.css';
import { Card } from "./Card";
import { H1Sw, PSw } from "./utils/utils";

const Inicio = () => {
  return(
    <div>
      <H1Sw size="120px" weigth="600">STAR WARS</H1Sw>
      <H1Sw >PERSONAJES</H1Sw>
      <PSw>RESULTADOS</PSw>
      <Card />
    </div>
  )
};

export default Inicio;