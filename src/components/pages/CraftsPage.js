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
  ShoppingBag, 
  Filter,
  Star,
  User,
  Package,
  Heart,
  Share2,
  Plus,
  Minus,
  ArrowRight,
  Award,
  Palette
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function CraftsPage() {
  const [crafts, setCrafts] = useState([]);
  const [filteredCrafts, setFilteredCrafts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [cart, setCart] = useState({});

  useEffect(() => {
    const fetchCrafts = async () => {
      try {
        const { items } = await BaseCrudService.getAll('localcrafts');
        setCrafts(items);
        setFilteredCrafts(items);
      } catch (error) {
        console.error('Error fetching crafts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCrafts();
  }, []);

  useEffect(() => {
    let filtered = crafts;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(craft =>
        (craft.productName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (craft.description || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (craft.artisanName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (craft.craftCategory || '').toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(craft => craft.craftCategory === categoryFilter);
    }

    // Price filter
    if (priceFilter !== 'all') {
      filtered = filtered.filter(craft => {
        const price = craft.price || 0;
        switch (priceFilter) {
          case 'under-500': return price < 500;
          case '500-1000': return price >= 500 && price <= 1000;
          case '1000-2500': return price > 1000 && price <= 2500;
          case 'over-2500': return price > 2500;
          default: return true;
        }
      });
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return (a.productName || '').localeCompare(b.productName || '');
        case 'price-low':
          return (a.price || 0) - (b.price || 0);
        case 'price-high':
          return (b.price || 0) - (a.price || 0);
        case 'artisan':
          return (a.artisanName || '').localeCompare(b.artisanName || '');
        default:
          return 0;
      }
    });

    setFilteredCrafts(filtered);
  }, [crafts, searchTerm, categoryFilter, priceFilter, sortBy]);

  const categories = [...new Set(crafts.map(c => c.craftCategory).filter(Boolean))];
  const totalCartItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const totalCartValue = Object.entries(cart).reduce((sum, [id, qty]) => {
    const craft = crafts.find(c => c._id === id);
    return sum + (craft?.price || 0) * qty;
  }, 0);

  const addToCart = (craftId) => {
    setCart(prev => ({
      ...prev,
      [craftId]: (prev[craftId] || 0) + 1
    }));
  };

  const removeFromCart = (craftId) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[craftId] > 1) {
        newCart[craftId]--;
      } else {
        delete newCart[craftId];
      }
      return newCart;
    });
  };

  const getStockStatus = (stock) => {
    if (!stock || stock === 0) return { text: 'Out of Stock', color: 'text-red-600' };
    if (stock < 5) return { text: 'Low Stock', color: 'text-orange-600' };
    return { text: 'In Stock', color: 'text-green-600' };
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="font-paragraph text-primary">Loading local crafts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      {/* --- Rest of your JSX remains unchanged --- */}
    </div>
  );
}
