import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Details = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8003/api/users/${id}`)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the user data!', error);
            });
    }, [id]);

    return (
        <div className="container mt-3">
            <h1 style={{ fontWeight: 400 }}>Welcome {user.name}</h1>
            <Card sx={{ minWidth: 600 }}>
                <CardContent>
                    <div className="add_btn">
                        <button className="btn btn-primary mx-2"><CreateIcon /></button>
                        <button className="btn btn-danger"><DeleteIcon /></button>
                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src={`${process.env.PUBLIC_URL}/profile.png`} style={{ width: 60 }} alt="Profile" />
                            <h3 className="mt-3">Name: <span>{user.name}</span></h3>
                            <h3 className="mt-3">Age: <span>{user.age}</span></h3>
                            <p className="mt-3"><MailOutlineIcon /> Email: <span>{user.email}</span></p>
                            <p className="mt-3"><WorkIcon /> Occupation: <span>{user.jobDesig}</span></p>
                        </div>
                        <div className="right_view col-lg-6 col-md-6 col-12">
                            <p className="mt-5"><SmartphoneIcon /> Mobile: <span>{user.phone}</span></p>
                            <p className="mt-3"><LocationOnIcon /> Location: <span>{user.address}</span></p>
                            <p className="mt-3">Description: {user.jobDes}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Details;
