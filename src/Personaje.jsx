import React from "react";
import { SectionSw, H1Sw, ArticleSwPer, PSw, ButtonSw } from "./utils/utils";
import { Link } from "react-router-dom";
const Personaje = () => {
	return (
		<SectionSw>
			<H1Sw size="120px" weigth="600" align="left">Lucke SKYWALKER</H1Sw>
			<H1Sw align="left">Tattoline</H1Sw>
			<ArticleSwPer>
				<PSw align="left">Peso: 172kg</PSw>
				<PSw align="left">Peso: 172kg</PSw>
				<PSw align="left">Peso: 172kg</PSw>
			</ArticleSwPer>
			<ButtonSw href="/">VOLVER</ButtonSw>
		</SectionSw>
	);
};

export default Personaje;