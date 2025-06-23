import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function Home() {
    const navigate=useNavigate();
  return (
    <div  style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}>
      <center>
        <h1><b>Welcome to Modern No-Due System!</b></h1>
        <div>
          <button
            style={{
              fontSize: '20px',
              padding: '15px 30px',
              borderRadius: '20px',
              margin: '10px'
            }} onClick={()=>navigate('/Slogin')}
          >
            Student
          </button>
          <br />
          <button
            style={{
              fontSize: '20px',
              padding: '15px 30px',
              borderRadius: '20px',
              margin: '10px'
            }}onClick={()=>navigate('/Flogin')}
          >
            Faculty
          </button>
        </div>
      </center>
    </div>
  );
}
