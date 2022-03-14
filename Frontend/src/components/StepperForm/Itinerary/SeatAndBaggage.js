import React from 'react';
import { FaChair, FaCrown, FaHamburger, FaLuggageCart } from 'react-icons/fa';

const SeatAndBaggage = ({ seatChosen, superPassenger, travelers }) => {
  const travelerExample = {
    name: {
      firstName: 'Edu ',
      lastName: 'Sancho',
    },
  };
  return (
    <article className='info_container'>
      {travelers ? (
        travelers.map((traveler) => {
          return (
            <EachTravelerResume
              traveler={traveler}
              superPassenger={superPassenger}
              seatChosen={seatChosen}
            />
          );
        })
      ) : (
        <EachTravelerResume
          traveler={travelerExample}
          seatChosen={seatChosen}
          superPassenger={superPassenger}
        />
      )}
      {/*       {travelers.map((traveler) => {
        return (
          <React.Fragment>
            <h1>Pasajeros, asientos y equipaje</h1>
            <h2>
              {traveler.name.firstName} {traveler.name.lastName}
            </h2>
            <p className='bottom_line'>Adulto</p>
            <div className='aditional_info_container'>
              <div className='aditional_info'>
                <FaLuggageCart className='icon_passenger icon-color ' />
                <span>Maletas facturadas</span>
                <p> 0 maletas </p>
              </div>
              <div className='aditional_info '>
                <FaChair className='icon_passenger icon-color' />{' '}
                <span>Asientos</span>
                <p>
                  {seatChosen
                    ? seatChosen
                    : 'No se ha seleccionado ningún asiento'}{' '}
                </p>
              </div>
              <div className='aditional_info'>
                {' '}
                <FaCrown className='icon_passenger icon-color ' />
                <span>Pasajero frecuente</span>
                <p>
                  {' '}
                  {superPassenger
                    ? superPassenger
                    : 'No se ha añadido código de pasajero frecuente'}{' '}
                </p>
              </div>
              <div className='aditional_info'>
                {' '}
                <FaHamburger className='icon_passenger icon-color ' />
                <span>Selección de comida (solicitada a compañía aérea</span>
                <p>Estándar</p>
              </div>
            </div>
          </React.Fragment>
        );
      })} */}
    </article>
  );
};

const EachTravelerResume = ({ seatChosen, traveler, superPassenger }) => {
  return (
    <React.Fragment>
      <h1>Pasajeros, asientos y equipaje</h1>
      <h2>
        {traveler.name.firstName} {traveler.name.lastName}
      </h2>
      <p className='bottom_line'>Adulto</p>
      <div className='aditional_info_container'>
        <div className='aditional_info'>
          <FaLuggageCart className='icon_passenger icon-color ' />
          <span>Maletas facturadas</span>
          <p> 0 maletas </p>
        </div>
        <div className='aditional_info '>
          <FaChair className='icon_passenger icon-color' />{' '}
          <span>Asientos</span>
          <p>
            {seatChosen ? seatChosen : 'No se ha seleccionado ningún asiento'}{' '}
          </p>
        </div>
        <div className='aditional_info'>
          {' '}
          <FaCrown className='icon_passenger icon-color ' />
          <span>Pasajero frecuente</span>
          <p>
            {' '}
            {superPassenger
              ? superPassenger
              : 'No se ha añadido código de pasajero frecuente'}{' '}
          </p>
        </div>
        <div className='aditional_info'>
          {' '}
          <FaHamburger className='icon_passenger icon-color ' />
          <span>Selección de comida (solicitada a compañía aérea</span>
          <p>Estándar</p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SeatAndBaggage;
