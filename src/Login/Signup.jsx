
import React from 'react';

export default function Signup() {
  return (
<div style={{
        display: 'flex',
        justifyContent: 'center',     
        alignItems: 'center',         
        height: '100vh',              
        flexDirection: 'column',      
      }}><center>
    <form  style={{
          textAlign: 'center',
          padding: '100px',
          border: '1px solid gray',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
        <div style={{ marginBottom: '30px' }}>
        <b>Enter Mail Id :  </b>
        <input type='text' placeholder='enter mail id'/><br/>
        </div>
        <div style={{ marginBottom: '30px' }}>
        <b>Enter Password :  </b>
        <input type='password' placeholder='Enter password'/>
        </div>
        <div style={{ marginBottom: '30px' }}>
        <b>Conform Password :  </b>
        <input type='password' placeholder='Enter password'/>
        </div>
        <div>
        <button >Rigister</button>
        </div>
    </form>
    </center></div>
  );
}
