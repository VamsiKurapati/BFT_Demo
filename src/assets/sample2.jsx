import React, { useState } from "react";
import Select from "react-select";
import { Country, State, City } from "country-state-city";

const LocationSelector = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const countryOptions = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

  const stateOptions = selectedCountry
    ? State.getStatesOfCountry(selectedCountry.value).map((state) => ({
        value: state.isoCode,
        label: state.name,
      }))
    : [];

  const cityOptions = selectedState
    ? City.getCitiesOfState(selectedCountry.value, selectedState.value).map((city) => ({
        value: city.name,
        label: city.name,
      }))
    : [];

  return (
    <div className="space-y-4 w-[300px]">
      <Select
        options={countryOptions}
        value={selectedCountry}
        onChange={(country) => {
          setSelectedCountry(country);
          setSelectedState(null);
          setSelectedCity(null);
        }}
        placeholder="Select Country"
      />
      <Select
        options={stateOptions}
        value={selectedState}
        onChange={(state) => {
          setSelectedState(state);
          setSelectedCity(null);
        }}
        placeholder="Select State"
        isDisabled={!selectedCountry}
      />
      <Select
        options={cityOptions}
        value={selectedCity}
        onChange={(city) => setSelectedCity(city)}
        placeholder="Select City"
        isDisabled={!selectedState}
      />
    </div>
  );
};

export default LocationSelector;
