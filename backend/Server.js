const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
const mongoURI = 'mongodb://localhost:27017/signupDB';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  number: String, 
});

const User = mongoose.model('User', userSchema);

// Signup route
app.post('/signup', async (req, res) => {
  const { username, email, password, number } = req.body;
  const newUser = new User({ username, email, password, number });
  try {
    await newUser.save();
    res.status(201).send('User created');
  } catch (error) {
    res.status(400).send('Error creating user');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
