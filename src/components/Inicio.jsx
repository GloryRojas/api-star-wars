import React from 'react';
import { Card } from "../utils/Card";
import { H1Sw } from "../utils/utils";

const Inicio = () => {
  return(
    <div className="App">
      <H1Sw size="110px" weigth="600">STAR WARS</H1Sw>
      <H1Sw>PERSONAJES</H1Sw>
      <Card />
    </div>
  )
};

export default Inicio;