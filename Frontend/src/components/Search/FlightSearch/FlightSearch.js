import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { es } from "date-fns/locale";
import { Button } from "@mui/material";

import {
  InputAdults,
  InputDepartureDate,
  InputDestination,
  InputOrigin,
  InputReturnDate,
} from "./Inputs";
import Tabs from "./Tab";
import swal from "sweetalert";

const FlightSearch = ({
  search,
  origin,
  setOrigin,
  setDestination,
  destination,
  departureDate,
  setDepartureDate,
  returnDate,
  setReturndate,
  adults,
  setAdults,
  handleSubmit,
}) => {
  const [withReturn, setWithReturn] = useState(false);

  let url = `/search?origin=${origin}&destination=${destination}&departureDate=${departureDate}&adults=${adults}`;
  if (withReturn) {
    url += `&returnDate=${returnDate}`;
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={es}>
      <section className="searchFlight">
        <Tabs withReturn={withReturn} setWithReturn={setWithReturn} />
        <InputSearch
          origin={origin}
          setOrigin={setOrigin}
          destination={destination}
          setDestination={setDestination}
          departureDate={departureDate}
          setDepartureDate={setDepartureDate}
          returnDate={returnDate}
          setReturndate={setReturndate}
          url={url}
          adults={adults}
          setAdults={setAdults}
          withReturn={withReturn}
          search={search}
        />
      </section>
    </LocalizationProvider>
  );
};

const InputSearch = ({
  origin,
  setOrigin,
  destination,
  setDestination,
  departureDate,
  setDepartureDate,
  returnDate,
  setReturndate,
  url,
  adults,
  setAdults,
  withReturn,
}) => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  const validateInputs = (inputs, errors) => {
    console.log(inputs);
    const [formErrors, setFormErrors] = errors;
    let errorObject = {};
    for (const input in inputs) {
      if (inputs[input].length === 0) {
        errorObject[input] = "Campo vacío";
      }
    }

    //Si es solo ida borramos error en returnDate
    if (!withReturn) {
      delete errorObject.returnDate;
    }
    setFormErrors(errorObject);
    console.log(errorObject);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validateInputs(
      { origin, destination, departureDate, returnDate, adults, withReturn },
      [formErrors, setFormErrors]
    );

    if (formErrors.length == 0) {
      navigate(url);
    } else {
      swal("Cumplimenta todo los campos", " ", "error");
    }
    //Timeout para que desparezcan los errores
    setTimeout(() => {
      setFormErrors({});
    }, 2000);
  };
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="inputsFlight">
        <InputOrigin
          origin={origin}
          setOrigin={setOrigin}
          errors={formErrors}
        />

        <InputDestination
          destination={destination}
          setDestination={setDestination}
          errors={formErrors}
        />
        <InputDepartureDate
          departureDate={departureDate}
          setDepartureDate={setDepartureDate}
          errors={formErrors}
        />

        {withReturn && (
          <InputReturnDate
            departureDate={departureDate}
            returnDate={returnDate}
            setReturndate={setReturndate}
            errors={formErrors}
          />
        )}

        <InputAdults
          adults={adults}
          setAdults={setAdults}
          errors={formErrors}
        />
      </div>
      <Button className="btn search-submit" type="submit" url={url}>
        Buscar
      </Button>
    </form>
  );
};

export { FlightSearch, InputSearch };
