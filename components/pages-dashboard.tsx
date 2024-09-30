"use client";

import { useState } from "react";
import { FaBell, FaPlane, FaHotel, FaMapMarkerAlt, FaUser } from "react-icons/fa";

export function DashboardComponent() {
  const [notifications, setNotifications] = useState(3);

  const clearNotifications = () => setNotifications(0);

  return (
    <div className="min-h-screen bg-[#edf6f9] text-[#0d3b66]">
      <header className="bg-[#0d3b66] text-[#edf6f9] p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Travel Buddy</h1>
        <div className="relative">
          <FaBell className="text-2xl cursor-pointer" onClick={clearNotifications} />
          {notifications > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#83c5be] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {notifications}
            </span>
          )}
        </div>
      </header>
      
      <main className="container mx-auto p-4 max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">Welcome back, John!</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#83c5be]">
            <h3 className="text-xl font-bold mb-4">Upcoming Trip</h3>
            <p className="text-lg mb-2">Paris, France</p>
            <p className="text-[#006d77]">June 15 - June 22, 2023</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#006d77]">
            <h3 className="text-xl font-bold mb-4">Travel Stats</h3>
            <p className="mb-2">Countries visited: 12</p>
            <p>Total trips: 24</p>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-4">Quick Access</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { icon: FaPlane, label: "Book Flight" },
            { icon: FaHotel, label: "Find Hotel" },
            { icon: FaMapMarkerAlt, label: "Explore Destinations" },
            { icon: FaUser, label: "Find Travel Buddy" },
          ].map((item, index) => (
            <button key={index} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
              <item.icon className="text-3xl mb-2 text-[#83c5be]" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {[
            "You added a new trip to Paris",
            "Sarah accepted your travel buddy request",
            "New message from Alex about your upcoming trip",
            "You reviewed your stay at Hotel Luxe in Rome",
          ].map((activity, index) => (
            <div key={index} className="p-4 border-b border-gray-200 last:border-b-0">
              <p>{activity}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}