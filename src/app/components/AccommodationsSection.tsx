'use client';

import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Star, MapPin, Users, Wifi } from 'lucide-react';
import { type Locale, getTranslation } from '@/lib/i18n';
import img3 from './img.jpeg';
import img4 from './img2.jpeg';


interface AccommodationsSectionProps {
  locale: Locale;
}

export function AccommodationsSection({ locale }: AccommodationsSectionProps) {
  const t = getTranslation(locale);

  const accommodations = [
    {
      id: 1,
      name: 'Atlas Mountain Eco-Lodge',
      location: 'High Atlas Mountains',
      rating: 4.9,
      reviews: 127,
      price: 85,
      guests: 4,
      features: ['Mountain View', 'Organic Garden', 'Solar Power'],
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Berber Traditional Farm Stay',
      location: 'Ourika Valley',
      rating: 4.8,
      reviews: 89,
      price: 65,
      guests: 6,
      features: ['Farm Experience', 'Traditional Cooking', 'Hiking Trails'],
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Sahara Desert Camp',
      location: 'Merzouga Dunes',
      rating: 4.7,
      reviews: 156,
      price: 120,
      guests: 8,
      features: ['Stargazing', 'Camel Trekking', 'Authentic Cuisine'],
      image: '/images/img.jpeg',
    },
    {
      id: 4,
      name: 'Coastal Argan Farm',
      location: 'Essaouira Region',
      rating: 4.6,
      reviews: 73,
      price: 75,
      guests: 5,
      features: ['Ocean View', 'Argan Oil Workshop', 'Beach Access'],
      image: '/images/img2.jpeg',
    }
  ];

  return (
    <section id="accommodations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.nav.accommodations}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay at authentic eco-friendly accommodations that connect you with Morocco's natural beauty and local culture.
            </p>
          </div>

          {/* Accommodations Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {accommodations.map((place) => (
              <Card
  key={place.id}
  className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full"
>
  <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
    <img
      src={place.image}
      alt={place.name}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute top-3 right-3">
      <Badge className="bg-white/90 text-gray-900 hover:bg-white">
        <Star className="w-3 h-3 mr-1 fill-current text-yellow-500" />
        {place.rating}
      </Badge>
    </div>
  </div>

  <CardContent className="p-4 flex flex-col flex-grow">
    <div className="space-y-3 flex flex-col flex-grow">
      {/* Location */}
      <div className="flex items-center text-sm text-gray-500">
        <MapPin className="w-4 h-4 mr-1" />
        {place.location}
      </div>

      {/* Name */}
      <h3 className="font-semibold text-gray-900 line-clamp-2">
        {place.name}
      </h3>

      {/* Features */}
      <div className="flex flex-wrap gap-1">
        {place.features.slice(0, 2).map((feature) => (
          <Badge
            key={feature}
            variant="secondary"
            className="text-xs bg-green-50 text-green-700"
          >
            {feature}
          </Badge>
        ))}
      </div>

      {/* Rating and Reviews */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center text-gray-500">
          <Users className="w-4 h-4 mr-1" />
          {place.guests} guests
        </div>
        <div className="text-gray-500">{place.reviews} reviews</div>
      </div>

      {/* Price and Button aligned at the bottom */}
      <div className="flex items-center justify-between mt-auto">
        <div>
          <span className="text-lg font-semibold text-gray-900">
            ${place.price}
          </span>
          <span className="text-sm text-gray-500"> / night</span>
        </div>
        <Button size="sm" className="bg-green-600 hover:bg-green-700">
          {t.common.bookNow}
        </Button>
      </div>
    </div>
  </CardContent>
</Card>

            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              {t.common.viewAll}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
