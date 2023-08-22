import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DetailsPage = () => {
  const [destination, setDestination] = useState()

  const { id } = useParams()


  useEffect(() => {
    axios.get(`http://localhost:8000/api/destinations/${id}`)
      .then(response => setDestination(response.data))
      .catch(err => console.log(err))
  },[])
  return (
    <div>
      {
        destination?
        <div class="card">
        <img src={destination.imageUrl} class="card-img-top" alt="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">{destination.location}</h5>
            <p class="card-text">Rating: {destination.rating}</p>
            <p class="card-text">Season: {destination.season}</p>
            <Link to={`/destinations/${id}/edit`}>Edit</Link>
          </div>
      </div>:
      <h1>Loading...</h1>
      }

    </div>
  )
}

export default DetailsPage