import React, { useState } from 'react';
import './App.css';
import { Card } from "./Card";
import { H1Sw } from "./utils/utils";
import Personaje from "./Personaje";

const Inicio = () => {
  const [pers, setPers] = useState(null);

  const sendPerson = (item) => {
      setPers(item);
  };

  return(
    <div>
      <H1Sw size="120px" weigth="600">STAR WARS</H1Sw>
      <H1Sw >PERSONAJES</H1Sw>
      <Card sendPerson={sendPerson}/>
      {pers ? <Personaje personaje={pers}/>: ""}
    </div>
  )
};

export default Inicio;