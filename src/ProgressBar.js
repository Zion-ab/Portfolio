import React from 'react';

const ProgressBar = ({ skill, level }) => {
  return (
    <div className="mb-4">
      <label className="block text-left mb-1">{skill}</label>
      <div className="bg-gray-200 rounded-full h-4">
        <div 
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
      <span className="text-right">{level}%</span>
    </div>
  );
};

export default ProgressBar;