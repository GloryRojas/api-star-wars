import { useEffect, useState } from 'react'
// const optionsData = {
//     "people": "https://swapi.co/api/people/", 
//     "planets": "https://swapi.co/api/planets/", 
//     "films": "https://swapi.co/api/films/", 
//     "species": "https://swapi.co/api/species/", 
//     "vehicles": "https://swapi.co/api/vehicles/", 
//     "starships": "https://swapi.co/api/starships/"
// }

const useData = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        let arr = []; 
        for (let i = 1; i < 10; i++){       
            const url = 'https://swapi.co/api/people/?page=' + i;
            fetch(url, {mode:'cors'})
                .then(resp => resp.json())
                .then(json => {
                    return json.results.map(item => {
                        return(arr.push(item));
                    })
                });
        }
        setData(arr);
    }, []);
    return(data)
};

export default useData;