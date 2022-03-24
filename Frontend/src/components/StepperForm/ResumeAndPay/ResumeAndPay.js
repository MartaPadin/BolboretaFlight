import React, { useContext, useEffect } from "react";
import { TokenContext } from "../../../context/TokenContext";
import PaymentElection from "./PaymentElection";
import { OfferPriceContext } from "../../../context/OfferPriceContext";
import FinalAcounting from "./FinalAcounting";
import FlightsResume from "./FlightsResume/FlightsResume";

const offerPrice = async (flightOffer, token, travelers) => {
  const body = {
    data: {
      type: "flight-offers-pricing",
      flightOffers: [flightOffer],
    },
  };
  let updatedOffer;
  try {
    const res = await fetch(
      `http://${process.env.REACT_APP_PUBLIC_HOST_BACKEND}:${process.env.REACT_APP_PUBLIC_PORT_BACKEND}/pricing`,
      {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await res.json();

    if (res.ok) {
      updatedOffer = data.data.data.flightOffers[0];
      bookOffer(updatedOffer, token, travelers);
      console.log("booking price ok");
    }
  } catch (error) {
    console.error(error);
  }
};

const bookOffer = async (updatedFlightOrder, token, travelers) => {
  const flightOrder = {
    itinerary: updatedFlightOrder,
    travelers: travelers,
  };
  try {
    const res = await fetch(
      `http://${process.env.REACT_APP_PUBLIC_HOST_BACKEND}:${process.env.REACT_APP_PUBLIC_PORT_BACKEND}/booking/newBooking`,
      {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(flightOrder),
      }
    );

    if (res.ok) {
      console.log(res);
      console.log("Booking OK");
    }
  } catch (error) {
    console.error(error);
  }
};

const seatMap = async (updatedFlightOrder, token) => {
  const body = {
    data: " ",
  };
  try {
    const res = await fetch(
      `http://${process.env.REACT_APP_PUBLIC_HOST_BACKEND}:${process.env.REACT_APP_PUBLIC_PORT_BACKEND}/seatmap`,
      {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
  } catch (error) {}
};

const ResumeandPay = ({ rateCharge, travelers, totalPrice }) => {
  // Contextos
  const [token] = useContext(TokenContext);
  const [flight, setFlight] = useContext(OfferPriceContext);

  // Itinerarios de vuelo
  const { itineraries } = flight;

  //  Averiguamos el código de la aerolínea principal
  const airlineCode = flight.validatingAirlineCodes[0];

  const orderFlight = async (e) => {
    e.preventDefault();
    offerPrice(flight, token, travelers);
  };

  return (
    <section className="paymentConfirmationContainer">
      <PaymentElection totalPrice={totalPrice} orderFlight={orderFlight} />

      <PaymentConfirmation totalprice={totalPrice}>
        <FlightsResume itineraries={itineraries} airlineCode={airlineCode} />
        <FinalAcounting
          flight={flight}
          rateCharge={rateCharge}
          orderFlight={orderFlight}
        />
      </PaymentConfirmation>
    </section>
  );
};
const PaymentConfirmation = ({ children }) => {
  return <div className="paymentConfirmation">{children}</div>;
};
export default ResumeandPay;
