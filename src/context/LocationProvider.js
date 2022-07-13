import React, { createContext, useState } from "react";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const defaultLocation = {
    city: "",
    lat: 37.000000,
    lon: 35.321335,
  };

  const [location, setLocation] = useState({ ...defaultLocation });

  const values = {
    location,
    setLocation,
  };

  return (
    <LocationContext.Provider value={values}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
