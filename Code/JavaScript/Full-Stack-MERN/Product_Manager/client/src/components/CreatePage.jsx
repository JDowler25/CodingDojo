import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CreatePage = () => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(1)
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")


  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/products', { title: title, price: price, description: description })
      .then(response => {
        navigate('/products')
      })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <h1>Add a new Product</h1>
      <form onSubmit={handleSubmit} className='form'>
        <div className='mb-3'>
          <label className='form-label'>Title</label>
          <input type='text' name='title' value={title} onChange={e => setTitle(e.target.value)} className='form-control' placeholder='add Title...' />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Price</label>
          <input type='number' name='number' value={price} onChange={e => setPrice(e.target.value)} className='form-control' />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Description</label>
          <input type='text' name='description' value={description} onChange={e => setDescription(e.target.value)} className='form-control' placeholder='add description...' />
        </div>
        <div className='mb-3'>
          <label className='form-label'>imageUrl</label>
          <input type='text' name='imageUrl' value={imageUrl} onChange={e => setImageUrl(e.target.value)} className='form-control' placeholder='add image Url...' />
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default CreatePage