"use client"

import { useState } from "react";
import { FaPlus, FaTrash, FaComments } from "react-icons/fa";

export function TripPlanningComponent() {
  const [activities, setActivities] = useState([
    { id: 1, day: 1, time: "09:00", description: "Visit Eiffel Tower" },
    { id: 2, day: 1, time: "14:00", description: "Lunch at Le Chalet" },
    { id: 3, day: 2, time: "10:00", description: "Louvre Museum Tour" },
  ]);

  const [newActivity, setNewActivity] = useState({ day: 1, time: "", description: "" });
  const [showForum, setShowForum] = useState(false);

  const addActivity = () => {
    if (newActivity.time && newActivity.description) {
      setActivities([...activities, { ...newActivity, id: Date.now() }]);
      setNewActivity({ day: 1, time: "", description: "" });
    }
  };

  const removeActivity = (id: number) => {
    setActivities(activities.filter(activity => activity.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#edf6f9] text-[#0d3b66]">
      <header className="bg-[#0d3b66] text-[#edf6f9] p-4">
        <h1 className="text-2xl font-bold">Trip Planning</h1>
      </header>

      <main className="container mx-auto p-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Paris Trip Itinerary</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Activity description"
              value={newActivity.description}
              onChange={(e) => setNewActivity({ ...newActivity, description: e.target.value })}
              className="w-full p-2 border border-slate-200 border-[#83c5be] rounded-md focus:outline-none focus:ring-2 focus:ring-[#006d77] mb-2 dark:border-slate-800"
            />
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Day"
                value={newActivity.day}
                onChange={(e) => setNewActivity({ ...newActivity, day: parseInt(e.target.value) })}
                className="w-1/4 p-2 border border-slate-200 border-[#83c5be] rounded-md focus:outline-none focus:ring-2 focus:ring-[#006d77] dark:border-slate-800"
              />
              <input
                type="time"
                value={newActivity.time}
                onChange={(e) => setNewActivity({ ...newActivity, time: e.target.value })}
                className="w-1/4 p-2 border border-slate-200 border-[#83c5be] rounded-md focus:outline-none focus:ring-2 focus:ring-[#006d77] dark:border-slate-800"
              />
              <button
                onClick={addActivity}
                className="flex-grow bg-[#006d77] text-white p-2 rounded-md hover:bg-opacity-90 transition-colors duration-300"
              >
                <FaPlus className="inline mr-2" /> Add Activity
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {Array.from(new Set(activities.map(a => a.day))).sort((a, b) => a - b).map(day => (
              <div key={day} className="border-b border-[#83c5be] pb-4">
                <h3 className="text-xl font-bold mb-2">Day {day}</h3>
                {activities
                  .filter(activity => activity.day === day)
                  .sort((a, b) => a.time.localeCompare(b.time))
                  .map(activity => (
                    <div key={activity.id} className="flex items-center justify-between p-2 hover:bg-gray-100 rounded">
                      <div>
                        <span className="font-medium mr-2">{activity.time}</span>
                        {activity.description}
                      </div>
                      <button
                        onClick={() => removeActivity(activity.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => setShowForum(!showForum)}
          className="bg-[#83c5be] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300 mb-4"
        >
          <FaComments className="inline mr-2" /> {showForum ? "Hide" : "Show"} Discussion Forum
        </button>

        {showForum && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Trip Discussion Forum</h2>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <p className="font-medium">Alice:</p>
                <p>Hey everyone! I'm excited about our trip to Paris. Any must-visit restaurants you'd recommend?</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <p className="font-medium">Bob:</p>
                <p>I've heard great things about Le Chalet. We should definitely add it to our itinerary!</p>
              </div>
              <div>
                <textarea
                  placeholder="Add your comment..."
                  className="w-full p-2 border border-slate-200 border-[#83c5be] rounded-md focus:outline-none focus:ring-2 focus:ring-[#006d77] dark:border-slate-800"
                  rows={3}
                ></textarea>
                <button className="mt-2 bg-[#006d77] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300">
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}