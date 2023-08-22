import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPage = () => {
  const [name, setName] = useState("")


  const navigate = useNavigate()


  const { id } = useParams()

  const handleDelete = () =>{
    axios.delete(`http://localhost:8000/api/authors/${id}`)
      .then(response => navigate(`/authors`))
      .catch(err=>console.log(err))
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors/${id}`)
      .then(response => {
        console.log(response.data)
        const author = response.data
        setName(author.name)
      })
      .catch(err => console.log(err))
  },[id])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.patch(`http://localhost:8000/api/authors/${id}`, {name: name})
      .then(response=>{
        navigate('/authors')
      })
      .catch(err=>console.log(err))
  }

  return (
    <div>
      <h1>Update Product</h1>
        <form onSubmit={handleSubmit} className='form'>
        <div className='mb-3'>
          <label className='form-label'>Name</label>
          <input type='text' name='name' value={name} onChange={e => setName(e.target.value)} className='form-control' placeholder="add Name here..." />
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}

export default EditPage