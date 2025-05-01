import React, { useState } from 'react';
import yellowDuck from '/assets/yellowduckies.jpg';
import blueDuck from '/assets/blueduckies.jpg';
import pinkDuck from '/assets/pinkduckies.jpg';
import redDuck from '/assets/redduckies.jpg';
import topHat from '/assets/tophat.png';
import cowboyHat from '/assets/cowboyhat.png';
import partyHat from '/assets/partyhat.png';

function Custom() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('yellow');
  const [hat, setHat] = useState('none');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your custom duck:\nName: ${name}\nColor: ${color}\nHat: ${hat}`);
  };

  const duckMap = {
    yellow: yellowDuck,
    blue: blueDuck,
    pink: pinkDuck,
    red: redDuck,
  };

  const hatMap = {
    'top-hat': topHat,
    cowboy: cowboyHat,
    party: partyHat,
  };

  const duckImage = duckMap[color];
  const hatImage = hat !== 'none' ? hatMap[hat] : null;

  const getHatStyle = () => {
    switch (hat) {
      case 'top-hat':
        return {
          top: '-25px',
          width: '90px',
        };
      case 'cowboy':
        return {
          top: '-15px',
          width: '150px',
        };
      case 'party':
        return {
          top: '-15px',
          width: '60px',
        };
      default:
        return {};
    }
  };

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
              border: '1px solid #ccc',
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
            <option value="top-hat">Top Hat</option>
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
            cursor: 'pointer',
          }}
        >
          Build Duck
        </button>
      </form>

      <div className="duck-preview" style={{ marginTop: '40px' }}>
        <div style={{ position: 'relative', width: '220px', margin: '0 auto' }}>
          {/* Duck Image */}
          <img
            src={duckImage}
            alt={`Duck - ${color}`}
            style={{
              width: '220px',
              position: 'relative',
              zIndex: 1,
              marginTop: '40px',
            }}
          />
          {/* Hat Image */}
          {hatImage && (
            <img
              src={hatImage}
              alt={`Hat - ${hat}`}
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                pointerEvents: 'none',
                zIndex: 2,
                ...getHatStyle(),
              }}
            />
          )}
        </div>

        <p style={{ marginTop: '30px', fontSize: '16px' }}>
          🦆 Preview: {name || 'Unnamed Duck'} wearing a {hat.replace('-', ' ')} and is {color}
        </p>
      </div>
    </div>
  );
}

export default Custom;
