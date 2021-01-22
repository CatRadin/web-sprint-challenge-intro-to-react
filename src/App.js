import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  // const [characterData, setCharacterData] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(response => {
      setCharacters(response.data.results)
      console.log(response.data.results)
    })
    .catch(error => {
      console.log(error)
    })
  },[])
  
  // useEffect(() => {
  //   axios.get('https://pokeapi.co/api/v2/pokemon/')
  // .then(res => {
  //   const fetches = res.data.results.map(p => axios.get(p.url))
    
  //   Promise.all(fetches).then(data => {
  //     console.log(data);
  //     setPokemon(data);
  //   })
  // });
  // },[])
  
  // useEffect(() => {
  //   promise = [];
  //   for (i = 0; i < 20; i++) {
  // promise.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`))
  //   }
  //   console.log(promise);
  //   },[])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map((characters, id) => (
        <Character key ={id} character ={characters} />
      ))}
    </div>
  );
}

export default App;
