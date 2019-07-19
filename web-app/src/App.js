import React, { useState, useEffect }from 'react';
import { Route, Link } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute'

import './App.scss';
import Login from './components/Login/Login'
import Home from './components/Home/Home'

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    setToken(localStorage.getItem('token'))
    console.log('testing for infinite loop')
  }, [token]);

  console.log('App CL token: ', token);

  return (
    <div className="app">
      <header className="app-header">
        <h1>React App</h1>
        <div className='app-nav'>
          <Link className='app-link' to='/'>
            Home
          </Link>
          {token === null ? (
            <Link className='app-link' to='/login'>
              Login
            </Link>
          ) : (
            <Link to='/login'>
              <button className='btn' onClick={() => {
                localStorage.removeItem('token')
                setToken()}} >
                Logout
              </button>
            </Link>
          )}
        </div>
      </header>
      <div className='app-body'>
        <PrivateRoute exact path='/' component={Home} />
        <Route exact path='/login' render={(props) => <Login {...props} setToken={setToken} />} />
      </div>
    </div>
  );
}

export default App;
