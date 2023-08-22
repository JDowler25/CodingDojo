import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPage = () => {
  const [location, setLocation] = useState("")
  const [rating, setRating] = useState(8)
  const [imageUrl, setImageUrl] = useState("")
  const [season, setSeason] = useState("Spring")

  const navigate = useNavigate()


  const { id } = useParams()

  const handleDelete = () =>{
    axios.delete(`http://localhost:8000/api/destinations/${id}`)
      .then(response => navigate(`/destinations`))
      .catch(err=>console.log(err))
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/destinations/${id}`)
      .then(response => {
        console.log(response.data)
        const dest = response.data
        setLocation(dest.location)
        setRating(dest.rating)
        setImageUrl(dest.imageUrl)
        setSeason(dest.season)
      })
      .catch(err => console.log(err))
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.patch(`http://localhost:8000/api/destinations/${id}`, {location: location, rating: rating, imageUrl: imageUrl, season: season})
      .then(response=>{
        navigate('/destinations')
      })
      .catch(err=>console.log(err))
  }

  return (
    <div>
      <h1>Update Location</h1>
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
            <button type='submit' className='btn btn-outline-success'>Submit</button>
            <button type='button' onClick={handleDelete} className='btn btn-outline-danger'>Delete</button>
        </form>

    </div>
  )
}

export default EditPage