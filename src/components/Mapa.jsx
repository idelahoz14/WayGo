import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import credentials from '../credentials';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '90vh',
};
const center = {
  lat: 11.01575176754145, // default latitude
  lng: -74.80396015574993, // default longitude
};

const Mapa = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: credentials.apiKey,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Mapa;