import React, { useEffect, useState } from 'react';

const WorldStatesSelector = () => {
  const [countryStateData, setCountryStateData] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);

  // Fetch countries and states from Gist
  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/manishtiwari25/0fa055ee14f29ee6a7654d50af20f095/raw/country_state.json'
    )
      .then((response) => response.json())
      .then((data) => setCountryStateData(data))
      .catch((error) =>
        console.error('Error fetching country-state data:', error)
      );
  }, []);

  // Handle multiple selection
  const handleStatesSelectionChange = (event) => {
    const selected = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedStates(selected);
    console.log('Selected States:', selected);
  };

  // Validate selection
  const isValidSelection = selectedStates.length > 0;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Select States or Regions on Your Bucket List
        </h2>
        <div className="w-full mb-4">
          <select
  multiple
  value={selectedStates}
  onChange={handleStatesSelectionChange}
  className="w-full h-64 px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm overflow-y-auto"
>
  {countryStateData.map((country, index) => (
    <optgroup key={index} label={country.name}>
      {(country.states || []).map((state, idx) => (
        <option key={idx} value={`${country.name} - ${state}`}>
          {state}
        </option>
      ))}
    </optgroup>
  ))}
</select>

        </div>
        <button
          className={`w-full py-2 px-4 rounded-lg font-bold ${
            isValidSelection
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={!isValidSelection}
          onClick={() => alert(`You selected:\n${selectedStates.join('\n')}`)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default WorldStatesSelector;
