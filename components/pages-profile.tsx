"use client";

import { useState } from "react";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

export function ProfileComponent() {
  const [privacySettings, setPrivacySettings] = useState({
    showEmail: true,
    showPhone: false,
    allowMessages: true,
  });

  const toggleSetting = (setting: keyof typeof privacySettings) => {
    setPrivacySettings(prev => ({ ...prev, [setting]: !prev[setting] }));
  };

  return (
    <div className="min-h-screen bg-[#edf6f9] text-[#0d3b66]">
      <header className="bg-[#0d3b66] text-[#edf6f9] p-4">
        <h1 className="text-2xl font-bold">User Profile</h1>
      </header>
      
      <main className="container mx-auto p-4 max-w-3xl">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center mb-6">
            <div className="w-24 h-24 bg-[#83c5be] rounded-full flex items-center justify-center mr-4">
              <FaUser className="text-4xl text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-[#006d77]">Travel Enthusiast</p>
            </div>
          </div>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Name</label>
              <input type="text" id="name" value="John Doe" className="w-full p-2 border border-slate-200 border-[#83c5be] rounded-md focus:outline-none focus:ring-2 focus:ring-[#006d77] dark:border-slate-800" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input type="email" id="email" value="john.doe@example.com" className="w-full p-2 border border-slate-200 border-[#83c5be] rounded-md focus:outline-none focus:ring-2 focus:ring-[#006d77] dark:border-slate-800" />
            </div>
            <div>
              <label htmlFor="bio" className="block mb-1 font-medium">Bio</label>
              <textarea id="bio" rows={3} className="w-full p-2 border border-slate-200 border-[#83c5be] rounded-md focus:outline-none focus:ring-2 focus:ring-[#006d77] dark:border-slate-800" 
                defaultValue="Passionate traveler always looking for new adventures and connections around the world." />
            </div>
            <button type="submit" className="bg-[#006d77] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300">
              Save Changes
            </button>
          </form>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Privacy Settings</h3>
          <div className="space-y-4">
            {Object.entries(privacySettings).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="font-medium">{key.replace(/([A-Z])/g, "' $1'").replace(/^./, str => str.toUpperCase())}</span>
                <button
                  onClick={() => toggleSetting(key as keyof typeof privacySettings)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#006d77] ${
                    value ? "bg-[#83c5be]" : "bg-gray-300"
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-300 ${
                    value ? "translate-x-6" : ""
                  }`} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}