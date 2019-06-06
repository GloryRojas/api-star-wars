import React from 'react';
import { useState, useEffect } from 'react';
import { SectionSw, ArticleSw, PSw, ButtonSw, InputSw } from "./utils/utils";

 

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
			<SectionSw>
				{filterPerson.map(item => (
					<ArticleSw key={item.name+item.heigth}>
						<PSw size="25px;">{item.name}</PSw>
						<ButtonSw href="/personaje/">VER DETALLE</ButtonSw>
					</ArticleSw>	
				))}
			</SectionSw>
		</div>
	)
};
