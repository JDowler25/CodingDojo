import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DashboardPage = () => {
  const [authorList, setAuthorList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/authors')
      .then((response) => setAuthorList(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (deleteId) => {
    axios
      .delete(`http://localhost:8000/api/authors/${deleteId}`)
      .then((response) => {
        removeFromDom(deleteId);
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (authorId) => {
    navigate(`/authors/${authorId}/edit`);
  };

  const removeFromDom = (deleteId) => {
    const filteredList = authorList.filter((eachAuthor) => eachAuthor._id !== deleteId);
    setAuthorList(filteredList);
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Author</th>
            <th scope="col">Actions available</th>
          </tr>
        </thead>
        <tbody>
          {authorList.map((author, idx) => (
            <tr key={author._id}>
              <td>{author.name}</td>
              <td>
                <button type="button" className="btn btn-outline-primary" onClick={() => handleEdit(author._id)}>Edit</button>
              </td>
              <td>
                <button type="button" className="btn btn-outline-danger" onClick={() => handleDelete(author._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPage;
