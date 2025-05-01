import React, { useState } from 'react';

function Custom() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('yellow');
  const [hat, setHat] = useState('none');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your custom duck:\nName: ${name}\nColor: ${color}\nHat: ${hat}`);
  };

  
  const duckMap = {
    yellow: "/137-35052-Yellow.webp",
    blue: "/137-35052-blue.webp",
    pink: "/137-35052-pink.webp",
    red: "/137-35052-red.webp",
  };

  const hatMap = {
    topHat: "/download-8.jpg",
    cowboy: "/download-7.jpg",
    party: "/download-6.jpg",
  };

  const duckImage = duckMap[color];
  const hatImage = hat !== 'none' ? hatMap[hat] : null;

  return (
    <div className="custom-page" style={{ textAlign: 'center', padding: '40px' }}>
      <h1>Create Your Custom Duck</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <label style={{ display: 'block', marginBottom: '15px' }}>
          Duck Name:
          <input
            type="text"
            value={name}
            placeholder="e.g., Mr. Quack"
            onChange={(e) => setName(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              borderRadius: '6px',
              border: '1px solid #ccc'
            }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '15px' }}>
          Choose Color:
          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '6px' }}
          >
            <option value="yellow">Yellow</option>
            <option value="blue">Blue</option>
            <option value="pink">Pink</option>
            <option value="red">Red</option>
          </select>
        </label>

        <label style={{ display: 'block', marginBottom: '20px' }}>
          Add Hat:
          <select
            value={hat}
            onChange={(e) => setHat(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '6px' }}
          >
            <option value="none">None</option>
            <option value="topHat">Top Hat</option>
            <option value="cowboy">Cowboy Hat</option>
            <option value="party">Party Hat</option>
          </select>
        </label>

        <button
          type="submit"
          style={{
            padding: '12px 24px',
            backgroundColor: '#ffcc00',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Build Duck
        </button>
      </form>

      <div className="duck-preview" style={{ marginTop: '40px' }}>
        <div style={{ position: 'relative', width: '220px', margin: '0 auto' }}>
          <img src={duckImage} alt={`Duck - ${color}`} style={{ width: '220px' }} />
          {hatImage && (
            <img
              src={hatImage}
              alt={`Hat - ${hat}`}
              style={{
                position: 'absolute',
                top: '-10px', // adjust position as needed
                left: '10px',
                width: '200px',
                pointerEvents: 'none'
              }}
            />
          )}
        </div>
        <p style={{ marginTop: '20px' }}>
          🦆 Preview: {name || 'Unnamed Duck'} wearing a {hat.replace('-', ' ')} and is {color}
        </p>
      </div>
    </div>
  );
}

export default Custom;
