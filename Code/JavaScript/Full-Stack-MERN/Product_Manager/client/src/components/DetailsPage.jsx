import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DetailsPage = () => {
  const [products, setProducts] = useState()

  const { id } = useParams()


  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(response => setProducts(response.data))
      .catch(err => console.log(err))
  },[])
  return (
    <div>
      {
        products?
        <div class="card">
        {/* <img src={products.imageUrl} class="card-img-top" alt="card-img-top"/> */}
          <div class="card-body">
            <h5 class="card-title">{products.title}</h5>
            <p class="card-text">Price: {products.price}</p>
            <p class="card-text">Description: {products.description}</p>
            <Link to={`/products/${id}/edit`}>Edit</Link>
          </div>
      </div>:
      <h1>Loading...</h1>
      }

    </div>
  )
}

export default DetailsPage