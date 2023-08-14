import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CharacterPage = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState([]);
    const [error, setError] = useState(false);


    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response=>{
            console.log(response.data);
            setCharacter(response.data);
            setError(false);
        })
        .catch(err=>{
            console.log(err);
            setError(true);
        })

    },[id])
  return (
    <div>
      {error ? (
        <div>
            <h1>Error</h1>
            <p>These aren't the droids you're looking for.</p>
            <img src={"https://i.imgflip.com/2gro1p.jpg"} alt="Obi-Wan Kenobi" />
        </div>
      ) : character ? (
        <div> 
          <h1>{character.name}</h1>
          <p>Height: {character.height}cm</p>
          <p>Mass: {character.mass}kg</p>
          <p>Hair Color: {character.hair_color}</p>
          <p>Skin Color: {character.skin_color}</p>
        </div>
        ) : (
            <p>Loading...</p>
          )}
    </div>
  );
};

export default CharacterPage