import React, { useState } from 'react';
import '../style.css';
import MyTrip from './MyTrip';
import flightExample from '../InfoFlights/flightExample';
import { dateFormat, durationFormat } from '../../../helpers/formatHelp';
import { RATES } from '../InfoFlights/constantInfo';

/* 
################################
## Averiguar tiempos de vuelo ##
################################
*/

const goingDateToFormat = new Date(
  flightExample.data.flightOffers[0].itineraries[0].segments[0].departure.at
);

const returnDateToFormat = new Date(
  flightExample.data.flightOffers[0].itineraries[0].segments[0].arrival.at
);

/* 
#######################
## FECHAS DE VUELOS  ##
#######################
*/

const goingDate = dateFormat(goingDateToFormat);
const returnDate = dateFormat(returnDateToFormat);

const RateChoice = ({ rateCharge, setRateCharge }) => {
  return (
    <div className='rateChoicePage'>
      <ChooseARate rateCharge={rateCharge} setRateCharge={setRateCharge} />
      <MyTrip goingDate={goingDate} returnDate={returnDate} />
    </div>
  );
};
const ChooseARate = ({ rateCharge, setRateCharge }) => {
  return (
    <div className='rates-choices'>
      {<ListOfChoices rateCharge={rateCharge} setRateCharge={setRateCharge} />}
    </div>
  );
};

const ListOfChoices = ({ rateCharge, setRateCharge }) => {
  return RATES.map((rate, key) => {
    return (
      <div className='rate-card' key={key}>
        <div className='title'>
          <h2>{rate.title} </h2>
        </div>
        <div className='included'>
          <span>Incluido</span>
          <ul>
            {rate.included.map((rate, key) => {
              return (
                <li style={{ listStyle: 'none' }} key={key}>
                  {' '}
                  {rate}{' '}
                </li>
              );
            })}
          </ul>
        </div>
        <div className='non-included'>
          <span>No incluido</span>
          {rate.nonIncluded.map((rate, key) => {
            return (
              <li style={{ listStyle: 'none' }} key={key}>
                {' '}
                {rate}{' '}
              </li>
            );
          })}
        </div>
        <div className='rate-price'>
          <span>{Number(rate.price)} € </span>
          <p>Tarifa por persona</p>

          <button
            className='btn-card'
            onClick={() => setRateCharge(Number(rate.price))}
          >
            Añadir
          </button>
        </div>
      </div>
    );
  });
};
export default RateChoice;