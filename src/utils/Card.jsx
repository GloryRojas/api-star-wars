import React from 'react';
import { useState, useEffect } from 'react';
import { SectionSw, ArticleSw, PSw, ButtonSw, InputSw } from "./utils";
import { Link } from "react-router-dom";

export const Card = () => {
	const [items, setItems] = useState([]);
	const [search, setSearch] = useState("");
	useEffect(() => {
		fetch("https://swapi.co/api/people/", {mode: 'cors'})
			.then(res => res.json())
			.then(json => {
				setItems(json.results);
			});
	}, []);

	const filterPerson = items.filter( person => {
		return person.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
	});

	return (
		<div>
			<InputSw placeholder="BUSCAR" onChange={e => setSearch(e.currentTarget.value)}/>
      		<PSw>RESULTADOS</PSw>
			<SectionSw>
				{filterPerson.map(item => (
					<ArticleSw key={item.name+item.heigth}>
						<PSw size="25px">{item.name}</PSw>
						<ButtonSw><Link to={{pathname: "/Personaje/", state: {info:item} }}>VER DETALLE</Link></ButtonSw>
					</ArticleSw>	
				))}
			</SectionSw>
		</div>
	)
};
