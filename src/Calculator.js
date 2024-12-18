import React, { useState } from 'react';
import Button from './Button';

const Calculator = () => {
  const [input, setInput] = useState(''); 
  const [result, setResult] = useState(null); 

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult(null);
    } else if (value === '=') {
      try {
        
        const evalResult = eval(input); 
        setResult(evalResult);
      } catch (error) {
        setResult('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div style={{ width: '300px', margin: '50px auto', textAlign: 'center' }}>
      <h2>Simple Calculator</h2>
      <div
        style={{
          marginBottom: '10px',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          fontSize: '20px',
        }}
      >
        {input || '0'}
      </div>
      <div
        style={{
          marginBottom: '10px',
          padding: '10px',
          fontWeight: 'bold',
          fontSize: '24px',
          color: 'green',
        }}
      >
        {result !== null ? `Result: ${result}` : ''}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'C', '0', '=', '/'].map((btn) => (
          <Button key={btn} label={btn} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
