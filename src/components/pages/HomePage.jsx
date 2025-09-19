// src/components/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../ui/Footer";
import { Calendar, Mountain, Camera, Users, PlayCircle, ShoppingBag, MapPin } from "lucide-react";

const HomePage = () => {
    return (
        <div>

            {/* Hero section */}
            <section className="relative text-white">
                <div className="absolute inset-0 bg-cover bg-center opacity-70"
                    style={{
                        backgroundImage:
                            "url('https://growbilliontrees.com/cdn/shop/files/Grow-billion-trees-home-slide-1_8a913242-e8b2-47fb-acab-e4a6c9beda8c.jpg?v=1688202042&width=1500')",
                    }}>
                </div>

                {/* Content */}
                <div className="relative z-10 p-12 max-w-7xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-12">
                    {/* Left content */}
                    <div className="bg-black/50 p-6 rounded-lg">
                        {/* Badges */}
                        <div className="flex space-x-3 mb-4">
                            <span className="bg-orange-600 text-white px-3 py-1 rounded text-xs font-semibold">
                                MODERN TOURISM
                            </span>
                            <span className="bg-yellow-900 text-yellow-100 px-3 py-1 rounded text-xs font-semibold">
                                JHARKHAND 2024
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-lg leading-relaxed mb-6">
                            Embark on an extraordinary journey through Jharkhand's pristine
                            landscapes, vibrant tribal culture, and hidden treasures.
                            Experience authentic adventures that connect you with nature and
                            local communities.
                        </p>

                        {/* Title */}
                        <h1 className="text-5xl font-bold mb-6">
                            Wander <span className="text-orange-500">Jharkhand</span>
                        </h1>

                        {/* Buttons */}
                        <div className="flex space-x-4 mb-10">
                            <button className="flex items-center bg-green-700 hover:bg-green-800 px-5 py-3 rounded-md text-sm font-semibold">
                                <Calendar className="w-4 h-4 mr-2" />
                                PLAN JOURNEY
                            </button>
                            <button className="flex items-center border border-orange-400 hover:bg-orange-50/20 px-5 py-3 rounded-md text-sm font-semibold text-orange-400">
                                DISCOVER GEMS
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
                            <div className="flex items-center space-x-2">
                                <Mountain className="w-5 h-5 text-orange-500" />
                                <p>
                                    <span className="font-bold">50+</span>
                                    <br /> Hidden Attractions
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Camera className="w-5 h-5 text-orange-500" />
                                <p>
                                    <span className="font-bold">100+</span>
                                    <br /> Travel Stories
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Users className="w-5 h-5 text-orange-500" />
                                <p>
                                    <span className="font-bold">25+</span>
                                    <br /> Local Artisans
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <PlayCircle className="w-5 h-5 text-orange-500" />
                                <p>
                                    <span className="font-bold">15+</span>
                                    <br /> Audio Guides
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right content - Image Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://pbs.twimg.com/media/ERwiYQkXkAEUebf?format=jpg&name=4096x4096"
                            alt="Waterfall"
                            className="rounded-xl object-cover bg-black/40"
                        />
                        <img
                            src="https://growbilliontrees.com/cdn/shop/files/iStock-512046727-miyawaki.jpg?v=1734764069&width=1500"
                            alt="Forest Path"
                            className="rounded-xl object-cover bg-black/40"
                        />
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG0uPjl1lCffoXz5aTLp6uXqqVtROQx-1c-g&s"
                            alt="Tribal Wall"
                            className="rounded-xl object-cover bg-black/40"
                        />
                        <img
                            src="https://cdn.thewire.in/wp-content/uploads/2019/05/29142910/Jharkhand-Sugnu-Village-Army-Check-Post-2.jpg"
                            alt="Village"
                            className="rounded-xl object-cover bg-black/40"
                        />
                    </div>
                </div>
            </section>
            {/* Adventures */}
            <section className="bg-[#f9faf8]">
                <div >
                    {/* --- Section 1: Your Adventure Begins --- */}
                    <section className="max-w-7xl mx-auto px-6 py-16 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
                            YOUR ADVENTURE BEGINS
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                            From smart travel planning to authentic cultural experiences, we
                            provide everything you need for an unforgettable journey through
                            Jharkhand’s natural wonders and rich heritage.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {/* Card 1 */}
                            <div onClick={()=>{
                                window.location.href="/ItineraryPage"
                            }} className="p-6 border rounded-lg hover:cursor-pointer transition transform hover:scale-105 hover:border-orange-500  hover:rounded-xl hover:shadow-lg">
                                <Calendar className="w-8 h-8 text-green-700 mb-4" />
                                <h3 className="font-semibold text-green-800 mb-2">
                                    SMART ITINERARIES
                                </h3>
                                <p className="text-sm text-gray-600">
                                    AI-powered travel plans tailored to your interests, budget, and
                                    time, featuring the best of Jharkhand.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div onClick={()=>{
                                window.location.href="/StoryPage"
                            }} className="p-6 border rounded-lg hover:cursor-pointer transition transform hover:scale-105 hover:border-orange-500  hover:rounded-xl hover:shadow-lg">
                                <Camera className="w-8 h-8 text-orange-500 mb-4" />
                                <h3 className="font-semibold text-green-800 mb-2">TRAVEL STORIES</h3>
                                <p className="text-sm text-gray-600">
                                    Authentic experiences and photo journals from locals and fellow
                                    wanderers exploring Jharkhand.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div onClick={()=>{
                                window.location.href="/HiddenGems"
                            }} className="p-6 border rounded-lg hover:cursor-pointer transition transform hover:scale-105 hover:border-orange-500 hover:rounded-xl hover:shadow-lg">
                                <Mountain className="w-8 h-8 text-yellow-600 mb-4" />
                                <h3 className="font-semibold text-green-800 mb-2">HIDDEN GEMS</h3>
                                <p className="text-sm text-gray-600">
                                    Discover secret waterfalls, ancient caves, and pristine forests
                                    known only to locals.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div onClick={()=>{
                                window.location.href="/CraftsPage"
                            }} className="p-6 border rounded-lg hover:cursor-pointer transition transform hover:scale-105 hover:border-orange-500  hover:rounded-xl hover:shadow-lg">
                                <ShoppingBag className="w-8 h-8 text-brown-600 mb-4" />
                                <h3 className="font-semibold text-green-800 mb-2">LOCAL CRAFTS</h3>
                                <p className="text-sm text-gray-600">
                                    Support tribal artisans and take home authentic handcrafted
                                    treasures with cultural stories.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* --- Section 2: Featured Attractions --- */}
                    <section className="max-w-7xl mx-auto px-6 py-16">
                        {/* Heading */}
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-green-800">
                                    FEATURED ATTRACTIONS
                                </h2>
                                <p className="text-green-700">
                                    Discover the most captivating destinations in Jharkhand
                                </p>
                            </div>
                            <button onClick={()=>{
                                window.location.href="/AttractionsPage"
                            }} className="flex items-center border border-green-600 text-green-700 hover:cursor-pointer hover:bg-green-50 px-4 py-2 rounded-md text-sm font-semibold">
                                VIEW ALL →
                            </button>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="rounded-lg overflow-hidden border hover:shadow-lg transition">
                                <img
                                    src="https://media.assettype.com/outlookindia/import/uploadimage/library/16_9/16_9_5/IMAGE_1654581286.webp?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true"
                                    alt="Hundru Falls"
                                    className="w-full h-48 object-fill"
                                />
                                <div className="bg-green-950 text-white p-4">
                                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                                        WATERFALL
                                    </span>
                                    <h3 className="mt-3 font-bold text-lg">HUNDRU FALLS</h3>
                                    <p className="text-sm text-gray-200 mt-2">
                                        One of the highest waterfalls in Jharkhand, where the Subarnarekha
                                        River falls from a height of 98 meters, creating a breathtaking
                                        spectacle.
                                    </p>
                                    <p className="flex items-center text-xs text-gray-300 mt-3">
                                        <MapPin className="w-4 h-4 mr-1" /> Ranchi-Purulia Road, Ranchi,
                                        Jharkhand
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="rounded-lg overflow-hidden border hover:shadow-lg transition">
                                <img
                                    src="https://i.pinimg.com/736x/26/df/f6/26dff6dd6d3d68c8bbf3556810f31f88.jpg"
                                    alt="Jonha Falls"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="bg-green-950 text-white p-4">
                                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                                        WATERFALL
                                    </span>
                                    <h3 className="mt-3 font-bold text-lg">JONHA FALLS</h3>
                                    <p className="text-sm text-gray-200 mt-2">
                                        A picturesque waterfall where the Kanchi River plunges from a height of 43 meters. Accessible by a long flight of stairs, it also...
                                    </p>
                                    <p className="flex items-center text-xs text-gray-300 mt-3">
                                        <MapPin className="w-4 h-4 mr-1" /> Ranchi-Purulia Road, Ranchi,
                                        Jharkhand
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="rounded-lg overflow-hidden border hover:shadow-lg transition">
                                <img
                                    src="https://s7ap1.scene7.com/is/image/incredibleindia/dassam-falls-ranchi-jharkhand-ranchi-1-attr-hero?qlt=82&ts=1727010932624"
                                    alt="Dassam Falls"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="bg-green-950 text-white p-4">
                                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                                        WATERFALL
                                    </span>
                                    <h3 className="mt-3 font-bold text-lg">DASSAM FALLS</h3>
                                    <p className="text-sm text-gray-200 mt-2">
                                        Also known as Dassam Ghagh, this waterfall is formed by the Kanchi River cascading down ten streams. A popular spot for picnics and nature walks.
                                    </p>
                                    <p className="flex items-center text-xs text-gray-300 mt-3">
                                        <MapPin className="w-4 h-4 mr-1" /> Ranchi-Purulia Road, Ranchi,
                                        Jharkhand
                                    </p>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="rounded-lg overflow-hidden border hover:shadow-lg transition">
                                <img
                                    src="https://t3.ftcdn.net/jpg/06/44/90/42/360_F_644904289_NbXKTKISNlcpn6ttB2P3upo1IIPqpeKE.jpg"
                                    alt="Parasnath Hill"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="bg-green-950 text-white p-4">
                                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                                        WATERFALL
                                    </span>
                                    <h3 className="mt-3 font-bold text-lg">PARASNATH HILL</h3>
                                    <p className="text-sm text-gray-200 mt-2">
                                        The highest peak in Jharkhand, a significant pilgrimage site for Jains. Offers challenging trekking trails and panoramic views of
                                    </p>
                                    <p className="flex items-center text-xs text-gray-300 mt-3">
                                        <MapPin className="w-4 h-4 mr-1" /> Ranchi-Purulia Road, Ranchi,
                                        Jharkhand
                                    </p>
                                </div>
                            </div>

                            {/* Card 5 */}
                            <div className="rounded-lg overflow-hidden border hover:shadow-lg transition">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv0UOErB7fE7D7rujz_zZ5YjYh888jHwB8BQ&s"
                                    alt="Netarhat"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="bg-green-950 text-white p-4">
                                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                                        HILL STATION
                                    </span>
                                    <span className="ml-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                                        Accessible
                                    </span>
                                    <h3 className="mt-3 font-bold text-lg">NETARHAT HILL STATION</h3>
                                    <p className="text-sm text-gray-200 mt-2">
                                        Known as the "Queen of Chotanagpur", Netarhat offers stunning
                                        sunrise and sunset views, dense forests, and serene landscapes.
                                    </p>
                                    <p className="flex items-center text-xs text-gray-300 mt-3">
                                        <MapPin className="w-4 h-4 mr-1" /> Latehar District, Jharkhand
                                    </p>
                                </div>
                            </div>

                            {/* Card 6 */}
                            <div className="rounded-lg overflow-hidden border hover:shadow-lg transition">
                                <img
                                    src="https://site.outlookindia.com/traveller/wp-content/uploads/2017/06/jharkhand1_Betla-NP_FI.jpg"
                                    alt="Betla National Park"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="bg-green-950 text-white p-4">
                                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                                        NATIONAL PARK
                                    </span>
                                    <h3 className="mt-3 font-bold text-lg">BETLA NATIONAL PARK</h3>
                                    <p className="text-sm text-gray-200 mt-2">
                                        Famous for its tigers, elephants, and various species of deer.
                                        Offers jeep safaris and elephant rides for an immersive jungle
                                        experience.
                                    </p>
                                    <p className="flex items-center text-xs text-gray-300 mt-3">
                                        <MapPin className="w-4 h-4 mr-1" /> Palamu District, Jharkhand
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* --- Travel Stories Section --- */}
                    <section className="py-16 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-6">
                            {/* Heading */}
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-green-800">
                                        TRAVEL STORIES
                                    </h2>
                                    <p className="text-green-700">
                                        Real experiences from travelers and locals
                                    </p>
                                </div>
                                <button onClick={()=>{
                                    window.location.href="/StoryPage"
                                }} className="hover:cursor-pointer flex items-center border border-green-600 text-green-700 hover:bg-green-50 px-4 py-2 rounded-md text-sm font-semibold">
                                    READ ALL STORIES →
                                </button>
                            </div>

                            {/* Stories Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Story 1 */}
                                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition hover:scale-105 hover:border-orange-500">
                                    <img
                                        src="https://static.wixstatic.com/media/9e7689_f77bcfd405ab4cddb4bbda4096ab5ccb~mv2.png/v1/fill/w_372,h_372,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_f77bcfd405ab4cddb4bbda4096ab5ccb~mv2.png"
                                        alt="Hundru Falls"
                                        className="w-full h-56 object-cover"
                                    />
                                    <div className="p-6">
                                        <div className="flex items-center space-x-2 text-sm mb-3">
                                            <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded">
                                                TRAVELER
                                            </span>
                                            <span className="text-gray-500">9/10/2024</span>
                                        </div>
                                        <h3 className="font-bold text-green-800 mb-2">
                                            DISCOVERING HUNDRU'S SECRET FALLS: A TREKKER'S PARADISE
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-4">
                                            Embark on a thrilling trek to a lesser-known cascade near Ranchi,
                                            revealing the untouched beauty of Jharkhand's hidden waterfalls.
                                        </p>
                                        <p className="text-xs text-gray-500">By Priya Sharma</p>
                                    </div>
                                </div>

                                {/* Story 2 */}
                                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition hover:scale-105 hover:border-orange-500">
                                    <img
                                        src="https://static.wixstatic.com/media/9e7689_08f6d0de6d5045e1a264b0ddcf4317fd~mv2.png/v1/fill/w_589,h_589,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_08f6d0de6d5045e1a264b0ddcf4317fd~mv2.png"
                                        alt="Netarhat"
                                        className="w-full h-56 object-cover"
                                    />
                                    <div className="p-6">
                                        <div className="flex items-center space-x-2 text-sm mb-3">
                                            <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded">
                                                LOCAL
                                            </span>
                                            <span className="text-gray-500">8/25/2024</span>
                                        </div>
                                        <h3 className="font-bold text-green-800 mb-2">
                                            LIFE IN NETARHAT: A GLIMPSE INTO TRIBAL CULTURE AND SERENITY
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-4">
                                            Immerse yourself in the serene life and rich traditions of a
                                            Jharkhand village, experiencing authentic tribal culture firsthand.
                                        </p>
                                        <p className="text-xs text-gray-500">By Alok Kumar</p>
                                    </div>
                                </div>

                                {/* Story 3 */}
                                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition hover:scale-105 hover:border-orange-500">
                                    <img
                                        src="https://static.wixstatic.com/media/9e7689_59c5ffe425d843559abbd8018a5ba8e1~mv2.png/v1/fill/w_589,h_589,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_59c5ffe425d843559abbd8018a5ba8e1~mv2.png"
                                        alt="Parasnath Hill"
                                        className="w-full h-56 object-cover"
                                    />
                                    <div className="p-6">
                                        <div className="flex items-center space-x-2 text-sm mb-3">
                                            <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded">
                                                TRAVELER
                                            </span>
                                            <span className="text-gray-500">9/1/2024</span>
                                        </div>
                                        <h3 className="font-bold text-green-800 mb-2">
                                            CONQUERING PARASNATH HILL: A SPIRITUAL AND ADVENTUROUS TREK
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-4">
                                            Join me on a challenging yet rewarding journey to the highest peak
                                            in Jharkhand, a sacred Jain pilgrimage site with stunning panoramic
                                            views.
                                        </p>
                                        <p className="text-xs text-gray-500">By Rohan Singh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

            </section>

            {/* --- Cultural Festivals Section --- */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    {/* Heading */}
                    <h2 className="text-2xl md:text-3xl font-bold text-green-800">
                        CULTURAL FESTIVALS <span className="text-orange-600">& CELEBRATIONS</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-2">
                        Experience the vibrant tribal festivals that celebrate nature, harvest,
                        and community spirit throughout the year in Jharkhand.
                    </p>

                    {/* Horizontal Scrollable Row */}
                    <div className="mt-10 flex space-x-6 overflow-x-auto overflow-y-hidden pb-4">
                        {/* Festival 1 */}
                        <div className="w-72 flex-shrink-0 bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition transform hover:scale-105">
                            <div className="relative">
                                <img
                                    src="https://static.wixstatic.com/media/9e7689_5c487522a19643d58ee3fe4cc18d81ee~mv2.png/v1/fill/w_318,h_199,al_c,lg_1,q_85,enc_auto/9e7689_5c487522a19643d58ee3fe4cc18d81ee~mv2.png"
                                    alt="Sarhul"
                                    className="w-full h-48 object-cover"
                                />
                                <span className="absolute top-3 left-3 bg-orange-600 text-white text-xs px-2 py-1 rounded">
                                    SPRING
                                </span>
                            </div>
                            <div className="p-4 text-left">
                                <h3 className="font-bold text-lg text-green-800">SARHUL</h3>
                                <p className="text-sm text-gray-600">March – April</p>
                            </div>
                        </div>

                        {/* Festival 2 */}
                        <div className="w-72 flex-shrink-0 bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition transform hover:scale-105">
                            <div className="relative">
                                <img
                                    src="https://static.wixstatic.com/media/9e7689_63479686785b4ce0871e36ab813ad73f~mv2.png/v1/fill/w_318,h_199,al_c,lg_1,q_85,enc_auto/9e7689_63479686785b4ce0871e36ab813ad73f~mv2.png"
                                    alt="Karma"
                                    className="w-full h-48 object-cover"
                                />
                                <span className="absolute top-3 left-3 bg-orange-600 text-white text-xs px-2 py-1 rounded">
                                    MONSOON
                                </span>
                            </div>
                            <div className="p-4 text-left">
                                <h3 className="font-bold text-lg text-green-800">KARMA</h3>
                                <p className="text-sm text-gray-600">August – September</p>
                            </div>
                        </div>

                        {/* Festival 3 */}
                        <div className="w-72 flex-shrink-0 bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition transform hover:scale-105">
                            <div className="relative">
                                <img
                                    src="https://static.wixstatic.com/media/9e7689_3c415161e46240cbb776ac523102a1cb~mv2.png/v1/fill/w_318,h_199,al_c,lg_1,q_85,enc_auto/9e7689_3c415161e46240cbb776ac523102a1cb~mv2.png"
                                    alt="Sohrai"
                                    className="w-full h-48 object-cover"
                                />
                                <span className="absolute top-3 left-3 bg-orange-600 text-white text-xs px-2 py-1 rounded">
                                    POST-HARVEST
                                </span>
                            </div>
                            <div className="p-4 text-left">
                                <h3 className="font-bold text-lg text-green-800">SOHRAI</h3>
                                <p className="text-sm text-gray-600">October – November</p>
                            </div>
                        </div>

                        {/* Festival 4 */}
                        <div className="w-72 flex-shrink-0 bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition transform hover:scale-105">
                            <div className="relative">
                                <img
                                    src="https://static.wixstatic.com/media/9e7689_a3cfb90b51924d63bc06c4087673a5b6~mv2.png/v1/fill/w_318,h_199,al_c,lg_1,q_85,enc_auto/9e7689_a3cfb90b51924d63bc06c4087673a5b6~mv2.png"
                                    alt="Tusu Parab"
                                    className="w-full h-48 object-cover"
                                />
                                <span className="absolute top-3 left-3 bg-orange-600 text-white text-xs px-2 py-1 rounded">
                                    WINTER
                                </span>
                            </div>
                            <div className="p-4 text-left">
                                <h3 className="font-bold text-lg text-green-800">TUSU PARAB</h3>
                                <p className="text-sm text-gray-600">December – January</p>
                            </div>
                        </div>

                        {/* Festival 5 */}
                        <div className="w-72 flex-shrink-0 bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition transform hover:scale-105">
                            <div className="relative">
                                <img
                                    src="https://static.wixstatic.com/media/9e7689_7ee827e28f7043a3bacc9022aaa5d9a9~mv2.png/v1/fill/w_318,h_199,al_c,lg_1,q_85,enc_auto/9e7689_7ee827e28f7043a3bacc9022aaa5d9a9~mv2.png"
                                    alt="Karam"
                                    className="w-full h-48 object-cover"
                                />
                                <span className="absolute top-3 left-3 bg-orange-600 text-white text-xs px-2 py-1 rounded">
                                    MONSOON
                                </span>
                            </div>
                            <div className="p-4 text-left">
                                <h3 className="font-bold text-lg text-green-800">KARAM</h3>
                                <p className="text-sm text-gray-600">September</p>
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="mt-10">
                        <button className="flex items-center mx-auto bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition hover:cursor-pointer hover:scale-105">
                            📅 VIEW FESTIVAL CALENDAR
                        </button>
                    </div>
                </div>
            </section>

            {/* --- Local Crafts Section --- */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-green-800">LOCAL CRAFTS</h2>
                            <p className="text-gray-600">
                                Support local artisans and take home authentic souvenirs
                            </p>
                        </div>
                        <button onClick={()=>{
                            window.location.href="/CraftsPage"
                        }} className="flex items-center border border-green-700 text-green-700 px-4 py-2 rounded-md hover:bg-green-700 hover:text-white transition hover:cursor-pointer">
                            SHOP ALL CRAFTS →
                        </button>
                    </div>

                    {/* Craft Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 hover:cursor-pointer">
                        {/* Card 1 */}
                        <div className=" rounded-lg shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-105 hover:border-yellow-500 border bg-green-950">
                            <img
                                src="https://static.wixstatic.com/media/9e7689_628ae4855ffa43cdaf0c927dc935e1f7~mv2.png/v1/fill/w_439,h_439,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_628ae4855ffa43cdaf0c927dc935e1f7~mv2.png"
                                alt="Dokra Elephant Figurine"
                                className="w-full h-56 object-cover"
                            />
                            <div className=" text-white p-4">
                                <span className="bg-yellow-700 text-white text-xs px-2 py-1 rounded">
                                    METAL CRAFT
                                </span>
                                <h3 className="mt-2 font-bold">DOKRA ELEPHANT FIGURINE</h3>
                                <p className="text-sm text-gray-300">By Ramesh Munda</p>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-orange-400 font-bold">₹125.5</span>
                                    <span className="text-xs">8 in stock</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-105 hover:border-yellow-500 border">
                            <img
                                src="https://static.wixstatic.com/media/9e7689_efca5f7932584e1785b4b2c68d8380a4~mv2.png/v1/fill/w_439,h_439,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_efca5f7932584e1785b4b2c68d8380a4~mv2.png"
                                alt="Tussar Silk Saree"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4 bg-green-950 text-white">
                                <span className="bg-yellow-700 text-white text-xs px-2 py-1 rounded">
                                    TEXTILE WEAVING
                                </span>
                                <h3 className="mt-2 font-bold">
                                    TUSSAR SILK SAREE (FOREST GREEN)
                                </h3>
                                <p className="text-sm text-gray-300">By Sita Devi</p>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-orange-400 font-bold">₹350</span>
                                    <span className="text-xs">3 in stock</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-105 hover:border-yellow-500 border">
                            <img
                                src="https://static.wixstatic.com/media/9e7689_2d53cc2b87644ca79eaf7455f545ed4f~mv2.png/v1/fill/w_439,h_439,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_2d53cc2b87644ca79eaf7455f545ed4f~mv2.png"
                                alt="Bamboo Wall Hanging"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4 bg-green-950 text-white">
                                <span className="bg-yellow-700 text-white text-xs px-2 py-1 rounded">
                                    BAMBOO CRAFT
                                </span>
                                <h3 className="mt-2 font-bold">
                                    BAMBOO WALL HANGING (TRIBAL MOTIF)
                                </h3>
                                <p className="text-sm text-gray-300">By Kishore Hembrom</p>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-orange-400 font-bold">₹45.75</span>
                                    <span className="text-xs">15 in stock</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-105 hover:border-yellow-500 border">
                            <img
                                src="https://static.wixstatic.com/media/9e7689_b767f855c8444da0962de2284e15071d~mv2.png/v1/fill/w_439,h_439,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_b767f855c8444da0962de2284e15071d~mv2.png"
                                alt="Paitkar Scroll Painting"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4 bg-green-950 text-white">
                                <span className="bg-yellow-700 text-white text-xs px-2 py-1 rounded">
                                    FOLK PAINTING
                                </span>
                                <h3 className="mt-2 font-bold">
                                    PAITKAR SCROLL PAINTING (LIFE CYCLE)
                                </h3>
                                <p className="text-sm text-gray-300">By Gopal Chitrakar</p>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-orange-400 font-bold">₹210</span>
                                    <span className="text-xs">2 in stock</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>


        </div>
    );
};

export default HomePage;
