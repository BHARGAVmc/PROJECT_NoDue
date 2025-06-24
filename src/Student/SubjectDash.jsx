import React, { useState } from 'react';
import './student.css';

const SubjectCard = ({ name, totalTasks = 5 }) => {
  const [completedTasks, setCompletedTasks] = useState(0);
  const percentage = Math.round((completedTasks / totalTasks) * 100);

  const handleCompleteTask = () => {
    if (completedTasks < totalTasks) {
      setCompletedTasks(prev => prev + 1);
    }
  };

  return (
  <div className="card">
    <div className="card-left">{name}</div>

    <div className="card-right">
      <span className="label">Percentage</span>
      <div className="circle">
        <svg viewBox="0 0 36 36" className="circular-chart">
          <path
            className="circle-bg"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle-progress"
            strokeDasharray={`${percentage}, 100`}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" className="percentage-text">{percentage}%</text>
        </svg>
      </div>
      {/* Button removed here */}
    </div>
  </div>
);

};

export default SubjectCard;