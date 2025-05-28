import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimesCircle } from 'react-icons/fa';
import car_myTrips from "/car-myTrips.png";

// Tab Icons
import upcoming from "/upcoming.png";
import upcoming_1 from "/upcoming_1.png";
import cancelled from "/cancelled.png";
import cancelled_1 from "/cancelled_1.png";
import completed from "/completed.png";
import completed_1 from "/completed_1.png";

// Content Icons
import no_upcoming from "/no_upcoming.png";
import no_cancelled from "/no_cancelled.png";
import no_completed from "/no_completed.png";

const tripsData = {
  upcoming: {
    title: "No secret destinations lined up—yet",
    subtitle: "The world is waiting... are you packed?",
    icon: no_upcoming,
    bgImage: upcoming,
  },
  cancelled: {
    title: "No mysteries missed !!",
    subtitle: "Every trip is a chance to explore the unknown",
    icon: no_cancelled,
    bgImage: cancelled,
  },
  completed: {
    title: "You haven’t unwrapped any surprises yet",
    subtitle: "Ready to make some memories?",
    icon: no_completed,
    bgImage: completed,
  },
};

const tabIcons = {
  upcoming: { default: upcoming, active: upcoming_1 },
  cancelled: { default: cancelled, active: cancelled_1 },
  completed: { default: completed, active: completed_1 },
};

export default function MyTrips() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const tabs = ['upcoming', 'cancelled', 'completed'];

  const [carPosition, setCarPosition] = useState(0);

  useEffect(() => {
    setCarPosition(tabs.indexOf(activeTab));
  }, [activeTab]);

  const { title, subtitle, icon, bgImage } = tripsData[activeTab];

  return (
    <section className="w-full min-h-screen font-goudy flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="bg-[#0e3a65] text-white p-6 rounded-lg mx-auto shadow-lg relative w-full max-w-3xl overflow-hidden">

        {/* Header */}
        <div className="text-3xl font-bold mb-4">My Trips</div>

        {/* Moving Car */}
        <div className="relative h-12 mb-4">
          <img
            src={car_myTrips}
            alt="Car"
            className="absolute top-0 transition-all duration-500 ease-in-out"
            style={{ left: `${carPosition * 33}%` }}
          />
        </div>

        {/* Close Button */}
        <button className="absolute top-4 right-4 text-red-400 hover:text-red-600 text-xl">
          <FaTimesCircle />
        </button>

        {/* Tabs */}
        <div className="flex items-center space-x-6 border-b border-blue-600 pb-2 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-1 flex flex-col items-center ${
                activeTab === tab ? 'text-yellow-400 font-semibold' : 'text-white opacity-70'
              }`}
            >
              <img
                src={activeTab === tab ? tabIcons[tab].active : tabIcons[tab].default}
                alt={`${tab} icon`}
                className="w-6 h-6 mb-1"
              />
              <span className="capitalize text-sm">{tab}</span>
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 rounded"></span>
              )}
            </button>
          ))}

          {/* Search Bar */}
          <div className="ml-auto flex items-center bg-[#174b7a] px-2 py-1 rounded">
            <FaSearch className="mr-2 text-gray-300" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none placeholder-gray-300 text-sm text-white"
            />
          </div>
        </div>

        {/* Content */}
        <div
          className="bg-[#174b7a] rounded-lg p-6 text-center relative overflow-hidden"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <img src={icon} alt="status icon" className="w-14 h-14 mx-auto mb-4" />
          <p className="font-semibold text-lg mb-2">{title}</p>
          <p className="text-sm text-gray-200">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
