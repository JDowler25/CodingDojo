import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DetailsPage = () => {
  const [store, setStore] = useState()

  const { id } = useParams()


  useEffect(() => {
    axios.get(`http://localhost:8000/api/stores/${id}`)
      .then(response => setStore(response.data))
      .catch(err => console.log(err))
  },[])
  return (
    <div>
      {
        store?
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{store.name}</h5>
            <p class="card-text">Store Number: {store.number}</p>
            <p class="card-text">Open?: {store.open ? 'Yes' : 'No'}</p>
            <Link to={`/stores/${id}/edit`}>Edit Store Details</Link>
          </div>
      </div>:
      <h1>Loading...</h1>
      }

    </div>
  )
}

export default DetailsPage