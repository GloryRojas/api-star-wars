import React from 'react';
import { useState, useEffect } from 'react';
import { SectionSw, ArticleSw, PSw, ButtonSw } from "./utils/utils";
import { sendPers } from "./utils/funcion";

const Card = () => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetch("https://swapi.co/api/people/", {mode: 'cors'})
			.then(res => res.json())
			.then(json => {
				setItems(json.results);
			});
	}, []);
	return (
		<SectionSw>
			{items.map(item => (
				<ArticleSw key={item.name+item.heigth}>
					<PSw size="25px;">{item.name}</PSw>
					<ButtonSw onClick={()=>sendPers(item.name)}>VER DETALLE</ButtonSw>
				</ArticleSw>
			)
		)}
		</SectionSw>
	)
};

export default Card;