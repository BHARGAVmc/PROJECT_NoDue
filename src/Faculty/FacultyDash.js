import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6';
import './dept.css';
function FacultyDash() {
  const navigate = useNavigate();
    const name="sivaraman";
    const email="Sivaraman@gmail.com";
  const[showProfile,setShowProfile]=useState(false);

  const handleLogout = () => {
    navigate('/Flogin');
  };
const handleClassClick = (department, section) => {
  console.log('Clicked:', department, section);
};
const toggleProfile = () => {
  setShowProfile(!showProfile); 
};
  return (
    <div className="App">
      <div className='flex-box'>
        <h1 className="main-title">Classes attending</h1>
        <div className="profile-container">
          <FaCircleUser
            className="profile-icon"
            size={32}
            onClick={toggleProfile}
          />
          { showProfile && (
            <div className="profile-dropdown">
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Email:</strong> {email}</p>
              <button className="button" onClick={handleLogout}>Log Out</button>
            </div>
          )}
        </div>
      </div>

      <div className="lists">
        <h2>CSE-AI&ML Department</h2>
        <ul>
  <li onClick={() => handleClassClick('CSE-AI&ML', '2nd Year - AI&ML')}>
    <p>AI&ML section 2nd Year</p>
  </li>
  <li onClick={() => handleClassClick('CSE-AI&ML', '2nd Year - Networks')}>
    <p>Networks section 2nd Year</p>
  </li>
  <li onClick={() => handleClassClick('CSE-AI&ML', '1st Year - AI&ML')}>
    <p>AI&ML section 1st Year</p>
  </li>
</ul>
      </div>
      <div className="lists">
        <h2>ECE Department</h2>
       <ul>
  <li onClick={() => handleClassClick('ECE', '1st Year - Section-A')}>
    <p>ECE section 1st Year</p>
  </li>
  <li onClick={() => handleClassClick('ECE', '2nd Year - Section-A')}>
    <p>ECE section 2nd Year</p>
  </li>
</ul>
      </div>
      <div className="lists">
        <h2>EEE Department</h2>
       <ul>
  <li onClick={() => handleClassClick('EEE', '1st Year - section-A')}>
    <p>EEE department 1st Year</p>
  </li>
  <li onClick={()=>handleClassClick('EEE','2nd year-section-A')}>
    <p>EEE department 2nd Year</p>
    </li>
</ul>
      </div>
    </div>
  );
}
export default FacultyDash;