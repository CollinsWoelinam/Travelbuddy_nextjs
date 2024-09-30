"use client";

import { useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaUser,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

export function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    budget: 500,
    duration: 7,
    interests: ["culture", "nature"],
  });

  const updateFilter = (key: string, value: number | string[]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const dummyMatches = [
    {
      name: "Alice",
      age: 28,
      destination: "Paris",
      dates: "Aug 15 - Aug 22",
    },
    {
      name: "Bob",
      age: 32,
      destination: "Tokyo",
      dates: "Sep 1 - Sep 10",
    },
    {
      name: "Charlie",
      age: 25,
      destination: "New York",
      dates: "Jul 20 - Jul 27",
    },
  ];

  return (
    <div className="min-h-screen bg-[#edf6f9] text-[#0d3b66]">
      <header className="bg-[#0d3b66] text-[#edf6f9] p-4">
        <h1 className="text-2xl font-bold">Find Your Travel Buddy</h1>
      </header>

      <main className="container mx-auto p-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow p-2 border  border-[#83c5be] rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#006d77] dark:border-slate-800"
            />
            <button className="bg-[#006d77] text-white p-2 rounded-r-md hover:bg-opacity-90 transition-colors duration-300">
              <FaSearch />
            </button>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="block mb-2 font-medium">Budget (per day)</label>
              <input
                type="range"
                min="0"
                max="1000"
                step="50"
                value={filters.budget}
                onChange={(e) =>
                  updateFilter("budget", parseInt(e.target.value))
                }
                className="w-full"
              />
              <div className="text-center mt-2">${filters.budget}</div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="block mb-2 font-medium">
                Trip Duration (days)
              </label>
              <input
                type="range"
                min="1"
                max="30"
                value={filters.duration}
                onChange={(e) =>
                  updateFilter("duration", parseInt(e.target.value))
                }
                className="w-full"
              />
              <div className="text-center mt-2">{filters.duration} days</div>
            </div>
          </div>

          <div className="mt-4">
            <label className="block mb-2 font-medium">Interests</label>
            <div className="flex flex-wrap gap-2">
              {[
                "culture",
                "nature",
                "food",
                "adventure",
                "relaxation",
              ].map((interest) => (
                <button
                  key={interest}
                  onClick={() =>
                    updateFilter(
                      "interests",
                      filters.interests.includes(interest)
                        ? filters.interests.filter((i) => i !== interest)
                        : [...filters.interests, interest]
                    )
                  }
                  className={`px-3 py-1 rounded-full text-sm ${
                    filters.interests.includes(interest)
                      ? "bg-[#83c5be] text-white"
                      : "bg-gray-200 text-[#0d3b66]"
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Potential Travel Buddies</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dummyMatches.map((match, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-[#83c5be] rounded-full flex items-center justify-center mr-3">
                  <FaUser className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-bold">{match.name}</h3>
                  <p className="text-sm text-gray-600">{match.age} years old</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-[#006d77] mr-2" />
                <span>{match.destination}</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="text-[#006d77] mr-2" />
                <span>{match.dates}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
