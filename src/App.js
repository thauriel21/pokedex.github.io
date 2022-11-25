import React from 'react';
import './App.css';
import { useState } from 'react';
function App() {
  const [pokemon, setPokemon] = useState('')
  const [pokemonD, setPokemonD] = useState({ sprites: { front_default: null } })

  const onChangesfn = (event) => {
    setPokemon(event.target.value)
  }

  const onClickfn = () => {
    console.log(pokemon, "https://pokeapi.co/api/v2/pokemon/" + pokemon)
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
      .then(response => response.json())
      .then(
        (pokemonData) => {
          console.log(pokemonData)
          setPokemonD(pokemonData)

        }
      );
  }

  return (
    <div className="App">
      <h1>Pokemons</h1>
      <input type="text" value={pokemon} onChange={onChangesfn}></input>
      <button type="button" className="btn btn-dark" onClick={onClickfn}>elije aqui tu Pokemones</button>
      <br />
      <br />
      <img src={pokemonD.sprites.front_default} className="imagen"></img>
      <img src={pokemonD.sprites.back_default} className="imagen2"></img>

      <table class="table table-light">
        <thead>
          <tr>
            <th scope="col">puesto de tu pokemon</th>
            <th scope="col">Nombre</th>
            <th scope="col">Experiencia</th>
            <th scope="col">identificador</th>
            <th scope="col">altura</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{pokemonD.order}</th>
            <td>{pokemonD.name}</td>
            <td>{pokemonD.base_experience}</td>
            <td>{pokemonD.id}</td>
            <td>{pokemonD.height}</td>
          

          </tr>
        </tbody>
      </table>


    </div>
  );
}





export default App;
