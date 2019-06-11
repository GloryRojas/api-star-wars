import React, { useEffect, useState } from "react";
import { SectionSw, H1Sw, ArticleSwPer, PSw, ButtonSw } from "../utils/utils";
import { Link } from "react-router-dom";

const Personaje = (props) => {
	const personaje = props.location.state.info;
	const [home, setHome] = useState(null)
		useEffect(() => {
			personaje ? 
			fetch(personaje.homeworld, {mode: 'cors'})
				.then(res => res.json())
				.then(json => {
					setHome(json.name);
				})
				: setHome(undefined);
		}, [personaje]);

	return (
		<div>
		{personaje ? 
			<SectionSw>
				<H1Sw size="120px" weigth="600" align="left" left="10%">{personaje.name}</H1Sw>
				<H1Sw align="left" left="10%">{home}</H1Sw>
				<ArticleSwPer>
					<PSw align="left">Peso: {personaje.mass}</PSw>
					<PSw align="left">Año: {personaje.birth_year}</PSw>
					<PSw align="left">Género: {personaje.gender}</PSw>
				</ArticleSwPer>
				<ButtonSw><Link to="/">VOLVER</Link></ButtonSw>
			</SectionSw>
			: "" }
		</div>
		
	);
};

export default Personaje;