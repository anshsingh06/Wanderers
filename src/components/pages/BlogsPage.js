import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { useMember } from '@/integrations';
import { MemberProtectedRoute } from '@/components/ui/member-protected-route';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Eye, 
  Heart,
  Share2,
  Plus,
  Camera,
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [authorFilter, setAuthorFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const { isAuthenticated } = useMember();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { items } = await BaseCrudService.getAll('travelblogs');
        const approvedBlogs = items.filter(blog => blog.isApproved);
        setBlogs(approvedBlogs);
        setFilteredBlogs(approvedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    let filtered = blogs;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.blogTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.authorName?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Author type filter
    if (authorFilter !== 'all') {
      filtered = filtered.filter(blog => blog.authorType === authorFilter);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.publicationDate || 0).getTime() - new Date(a.publicationDate || 0).getTime();
        case 'oldest':
          return new Date(a.publicationDate || 0).getTime() - new Date(b.publicationDate || 0).getTime();
        case 'title':
          return (a.blogTitle || '').localeCompare(b.blogTitle || '');
        default:
          return 0;
      }
    });

    setFilteredBlogs(filtered);
  }, [blogs, searchTerm, authorFilter, sortBy]);

  const authorTypes = [...new Set(blogs.map(blog => blog.authorType).filter(Boolean))];

  const featuredBlogs = filteredBlogs.slice(0, 3);
  const regularBlogs = filteredBlogs.slice(3);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="font-paragraph text-primary">Loading travel stories...</p>
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
              Travel Stories &
              <br />
              <span className="text-secondary">Photo Journals</span>
            </h1>
            <p className="font-paragraph text-lg text-primary/80 max-w-3xl mx-auto mb-8">
              Discover authentic travel experiences, hidden gems, and local insights through stories 
              shared by fellow travelers and local community members.
            </p>
            
            {isAuthenticated && (
              <Link to="/blogs/create">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-paragraph text-sm uppercase tracking-wide">
                  <Plus className="h-4 w-4 mr-2" />
                  Share Your Story
                </Button>
              </Link>
            )}
          </motion.div>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <Card className="bg-backgroundlight border-primary/10">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary/60" />
                  <Input
                    placeholder="Search stories..."
                    className="pl-10 font-paragraph"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Author Filter */}
                <Select value={authorFilter} onValueChange={setAuthorFilter}>
                  <SelectTrigger className="font-paragraph">
                    <SelectValue placeholder="Author Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all" className="font-paragraph">All Authors</SelectItem>
                    {authorTypes.map((type) => (
                      <SelectItem key={type} value={type || ''} className="font-paragraph">
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="font-paragraph">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest" className="font-paragraph">Newest First</SelectItem>
                    <SelectItem value="oldest" className="font-paragraph">Oldest First</SelectItem>
                    <SelectItem value="title" className="font-paragraph">Title A-Z</SelectItem>
                  </SelectContent>
                </Select>

                {/* Results Count */}
                <div className="flex items-center justify-center md:justify-start">
                  <span className="font-paragraph text-sm text-primary/70">
                    {filteredBlogs.length} stories found
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20">
            <Camera className="h-24 w-24 text-primary/30 mx-auto mb-6" />
            <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-4">
              No Stories Found
            </h3>
            <p className="font-paragraph text-primary/70 max-w-md mx-auto">
              Try adjusting your search criteria or be the first to share a story about this topic.
            </p>
          </div>
        ) : (
          <>
            {/* Featured Stories */}
            {featuredBlogs.length > 0 && (
              <section className="mb-16">
                <h2 className="font-heading text-3xl font-bold text-primary uppercase mb-8">
                  Featured Stories
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {featuredBlogs.map((blog, index) => (
                    <motion.div
                      key={blog._id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link to={`/blogs/${blog._id}`}>
                        <Card className="h-full bg-backgrounddark border-primary/10 hover:border-primary/30 transition-all duration-300 group overflow-hidden">
                          <div className="aspect-[16/9] overflow-hidden">
                            <Image
                              src={blog.mainImage || 'https://static.wixstatic.com/media/9e7689_ddeb3f304a2a4349b42e478be5bbdb39~mv2.png?originWidth=384&originHeight=192'}
                              alt={blog.blogTitle || 'Travel story'}
                              width={400}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <CardContent className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <Badge className="bg-secondary text-secondary-foreground font-paragraph text-xs uppercase">
                                Featured
                              </Badge>
                              <Badge variant="outline" className="font-paragraph text-xs">
                                {blog.authorType}
                              </Badge>
                            </div>
                            <h3 className="font-heading text-xl font-bold text-textwhite uppercase mb-3 line-clamp-2">
                              {blog.blogTitle}
                            </h3>
                            <p className="font-paragraph text-sm text-textwhite/80 mb-4 line-clamp-3">
                              {blog.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-textwhite/60">
                              <div className="flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                <span className="font-paragraph text-xs">
                                  {blog.authorName}
                                </span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span className="font-paragraph text-xs">
                                  {blog.publicationDate && new Date(blog.publicationDate).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* Regular Stories Grid */}
            {regularBlogs.length > 0 && (
              <section>
                <h2 className="font-heading text-3xl font-bold text-primary uppercase mb-8">
                  All Stories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularBlogs.map((blog, index) => (
                    <motion.div
                      key={blog._id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (index % 6) * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link to={`/blogs/${blog._id}`}>
                        <Card className="h-full bg-backgroundlight border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                          <div className="aspect-[16/9] overflow-hidden">
                            <Image
                              src={blog.mainImage || 'https://static.wixstatic.com/media/9e7689_a97dbbb2f4224911baadcf7b1c1fc6dd~mv2.png?originWidth=384&originHeight=192'}
                              alt={blog.blogTitle || 'Travel story'}
                              width={400}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <CardContent className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <Badge variant="outline" className="font-paragraph text-xs">
                                {blog.authorType}
                              </Badge>
                              <span className="font-paragraph text-xs text-primary/60">
                                {blog.publicationDate && new Date(blog.publicationDate).toLocaleDateString()}
                              </span>
                            </div>
                            <h3 className="font-heading text-lg font-bold text-primary uppercase mb-3 line-clamp-2">
                              {blog.blogTitle}
                            </h3>
                            <p className="font-paragraph text-sm text-primary/70 mb-4 line-clamp-3">
                              {blog.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center text-primary/60">
                                <User className="h-4 w-4 mr-1" />
                                <span className="font-paragraph text-xs">
                                  {blog.authorName}
                                </span>
                              </div>
                              <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {/* Call to Action */}
        <section className="mt-20 text-center">
          <Card className="bg-backgrounddark border-primary/10">
            <CardContent className="p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Camera className="h-16 w-16 text-secondary mx-auto mb-6" />
                <h2 className="font-heading text-3xl font-bold text-textwhite uppercase mb-4">
                  Share Your Jharkhand Story
                </h2>
                <p className="font-paragraph text-lg text-textwhite/80 max-w-2xl mx-auto mb-8">
                  Have you discovered a hidden gem or had an amazing experience in Jharkhand? 
                  Share your story and photos to help fellow travelers and support local communities.
                </p>
                {isAuthenticated ? (
                  <Link to="/blogs/create">
                    <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-paragraph text-sm uppercase tracking-wide">
                      <Plus className="h-5 w-5 mr-2" />
                      Create Your Story
                    </Button>
                  </Link>
                ) : (
                  <div className="space-y-4">
                    <p className="font-paragraph text-sm text-textwhite/60">
                      Sign in to share your travel stories
                    </p>
                    <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-paragraph text-sm uppercase tracking-wide">
                      <User className="h-5 w-5 mr-2" />
                      Sign In to Share
                    </Button>
                  </div>
                )}
              </motion.div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

// Blog Detail Page Component
export function BlogDetailPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20">
          <h1 className="font-heading text-4xl font-bold text-primary uppercase mb-4">
            Blog Detail Page
          </h1>
          <p className="font-paragraph text-primary/70">
            Individual blog post view will be implemented here
          </p>
          <Link to="/blogs">
            <Button className="mt-6 font-paragraph text-sm uppercase tracking-wide">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
              Back to Stories
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Create Blog Page Component
export function CreateBlogPage() {
  return (
    <MemberProtectedRoute messageToSignIn="Sign in to share your travel story">
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <h1 className="font-heading text-4xl font-bold text-primary uppercase mb-4">
              Create Your Story
            </h1>
            <p className="font-paragraph text-primary/70">
              Blog creation form will be implemented here
            </p>
            <Link to="/blogs">
              <Button className="mt-6 font-paragraph text-sm uppercase tracking-wide">
                <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                Back to Stories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MemberProtectedRoute>
  );
}
