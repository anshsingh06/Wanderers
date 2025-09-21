import React from 'react'
import Footer from '../ui/Footer'

const AttractionsPage = () => {
    const attractions = [
        {
            id: 1,
            title: "Hundru Falls",
            description:
                "One of the highest waterfalls in Jharkhand, where the Subarnarekha River falls from a height of 98 meters, creating a breathtaking sight.",
            tags: ["Waterfall", "Family Friendly"],
            location: "Ranchi-Purulia Road, Ranchi, Jharkhand",
            image: "https://static.wixstatic.com/media/9e7689_091085491c8148e09fca5677ef6653d5~mv2.png/v1/fill/w_585,h_439,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_091085491c8148e09fca5677ef6653d5~mv2.png",
        },
        {
            id: 2,
            title: "Netarhat Hill Station",
            description:
                "Known as the 'Queen of Chotanagpur', Netarhat offers stunning sunrise and sunset views, dense forests, and serene landscapes.",
            tags: ["Hill Station", "Accessible", "Family Friendly"],
            location: "Latehar District, Jharkhand",
            image: "https://static.wixstatic.com/media/9e7689_730d2a2f912248358ebb45685cf43990~mv2.png/v1/fill/w_585,h_439,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_730d2a2f912248358ebb45685cf43990~mv2.png",
        },
        {
            id: 3,
            title: "Betla National Park",
            description:
                "A rich wildlife sanctuary famous for its tigers, elephants, and various species of deer. Offers jeep safaris and elephant rides for visitors.",
            tags: ["National Park", "Family Friendly"],
            location: "Palamu District, Jharkhand",
            image: "https://static.wixstatic.com/media/9e7689_128452be8a4e418dbef1eb1aa5dd38f6~mv2.png/v1/fill/w_585,h_439,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_128452be8a4e418dbef1eb1aa5dd38f6~mv2.png",
        },
        {
            id: 4,
            title: "Deori Mandir",
            description:
                "An ancient temple dedicated to Goddess Durga, famous for its unique architecture and the belief that all wishes are granted here...",
            tags: ["National Park", "Family Friendly"],
            location: "Tamar, Ranchi, Jharkhand",
            image: "https://static.wixstatic.com/media/9e7689_9b19cef7aed44f1ab05be022f3ef9d3c~mv2.png/v1/fill/w_585,h_439,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_9b19cef7aed44f1ab05be022f3ef9d3c~mv2.png",
        },
        {
            id: 5,
            title: "Dimna Lake",
            description:
                "A beautiful artificial lake near Jamshedpur, serving as a primary source of drinking water. Surrounded by hills, it's a popular spot for...",
            tags: ["National Park", "Family Friendly"],
            location: "Jamshedpur, Jharkhand",
            image: "https://static.wixstatic.com/media/9e7689_7a36d87cc4e7454fa4bac0cbd16f91f6~mv2.png/v1/fill/w_585,h_439,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_7a36d87cc4e7454fa4bac0cbd16f91f6~mv2.png",
        },
        {
            id: 6,
            title: "Dalma Wildlife Sanctuary",
            description:
                "Home to a significant population of elephants, deer, and other wildlife. Offers trekking, forest trails, and a chance to observe...",
            tags: ["National Park", "Family Friendly"],
            location: "Jamshedpur, Jharkhand",
            image: "https://static.wixstatic.com/media/9e7689_29be86acfd954eae9cc7d7c14d90a16d~mv2.png/v1/fill/w_585,h_439,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_29be86acfd954eae9cc7d7c14d90a16d~mv2.png",
        },
    ];
    return (
        <div>
            {/* Search + Filters */}
            <div className="flex flex-col md:flex-row gap-3 items-center justify-center bg-green-50 rounded-xl p-4 mb-10">
                <div className="flex items-center gap-2 w-full md:w-1/3 border border-green-300 rounded-lg px-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search attractions..."
                        className="flex-1 bg-transparent outline-none py-2"
                    />
                </div>

                <select className="w-full md:w-48 border border-green-300 rounded-lg px-3 py-2 bg-white text-green-700">
                    <option>All Categories</option>
                    <option>Waterfalls</option>
                    <option>Trekking Trails</option>
                    <option>Villages</option>
                </select>

                <select className="w-full md:w-48 border border-green-300 rounded-lg px-3 py-2 bg-white text-green-700">
                    <option>All Places</option>
                    <option>North</option>
                    <option>South</option>
                </select>

                <p className="text-green-700 font-medium">15 places found</p>
            </div>
            {/* ALL ATTRACTIONS */}
            <div className="mt-16 text-left">
                <h3 className="text-3xl ml-4 font-bold text-green-800 mb-8">ALL ATTRACTIONS</h3>
                <div className="grid md:grid-cols-3 gap-8 m-4 mb-8">
                    {attractions.map((place) => (
                        <div
                            key={place.id}
                            className="bg-white border border-green-200 rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
                        >
                            {/* Image */}
                            <img src={place.image} alt={place.title} className="h-64 w-full object-cover" />

                            {/* Content */}
                            <div className="p-5">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {place.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className={`px-3 py-1 rounded-full text-sm font-medium ${tag === "Family Friendly"
                                                    ? "bg-orange-500 text-white"
                                                    : "bg-green-100 text-green-700"
                                                }`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Title */}
                                <h4 className="text-xl font-bold text-green-800 uppercase">{place.title}</h4>

                                {/* Description */}
                                <p className="text-green-700 text-sm mt-2 line-clamp-3">{place.description}</p>

                                {/* Location */}
                                <div className="flex items-center mt-4 text-sm text-green-600">
                                    <svg
                                        className="w-4 h-4 mr-1"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2C8 2 4 6 4 10c0 7 8 12 8 12s8-5 8-12c0-4-4-8-8-8z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    {place.location}
                                </div>

                                {/* Read More Arrow */}
                                <div className="mt-3 flex justify-end">
                                    <button className="text-green-600 hover:text-green-800">
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AttractionsPage