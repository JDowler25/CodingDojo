import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

// 1. Get Data from API: Axios 
// 2. Get data on load : useEffect
// 3. Variable change when loading API : useState
const DashboardPage = () => {
  const [destList, setDestList] = useState([])

  const navigate = useNavigate()


  useEffect(() => {
    axios.get('http://localhost:8000/api/destinations')
      .then(response => setDestList(response.data))
      .catch(err => console.log(err))
  }, [])

  const handleDelete = (deleteId) => {
    axios.delete(`http://localhost:8000/api/destinations/${deleteId}`)
      .then(response => {
        removeFromDom(deleteId);
      })
      .catch(err=>console.log(err))
  }

  const removeFromDom = (deleteId) =>{
    const filteredList = destList.filter((eachDest, idx)=> eachDest._id !== deleteId)
    setDestList(filteredList)
  }
  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-2 g-3">
        {destList.map((eachDest, idx) => {
          return (
            <div key={eachDest._id} className="col">
              <div className="card">
                <img src={eachDest.imageUrl} className="card-img-top" alt="card-grid-image" />
                <div className="card-body">
                  <h5 className="card-title">{eachDest.location}</h5>
                  <p className="card-text">({eachDest.season})
                    <Link to={`/destinations/${eachDest._id}`}>Details</Link>
                  </p>
                  <p className="card-text">
                    <button type='button' onClick={()=> handleDelete(eachDest._id)} className='btn btn-outline-danger'>Delete</button>
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