import { useState } from "react";

export default function ItineraryPage() {
  const [travelers, setTravelers] = useState(2);
  const [days, setDays] = useState(5);
  const [budget, setBudget] = useState(25000);
  const [accommodation, setAccommodation] = useState("");
  const [transport, setTransport] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  const interests = [
    "Nature & Wildlife",
    "Cultural Heritage",
    "Adventure Sports",
    "Photography",
    "Local Cuisine",
    "Tribal Culture",
    "Waterfalls",
    "Trekking",
    "Handicrafts",
    "Spiritual Sites",
    "Historical Places",
    "Village Tourism",
  ];

  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="min-h-screen bg-white text-green-900 flex flex-col items-center py-12 px-4">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
        AI-POWERED <span className="text-orange-600">ITINERARY PLANNER</span>
      </h1>
      <p className="text-center max-w-2xl mb-12 text-lg">
        Create personalized day-wise travel plans based on your preferences,
        budget, and interests. Get detailed routes, cost estimates, and
        downloadable offline guides.
      </p>

      <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl">
        {/* Left form */}
        <div className="bg-green-50 p-8 rounded-xl shadow-md flex-1">
          <h2 className="text-2xl font-bold mb-6">✨ PLAN YOUR TRIP</h2>

          {/* Travelers & Days */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1">TRAVELERS</label>
              <input
                type="number"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className="w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">DAYS</label>
              <input
                type="number"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                className="w-full border rounded-lg p-2"
              />
            </div>
          </div>

          {/* Budget */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">BUDGET (₹)</label>
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Interests */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-3">INTERESTS</label>
            <div className="grid grid-cols-2 gap-2">
              {interests.map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => toggleInterest(interest)}
                  className={`px-3 py-2 border rounded-lg text-sm transition ${
                    selectedInterests.includes(interest)
                      ? "bg-green-600 text-white"
                      : "bg-white hover:bg-green-100"
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          {/* Accommodation */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">ACCOMMODATION</label>
            <select
              value={accommodation}
              onChange={(e) => setAccommodation(e.target.value)}
              className="w-full border rounded-lg p-2"
            >
              <option value="">Select accommodation type</option>
              <option value="budget">Budget Stay</option>
              <option value="mid">Mid-range Hotel</option>
              <option value="luxury">Luxury Hotel</option>
              <option value="homestay">Homestay</option>
            </select>
          </div>

          {/* Transport */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">TRANSPORT</label>
            <select
              value={transport}
              onChange={(e) => setTransport(e.target.value)}
              className="w-full border rounded-lg p-2"
            >
              <option value="">Select transport mode</option>
              <option value="car">Car</option>
              <option value="train">Train</option>
              <option value="bus">Bus</option>
              <option value="bike">Bike</option>
            </select>
          </div>

          {/* Special Requests */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">SPECIAL REQUESTS</label>
            <textarea
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              placeholder="Any specific requirements, accessibility needs, or preferences..."
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Button */}
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition">
            GENERATE ITINERARY
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <div className="text-6xl text-green-200 mb-6">⛰️</div>
          <h2 className="text-2xl font-bold mb-4">READY TO EXPLORE?</h2>
          <p className="text-lg text-gray-700 max-w-md">
            Fill in your travel preferences and let our AI create the perfect
            itinerary for your Jharkhand adventure.
          </p>
        </div>
      </div>
    </div>
  );
}
