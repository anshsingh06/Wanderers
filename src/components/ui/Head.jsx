import React, { useState } from "react";

const Head = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <header className="cursor-pointer flex items-center justify-between px-6 py-3 border-b bg-white">
      {/* Logo + Text */}
      <div className="cursor-pointer flex items-center space-x-2">
        <img
          src="https://img.icons8.com/ios-filled/50/2f855a/marker.png"
          alt="logo"
          className="w-8 h-8"
        />
        <div>
          <h1 className="cursor-pointer text-lg font-bold text-green-800">WANDERJHARKHAND</h1>
          <p className="text-xs text-gray-500">Discover. Explore. Experience.</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-8">
        <a
          href="#"
          className="text-orange-600 border-b-2 border-orange-500 pb-1"
        >
          Explore
        </a>
        <a href="#" className="text-green-700 hover:text-orange-600">
          Itinerary
        </a>
        <a href="#" className="text-green-700 hover:text-orange-600">
          Stories
        </a>
        <a href="#" className="text-green-700 hover:text-orange-600">
          Hidden Gems
        </a>
        <a href="#" className="text-green-700 hover:text-orange-600">
          Safety
        </a>
      </nav>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Music/Play Block */}
        <div
          onClick={togglePlay}
          className="flex items-center space-x-2 px-2 py-1 rounded cursor-pointer hover:bg-orange-100 transition"
        >
          <span className="text-gray-600">🔊</span>
          <span className="text-gray-600">{isPlaying ? "⏸" : "▶"}</span>
        </div>

        {/* SOS Button */}
        <button className="cursor-pointer bg-red-600 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-red-700">
          SOS
        </button>

        {/* Sign In Button */}
        <button className="cursor-pointer border border-green-700 text-green-700 px-3 py-1 rounded-md text-sm font-semibold hover:bg-green-700 hover:text-white">
          SIGN IN
        </button>
      </div>
    </header>
  );
};

export default Head;