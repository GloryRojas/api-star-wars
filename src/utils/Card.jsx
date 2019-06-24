import React from 'react';
import { useState } from 'react';
import { SectionSw, ArticleSw, PSw, ButtonSw, InputSw } from "./utils";
import { Link } from "react-router-dom";
import useData from '../data/useData';
import Jedi from './Jedi'

export const Card = () => {
	const [search, setSearch] = useState("");

	const items = useData();
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
			<Jedi /> 
		</div>
	)
};
