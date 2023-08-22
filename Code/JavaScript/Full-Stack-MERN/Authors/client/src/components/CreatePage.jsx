import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CreatePage = () => {
  const [name, setName] = useState("")
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
  
    
    // setErrors({});
  
    axios.post('http://localhost:8000/api/authors', { name: name })
      .then(res => {
        console.log('then')
        setName(name);
        console.log(name);
        navigate('/authors');
      })
      .catch(err => {
        // if (err.response && err.response.data) {
        //   console.log("setErrors")
        //   setErrors(err.response.data.errors); 
        // } else {
        //   console.log("err");
        // }
        console.log("setErrors")
        const errorResponse = err.response.data.errors;
        const errorArr = []
        for(const key of Object.keys(errorResponse)){
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr); 
      });
  }
  return (
    <div>
      <h1>Add a new Author</h1>
      <form onSubmit={handleSubmit} className='form'>
        {errors.map((err,idx) => <p key={idx}>{err}</p>)}
        <div className='mb-3'>
          <label className='form-label'>Name</label>
          <input type='text' name='name' value={name} onChange={e => setName(e.target.value)} className='form-control' placeholder="add Name here..." />
          {/* {errors.name && <p className="text-danger">{errors.name.message}</p>} */}
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default CreatePage