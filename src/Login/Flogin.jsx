
import React from 'react';
import Signup from '../Login/Signup';
import {useNavigate} from 'react-router-dom';
export default function Student() {
 const navigate=useNavigate();
  return (
<div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <form
        style={{
          textAlign: 'center',
          padding: '100px',
          border: '1px solid gray',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ marginBottom: '30px' }}>
          <b>Mail Id: </b>
          <input type="text" placeholder="Enter mail id" />
        </div>

        <div style={{ marginBottom: '30px' }}>
          <b>Password: </b>
          <input type="password" placeholder="Enter password" />
        </div>

        <div>
          <button type="submit">Login</button>{' '}
          <button type="button" onClick={() => navigate('/Signup')}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
