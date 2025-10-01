import React, { useState } from "react";
import {
  AlertTriangle,
  Phone,
  Share2,
  MapPin,
  Users,
  Cloud,
  Wind,
  Droplets,
  Wifi,
  BatteryCharging,
} from "lucide-react";
import Footer from "../ui/Footer";
import Head from "../ui/Head";

const SafetyPage = () => {
  const [, setCurrentLocation] = useState(null);
  const [locationShared, setLocationShared] = useState(false);

  // Function to get current location
  const getCurrentLocation = (onSuccess, onError) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCurrentLocation(coords);
          if (onSuccess) onSuccess(coords);
        },
        (error) => {
          if (onError) {
            onError(error);
          } else {
            console.error("Error getting location:", error);
          }
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  // Function to share location
  const shareLocation = () => {
    getCurrentLocation(
      (coords) => {
        if (navigator.share) {
          navigator.share({
            title: "My Current Location",
            text: "I am currently at this location in Jharkhand",
            url: `https://maps.google.com/?q=${coords.lat},${coords.lng}`,
          });
        } else {
          alert(
            `Share this location manually: https://maps.google.com/?q=${coords.lat},${coords.lng}`
          );
        }
        setLocationShared(true);
      },
      (error) => console.error(error)
    );
  };

  // Function to call emergency number
  const callEmergency = (number) => {
    window.open(`tel:${number}`, "_self");
  };

  return (
    <>
      <div className="w-full flex flex-col items-center px-6 py-12 bg-white h-full">
        {/* Title Section */}
        <div className="text-center max-w-3xl">
          <h1 className="text-3xl font-bold text-green-700">
            SAFETY & <span className="text-orange-600">EMERGENCY SUPPORT</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Your safety is our priority. Access emergency contacts, share your
            location, get live weather updates, and find accessibility
            information for a secure travel experience.
          </p>
        </div>

        {/* Emergency SOS Section */}
        <div className="mt-10 w-full max-w-4xl bg-red-50 border border-red-200 rounded-lg p-8 text-center shadow-sm">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="text-red-600 w-10 h-10" />
          </div>
          <h2 className="text-xl font-bold text-red-700">EMERGENCY SOS</h2>
          <p className="mt-2 text-red-600">
            In case of emergency, use the buttons below to quickly contact help
            or share your location with emergency services.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => callEmergency("100")}
              className="flex items-center gap-2 bg-red-600 text-white px-5 py-3 rounded-md shadow hover:bg-red-700 transition"
            >
              <Phone className="w-5 h-5" />
              CALL POLICE (100)
            </button>
            <button
              onClick={() => callEmergency("108")}
              className="flex items-center gap-2 bg-red-600 text-white px-5 py-3 rounded-md shadow hover:bg-red-700 transition"
            >
              <Phone className="w-5 h-5" />
              MEDICAL EMERGENCY (108)
            </button>
            <button
              onClick={shareLocation}
              className="flex items-center gap-2 border border-red-400 text-red-600 px-5 py-3 rounded-md shadow hover:bg-red-100 transition"
            >
              <Share2 className="w-5 h-5" />
              {locationShared ? "LOCATION SHARED" : "SHARE LOCATION"}
            </button>
          </div>
        </div>

        <div className="w-full px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Emergency Contacts */}
          <div className="bg-green-950 text-white rounded-lg p-6 shadow-md space-y-4">
            <h2 className="text-lg font-bold border-b border-green-700 pb-2">
              🚨 EMERGENCY CONTACTS
            </h2>

            {[
              { label: "POLICE EMERGENCY (24x7)", number: "100" },
              { label: "MEDICAL EMERGENCY (24x7)", number: "108" },
              { label: "FIRE EMERGENCY (24x7)", number: "101" },
              { label: "TOURIST HELPLINE JHARKHAND", number: "+91-651-2464641" },
              { label: "RANCHI TOURIST INFORMATION", number: "+91-651-2460318" },
              { label: "JHARKHAND TOURISM BOARD", number: "+91-651-2490379" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-green-800 p-3 rounded-md"
              >
                <div>
                  <p className="font-semibold">{item.label}</p>
                  <p className="text-sm text-gray-300">{item.number}</p>
                </div>
                <button
                  onClick={() => callEmergency(item.number)}
                  className="bg-green-700 p-2 rounded-md hover:bg-green-600 transition"
                >
                  <Phone className="w-5 h-5 text-white" />
                </button>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="lg:col-span-2 space-y-8">
            {/* Live Weather Updates */}
            <div className="bg-white border rounded-lg p-6 shadow">
              <h2 className="text-lg font-bold text-green-800 flex items-center gap-2">
                <Cloud className="w-5 h-5 text-orange-500" /> LIVE WEATHER
                UPDATES
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-gray-700">
                <div className="flex items-center gap-2">
                  <Cloud className="text-gray-500" />
                  <span className="text-2xl font-bold text-green-700">28°C</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="text-blue-500" />
                  <span>65% Humidity</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wind className="text-sky-600" />
                  <span>12 km/h</span>
                </div>
                <div className="text-gray-600">Ranchi, Jharkhand</div>
              </div>
              <div className="mt-4 border p-2 rounded text-sm text-red-600 font-medium">
                ⚠️ Weather Alert: Light rain expected in the evening
              </div>
            </div>

            {/* Safety Tips */}
            <div className="bg-white border rounded-lg p-6 shadow">
              <h2 className="text-lg font-bold text-green-800">
                🛡️ SAFETY TIPS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {[
                  {
                    title: "SHARE YOUR LOCATION",
                    desc: "Always inform someone about your travel plans and current location.",
                    btn: "SHARE LOCATION",
                    icon: <MapPin className="w-5 h-5 text-green-600" />,
                    action: shareLocation,
                  },
                  {
                    title: "KEEP EMERGENCY NUMBERS",
                    desc: "Save local emergency contacts and tourist helpline numbers.",
                    btn: "SAVE CONTACTS",
                    icon: <Phone className="w-5 h-5 text-green-600" />,
                    action: () => alert("Contacts saved!"),
                  },
                  {
                    title: "CHECK WEATHER UPDATES",
                    desc: "Monitor weather conditions before heading to outdoor activities.",
                    btn: "VIEW WEATHER",
                    icon: <Cloud className="w-5 h-5 text-green-600" />,
                    action: () => alert("Fetching weather..."),
                  },
                  {
                    title: "TRAVEL IN GROUPS",
                    desc: "Especially when visiting remote areas or trekking trails.",
                    btn: "FIND GROUPS",
                    icon: <Users className="w-5 h-5 text-green-600" />,
                    action: () => alert("Finding groups..."),
                  },
                ].map((tip, i) => (
                  <div
                    key={i}
                    className="border rounded-lg p-4 flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-2 font-semibold text-green-800">
                      {tip.icon} {tip.title}
                    </div>
                    <p className="text-sm text-gray-600">{tip.desc}</p>
                    <button
                      onClick={tip.action}
                      className="mt-2 px-3 py-1 border border-green-600 text-green-700 rounded hover:bg-green-50 transition text-sm w-fit"
                    >
                      {tip.btn}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Accessibility Information */}
            <div className="bg-green-950 text-white rounded-lg p-6 shadow">
              <h2 className="text-lg font-bold mb-6">
                ♿ ACCESSIBILITY INFORMATION
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-orange-500 text-3xl">♿</div>
                  <p className="text-xl font-bold">15+</p>
                  <p className="text-sm">WHEELCHAIR ACCESSIBLE PLACES</p>
                  <p className="text-xs text-gray-300">
                    Major tourist spots with proper accessibility infrastructure
                  </p>
                </div>
                <div>
                  <div className="text-orange-500 text-3xl">👨‍👩‍👧</div>
                  <p className="text-xl font-bold">28+</p>
                  <p className="text-sm">FAMILY-SAFE LOCATIONS</p>
                  <p className="text-xs text-gray-300">
                    Child-friendly attractions with safety measures
                  </p>
                </div>
                <div>
                  <div className="text-orange-500 text-3xl">👁️</div>
                  <p className="text-xl font-bold">22+</p>
                  <p className="text-sm">WELL-LIT AREAS</p>
                  <p className="text-xs text-gray-300">
                    Places with adequate lighting for evening visits
                  </p>
                </div>
              </div>

              {/* Extra Support */}
              <div className="mt-6 border-t border-green-700 pt-4 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-gray-200" /> Free WiFi at major
                  attractions
                </div>
                <div className="flex items-center gap-2">
                  <BatteryCharging className="w-4 h-4 text-gray-200" /> Charging
                  stations available
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Info */}
        <div className="safetyInfo w-full bg-green-50 p-4 m-2 mb-8">
          <h1 className="font-bold text-2xl text-green-900 mb-2">
            Important Safety Information
          </h1>
          <div className="info flex flex-row items-start justify-between gap-5 mb-5">
            <div className="beforeTravel">
              <h2 className="text-green-900 font-bold mb-2">BEFORE YOU TRAVEL</h2>
              <ul className="flex flex-col gap-4 list-disc justify-items-start content-start">
                <li className="flex items-start gap-3">
                  <span className="text-green-800">
                    Inform family/friends about your travel plans
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-800">
                    Carry valid identification documents
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-800">
                    Check weather conditions and road status
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-800">
                    Pack first aid kit and necessary medications
                  </span>
                </li>
              </ul>
            </div>
            <div className="duringTravel">
              <h2 className="text-green-900 font-bold mb-2">DURING YOUR TRAVEL</h2>
              <ul className="flex flex-col gap-4 list-disc justify-items-start content-start">
                <li className="flex items-start gap-3">
                  <span className="text-green-800">
                    Stay hydrated and carry enough water
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-800">
                    Follow local guidelines and respect customs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-800">
                    Don't venture into restricted or unsafe areas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-800">
                    Keep emergency contacts easily accessible
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SafetyPage;
