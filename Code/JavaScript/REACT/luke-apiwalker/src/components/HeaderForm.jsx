import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const HeaderForm = () => {
    const [category, setCategory] = useState("planet");
    const [id, setId] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Search for:</label>
            <select name='category' value={category} onChange={e=>setCategory(e.target.value)}>
                <option value="planet"> Planet</option>
                <option value="people"> People</option>
            </select>
            <label>ID:</label>
            <input type="number" name="id" value={id} onChange={e=>setId(e.target.value)} />
            <button type='submit'> Submit</button>
        </form>
    </div>
  )
}

export default HeaderForm