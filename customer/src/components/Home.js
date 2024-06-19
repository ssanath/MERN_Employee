import React, { useState, useEffect } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';

const Home = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8003/api/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    const handleView = (id) => {
        navigate(`/view/${id}`);
    };

    const handleUpdate = (id) => {
        navigate(`/update/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            console.log(`Attempting to delete user with ID: ${id}`);
            axios.delete(`http://localhost:8003/api/users/${id}`)
                .then((response) => {
                    console.log('Delete response:', response);
                    setUsers(users.filter(user => user._id !== id));
                })
                .catch(error => {
                    console.error('There was an error deleting the user!', error);
                });
        }
    };

    return (
        <div className="mt-5">
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                    <NavLink to="/register" className="btn btn-primary">Add Data</NavLink>
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr className="table-primary">
                        <th scope="col">ID</th>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Job Designation</th>
                        <th scope="col">Phone</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.jobDesig}</td>
                            <td>{user.phone}</td>
                            <td className="d-flex justify-content-between">
                                <button className="btn btn-success" onClick={() => handleView(user._id)}><RemoveRedEyeIcon /></button>
                                <button className="btn btn-primary" onClick={() => handleUpdate(user._id)}><CreateIcon /></button>
                                <button className="btn btn-danger" onClick={() => handleDelete(user._id)}><DeleteIcon /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
