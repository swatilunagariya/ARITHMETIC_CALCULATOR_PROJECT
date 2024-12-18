import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={() => onClick(label)}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        margin: '5px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
};

export default Button;
