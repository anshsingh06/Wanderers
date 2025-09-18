import { useState } from "react";
import Footer from "../ui/Footer";

export default function HiddenGems() {
    const [tab, setTab] = useState("attractions");

    const categories = [
        {
            id: 1,
            icon: (
                <svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 22c4-4 6-8 6-12a6 6 0 10-12 0c0 4 2 8 6 12z" />
                </svg>
            ),
            count: 4,
            label: "Hidden Waterfalls",
        },
        {
            id: 2,
            icon: (
                <svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 20h18l-9-16-9 16z" />
                </svg>
            ),
            count: 1,
            label: "Trekking Trails",
        },
        {
            id: 3,
            icon: (
                <svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 2l4 8H8l4-8zM2 22h20l-10-6-10 6z" />
                </svg>
            ),
            count: 1,
            label: "Traditional Villages",
        },
        {
            id: 4,
            icon: (
                <svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M16 21v-2a4 4 0 00-8 0v2M12 7a4 4 0 110-8 4 4 0 010 8zM4 21v-2a4 4 0 018 0v2M20 21v-2a4 4 0 00-8 0v2" />
                </svg>
            ),
            count: 5,
            label: "Local Guides",
        },
    ];

    const hiddenGems = [
        {
            id: 1,
            title: "Hundru Falls",
            description:
                "One of the highest waterfalls in Jharkhand, where the Subarnarekha River falls from a height of 98 meters, creating a breathtaking sight.",
            category: "Waterfall",
            location: "Ranchi-Purulia Road, Ranchi, Jharkhand",
            image: "https://static.wixstatic.com/media/9e7689_091085491c8148e09fca5677ef6653d5~mv2.png/v1/fill/w_585,h_439,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_091085491c8148e09fca5677ef6653d5~mv2.png",
        },
        {
            id: 2,
            title: "Jonha Falls (Gautamdhara)",
            description:
                "A picturesque waterfall where the Kanchi River plunges from a height of 43 meters. Accessible by a long flight of stairs, it is also known as Gautamdhara.",
            category: "Waterfall",
            location: "Jonha, Ranchi, Jharkhand",
            image: "https://static.wixstatic.com/media/9e7689_0e4bb6f805d04903919b85ab89401e68~mv2.png/v1/fill/w_585,h_439,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_0e4bb6f805d04903919b85ab89401e68~mv2.png",
        },
        {
            id: 3,
            title: "Dassam Falls",
            description:
                "Also known as Dassam Ghagh, this waterfall is formed by the Kanchi River cascading down ten streams. A popular spot for nature lovers.",
            category: "Waterfall",
            location: "Tamar, Ranchi, Jharkhand",
            image: "https://static.wixstatic.com/media/9e7689_a06d191263f04f30bb1e8290eacf3685~mv2.png/v1/fill/w_585,h_439,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_a06d191263f04f30bb1e8290eacf3685~mv2.png",
        },
        {
            id: 4,
            title: "Parasnath Hill",
            description:
                "The highest peak in Jharkhand, a significant pilgrimage site for Jains. Offers challenging trekking trails and panoramic views of the...",
            category: "Trekking Trail",
            location: "Giridih District, Jharkhand",
            image: "https://static.wixstatic.com/media/9e7689_32caddfbc90e4aa3b8e1b330cedf7834~mv2.png/v1/fill/w_585,h_439,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_32caddfbc90e4aa3b8e1b330cedf7834~mv2.png",
        },
        {
            id: 5,
            title: "McCluskieganj",
            description:
                "Known as 'Mini England' or 'Anglo-Indian Village', this quaint village was once a settlement for Anglo-Indians. Offers a glimpse...",
            category: "Village",
            location: "Ranchi District, Jharkhand",
            image: "https://static.wixstatic.com/media/9e7689_8d12d7e86c3b4663a3dbf2581d237cd9~mv2.png/v1/fill/w_585,h_439,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_8d12d7e86c3b4663a3dbf2581d237cd9~mv2.png",
        },
        {
            id: 6,
            title: "Hirni Falls",
            description:
                "A beautiful waterfall located amidst dense forests, offering a tranquil escape. The water cascades from a height of 37 meters,...",
            category: "Waterfall",
            location: "Khunti District, Jharkhand",
            image: "https://static.wixstatic.com/media/9e7689_8ca8506261c440a88e634c5fab57fc46~mv2.png/v1/fill/w_585,h_439,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_8ca8506261c440a88e634c5fab57fc46~mv2.png",
        },
    ];

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
        <div className="px-6 py-10 text-center">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-green-700">LOCAL INSIGHTS & </span>
                <span className="text-orange-600">HIDDEN GEMS</span>
            </h2>
            <p className="text-green-700 max-w-3xl mx-auto mb-10">
                Discover lesser-known waterfalls, trekking trails, villages, and authentic experiences curated by local
                experts and community members.
            </p>

            {/* Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {categories.map((c) => (
                    <div
                        key={c.id}
                        className="bg-green-50 rounded-xl py-6 px-4 shadow-sm hover:shadow-md transition cursor-pointer"
                    >
                        <div className="flex flex-col items-center">
                            {c.icon}
                            <p className="text-2xl font-semibold text-green-700 mt-2">{c.count}</p>
                            <p className="uppercase text-sm tracking-wide text-green-800 mt-1">{c.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-6 space-x-2">
                {["attractions", "guides", "audio"].map((t) => (
                    <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`px-6 py-2 rounded-lg font-medium transition ${tab === t ? "bg-green-700 text-white" : "bg-green-50 text-green-700 hover:bg-green-100"
                            }`}
                    >
                        {t === "attractions" && "Attractions"}
                        {t === "guides" && "Local Guides"}
                        {t === "audio" && "Audio Guides"}
                    </button>
                ))}
            </div>

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

            {/* Hidden Gems List */}
            <h3 className="text-2xl font-bold text-green-700 mb-6 text-left">HIDDEN GEMS</h3>
            <div className="grid md:grid-cols-3 gap-6">
                {hiddenGems.map((gem) => (
                    <div key={gem.id} className="rounded-2xl overflow-hidden shadow-lg bg-green-900 text-white text-left">
                        <div className="relative">
                            <img src={gem.image} alt={gem.title} className="h-56 w-full object-cover" />
                            <span className="absolute top-3 left-3 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded">
                                HIDDEN GEM
                            </span>
                        </div>
                        <div className="p-4">
                            <span className="bg-green-800 text-sm px-2 py-1 rounded">{gem.category}</span>
                            <h4 className="mt-3 font-bold text-lg uppercase">{gem.title}</h4>
                            <p className="text-sm mt-2 line-clamp-3">{gem.description}</p>
                            <div className="flex items-center mt-3 text-sm text-green-300">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M12 2C8 2 4 6 4 10c0 7 8 12 8 12s8-5 8-12c0-4-4-8-8-8z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                {gem.location}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* ALL ATTRACTIONS */}
            <div className="mt-16 text-left mb-10">
                <h3 className="text-3xl font-bold text-green-800 mb-8">ALL ATTRACTIONS</h3>
                <div className="grid md:grid-cols-3 gap-8">
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
    );
}
