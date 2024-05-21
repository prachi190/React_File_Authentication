import React, { useState } from 'react';
import usersData from '../users.json'; // Importing user data

function Login({ setLoggedInUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    const user = usersData.find(user => user.username === username && user.password === password);
    if (user) {
      setLoggedInUser(username); // Set the logged-in user
      setMessage('Login successful');
    } else {
      setMessage('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Login;
