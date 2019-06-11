import React from 'react';
import './App.css';
import { Card } from "./Card";
import { H1Sw } from "./utils/utils";

const Inicio = ({form}) => {
  
  return(
    <div>
      <H1Sw size="110px" weigth="600">STAR WARS</H1Sw>
      <H1Sw>PERSONAJES</H1Sw>
      <Card />
    </div>
  )
};

export default Inicio;