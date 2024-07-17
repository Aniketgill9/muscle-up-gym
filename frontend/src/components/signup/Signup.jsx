import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous error message
    try {
      await axios.post('http://localhost:5000/signup', {
        username,
        email,
        password,
        number,
      });
      alert('User created successfully');
    } catch (error) {
      setError(error.response ? error.response.data : 'Error creating user');
    }
  };

  return (
    <div className="signup-page">
      <div className="hero-section">
        <h1>Join Us Today</h1>
        <p>Sign up to get access to exclusive content and features!</p>
      </div>
      <div className="signup-container">
        <h2>Signup</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label>Number:</label>
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
