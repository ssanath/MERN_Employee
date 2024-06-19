import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = () => {
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

    const setData = (e) => {
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8003/api/register', inpval)
            .then(response => {
                console.log(response.data);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <div className="container">
                <NavLink to="/">Home</NavLink>
                <form className="mt-5" onSubmit={handleSubmit}>
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
                            <input type="number" value={inpval.age} onChange={setData} name="age" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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
                            <textarea type="text" name="jobDes" value={inpval.jobDes} onChange={setData} className="form-control" cols="30" rows="10"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
