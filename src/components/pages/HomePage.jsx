import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import {
  MapPin,
  Calendar,
  Users,
  Compass,
  Camera,
  ShoppingBag,
  Mountain,
  Play,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Music,
  PlayCircle,
  Shield
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [featuredAttractions, setFeaturedAttractions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Additional states for other sections
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [festivals, setFestivals] = useState([]);
  const [currentFestivalIndex, setCurrentFestivalIndex] = useState(0);
  const [featuredCrafts, setFeaturedCrafts] = useState([]);
  const [jharkhandi_songs, setJharkhandiSongs] = useState([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const attractionsData = await BaseCrudService.getAll('attractions');
        setFeaturedAttractions(attractionsData.items.slice(0, 6));

        const blogsData = await BaseCrudService.getAll('blogs');
        setRecentBlogs(blogsData.items.slice(0, 6));

        const festivalsData = await BaseCrudService.getAll('festivals');
        setFestivals(festivalsData.items);

        const craftsData = await BaseCrudService.getAll('crafts');
        setFeaturedCrafts(craftsData.items.slice(0, 4));

        setJharkhandiSongs([
          {
            title: "Ho Munda",
            artist: "Folk Artist",
            cover: "https://static.wixstatic.com/media/9e7689_568fbc4dccad4341a8cd6a7a80ee6ad5~mv2.png"
          },
          {
            title: "Nagpuri Beats",
            artist: "Jharkhand Band",
            cover: "https://static.wixstatic.com/media/9e7689_2650ab4b3751446ca2d24ebd32ce45eb~mv2.png"
          }
        ]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const features = [
    {
      icon: Calendar,
      title: 'Smart Itineraries',
      description: 'AI-powered travel plans tailored to your interests, budget, and time, featuring the best of Jharkhand.',
      link: '/itinerary',
      color: 'text-primary'
    },
    {
      icon: Camera,
      title: 'Travel Stories',
      description: 'Authentic experiences and photo journals from locals and fellow wanderers exploring Jharkhand.',
      link: '/blogs',
      color: 'text-secondary'
    },
    {
      icon: Mountain,
      title: 'Hidden Gems',
      description: 'Discover secret waterfalls, ancient caves, and pristine forests known only to locals.',
      link: '/insights',
      color: 'text-gold'
    },
    {
      icon: ShoppingBag,
      title: 'Local Crafts',
      description: 'Support tribal artisans and take home authentic handcrafted treasures with cultural stories.',
      link: '/crafts',
      color: 'text-earth'
    }
  ];

  const stats = [
    { number: '50+', label: 'Hidden Attractions', icon: Mountain },
    { number: '100+', label: 'Travel Stories', icon: Camera },
    { number: '25+', label: 'Local Artisans', icon: Users },
    { number: '15+', label: 'Audio Guides', icon: Play }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="font-paragraph text-primary">Loading amazing experiences...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full max-w-[120rem] mx-auto min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/9e7689_9fb4a85d35264e0ba86d1e293af435e6~mv2.png?originWidth=1920&originHeight=1024"
            alt="Lush green forest landscape of Jharkhand"
            width={1920}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"></div>
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 relative"
              >
                <div className="absolute inset-0 bg-black/30 rounded-2xl backdrop-blur-sm -m-8 p-8"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge className="bg-secondary/90 backdrop-blur-sm text-secondary-foreground font-paragraph text-xs uppercase tracking-wide shadow-lg">
                      Modern Tourism
                    </Badge>
                    <Badge variant="outline" className="font-paragraph text-xs uppercase tracking-wide border-gold/80 text-gold bg-black/20 backdrop-blur-sm shadow-lg">
                      Jharkhand 2024
                    </Badge>
                  </div>
                  <p className="text-lg text-textwhite/90 max-w-2xl leading-relaxed font-paragraph drop-shadow-lg">
                    Embark on an extraordinary journey through Jharkhand's pristine landscapes, 
                    vibrant tribal culture, and hidden treasures.
                  </p>
                  <h1 className="font-heading text-6xl lg:text-8xl text-textwhite leading-none tracking-wide drop-shadow-2xl">
                    <span className="font-normal">Wander</span>
                    <br />
                    <span className="text-secondary font-black drop-shadow-2xl">Jharkhand</span>
                  </h1>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 relative z-10">
                  <Link to="/itinerary">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Calendar className="h-5 w-5 mr-2" />
                      Plan Journey
                    </Button>
                  </Link>
                  <Link to="/insights">
                    <Button variant="outline" size="lg" className="border-secondary/80 text-secondary">
                      <Compass className="h-5 w-5 mr-2" />
                      Discover Gems
                    </Button>
                  </Link>
                </div>
              </motion.div>
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-2">
                      <stat.icon className="h-6 w-6 text-secondary mr-2" />
                      <div className="font-heading text-3xl font-black text-textwhite">
                        {stat.number}
                      </div>
                    </div>
                    <div className="font-paragraph text-sm text-textwhite/80 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            {/* Right Image Collage */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="https://static.wixstatic.com/media/9e7689_568fbc4dccad4341a8cd6a7a80ee6ad5~mv2.png"
                        alt="Jharkhand waterfall"
                        width={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src="https://static.wixstatic.com/media/9e7689_2650ab4b3751446ca2d24ebd32ce45eb~mv2.png"
                        alt="Tribal art"
                        width={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src="https://static.wixstatic.com/media/9e7689_3b5e4a2f7f7f457e87844ea4b2508cab~mv2.png"
                        alt="Jharkhand forest"
                        width={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="https://static.wixstatic.com/media/9e7689_692c18a08d234e3aa454cac5d98b6146~mv2.png"
                        alt="Traditional village"
                        width={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-backgroundlight">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-heading text-4xl lg:text-5xl font-black text-primary uppercase mb-6"
            >
              Your Adventure Begins
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-paragraph text-lg text-primary/80 max-w-3xl mx-auto"
            >
              From smart travel planning to authentic cultural experiences, we provide everything you need for an unforgettable journey through Jharkhand.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={feature.link}>
                  <Card className="h-full bg-background/80 backdrop-blur-sm border-primary/10 hover:border-secondary/50 transition-all duration-300 hover:shadow-xl hover:scale-105 group">
                    <CardContent className="p-6">
                      <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
                      <h3 className="font-heading text-xl font-bold text-primary uppercase mb-3">
                        {feature.title}
                      </h3>
                      <p className="font-paragraph text-sm text-primary/70 leading-relaxed">
                        {feature.description}
                      </p>
                      <ArrowRight className="h-5 w-5 text-primary mt-4" />
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Attractions */}
      <section className="py-20 bg-background">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="font-heading text-4xl lg:text-5xl font-black text-primary uppercase mb-4"
              >
                Featured Attractions
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="font-paragraph text-lg text-primary/80"
              >
                Discover the most captivating destinations in Jharkhand
              </motion.p>
            </div>
            <Link to="/attractions">
              <Button variant="outline" className="font-button text-sm uppercase tracking-wide">
                View All
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAttractions.map((attraction, index) => (
              <motion.div
                key={attraction._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden bg-backgrounddark border-primary/10 hover:border-secondary/50 transition-all duration-300 group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <motion.div
                      initial={{ opacity: 0, scale: 1.1 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <Image
                        src={attraction.mainImage || 'https://static.wixstatic.com/media/9e7689_5f4a3304fbec423086ffc75f2e9a3858~mv2.png'}
                        alt={attraction.name || 'Attraction'}
                        width={400}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </motion.div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-secondary text-secondary-foreground font-paragraph text-xs uppercase">
                        {attraction.category}
                      </Badge>
                      {attraction.isWheelchairAccessible && (
                        <Badge variant="outline" className="font-paragraph text-xs border-gold text-gold">
                          Accessible
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-textwhite uppercase mb-2">
                      {attraction.name}
                    </h3>
                    <p className="font-paragraph text-sm text-textwhite/80 mb-4 line-clamp-2">
                      {attraction.description}
                    </p>
                    <div className="flex items-center text-textwhite/60">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="font-paragraph text-xs">
                        {attraction.address}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Blogs Section */}
      <section className="py-20 bg-backgroundlight">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="font-heading text-4xl lg:text-5xl font-black text-primary uppercase mb-4"
              >
                Travel Stories
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="font-paragraph text-lg text-primary/80"
              >
                Experiences from fellow travelers exploring Jharkhand
              </motion.p>
            </div>
            <Link to="/blogs">
              <Button variant="outline" className="font-button text-sm uppercase tracking-wide">
                View All
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentBlogs.map((blog, index) => (
              <motion.div
                key={blog._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden bg-backgrounddark border-primary/10 hover:border-secondary/50 transition-all duration-300 group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <motion.div
                      initial={{ opacity: 0, scale: 1.1 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <Image
                        src={blog.coverImage}
                        alt={blog.title}
                        width={400}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </motion.div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-secondary text-secondary-foreground font-paragraph text-xs uppercase">
                        {blog.category}
                      </Badge>
                      <span className="text-xs text-textwhite/60">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-textwhite uppercase mb-2">
                      {blog.title}
                    </h3>
                    <p className="font-paragraph text-sm text-textwhite/80 mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center text-textwhite/60">
                      <span className="font-paragraph text-xs">
                        By {blog.author}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Festivals Gallery */}
      <section className="py-20 bg-background">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="font-heading text-4xl lg:text-5xl font-black text-primary uppercase mb-4"
              >
                Festivals of Jharkhand
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="font-paragraph text-lg text-primary/80"
              >
                Celebrate the vibrant culture and traditions
              </motion.p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentFestivalIndex(Math.max(currentFestivalIndex - 1, 0))}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentFestivalIndex(Math.min(currentFestivalIndex + 1, festivals.length - 1))}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="overflow-hidden" ref={scrollContainerRef}>
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentFestivalIndex * 100}%)` }}
            >
              {festivals.map((festival, index) => (
                <motion.div
                  key={festival._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="min-w-full px-4"
                >
                  <Card className="overflow-hidden bg-backgrounddark border-primary/10">
                    <div className="aspect-[16/9] overflow-hidden">
                      <Image
                        src={festival.image}
                        alt={festival.name}
                        width={800}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-heading text-2xl font-bold text-textwhite uppercase mb-2">
                        {festival.name}
                      </h3>
                      <p className="font-paragraph text-sm text-textwhite/80 mb-4 line-clamp-3">
                        {festival.description}
                      </p>
                      <div className="flex items-center text-textwhite/60">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="font-paragraph text-xs">
                          {festival.date}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-20 bg-backgroundlight">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-black text-primary uppercase mb-6">
              Rhythms of Jharkhand
            </h2>
            <p className="font-paragraph text-lg text-primary/80 mb-8">
              Immerse yourself in the soul of Jharkhand through traditional songs and music
            </p>
            <div className="bg-backgrounddark p-6 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4">
                <Music className="h-12 w-12 text-secondary" />
                <div>
                  <h3 className="font-heading text-xl font-bold text-textwhite">
                    Featured Track
                  </h3>
                  <p className="font-paragraph text-sm text-textwhite/80">
                    Traditional Tribal Song
                  </p>
                </div>
                <Button size="icon" className="ml-auto bg-secondary text-secondary-foreground">
                  <PlayCircle className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {jharkhandi_songs.map((song, index) => (
              <Card
                key={index}
                className="bg-backgrounddark border-primary/10 p-4 hover:border-secondary/50 transition-all duration-300 group"
              >
                <div className="aspect-square mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={song.cover}
                    alt={song.title}
                    width={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-heading text-lg font-bold text-textwhite mb-1">
                  {song.title}
                </h4>
                <p className="font-paragraph text-sm text-textwhite/70">
                  {song.artist}
                </p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Local Crafts Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="font-heading text-4xl lg:text-5xl font-black text-primary uppercase mb-4"
              >
                Tribal Crafts
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="font-paragraph text-lg text-primary/80"
              >
                Authentic handcrafted treasures from Jharkhand artisans
              </motion.p>
            </div>
            <Link to="/crafts">
              <Button variant="outline" className="font-button text-sm uppercase tracking-wide">
                Explore All
                <ShoppingBag className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCrafts.map((craft, index) => (
              <motion.div
                key={craft._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden bg-backgrounddark border-primary/10 hover:border-secondary/50 transition-all duration-300 group">
                  <div className="aspect-square overflow-hidden">
                    <motion.div
                      initial={{ opacity: 0, scale: 1.1 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <Image
                        src={craft.image}
                        alt={craft.name}
                        width={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </motion.div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-textwhite uppercase mb-2">
                      {craft.name}
                    </h3>
                    <p className="font-paragraph text-sm text-textwhite/80 mb-4 line-clamp-2">
                      {craft.description}
                    </p>
                    <div className="font-heading text-lg font-bold text-secondary">
                      ₹{craft.price}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-28 bg-gradient-to-br from-primary via-secondary to-primary/80 text-textwhite">
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/9e7689_9fb4a85d35264e0ba86d1e293af435e6~mv2.png"
            alt="Jharkhand landscape"
            width={1920}
            className="w-full h-full object-cover mix-blend-overlay opacity-20"
          />
        </div>
        <div className="relative max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-heading text-5xl lg:text-6xl font-black uppercase mb-8"
          >
            Start Your Journey Through Jharkhand
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-paragraph text-lg max-w-2xl mx-auto mb-10"
          >
            Experience the unexplored beauty, culture, and traditions with Wander Jharkhand
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/itinerary">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Start Exploring
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link to="/safety">
              <Button variant="outline" size="lg" className="border-textwhite text-textwhite">
                <Shield className="h-5 w-5 mr-2" />
                Travel Safe
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
