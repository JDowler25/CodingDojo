import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// 1. form input : useState
// 2. after submit, send request to API: axios 
// 3. logic after submit : redirect: useNavigate
const CreatePage = () => {
  const [location, setLocation] = useState("")
  const [rating, setRating] = useState(8)
  const [imageUrl, setImageUrl] = useState("")
  const [season, setSeason] = useState("Spring")

  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/destinations', {location: location, rating: rating, imageUrl: imageUrl, season: season})
      .then(response=>{
        navigate('/destinations')
      })
      .catch(err=>console.log(err))
  }

  return (
    <div>
      <h1>Add a new Location</h1>
        <form onSubmit={handleSubmit} className='form'>
            <div className='mb-3'>
              <label className='form-label'>Location</label>
              <input type='text' name='location' value={location} onChange={e=>setLocation(e.target.value)} className='form-control' placeholder='add location...'/>
            </div>
            <div className='mb-3'>
              <label className='form-label'>Rating</label>
              <input type='number' name='number' value={rating} onChange={e=>setRating(e.target.value)} className='form-control'/>
            </div>
            <div className='mb-3'>
              <label className='form-label'>imageUrl</label>
              <input type='text' name='imageUrl' value={imageUrl} onChange={e=>setImageUrl(e.target.value)} className='form-control' placeholder='add image Url...'/>
            </div>
            <div className='mb-3'>
              <label className='form-label'>Season</label>
              <select name='season' value={season} onChange={e=>setSeason(e.target.value)} className='form-select'>
                  <option value='Spring'>Spring </option>
                  <option value='Summer'>Summer </option>
                  <option value='Fall'>Fall</option>
                  <option value='Winter'>Winter</option>
              </select>
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}

export default CreatePage