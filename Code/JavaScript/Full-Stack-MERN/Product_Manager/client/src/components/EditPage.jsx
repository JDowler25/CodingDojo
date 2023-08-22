import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPage = () => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(1)
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const navigate = useNavigate()


  const { id } = useParams()

  const handleDelete = () =>{
    axios.delete(`http://localhost:8000/api/products/${id}`)
      .then(response => navigate(`/products`))
      .catch(err=>console.log(err))
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(response => {
        console.log(response.data)
        const product = response.data
        setTitle(product.location)
        setPrice(product.rating)
        setDescription(product.season)
        setImageUrl(product.imageUrl)
      })
      .catch(err => console.log(err))
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.patch(`http://localhost:8000/api/products/${id}`, {title: title, price: price, description: description})
      .then(response=>{
        navigate('/products')
      })
      .catch(err=>console.log(err))
  }

  return (
    <div>
      <h1>Update Product</h1>
        <form onSubmit={handleSubmit} className='form'>
            <div className='mb-3'>
              <label className='form-label'>Title</label>
              <input type='text' name='title' value={title} onChange={e=>setTitle(e.target.value)} className='form-control' placeholder='add Title...'/>
            </div>
            <div className='mb-3'>
              <label className='form-label'>Price</label>
              <input type='number' name='number' value={price} onChange={e=>setPrice(e.target.value)} className='form-control'/>
            </div>
            <div className='mb-3'>
              <label className='form-label'>Description</label>
              <input type='text' name='description' value={description} onChange={e=>setDescription(e.target.value)} className='form-control' placeholder='add description...'/>
            </div>
            <div className='mb-3'>
              <label className='form-label'>imageUrl</label>
              <input type='text' name='imageUrl' value={imageUrl} onChange={e=>setImageUrl(e.target.value)} className='form-control' placeholder='add image Url...'/>
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
            <button type='button' onClick={handleDelete} className='btn btn-outline-danger'>Delete</button>
        </form>
    </div>
  )
}

export default EditPage