// src/components/TravelTimeCalculator.js
import React, { useState } from 'react';
import axios from 'axios';

const TravelTimeCalculator = () => {
  const [locationA, setLocationA] = useState('');
  const [locationB, setLocationB] = useState('');
  const [travelTime, setTravelTime] = useState(null);

  const calculateTravelTime = async () => {
    try {
    
      await new Promise(resolve => setTimeout(resolve, 1000));

      setTravelTime(locationA - locationA); // Reemplaza esto con la lógica real de cálculo.
    } catch (error) {
      console.error('Error calculating travel time:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Calculador de Tiempo de Viaje</h2>
      <form>
        <label>
          Punto A:
          <br />
          <input
            type="text"
            value={locationA}
            onChange={(e) => setLocationA(e.target.value)}
          />
        </label>
        <br />
        <label>
          Punto B:
          <br />
          <input
            type="text"
            value={locationB}
            onChange={(e) => setLocationB(e.target.value)}
          />
        </label>
        <br />
        <button type="button" className='' onClick={calculateTravelTime}>
          Calcular Tiempo de Viaje
        </button>
      </form>
      {travelTime && <p>Tiempo de Viaje: {travelTime}</p>}
    </div>
  );
};

export default TravelTimeCalculator;
