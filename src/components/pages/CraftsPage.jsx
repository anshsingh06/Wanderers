import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Award, ShoppingBag } from "lucide-react";

export default function CraftsPage() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All Categories");
    const [price, setPrice] = useState("All Prices");
    const [sort, setSort] = useState("Name A-Z");
    const products = [
        {
            id: 1,
            name: "DOKRA ELEPHANT FIGURINE",
            author: "Ramesh Munda",
            description:
                "Handcrafted Dokra metal art depicting a majestic elephant, a symbol of strength and wisdom. Made using the ancient lost-wax casting technique.",
            price: 125.5,
            stock: 8,
            category: "METAL CRAFT",
            stockStatus: "In Stock",
            image:
                "https://static.wixstatic.com/media/9e7689_628ae4855ffa43cdaf0c927dc935e1f7~mv2.png/v1/fill/w_443,h_443,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_628ae4855ffa43cdaf0c927dc935e1f7~mv2.png", // replace with your image
        },
        {
            id: 2,
            name: "TUSSAR SILK SAREE (FOREST GREEN)",
            author: "Sita Devi",
            description:
                "Elegant Tussar silk saree, handwoven with natural forest green dyes. Known for its rich texture and eco-friendly process.",
            price: 350,
            stock: 3,
            category: "TEXTILE WEAVING",
            stockStatus: "Low Stock",
            image:
                "https://static.wixstatic.com/media/9e7689_efca5f7932584e1785b4b2c68d8380a4~mv2.png/v1/fill/w_443,h_443,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_efca5f7932584e1785b4b2c68d8380a4~mv2.png",
        },
        {
            id: 3,
            name: "BAMBOO WALL HANGING (TRIBAL MOTIF)",
            author: "Kishore Hembrom",
            description:
                "Intricately woven bamboo wall hanging featuring traditional tribal motifs. A sustainable and eco-friendly craft.",
            price: 45.75,
            stock: 15,
            category: "BAMBOO CRAFT",
            stockStatus: "In Stock",
            image:
                "https://static.wixstatic.com/media/9e7689_2d53cc2b87644ca79eaf7455f545ed4f~mv2.png/v1/fill/w_443,h_443,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_2d53cc2b87644ca79eaf7455f545ed4f~mv2.png",
        },
        {
            id: 4,
            name: "PAITKAR SCROLL PAINTING (LIFE CYCLE)",
            author: "Gopal Chitrakar",
            description:
                "A vibrant Paitkar scroll painting illustrating the traditional 'Life Cycle' narrative. This ancient folk art is full of symbolism.",
            price: 210,
            stock: 2,
            category: "FOLK PAINTING",
            stockStatus: "Low Stock",
            image:
                "https://static.wixstatic.com/media/9e7689_b767f855c8444da0962de2284e15071d~mv2.png/v1/fill/w_443,h_443,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_b767f855c8444da0962de2284e15071d~mv2.png",
        },
        {
            id: 5,
            name: "Terracotta Decorative Pot",
            author: "Prakash Prajapati",
            description:
                "Hand-molded terracotta pot with intricate geometric patterns, ideal for indoor plants or as a...",
            price: 30.25,
            stock: 20,
            category: "POTTERY",
            stockStatus: "In Stock",
            image:
                "https://static.wixstatic.com/media/9e7689_c03450a0bbc24560a0b93ea244e68f8c~mv2.png/v1/fill/w_443,h_443,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_c03450a0bbc24560a0b93ea244e68f8c~mv2.png",
        },
        {
            id: 6,
            name: "Lac Bangle Set (Red & Gold)",
            author: "Meena Kumari",
            description:
                "A set of six exquisite lac bangles, adorned with vibrant red and gold designs. Handcrafted with...",
            price: 22,
            stock: 12,
            category: "JEWELRY",
            stockStatus: "In Stock",
            image:
                "https://static.wixstatic.com/media/9e7689_670d87f95c43412b94e621774714819a~mv2.png/v1/fill/w_443,h_443,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_670d87f95c43412b94e621774714819a~mv2.png",
        },
        {
            id: 7,
            name: "Stone Carved Deity (Lord Shiva)",
            author: "Gopal Chitrakar",
            description:
                "Exquisitely hand-carved stone deity of Lord Shiva, crafted from local sandstone. A sacred and...",
            price: 290,
            stock: 1,
            category: "STONE CARVING",
            stockStatus: "Low Stock",
            image:
                "https://static.wixstatic.com/media/9e7689_0acb52f3eb2046f292da378c78f3e595~mv2.png/v1/fill/w_443,h_443,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_0acb52f3eb2046f292da378c78f3e595~mv2.png",
        },
        {
            id: 8,
            name: "Dokra Tribal Musician Set",
            author: "Sunil Tudu",
            description:
                "A vibrant Paitkar scroll painting illustrating the traditional 'Life Cycle' narrative. This ancient folk art is full of symbolism.",
            price: 210,
            stock: 2,
            category: "METAL CRAFT",
            stockStatus: "Low Stock",
            image:
                "https://static.wixstatic.com/media/9e7689_c2aeddbb29194130ba09990581593e4e~mv2.png/v1/fill/w_443,h_443,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e7689_c2aeddbb29194130ba09990581593e4e~mv2.png",
        },
    ];


    return (
        <div className="px-8 py-12">
            {/* Title Section */}
            <h2 className="text-4xl font-extrabold text-center mb-4">
                <span className="text-green-700">LOCAL CRAFTS & </span>
                <span className="text-orange-600">ARTISAN MARKETPLACE</span>
            </h2>
            <p className="text-center text-green-700 mb-12 max-w-3xl mx-auto">
                Support local artisans and take home authentic handmade crafts that
                showcase the rich cultural heritage and traditional skills of Jharkhand.
            </p>

            {/* Filters Bar */}
            <div className="bg-green-50 p-6 rounded-xl shadow-sm">
                <div className="flex flex-wrap items-center gap-4">
                    {/* Search */}
                    <div className="relative flex-1 min-w-[200px]">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600" size={18} />
                        <input
                            type="text"
                            placeholder="Search crafts or artisans..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                        />
                    </div>

                    {/* Category Dropdown */}
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-green-600"
                    >
                        <option>All Categories</option>
                        <option>Handicrafts</option>
                        <option>Textiles</option>
                        <option>Jewelry</option>
                        <option>Woodwork</option>
                    </select>

                    {/* Price Dropdown */}
                    <select
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-green-600"
                    >
                        <option>All Prices</option>
                        <option>Under ₹500</option>
                        <option>₹500 - ₹1000</option>
                        <option>Above ₹1000</option>
                    </select>

                    {/* Sort Dropdown */}
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-green-600"
                    >
                        <option>Name A-Z</option>
                        <option>Name Z-A</option>
                        <option>Price Low-High</option>
                        <option>Price High-Low</option>
                    </select>
                </div>

                {/* Footer Info */}
                <div className="flex justify-between items-center mt-4 text-sm text-green-700">
                    <span>12 products found</span>
                    <span className="flex items-center gap-1">
                        <Filter size={16} /> Filters applied: None
                    </span>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* ✅ Product Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200"
                        >
                            {/* Image */}
                            <div className="relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-56 w-full object-cover"
                                />
                                {/* Category Badge */}
                                <span className="absolute top-2 left-2 bg-orange-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                    {product.category}
                                </span>
                                {/* Stock Status */}
                                <span
                                    className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded ${product.stockStatus === "In Stock"
                                        ? "bg-green-600 text-white"
                                        : "bg-orange-500 text-white"
                                        }`}
                                >
                                    {product.stockStatus}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-4 bg-[#0B3D2E] text-white flex flex-col justify-between h-60">
                                <div>
                                    <h3 className="font-bold text-lg">{product.name}</h3>
                                    <p className="text-sm text-gray-300">By {product.author}</p>
                                    <p className="mt-2 text-sm line-clamp-2">
                                        {product.description}
                                    </p>
                                </div>

                                {/* Price + Stock */}
                                <div className="flex items-center justify-between mt-4 text-sm">
                                    <span className="text-orange-400 font-bold text-lg">
                                        ₹{product.price}
                                    </span>
                                    <span className="text-gray-300">{product.stock} left</span>
                                </div>

                                {/* Buttons */}
                                <div className="mt-3 flex items-center justify-between">
                                    <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-3 py-2 rounded-md flex items-center justify-center gap-2">
                                        🛒 ADD TO CART
                                    </button>
                                    <button className="ml-2 p-2 border border-white rounded-md hover:bg-white hover:text-black">
                                        ➜
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-0">
                {/* ... your filters and product grid code here ... */}

                {/* ✅ Supporting Local Artisans Section */}
                <div className="bg-[#FAFCF9] rounded-xl p-10 mt-16 text-center">
                    <Award className="mx-auto h-12 w-12 text-orange-600" />
                    <h2 className="text-2xl md:text-3xl font-bold text-green-700 mt-4">
                        SUPPORTING LOCAL ARTISANS
                    </h2>
                    <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
                        Every purchase directly supports local artisans and their families,
                        helping preserve traditional crafts and skills that have been passed
                        down through generations. Your support makes a real difference in
                        their communities.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div>
                            <p className="text-orange-600 text-2xl font-bold">50+</p>
                            <p className="text-gray-700 text-sm uppercase tracking-wide">
                                Local Artisans
                            </p>
                        </div>
                        <div>
                            <p className="text-orange-600 text-2xl font-bold">15+</p>
                            <p className="text-gray-700 text-sm uppercase tracking-wide">
                                Craft Categories
                            </p>
                        </div>
                        <div>
                            <p className="text-orange-600 text-2xl font-bold">100%</p>
                            <p className="text-gray-700 text-sm uppercase tracking-wide">
                                Authentic Handmade
                            </p>
                        </div>
                    </div>
                </div>

                {/* ✅ Ready to Shop Section */}
                <div className="bg-[#132916] text-white rounded-xl p-12 mt-12 text-center">
                    <ShoppingBag className="mx-auto h-12 w-12 text-orange-500" />
                    <h2 className="text-2xl md:text-3xl font-bold mt-4">READY TO SHOP?</h2>
                    <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
                        Browse our collection of authentic handmade crafts and support local
                        artisans. Each piece tells a story and carries the heritage of
                        Jharkhand.
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2">
                            <ShoppingBag className="h-5 w-5" />
                            CONTINUE SHOPPING
                        </button>
                        <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-md font-semibold">
                            MEET THE ARTISANS
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
