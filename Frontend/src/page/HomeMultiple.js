import React, { useState, useEffect } from 'react';
import { Link, Outlet, Route, Routes, Router } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import '../css/homescreen.css';
import {
  RoundTrip,
  BasicSearch,
  MultipleSearches,
} from '../components/Search/BasicSearch/BasicSearch';
import { ListFlights } from '../components/Search/ListFlights/ListFlights';
const { PUBLIC_HOST_BACKEND } = process.env;

const PORT = 4000;

const HomeMultiple = () => {
  const [origin, setOrigin] = useLocalStorage('origin', '');
  const [destination, setDestination] = useLocalStorage('password', '');
  const [departureDate, setDepartureDate] = useLocalStorage(
    'departureDate',
    ''
  );
  const [returnDate, setReturndate] = useState('');
  const [adults, setAdults] = useLocalStorage('adult', '');
  const [data, setData] = useState('');

  const handleSubmit = (setter) => (e) => {
    e.preventDefault();
    setter(e.target.value);
  };

  const search = async (e) => {
    e.preventDefault();

    try {
      let fetchUrl = `http://localhost:4000/search?origin=${origin}&destination=${destination}&departuredate=${departureDate}&adults=${adults}`;
      if (returnDate) {
        fetchUrl += `&returndate=${returnDate}`;
      }
      const response = await fetch(fetchUrl);
      const body = await response.json();

      if (response.ok) {
        setData(body.data.data);
      }
    } catch (error) {
      console.error('Error de comunicación', error);
    }
  };

  return (
    <main className='searchEnvironment'>
      {
        <MultipleSearches
          destination={destination}
          search={search}
          origin={origin}
          setOrigin={setOrigin}
          setDestination={setDestination}
          z
          setAdults={setAdults}
          handleSubmit={handleSubmit}
          adults={adults}
          setReturndate={setReturndate}
        />
      }

      <ListFlights data={data} />
    </main>
  );
};

export default HomeMultiple;
