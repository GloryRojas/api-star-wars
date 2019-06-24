import React from 'react';
import styled from 'styled-components'

const GifJedi = styled.img`
    width: 50%;
`;

const Jedi = () => {
    return(
        <>
        <h1>A quién buscas?</h1>
        <h1>Escribe su nombre</h1>
        <GifJedi alt="Jedi" src="https://media1.giphy.com/media/3oeSATQOhfaOqgwjD2/giphy.gif?cid=790b76115d115a573834654b4d28fd6e&rid=giphy.gif"/>
        </>
    )
}

export default Jedi;