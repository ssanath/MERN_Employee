import React, { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import axios from 'axios';

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [inpval, setINP] = useState({
        name: "",
        email: "",
        age: "",
        phone: "",
        jobDesig: "",
        address: "",
        jobDes: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:8003/api/users/${id}`)
            .then(response => {
                setINP(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the user data!', error);
            });
    }, [id]);

    const setData = (e) => {
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        });
    };

    const updateUser = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8003/api/users/${id}`, inpval)
            .then(() => {
                navigate('/');
            })
            .catch(error => {
                console.error('There was an error updating the user!', error);
            });
    };

    return (
        <div>
            <div className="container">
                <NavLink to="/">Home</NavLink>
                <form className="mt-5" onSubmit={updateUser}>
                    <div className="row">
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" value={inpval.name} onChange={setData} name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                            <input type="email" value={inpval.email} onChange={setData} name="email" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
                            <input type="text" value={inpval.age} onChange={setData} name="age" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                            <input type="number" value={inpval.phone} onChange={setData} name="phone" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="exampleInputEmail1" className="form-label">Job Designation</label>
                            <input type="text" value={inpval.jobDesig} onChange={setData} name="jobDesig" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                            <input type="text" value={inpval.address} onChange={setData} name="address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 col-lg-12 col-md-12 col-12">
                            <label htmlFor="exampleInputEmail1" className="form-label">Job Description</label>
                            <textarea name="jobDes" value={inpval.jobDes} onChange={setData} className="form-control" id="" cols="30" rows="10"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update;
