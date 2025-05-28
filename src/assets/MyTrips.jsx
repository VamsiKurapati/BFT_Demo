import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  Upcoming: {
    title: "No secret destinations lined up—yet",
    subtitle: "The world is waiting... are you packed?",
    icon: no_upcoming,
  },
  Cancelled: {
    title: "No mysteries missed !!",
    subtitle: "Every trip is a chance to explore the unknown",
    icon: no_cancelled,
  },
  Completed: {
    title: "You haven’t unwrapped any surprises yet",
    subtitle: "Ready to make some memories?",
    icon: no_completed,
  },
};

const tabIcons = {
  Upcoming: { default: completed, active: completed_1 },
  Cancelled: { default: cancelled, active: cancelled_1 },
  Completed: { default: upcoming, active: upcoming_1 },
};

export default function MyTrips() {
  const [activeTab, setActiveTab] = useState('Upcoming');
  const tabs = ['Upcoming', 'Cancelled', 'Completed'];

  const [carPosition, setCarPosition] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setCarPosition(tabs.indexOf(activeTab));
  }, [activeTab]);

  const { title, subtitle, icon } = tripsData[activeTab];

  return (
    <section className="w-full h-screen font-goudy">
      <div className="relative bg-[#003566] rounded-lg mx-auto shadow-lg border-l-[9px] border-[#F5B501] overflow-hidden p-8">

        {/* Header */}
        <div className="text-[55px] font-poppins font-bold text-[#FFFFFF] mb-4">My Trips</div>

        {/* Close Button */}
        <button className="absolute top-4 right-4 text-red-400 hover:text-red-600 text-xl"
            onClick={() => navigate('/')}
        >
          <FaTimesCircle />
        </button>

        {/* Moving Car */}
        <div className="relative h-12 pl-24 mb-4">
          <img
            src={car_myTrips}
            alt="Car"
            className="absolute top-0 transition-all duration-500 ease-in-out"
            style={{ left: `${carPosition * 33}%` }}
          />
        </div>

        <div className='relative mt-4 bg-[#FFFFFF1A] p-8'>
            {/* Tabs */}
            <div className="flex items-center space-x-6 border-b border-blue-600 pb-2 mb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className="relative pb-1 flex flex-row items-center"
                    >
                    <img
                        src={activeTab === tab ? tabIcons[tab].active : tabIcons[tab].default}
                        alt={`${tab} icon`}
                        className={`${activeTab === tab ? "w-[48px] h-[48px]" : "w-[24px] h-[24px]"} mb-1`}
                    />
                    <span className={`font-poppins font-semibold ${activeTab === tab ? "text-[#F5B501] text-[32px]" : "text-[20px] text-[#FFFFFF99]"}`}>{tab}</span>
                    </button>
                ))}

                {/* Search Bar */}
                <div className="right-4 flex items-center bg-[#174b7a] px-2 py-1 rounded">
                    <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none placeholder-gray-300 text-sm text-white"
                    />
                    <FaSearch className="mr-2 text-gray-300" />
                </div>
            </div>

            {/* Content */}
            <div className="text-center relative overflow-hidden flex flex-col md:flex-row">
                <img src={icon} alt="status icon" className="w-14 h-14 mx-auto mb-4" />
                <div className="flex flex-col">
                    <p className="font-poppins font-semibold text-[24px] text-white mb-2">{title}</p>
                    <p className="text-[16px] text-white font-poppins font-light">{subtitle}</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
