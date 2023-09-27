import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPage = () => {
    const { id } = useParams()
    const [name, setName] = useState("")
    const [number, setNumber] = useState(1)
    const [open, setOpen] = useState(false)

    const navigate = useNavigate()

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/stores/${id}`)
            .then(response => navigate(`/stores`))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/stores/${id}`)
            .then(response => {
                console.log(response.data)
                const store = response.data
                setName(store.name)
                setNumber(store.number)
                setOpen(store.open)
            })
            .catch(err => console.log(err))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:8000/api/stores/${id}`, { name: name, number: number, open: open })
            .then(response => {
                const storeId = response.data._id
                navigate(`/stores/${storeId}`)
            })
            .catch(err => console.log(err))
    }

    const handleCheckboxChange = () => {
        setOpen(!open);
    }

    return (
        <div>
            <h1>Edit this store!</h1>
            <form onSubmit={handleSubmit} className='form'>
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
                    <input type='checkbox' name='open' value={open} onChange={handleCheckboxChange} className='form-check-input' />
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default EditPage