import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {setAllPokemon(response.data.results)})
      .catch(error => console.log(error));
  }, []);
  return (
    <div>
      <button className='btn btn-outline-primary my-3'>Fetch Pokemon</button>
        {allPokemon.map((i) => (
          <p key={i}>{i.name}</p>
        ))}
    </div>
  )
}

export default Pokemon