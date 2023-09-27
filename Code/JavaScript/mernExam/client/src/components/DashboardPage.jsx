import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DashboardPage = () => {
    const [storeList, setStoreList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/stores')
            .then((response) => setStoreList(response.data))
            .catch((err) => console.log(err));
    }, []);

    const handleDelete = (deleteId) => {
        axios
            .delete(`http://localhost:8000/api/stores/${deleteId}`)
            .then((response) => {
                removeFromDom(deleteId);
            })
            .catch((err) => console.log(err));
    };

    const handleEdit = (storeId) => {
        navigate(`/stores/${storeId}/edit`);
    };

    const removeFromDom = (deleteId) => {
        const filteredList = storeList.filter((eachStore) => eachStore._id !== deleteId);
        setStoreList(filteredList);
    };

    return (
        <div>
            <h4>Find stores in your area!</h4>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Store</th>
                        <th scope="col">Store Number</th>
                        <th scope="col">Open</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {storeList.map((store, idx) => (
                        <tr key={store._id}>
                            <td>
                                <Link to={`/stores/${store._id}`}>{store.name}</Link>
                            </td>
                            <td>{store.number}</td>
                            <td>{store.open ? 'True' : 'False'}</td>
                            <td>
                                <button type="button" className="btn btn-outline-danger" onClick={() => handleDelete(store._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <Link to="/stores/new" className='btn btn-primary'>Can't find your store?</Link>
            </div>
        </div>
    );
};

export default DashboardPage;
