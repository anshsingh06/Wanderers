import { useState } from "react";
import { Calendar } from "lucide-react";

const festivals = [
  {
    name: "Sarhul",
    months: "March – April",
    place: "Ranchi, Khunti, Gumla",
    description:
      "A spring festival celebrating nature and the Sal tree. Villages come alive with traditional music and dance.",
  },
  {
    name: "Karma",
    months: "August – September",
    place: "Hazaribagh, Giridih, Dumka",
    description:
      "A festival dedicated to the Karma tree, with rituals, folk songs, and dance performed through the night.",
  },
  {
    name: "Sohrai",
    months: "October – November",
    place: "Santhal Parganas, Hazaribagh",
    description:
      "Harvest festival with beautiful Sohrai wall paintings and cattle worship.",
  },
  {
    name: "Tusu Parab",
    months: "December – January",
    place: "Chotanagpur Plateau, West Singhbhum",
    description:
      "Winter festival with folk songs, fairs, and immersion of Tusu idols.",
  },
];

export default function FestivalCalendar() {
  const [selectedFestival, setSelectedFestival] = useState(null);

  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
        <Calendar className="w-7 h-7 text-orange-600" />
        Jharkhand Festival Calendar
      </h1>

      {/* Grid of Festivals */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {festivals.map((festival, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border shadow-md p-4 cursor-pointer hover:shadow-xl transition-all"
            onClick={() => setSelectedFestival(festival)}
          >
            <h2 className="text-lg font-bold text-green-700">{festival.name}</h2>
            <p className="text-sm text-gray-600">{festival.months}</p>
            <p className="mt-2 text-xs text-gray-500">{festival.place}</p>
          </div>
        ))}
      </div>

      {/* Modal Popup for Festival Details */}
      {selectedFestival && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-96 relative">
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-black"
              onClick={() => setSelectedFestival(null)}
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold text-green-700">
              {selectedFestival.name}
            </h2>
            <p className="text-sm text-gray-600 mb-2">
              {selectedFestival.months} | {selectedFestival.place}
            </p>
            <p className="text-gray-700">{selectedFestival.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
