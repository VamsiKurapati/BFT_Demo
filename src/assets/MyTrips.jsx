import React, { useState } from 'react';
import { FaSuitcaseRolling, FaSearch, FaTimesCircle, FaLock, FaBan, FaCarSide } from 'react-icons/fa';

const tripsData = {
  upcoming: {
    icon: <FaSuitcaseRolling className="text-yellow-400 text-4xl mb-4" />,
    title: "No secret destinations lined up—yet",
    subtitle: "The world is waiting... are you packed?",
  },
  cancelled: {
    icon: <FaBan className="text-yellow-400 text-4xl mb-4" />,
    title: "No mysteries missed !!",
    subtitle: "Every trip is a chance to explore the unknown",
  },
  completed: {
    icon: <FaLock className="text-yellow-400 text-4xl mb-4" />,
    title: "You haven’t unwrapped any surprises yet",
    subtitle: "Ready to make some memories?",
  },
};

export default function MyTrips() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const tabs = [
    { id: 'upcoming', label: 'Upcoming', icon: <FaSuitcaseRolling /> },
    { id: 'cancelled', label: 'Cancelled', icon: <FaBan /> },
    { id: 'completed', label: 'Completed', icon: <FaLock /> },
  ];

  const { icon, title, subtitle } = tripsData[activeTab];

  return (
    <section className="w-full font-goudy">
        <div className="bg-[#0e3a65] text-white p-6 rounded-lg mx-auto shadow-lg relative">
        <div className="text-3xl font-bold mb-4">My Trips</div>
        <FaCarSide className="absolute top-4 right-16 text-blue-300 text-3xl opacity-30" />
        <button className="absolute top-4 right-4 text-red-400 hover:text-red-600 text-xl">
            <FaTimesCircle />
        </button>

        {/* Tabs */}
        <div className="flex items-center space-x-6 border-b border-blue-600 pb-2 mb-4">
            {tabs.map((tab) => (
            <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-1 ${
                activeTab === tab.id ? 'text-yellow-400 font-semibold' : 'text-white opacity-70'
                }`}
            >
                <div className="flex items-center space-x-1">
                {tab.icon}
                <span>{tab.label}</span>
                </div>
                {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 rounded"></span>
                )}
            </button>
            ))}

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
        <div className="bg-[#174b7a] rounded-lg p-6 text-center">
            {icon}
            <p className="font-semibold text-lg mb-2">{title}</p>
            <p className="text-sm text-gray-200">{subtitle}</p>
        </div>
        </div>
    </section>
  );
}