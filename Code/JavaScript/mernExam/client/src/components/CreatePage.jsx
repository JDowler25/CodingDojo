import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CreatePage = () => {
  const [name, setName] = useState("")
  const [number, setNumber] = useState(1)
  const [open, setOpen] = useState(false)
  const [errors, setErrors] = useState([]);


  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/stores', { name: name, number: number, open: open })
      .then(response => {
        const newStoreId = response.data._id
        navigate(`/stores/${newStoreId}`)
      })
      .catch(err => {
        console.log("setErrors")
        const errorResponse = err.response.data.errors;
        const errorArr = []
        for(const key of Object.keys(errorResponse)){
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr); 
      });
  }

  const handleCheckboxChange = () => {
    setOpen(!open);
  }
  return (
    <div>
      <h1>Add a new Store</h1>
      <form onSubmit={handleSubmit} className='form'>
      {errors.map((err,idx) => <p key={idx}>{err}</p>)}
        <div className='mb-3'>
          <label className='form-label'>Name</label>
          <input type='text' name='name' value={name} onChange={e => setName(e.target.value)} className='form-control' placeholder='add Title...' />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Store Number</label>
          <input type='number' name='number' value={number} onChange={e => setNumber(e.target.value)} className='form-control' />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Open?</label>
          <input type='checkbox' name='open' value={open} onChange={handleCheckboxChange} className='form-check-input'/>
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default CreatePage