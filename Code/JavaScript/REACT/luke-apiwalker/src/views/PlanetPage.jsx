import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PlanetPage = () => {
    const {id} = useParams();
    const [planet, setPlanet] = useState([]);
    const [error, setError] = useState(false);

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(response=>{
            console.log(response.data);
            setPlanet(response.data);
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
        ) : planet ? (
          <div>
            <h1>{planet.name}</h1>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface Water: {planet.surface_water}</p>
            <p>Population: {planet.population}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };
export default PlanetPage