import React, { useContext } from "react";
import { TokenContext } from "../../../context/TokenContext";
import PaymentElection from "./PaymentElection";
import { OfferPriceContext } from "../../../context/OfferPriceContext";
import FinalAcounting from "./FinalAcounting";
import FlightsResume from "./FlightsResume/FlightsResume";
import swal from "sweetalert";

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
      updatedOffer = await data.data.data.flightOffers[0];

      const insertId = await bookOffer(updatedOffer, token, travelers);

      return await insertId;
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
      const data = await res.json();
      return data.data;
    }
  } catch (error) {
    swal("No se ha podido realizar la reserva", " ", "error");
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

  //  Averiguamos el c??digo de la aerol??nea principal
  const airlineCode = flight.validatingAirlineCodes[0];

  return (
    <section className="paymentConfirmationContainer">
      <PaymentElection
        totalPrice={totalPrice}
        orderFlight={offerPrice}
        travelers={travelers}
      />

      <PaymentConfirmation>
        <FlightsResume itineraries={itineraries} airlineCode={airlineCode} />
        <FinalAcounting flight={flight} />
      </PaymentConfirmation>
    </section>
  );
};
const PaymentConfirmation = ({ children }) => {
  return <div className="paymentConfirmation">{children}</div>;
};
export default ResumeandPay;
