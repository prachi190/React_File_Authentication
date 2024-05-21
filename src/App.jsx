import React, { useState } from 'react';
import Register from './Components/Register';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import './App.css';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <div className="App">
      {loggedInUser ? (
        <Dashboard />
      ) : (
        <>
          <Register />
          <Login setLoggedInUser={setLoggedInUser} />
        </>
      )}
    </div>
  );
}

export default App;