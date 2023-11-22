import React, { useState } from 'react';

import '../styles/busroute.css'

import RutaA17 from '../images/LaCarolinaA-17.png'
import RutaA30 from '../images/LaCarolinaA-30.png'
import RutaA6 from '../images/LaCarolinaA-6.png'

const ImageSelector = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getImageSrc = () => {
    // Lógica para obtener la ruta de la imagen basada en la opción seleccionada
    switch (selectedOption) {
      case 'Calle17':
        return RutaA17;
      case 'Calle30':
        return RutaA30;
      case 'Express':
        return RutaA6;
      default:
        return null;
    }
  };

  return (
    <div className='container'>
      <h3>Rutas de buses</h3>
      <label htmlFor="">La Carolina</label>
      <select onChange={handleSelectChange}>
        <option value="">Selecciona una opción</option>
        <option value="Calle17">Calle 17</option>
        <option value="Calle30">Calle 30</option>
        <option value="Express">Express</option>
      </select>
      {selectedOption && (
        <div className='selectedImage'>
          <img src={getImageSrc()} alt={`Imagen para ${selectedOption}`} />
        </div>
      )}
    </div>
  );
};

export default ImageSelector;
