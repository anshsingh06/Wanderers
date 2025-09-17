import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { 
  Search, 
  MapPin, 
  Filter,
  Accessibility,
  Users,
  Star,
  Navigation,
  Camera,
  ArrowRight,
  Eye,
  Heart,
  Share2
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function AttractionsPage() {
  const [attractions, setAttractions] = useState([]);
  const [filteredAttractions, setFilteredAttractions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [accessibilityFilter, setAccessibilityFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const { items } = await BaseCrudService.getAll('attractions');
        setAttractions(items);
        setFilteredAttractions(items);
      } catch (error) {
        console.error('Error fetching attractions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAttractions();
  }, []);

  useEffect(() => {
    let filtered = attractions;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(attraction =>
        attraction.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        attraction.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        attraction.address?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        attraction.category?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(attraction => attraction.category === categoryFilter);
    }

    // Accessibility filter
    if (accessibilityFilter !== 'all') {
      if (accessibilityFilter === 'wheelchair') {
        filtered = filtered.filter(attraction => attraction.isWheelchairAccessible);
      } else if (accessibilityFilter === 'family') {
        filtered = filtered.filter(attraction => attraction.isFamilyFriendly);
      }
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return (a.name || '').localeCompare(b.name || '');
        case 'category':
          return (a.category || '').localeCompare(b.category || '');
        default:
          return 0;
      }
    });

    setFilteredAttractions(filtered);
  }, [attractions, searchTerm, categoryFilter, accessibilityFilter, sortBy]);

  const categories = [...new Set(attractions.map(a => a.category).filter(Boolean))];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="font-paragraph text-primary">Loading attractions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-4xl lg:text-6xl font-black text-primary uppercase mb-6">
              Discover
              <br />
              <span className="text-secondary">Jharkhand Attractions</span>
            </h1>
            <p className="font-paragraph text-lg text-primary/80 max-w-3xl mx-auto">
              Explore the diverse attractions of Jharkhand, from majestic waterfalls and ancient temples 
              to wildlife sanctuaries and cultural heritage sites.
            </p>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <Card className="bg-backgroundlight border-primary/10">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {/* Search */}
                <div className="relative md:col-span-2">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary/60" />
                  <Input
                    placeholder="Search attractions..."
                    className="pl-10 font-paragraph"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Category Filter */}
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="font-paragraph">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all" className="font-paragraph">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category || ''} className="font-paragraph">
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Accessibility Filter */}
                <Select value={accessibilityFilter} onValueChange={setAccessibilityFilter}>
                  <SelectTrigger className="font-paragraph">
                    <SelectValue placeholder="Accessibility" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all" className="font-paragraph">All Places</SelectItem>
                    <SelectItem value="wheelchair" className="font-paragraph">Wheelchair Accessible</SelectItem>
                    <SelectItem value="family" className="font-paragraph">Family Friendly</SelectItem>
                  </SelectContent>
                </Select>

                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="font-paragraph">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name" className="font-paragraph">Name A-Z</SelectItem>
                    <SelectItem value="category" className="font-paragraph">Category</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <span className="font-paragraph text-sm text-primary/70">
                  {filteredAttractions.length} attractions found
                </span>
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4 text-primary/60" />
                  <span className="font-paragraph text-sm text-primary/60">
                    Filters applied: {[
                      searchTerm && 'Search',
                      categoryFilter !== 'all' && 'Category',
                      accessibilityFilter !== 'all' && 'Accessibility'
                    ].filter(Boolean).join(', ') || 'None'}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        {filteredAttractions.length === 0 ? (
          <div className="text-center py-20">
            <Camera className="h-24 w-24 text-primary/30 mx-auto mb-6" />
            <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-4">
              No Attractions Found
            </h3>
            <p className="font-paragraph text-primary/70 max-w-md mx-auto">
              Try adjusting your search criteria or explore different categories to find amazing places to visit.
            </p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setCategoryFilter('all');
                setAccessibilityFilter('all');
              }}
              className="mt-6 font-paragraph text-sm uppercase tracking-wide"
            >
              Clear All Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAttractions.map((attraction, index) => (
              <motion.div
                key={attraction._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 9) * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-backgrounddark border-primary/10 hover:border-secondary/50 transition-all duration-300 group overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <Image
                      src={attraction.mainImage || 'https://static.wixstatic.com/media/9e7689_157ec2e989224c3383f4c54aeb95e8a0~mv2.png?originWidth=384&originHeight=256'}
                      alt={attraction.name || 'Attraction'}
                      width={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Overlay with quick actions */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="secondary" className="font-paragraph text-xs">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-paragraph text-xs">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-paragraph text-xs">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-secondary text-secondary-foreground font-paragraph text-xs uppercase">
                        {attraction.category}
                      </Badge>
                    </div>

                    {/* Accessibility badges */}
                    <div className="absolute top-4 right-4 flex flex-col space-y-1">
                      {attraction.isWheelchairAccessible && (
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                          <Accessibility className="h-4 w-4 text-white" />
                        </div>
                      )}
                      {attraction.isFamilyFriendly && (
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <Users className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-heading text-xl font-bold text-textwhite uppercase line-clamp-2 flex-grow">
                        {attraction.name}
                      </h3>
                      <div className="flex items-center ml-2">
                        <Star className="h-4 w-4 text-secondary fill-current" />
                        <span className="font-paragraph text-sm text-textwhite/60 ml-1">4.5</span>
                      </div>
                    </div>

                    <p className="font-paragraph text-sm text-textwhite/80 mb-4 line-clamp-3">
                      {attraction.description}
                    </p>

                    <div className="flex items-center text-textwhite/60 mb-4">
                      <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="font-paragraph text-xs line-clamp-1">
                        {attraction.address}
                      </span>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {attraction.isWheelchairAccessible && (
                        <Badge variant="outline" className="font-paragraph text-xs text-textwhite border-textwhite/30">
                          Accessible
                        </Badge>
                      )}
                      {attraction.isFamilyFriendly && (
                        <Badge variant="outline" className="font-paragraph text-xs text-textwhite border-textwhite/30">
                          Family Friendly
                        </Badge>
                      )}
                      {attraction.latitude && attraction.longitude && (
                        <Badge variant="outline" className="font-paragraph text-xs text-textwhite border-textwhite/30">
                          GPS Available
                        </Badge>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-paragraph text-xs uppercase">
                        <Navigation className="h-4 w-4 mr-1" />
                        Get Directions
                      </Button>
                      <Button size="sm" variant="outline" className="border-textwhite text-textwhite hover:bg-textwhite hover:text-backgrounddark font-paragraph text-xs uppercase">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {filteredAttractions.length > 0 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="font-paragraph text-sm uppercase tracking-wide"
            >
              Load More Attractions
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <section className="mt-20">
          <Card className="bg-backgrounddark border-primary/10">
            <CardContent className="p-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Camera className="h-16 w-16 text-secondary mx-auto mb-6" />
                <h2 className="font-heading text-3xl font-bold text-textwhite uppercase mb-4">
                  Plan Your Perfect Visit
                </h2>
                <p className="font-paragraph text-lg text-textwhite/80 max-w-2xl mx-auto mb-8">
                  Ready to explore these amazing attractions? Create a personalized itinerary 
                  or get in touch with local guides for the best experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-paragraph text-sm uppercase tracking-wide">
                    <Navigation className="h-5 w-5 mr-2" />
                    Create Itinerary
                  </Button>
                  <Button size="lg" variant="outline" className="border-textwhite text-textwhite hover:bg-textwhite hover:text-backgrounddark font-paragraph text-sm uppercase tracking-wide">
                    <Users className="h-5 w-5 mr-2" />
                    Find Local Guide
                  </Button>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
