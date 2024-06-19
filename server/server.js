const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Atlas connection
const uri = 'mongodb+srv://sanath:apr26%402003@cluster0.zst7rqb.mongodb.net/mernstack?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define your schema and model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    phone: String,
    jobDesig: String,
    address: String,
    jobDes: String
});

const User = mongoose.model('User', userSchema);

// POST route to add a new user
app.post('/api/register', (req, res) => {
    const newUser = new User(req.body);
    newUser.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err));
});

app.get('/api/users', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(err));
});

app.get('/api/users/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err));
});

app.put('/api/users/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err));
});

app.delete('/api/users/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json({ message: 'User deleted successfully' });
        })
        .catch(err => res.status(400).json(err));
});

// Start the server
const port = process.env.PORT || 8003;
app.listen(port, () => console.log(`Server running on port ${port}`));
