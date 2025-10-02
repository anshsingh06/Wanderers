import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Head = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  // Navigation links config
  const navLinks = [
    { name: "Explore", path: "/" },
    { name: "Itinerary", path: "/itinerary" },
    { name: "Story", path: "/stories" },
    { name: "Hidden Gems", path: "/hidden-gems" },
    { name: "Safety", path: "/safety" },
    { name: "Chatbot", path: "/chatbot" },
  ];

  return (
    <header className="cursor-pointer flex items-center justify-between px-6 py-3 border-b bg-white">
      {/* Logo + Text */}
      <div className="cursor-pointer flex items-center space-x-2">
        <img
            src={logo}
            alt="WanderJharkhand Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
        <div>
          <h1 className="cursor-pointer text-lg font-bold text-green-800">
            WANDERJHARKHAND
          </h1>
          <p className="text-xs text-gray-500">Discover. Explore. Experience.</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-orange-600 border-b-2 border-orange-500 pb-1"
                : "text-green-700 hover:text-orange-600"
            }
          >
            {link.name}
          </NavLink>
        ))}
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
        <button onClick={()=>{
          window.location.href="/safety"
        }} className="cursor-pointer bg-red-600 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-red-700">
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
