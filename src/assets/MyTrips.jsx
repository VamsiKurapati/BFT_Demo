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
    icon: no_completed,
  },
  Cancelled: {
    title: "No mysteries missed !!",
    subtitle: "Every trip is a chance to explore the unknown",
    icon: no_cancelled,
  },
  Completed: {
    title: "You haven’t unwrapped any surprises yet",
    subtitle: "Ready to make some memories?",
    icon: no_upcoming,
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
    <section className="w-full min-h-screen px-4 py-6 sm:px-6 lg:px-8">
        <div className="relative bg-[#003566] rounded-xl max-w-[1200px] mx-auto shadow-lg border-l-[9px] border-[#F5B501] overflow-hidden p-4 sm:p-6 md:p-8">
            {/* Header */}
            <div className="text-[36px] sm:text-[44px] md:text-[55px] font-poppins font-bold text-white mb-4">
                My Trips
            </div>

            {/* Close Button */}
            <button
                className="absolute top-4 right-4 text-red-400 hover:text-red-600 text-xl"
                onClick={() => navigate('/')}
            >
                <FaTimesCircle />
            </button>

            {/* Car Animation */}
            <div className="relative h-[100px] sm:h-[120px] md:h-[150px] mb-[-16px] sm:mb-[-20px] lg:mb-[-24px]">
                <img
                    src={car_myTrips}
                    alt="Car"
                    className="absolute top-0 transition-all duration-500 ease-in-out w-[100px] sm:w-[120px] md:w-[150px]"
                    style={{ left: `calc(40% + ${carPosition * 15}%)` }}
                />
            </div>

            {/* Card Content */}
            <div className="relative bg-[#FFFFFF1A] p-4 sm:p-6 md:p-8 rounded-xl mb-8">

            {/* Tabs + Search */}
                <div className="flex flex-wrap justify-between items-center border-b border-blue-600 pb-3 mb-4 gap-y-4">
                    <div className="flex flex-wrap items-center gap-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className="flex items-center gap-2"
                            >
                                <img
                                    src={activeTab === tab ? tabIcons[tab].active : tabIcons[tab].default}
                                    alt={`${tab} icon`}
                                    className={`${
                                    activeTab === tab ? "w-10 h-10" : "w-6 h-6"
                                    } mb-1`}
                                />
                                <span
                                    className={`font-poppins font-semibold ${
                                    activeTab === tab
                                        ? "text-[#F5B501] text-[20px] sm:text-[28px] md:text-[32px]"
                                        : "text-[16px] sm:text-[18px] text-[#FFFFFF99]"
                                    }`}
                                >
                                    {tab}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="flex items-center bg-[#FFFFFF1A] py-2 px-4 rounded-2xl w-full sm:w-auto">
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent font-poppins text-white text-[14px] sm:text-[16px] outline-none w-full sm:w-auto"
                        />
                        <FaSearch className="ml-2 text-gray-300" />
                    </div>
                </div>

                {/* Message Content */}
                <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center sm:flex-row sm:items-start gap-4 text-center sm:text-left">
                    <img src={icon} alt="status icon" className="w-[60px] sm:w-[72px] h-[60px] sm:h-[72px]" />
                    <div className="flex flex-col">
                        <p className="font-poppins font-semibold text-[20px] sm:text-[24px] text-white mb-1">{title}</p>
                        <p className="text-[14px] sm:text-[16px] text-white font-poppins font-light">{subtitle}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

  );
}
