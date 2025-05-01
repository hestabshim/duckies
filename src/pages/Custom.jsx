import React, { useState } from 'react';
// import './Custom.css';

function Custom() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('yellow');
  const [hat, setHat] = useState('none');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your custom duck:\nName: ${name}\nColor: ${color}\nHat: ${hat}`);
    
  };

  return (
    <div className="custom-page">
      <h1>Create Your Custom Duck</h1>
      <form onSubmit={handleSubmit} className="custom-form">
        <label>
          Duck Name:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="e.g., Mr. Quack" 
          />
        </label>

        <label>
          Choose Color:
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="yellow">Yellow</option>
            <option value="blue">Blue</option>
            <option value="pink">Pink</option>
            <option value="green">Green</option>
          </select>
        </label>

        <label>
          Add Hat:
          <select value={hat} onChange={(e) => setHat(e.target.value)}>
            <option value="none">None</option>
            <option value="top-hat">Top Hat</option>
            <option value="cowboy">Cowboy Hat</option>
            <option value="party">Party Hat</option>
          </select>
        </label>

        <button type="submit">Build Duck</button>
      </form>

      <div className="duck-preview">
        <p>🦆 Preview: {name || 'Unnamed Duck'} wearing a {hat} and is {color}</p>
        <img src={color.webp}></img>
        <img src={hat.jpg}></img>
      </div>
    </div>
  );
}

export default Custom;
