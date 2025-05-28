'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { Star, MapPin, Users } from 'lucide-react';
import { type Locale, getTranslation } from '@/lib/i18n';

interface Accommodation {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  guests: number;
  features: string[];
  image: string;
}

interface AccommodationsPageProps {
  locale: Locale;
}

export default function AccommodationsPage({ locale }: AccommodationsPageProps) {
  const t = getTranslation(locale);

  const accommodations: Accommodation[] = [
    {
      id: 1,
      name: 'Atlas Mountain Eco-Lodge',
      location: 'High Atlas Mountains',
      rating: 4.9,
      reviews: 127,
      price: 85,
      guests: 4,
      features: ['Mountain View', 'Organic Garden', 'Solar Power'],
      image:
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      image:
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
    },
  ];

  return (
    <>
      <Navigation locale={locale} />
      <main className="min-h-screen bg-gray-50">
        <section id="accommodations" className="py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <header className="text-center mb-16">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{t.nav.accommodations}</h1>
              <p className="max-w-3xl mx-auto text-gray-600 text-lg">
                Stay at authentic eco-friendly accommodations that connect you with Morocco's natural beauty and local culture.
              </p>
            </header>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {accommodations.map((place) => (
                <Card
                  key={place.id}
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <Badge className="absolute top-3 right-3 bg-white/90 text-yellow-500 flex items-center gap-1 font-semibold">
                      <Star className="w-4 h-4" /> {place.rating}
                    </Badge>
                  </div>

                  <CardContent className="flex flex-col flex-grow p-4">
                    <div className="mb-2 flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      {place.location}
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2">{place.name}</h2>

                    <div className="flex flex-wrap gap-2 mb-3">
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

                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {place.guests} guests
                      </div>
                      <div>{place.reviews} reviews</div>
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-gray-900">${place.price}</span>
                        <span className="text-sm text-gray-600"> / night</span>
                      </div>
                      {/* Book Now button navigates to a common details page */}
                      <Link href={`/accommodations/details?id=${place.id}`}>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          {t.common.bookNow}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
