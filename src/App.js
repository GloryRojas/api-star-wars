import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Personaje from "./components/Personaje";
import Rimac from "./components/Rimac";

export const App = () => {
  
  return(
    <Router basename={process.env.PUBLIC_URL}>
      <Route path="/" exact component={Inicio}></Route>
      <Route path="/Personaje/" component={Personaje}></Route>
      <Route path="/Rimac/" component={Rimac}></Route>
    </Router>
  )
};
