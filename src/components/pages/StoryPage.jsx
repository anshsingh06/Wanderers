import { useState } from "react";
import { Search } from "lucide-react";

export default function Stories() {
  const [filter, setFilter] = useState("Newest First");

  const featuredStories = [
    {
      image: "/images/waterfall.jpg",
      title: "Hidden Waterfalls",
    },
    {
      image: "/images/community.jpg",
      title: "Tribal Culture",
    },
    {
      image: "/images/mountains.jpg",
      title: "Mountain Trails",
    },
  ];

  const allStories = [
    {
      id: 1,
      tag: "Traveler",
      date: "8/18/2024",
      title: "Photo Story: Wildlife Encounters in Dalma Sanctuary",
      desc: "A visual journey through the rich biodiversity of Dalma Wildlife Sanctuary, capturing moments with elephants, deer, and exotic birds.",
      author: "Sneha Reddy",
      image: "/images/elephants.jpg",
    },
    {
      id: 2,
      tag: "Local",
      date: "9/5/2024",
      title: "The Untouched Beauty of Jonha Falls: A Peaceful Escape",
      desc: "Discover the serene and magnificent Jonha Falls, a true hidden gem offering a peaceful retreat amidst nature's splendor.",
      author: "Deepak Verma",
      image: "/images/jonha.jpg",
    },
    {
      id: 3,
      tag: "Local",
      date: "3/30/2024",
      title: "Sarhul Festival: Celebrating Nature’s Bounty in Jharkhand",
      desc: "Experience the vibrant Sarhul festival, a joyous celebration of spring, nature, and the rich tribal culture of Jharkhand.",
      author: "Anjali Devi",
      image: "/images/sarhul.jpg",
    },
    {
      id: 4,
      tag: "Traveler",
      date: "7/12/2024",
      title: "Camping Under the Stars at Betla National Park",
      desc: "An unforgettable night amidst nature and wildlife, experiencing the raw beauty of Betla National Park under a canopy of stars.",
      author: "Vikram Joshi",
      image: "/images/betla.jpg",
    },
    {
      id: 5,
      tag: "Local",
      date: "6/25/2024",
      title: "The Ancient Charms of Maluti Temples: A Forgotten Architectural Marvel",
      desc: "Explore the exquisite terracotta temples of Maluti, a cluster of ancient shrines that stand as a testament to Jharkhand's rich historical heritage.",
      author: "Dr. Rina Das",
      image: "/images/maluti.jpg",
    },
  ];

  return (
    <div className="px-6 lg:px-20 py-10">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-900">
          TRAVEL STORIES &{" "}
          <span className="text-orange-600">PHOTO JOURNALS</span>
        </h1>
        <p className="mt-4 text-green-700 max-w-2xl mx-auto">
          Discover authentic travel experiences, hidden gems, and local insights
          through stories shared by fellow travelers and local community members.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-10 bg-green-50 p-4 rounded-xl">
        <div className="flex items-center w-full md:w-1/3 bg-white px-3 py-2 rounded-lg border">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search stories..."
            className="ml-2 outline-none w-full"
          />
        </div>
        <select className="p-2 border rounded-lg w-full md:w-1/4">
          <option>All Authors</option>
          <option>Sneha Reddy</option>
          <option>Deepak Verma</option>
          <option>Anjali Devi</option>
        </select>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded-lg w-full md:w-1/4"
        >
          <option>Newest First</option>
          <option>Oldest First</option>
        </select>
        <p className="text-green-700 text-sm">{allStories.length} stories found</p>
      </div>

      {/* Featured Stories */}
      <h2 className="text-2xl font-bold text-green-900 mb-6">FEATURED STORIES</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {featuredStories.map((story, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img src={story.image} alt={story.title} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>

      {/* All Stories */}
      <h2 className="text-2xl font-bold text-green-900 mb-6">ALL STORIES</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {allStories.map((story) => (
          <div
            key={story.id}
            className="rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition bg-white"
          >
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <span className="text-xs px-2 py-1 rounded-lg bg-green-50 text-green-600 border">
                {story.tag}
              </span>
              <span className="ml-2 text-xs text-gray-500">{story.date}</span>
              <h3 className="mt-3 font-semibold text-green-900 text-lg">
                {story.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">{story.desc}</p>
              <p className="mt-3 text-sm text-gray-500">By {story.author}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Share Story Section */}
      <div className="bg-green-900 text-white text-center py-16 rounded-xl mt-16">
        <h2 className="text-2xl font-bold mb-4">SHARE YOUR JHARKHAND STORY</h2>
        <p className="max-w-xl mx-auto text-green-100 mb-6">
          Have you discovered a hidden gem or had an amazing experience in
          Jharkhand? Share your story and photos to help fellow travelers and
          support local communities.
        </p>
        <button className="bg-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
          SIGN IN TO SHARE
        </button>
      </div>
    </div>
  );
}
