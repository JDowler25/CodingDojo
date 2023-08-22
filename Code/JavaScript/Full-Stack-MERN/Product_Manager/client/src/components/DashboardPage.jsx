import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

// 1. Get Data from API: Axios 
// 2. Get data on load : useEffect
// 3. Variable change when loading API : useState
const DashboardPage = () => {
  const [productList, setProductList] = useState([])

  const navigate = useNavigate();


  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(response => setProductList(response.data))
      .catch(err => console.log(err))
  }, [])

  const handleDelete = (deleteId) => {
    axios.delete(`http://localhost:8000/api/products/${deleteId}`)
      .then(response => {
        removeFromDom(deleteId);
      })
      .catch(err=>console.log(err))
  }

  const removeFromDom = (deleteId) =>{
    const filteredList = productList.filter((eachProduct, idx)=> eachProduct._id !== deleteId)
    setProductList(filteredList)
  }
  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-2 g-3">
        {productList.map((productList, idx) => {
          return (
            <div key={productList._id} className="col">
              <div className="card">
                <img src={productList.imageUrl} className="card-img-top" alt="card-grid-image" />
                <div className="card-body">
                  <h5 className="card-title">{productList.title}</h5>
                  <p className="card-text">(${productList.price})
                    <Link to={`/products/${productList._id}`}>Details</Link>
                  </p>
                  <p className="card-text">
                    <button type='button' onClick={()=> handleDelete(productList._id)} className='btn btn-outline-danger'>Delete</button>
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DashboardPage