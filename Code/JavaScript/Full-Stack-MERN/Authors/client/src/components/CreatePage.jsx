import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CreatePage = () => {
  const [name, setName] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/authors', { name: name})
      .then(response => {
        navigate('/authors')
      })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <h1>Add a new Author</h1>
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

export default CreatePage