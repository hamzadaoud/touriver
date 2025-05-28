'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { Calendar, Clock, User, Search } from 'lucide-react';
import { type Locale, defaultLocale, getTranslation } from '@/lib/i18n';

export default function BlogPage() {
  const [currentLocale, setCurrentLocale] = useState<Locale>(defaultLocale);
  const t = getTranslation(currentLocale);

  const handleLocaleChange = (locale: Locale) => {
    setCurrentLocale(locale);
  };

  const featuredPost = {
    id: 1,
    title: 'The Future of Sustainable Tourism in Morocco',
    excerpt: 'Exploring how eco-tourism initiatives are transforming rural communities while preserving Morocco\'s natural heritage for future generations.',
    content: 'In-depth analysis of sustainable tourism practices...',
    author: 'Dr. Amina El-Mansouri',
    category: 'Sustainable Tourism',
    date: '2024-01-20',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d90095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Traditional Berber Farming Meets Modern Sustainability',
      excerpt: 'How ancient agricultural wisdom is guiding contemporary eco-farming practices in the Atlas Mountains.',
      author: 'Mohamed Benali',
      category: 'Agritourism',
      date: '2024-01-18',
      readTime: 6,
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Solar Power Revolution in Rural Morocco',
      excerpt: 'Discover how renewable energy projects are bringing electricity to remote villages and supporting eco-tourism development.',
      author: 'Sarah Johnson',
      category: 'Renewable Energy',
      date: '2024-01-15',
      readTime: 7,
      image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Preserving Biodiversity Through Community Conservation',
      excerpt: 'Learn about innovative conservation programs that involve local communities in protecting Morocco\'s unique ecosystems.',
      author: 'Dr. Hassan Alami',
      category: 'Conservation',
      date: '2024-01-12',
      readTime: 5,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Argan Oil: From Tree to Table',
      excerpt: 'The complete journey of Morocco\'s liquid gold and its role in sustainable agriculture and women\'s empowerment.',
      author: 'Fatima Zahra',
      category: 'Local Resources',
      date: '2024-01-10',
      readTime: 4,
      image: 'https://images.unsplash.com/photo-1544734372-1b5f3da43e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Astronomical Tourism: Morocco\'s Dark Sky Heritage',
      excerpt: 'Why Morocco is becoming a premier destination for stargazing and astronomical education programs.',
      author: 'Ahmed Benkirane',
      category: 'Astronomy',
      date: '2024-01-08',
      readTime: 6,
      image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 7,
      title: 'Educational Workshops: Learning by Doing',
      excerpt: 'How hands-on educational experiences are teaching visitors about sustainable living and environmental conservation.',
      author: 'Laila Bennani',
      category: 'Education',
      date: '2024-01-05',
      readTime: 5,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const categories = ['All', 'Sustainable Tourism', 'Agritourism', 'Renewable Energy', 'Conservation', 'Local Resources', 'Astronomy', 'Education'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className={`min-h-screen ${currentLocale === 'ar' ? 'rtl' : 'ltr'}`}>
      <Navigation
        locale={currentLocale}
        onLocaleChange={handleLocaleChange}
      />

      <main className="pt-8">
        {/* Header */}
        <section className="py-12 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Touriver {t.nav.blog}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Insights on sustainable tourism, conservation, and community development in Morocco
              </p>

              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="overflow-hidden shadow-xl border-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-600 hover:bg-green-700">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge variant="secondary" className="w-fit mb-4 bg-green-50 text-green-700">
                      {featuredPost.category}
                    </Badge>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {featuredPost.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {featuredPost.readTime} min
                        </div>
                      </div>
                    </div>
                    <Button className="bg-green-600 hover:bg-green-700 w-fit">
                      {t.common.readMore}
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category
                      ? "bg-green-600 hover:bg-green-700"
                      : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-white/90 text-gray-900 hover:bg-white">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.readTime}m
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                      >
                        {t.common.readMore}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                >
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-green-600">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Stay Updated with Touriver
              </h2>
              <p className="text-green-100 mb-8">
                Get the latest insights on sustainable tourism and conservation efforts in Morocco.
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300"
                />
                <Button className="bg-white text-green-600 hover:bg-gray-100 px-8">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={currentLocale} />
    </div>
  );
}
