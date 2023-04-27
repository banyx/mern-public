import React, { useState, useEffect } from 'react'

const Pokemon = () => {
    const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => response.json())
      .then(data => setAllPokemon(data.results))
      .catch(error => console.log(error));
  }, []);
  return (
    <div>
        {allPokemon.map((i) => (
          <p key={i.name}>{i.name}</p>
        ))}
    </div>
  )
}

export default Pokemon