import { Fragment, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { AdvancedSearch } from "../components/Search/AdvancedSearch/AdvancedSearch";

const AdvancedSearchScreen = () => {
  let params = useQuery();
  let origen = params.get("origin");
  let destino = params.get("destination");
  let diaSalida = params.get("departureDate");
  let diaLlegada = params.get("returnDate");
  let adultos = params.get("adults");

  const search = {
    origin: origen,
    destination: destino,
    departureDate: diaSalida,
    returnDate: diaLlegada,
    adults: adultos,
  };

  return (
    <Fragment>
      <AdvancedSearch search={search} />
    </Fragment>
  );
};

export default AdvancedSearchScreen;
