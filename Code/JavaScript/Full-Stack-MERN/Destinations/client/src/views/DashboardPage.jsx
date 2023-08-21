import React, { useState, useEffect } from 'react';
import axios from "axios";

// 1. Get Data from API: Axios 
// 2. Get data on load : useEffect
// 3. Variable change when loading API : useState
const DashboardPage = () => {
  const [destList, setDestList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/destinations')
      .then(response => setDestList(response.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-2 g-3">
        {destList.map((eachDest, idx) => {
          return (
            <div className="col">
              <div className="card">
                <img src={eachDest.imageUrl} className="card-img-top" alt="card-grid-image" />
                <div className="card-body">
                  <h5 className="card-title">{eachDest.location}</h5>
                  <p className="card-text">({eachDest.season})</p>
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