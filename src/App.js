import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Inicio from "./Inicio";
import Personaje from "./Personaje";

export const App = () => {
  
  return(
    <Router basename={process.env.PUBLIC_URL}>
      <Route path="/" exact component={Inicio}>
      </Route>
      <Route path="/Personaje/" component={Personaje}>
      </Route>
    </Router>
  )
};
