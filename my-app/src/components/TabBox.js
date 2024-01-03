// TabsBox.js
import React, { useState } from 'react';

const TabsBox = () => {
  const [activeTab, setActiveTab] = useState(1); // Initial active tab

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="tabs-box">
      <div className="tab-header">
        <div
          className={`tab ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Computer Science Coursework
        </div>
        <div
          className={`tab ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Technical Skills
        </div>
        <div
          className={`tab ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => handleTabClick(3)}
        >
          Non Technical Skills
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 1 && <ul>
            <li>The Structure and Interpretation of Computer Programs</li>
            <li>Data Structures and Algorithms</li>
            <li>Discrete Mathematics and Probability Theory</li>
            <li>Linear Algebra and Differential Equations</li>
            <li>Multivariable Calculus</li>
            <li>Great Ideas of Computer Architecture (Machine Structures) </li>
            <li>Foundations of Data Science</li>
            <li>Principles and Techniques of Data Science</li>
            </ul>
            }
        {activeTab === 2 &&<ul>
            <li>Java</li>
            <li>Python</li>
            <li>SQL</li>
            <li>Go</li>
            <li>PHP</li>
            <li>C </li>
            <li>RISC-V Assembly</li>
            <li>Numpy/Pandas</li>
            <li>HTML/CSS</li>
            <li>JavaScript/TypeScript</li>
            </ul>}
        {activeTab === 3 && 
        <ul>
        <li>Teamwork</li>
        <li>Communication</li>
        <li>Technical Writing and Documentation</li>
        <li>Leadership</li>
        <li>Drive</li>
        </ul>
        }
      </div>
    </div>
  );
};

export default TabsBox;