'use client';

import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { type Locale, getTranslation } from '@/lib/i18n';

interface BlogPreviewSectionProps {
  locale: Locale;
}

export function BlogPreviewSection({ locale }: BlogPreviewSectionProps) {
  const t = getTranslation(locale);

  const blogPosts = [
    {
      id: 1,
      title: 'Sustainable Farming Practices in the Atlas Mountains',
      excerpt: 'Discover how traditional Berber farming methods are leading the way in sustainable agriculture and eco-tourism development.',
      category: 'Agritourism',
      date: '2024-01-15',
      readTime: 5,
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'Renewable Energy Solutions for Rural Communities',
      excerpt: 'How solar and wind power are transforming remote villages and supporting sustainable tourism initiatives.',
      category: 'Energy',
      date: '2024-01-10',
      readTime: 7,
      image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 3,
      title: 'Preserving Biodiversity Through Community Tourism',
      excerpt: 'Learn about conservation efforts that involve local communities in protecting Morocco\'s unique ecosystems.',
      category: 'Conservation',
      date: '2024-01-05',
      readTime: 6,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest from Our {t.nav.blog}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with insights on sustainable tourism, local culture, and environmental conservation.
            </p>
          </div>

          {/* Featured Post + Grid Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Post */}
            <div className="lg:col-span-2">
              {blogPosts.filter(post => post.featured).map(post => (
                <Card key={post.id} className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-600 hover:bg-green-700">
                        {post.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-2xl font-bold mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-200 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-300">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime} min read
                          </div>
                        </div>
                        <Button
                          size="sm"
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                        >
                          {t.common.readMore}
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Recent Posts */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Articles</h3>
              {blogPosts.filter(post => !post.featured).map(post => (
                <Card key={post.id} className="group hover:shadow-md transition-all duration-300 border-0 shadow-sm">
                  <CardContent className="p-0">
                    <div className="flex gap-4">
                      <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 py-3 pr-3">
                        <Badge variant="secondary" className="text-xs mb-2 bg-green-50 text-green-700">
                          {post.category}
                        </Badge>
                        <h4 className="font-semibold text-sm text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500 space-x-3">
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
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Button
                variant="outline"
                className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
              >
                View All Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
