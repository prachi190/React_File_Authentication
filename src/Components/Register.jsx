import React, { useState } from 'react';
import { saveAs } from 'file-saver';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = () => {
    const userData = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = userData.some(user => user.username === username);

    if (userExists) {
      setMessage('User already exists');
    } else {
      userData.push({ username, password });
      const blob = new Blob([JSON.stringify(userData)], { type: 'application/json' });
      saveAs(blob, 'users.json');
      localStorage.setItem('users', JSON.stringify(userData));
      setMessage('Registration successful. Download users.json and reload it on login.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
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
      <button onClick={handleRegister}>Register</button>
      <p>{message}</p>
    </div>
  );
}

export default Register;
