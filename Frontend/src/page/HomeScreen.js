import React, { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import '../css/homescreen.css';
import { BasicSearch } from '../components/Search/BasicSearch/BasicSearch';
import { ListFlights } from '../components/Search/ListFlights/ListFlights';
import useSearch from '../hooks/useSearch';
import { MoonLoader } from 'react-spinners';

const override = `
  display: block;
  margin: 10rem auto;
  border-color: red;
`;

const HomeScreen = () => {
  // Obtenemos los datos de los input y los guardamos en el localStorage
  // para mantenerlos si recarga la página

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturndate] = useState('');
  const [adults, setAdults] = useState(1);

  // Objeto que aglutina los parámetros de búsqueda que usará
  // el Custom Hook useSearch

  const searching = {
    origin,
    destination,
    departureDate,
    returnDate,
    adults,
  };

  // Función para modificar el valor de cada variable
  // a través del onChange de cada input

  const handleSubmit = (setter) => (e) => {
    e.preventDefault();
    setter(e.target.value);
  };

  return (
    <main className='searchEnvironment'>
      <BasicSearch
        destination={destination}
        origin={origin}
        departureDate={departureDate}
        setOrigin={setOrigin}
        setDestination={setDestination}
        setDepartureDate={setDepartureDate}
        returnDate={returnDate}
        setAdults={setAdults}
        handleSubmit={handleSubmit}
        adults={adults}
        setReturndate={setReturndate}
      />
    </main>
  );
};

export default HomeScreen;
