import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Inicio from "./Inicio";
import Personaje from "./Personaje";

export const App = () => {
  return(
    <Router>
      <Route path="/" exact component={Inicio} />
      <Route path="/personaje/" component={Personaje} />
    </Router>
  )
};
