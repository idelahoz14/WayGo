// src/components/TravelTimeCalculator.js
import React, { useState } from 'react';
import axios from 'axios';

const TravelTimeCalculator = () => {
  const [locationA, setLocationA] = useState('');
  const [locationB, setLocationB] = useState('');
  const [travelTime, setTravelTime] = useState(null);

  const calculateTravelTime = async () => {
    try {
      // Aquí puedes implementar la lógica para calcular el tiempo de viaje
      // Puedes usar una API de geocodificación o algún otro método de cálculo.

      // En este ejemplo, simplemente mostraremos un mensaje de éxito después de 2 segundos.
      await new Promise(resolve => setTimeout(resolve, 2000));

      setTravelTime('2 horas'); // Reemplaza esto con la lógica real de cálculo.
    } catch (error) {
      console.error('Error calculating travel time:', error);
    }
  };

  return (
    <div>
      <h2>Calculador de Tiempo de Viaje</h2>
      <form>
        <label>
          Punto A:
          <input
            type="text"
            value={locationA}
            onChange={(e) => setLocationA(e.target.value)}
          />
        </label>
        <br />
        <label>
          Punto B:
          <input
            type="text"
            value={locationB}
            onChange={(e) => setLocationB(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={calculateTravelTime}>
          Calcular Tiempo de Viaje
        </button>
      </form>
      {travelTime && <p>Tiempo de Viaje: {travelTime}</p>}
    </div>
  );
};

export default TravelTimeCalculator;
