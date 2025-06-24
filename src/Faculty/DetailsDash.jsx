import React, { useState, useEffect } from 'react';
import './DetailsDash.css';

function App() {
  const [students, setStudents] = useState([
    { roll: "23691A3301", remarks: "" },
    { roll: "23691A3302", remarks: "" },
    { roll: "23691A3304", remarks: "" },
    { roll: "23691A3305", remarks: "" },
  ]);

  const [openIndex, setOpenIndex] = useState(null);
  const [addMenuOpen, setAddMenuOpen] = useState(false);
  const [extraOptions, setExtraOptions] = useState(["Certificate"]);
  const [newOther, setNewOther] = useState("");
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    const savedStudents = localStorage.getItem('students');
    const savedChecked = localStorage.getItem('checkedItems');
    if (savedStudents) setStudents(JSON.parse(savedStudents));
    if (savedChecked) setCheckedItems(JSON.parse(savedChecked));
  }, []);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const handleCheckboxChange = (roll, label) => {
    setCheckedItems(prev => ({
      ...prev,
      [roll]: {
        ...prev[roll],
        [label]: !prev[roll]?.[label]
      }
    }));
  };

  const handleAddOther = () => {
    const trimmed = newOther.trim();
    if (trimmed && !extraOptions.includes(trimmed)) {
      setExtraOptions([...extraOptions, trimmed]);
      setNewOther("");
    }
  };

  const handleRemoveOther = (label) => {
    setExtraOptions(extraOptions.filter(option => option !== label));

    const updatedChecked = {};
    for (const roll in checkedItems) {
      const studentChecked = { ...checkedItems[roll] };
      delete studentChecked[label];
      updatedChecked[roll] = studentChecked;
    }
    setCheckedItems(updatedChecked);
  };

  const handleRemarksChange = (index, value) => {
    const updated = [...students];
    updated[index].remarks = value;
    setStudents(updated);
  };

  const handleSave = () => {
    console.log("Saved Data:", { students, checkedItems });
    alert("Changes Saved!");
  };

  return (
    <div className="container">
      {/* Back Button */}
      <div className="top-bar">
        <button className="back-button" onClick={() => alert("Back clicked!")}>← Back</button>
      </div>

      <h2 className="title">AI & MI Section</h2>

      {/* ADD Menu */}
      <div className="add-dropdown">
        <button onClick={() => setAddMenuOpen(!addMenuOpen)}>ADD ⏷</button>
        {addMenuOpen && (
          <div className="add-menu">
            {extraOptions.map((option, i) => (
              <div key={i} className="menu-option">
                {option}
                {option !== "Certificate" && (
                  <span className="remove-option" onClick={() => handleRemoveOther(option)}>❌</span>
                )}
              </div>
            ))}
            <div className="others-input">
              <input
                type="text"
                placeholder="Add Others"
                value={newOther}
                onChange={(e) => setNewOther(e.target.value)}
              />
              <button onClick={handleAddOther}>+</button>
            </div>
          </div>
        )}
      </div>

      {/* Rows */}
      {students.map((student, index) => (
        <div key={index}>
          <div className="row">
            <div
              className="roll-number"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {student.roll}
            </div>
            <div className="remarks">
              <input
                type="text"
                placeholder="Remarks"
                value={student.remarks}
                onChange={(e) => handleRemarksChange(index, e.target.value)}
              />
            </div>
          </div>

          {openIndex === index && (
            <div className="dropdown-area">
              {["Assignment 1", "Assignment 2", ...extraOptions].map((label, i) => (
                <label key={i} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={checkedItems[student.roll]?.[label] || false}
                    onChange={() => handleCheckboxChange(student.roll, label)}
                  />
                  {label}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Save Button */}
      <div className="bottom-buttons">
        <button className="save-button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default App;