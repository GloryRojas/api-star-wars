import React, { useEffect, useState } from "react";
import { SectionSw, H1Sw, ArticleSwPer, PSw, ButtonSw } from "./utils/utils";

const Personaje = ({personaje}) => {
	const [home, setHome] = useState(null)
	useEffect(() => {
		fetch(personaje.homeworld, {mode: 'cors'})
			.then(res => res.json())
			.then(json => {
				setHome(json.name);
			});
	}, []);

	return (
		<SectionSw>
			<H1Sw size="120px" weigth="600" align="left">{personaje.name}</H1Sw>
			<H1Sw align="left">{home}</H1Sw>
			<ArticleSwPer>
				<PSw align="left">Peso: {personaje.mass}</PSw>
				<PSw align="left">Año: {personaje.birth_year}</PSw>
				<PSw align="left">Género: {personaje.gender}</PSw>
			</ArticleSwPer>
			<ButtonSw>VOLVER</ButtonSw>
		</SectionSw>
	);
};

export default Personaje;