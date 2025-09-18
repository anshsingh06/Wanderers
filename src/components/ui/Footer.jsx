// src/components/ui/Footer.jsx
import React from "react";
import { Calendar, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white">
      {/* Call-to-action */}
      <div className="text-center py-16 px-6">
        <h2 className="text-4xl font-bold">
          READY TO WANDER <span className="text-orange-500">JHARKHAND?</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300">
          Begin your personalized adventure today with smart itineraries, local
          insights, and authentic experiences that showcase the true spirit and
          natural beauty of Jharkhand.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="flex items-center bg-orange-600 hover:bg-orange-700 px-5 py-3 rounded-md font-semibold">
            <Calendar className="w-4 h-4 mr-2" /> START YOUR JOURNEY
          </button>
          <button className="flex items-center border border-white hover:bg-white hover:text-green-900 px-5 py-3 rounded-md font-semibold">
            <MapPin className="w-4 h-4 mr-2" /> TRAVEL SAFE
          </button>
        </div>
      </div>

      {/* Footer content */}
      <div className="border-t border-green-800 py-12 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Left column */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-orange-500 text-white p-2 rounded-full">
              <MapPin className="w-5 h-5" />
            </span>
            <h3 className="font-bold text-lg">WANDERJHARKHAND</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Experience the vibrant culture, pristine nature, and warm
            hospitality of Jharkhand. From ancient festivals to hidden
            waterfalls, discover stories that connect you with the heart of
            India.
          </p>
        </div>

        {/* Middle column */}
        <div>
          <h4 className="font-semibold mb-3">DISCOVER</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-orange-500 cursor-pointer">Attractions</li>
            <li className="hover:text-orange-500 cursor-pointer">Local Crafts</li>
            <li className="hover:text-orange-500 cursor-pointer">Hidden Gems</li>
            <li className="hover:text-orange-500 cursor-pointer">Travel Stories</li>
          </ul>
        </div>

        {/* Right column */}
        <div>
          <h4 className="font-semibold mb-3">SUPPORT</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-orange-500 cursor-pointer">Emergency Help</li>
            <li className="hover:text-orange-500 cursor-pointer">Plan Your Trip</li>
            <li className="hover:text-orange-500 cursor-pointer">Local Guides</li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-green-800 py-4 text-center text-sm text-gray-400">
        © 2024 WanderJharkhand. Celebrating culture, preserving nature,
        empowering communities.
      </div>
    </footer>
  );
};

export default Footer;