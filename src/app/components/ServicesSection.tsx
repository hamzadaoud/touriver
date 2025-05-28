'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import {
  Leaf,
  Tractor,
  Zap,
  Gem,
  Users,
  Lightbulb,
  GraduationCap,
  Heart
} from 'lucide-react';
import { type Locale, getTranslation } from '@/lib/i18n';

interface ServicesSectionProps {
  locale: Locale;
}

export function ServicesSection({ locale }: ServicesSectionProps) {
  const t = getTranslation(locale);

  const services = [
    {
      icon: Leaf,
      title: t.services.sustainableTourism.title,
      description: t.services.sustainableTourism.description,
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Tractor,
      title: t.services.agritourism.title,
      description: t.services.agritourism.description,
      color: 'bg-amber-100 text-amber-600'
    },
    {
      icon: Zap,
      title: t.services.renewableEnergy.title,
      description: t.services.renewableEnergy.description,
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Gem,
      title: t.services.localResources.title,
      description: t.services.localResources.description,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Users,
      title: t.services.collaboration.title,
      description: t.services.collaboration.description,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Lightbulb,
      title: t.services.innovation.title,
      description: t.services.innovation.description,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: GraduationCap,
      title: t.services.education.title,
      description: t.services.education.description,
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      icon: Heart,
      title: t.services.localImpact.title,
      description: t.services.localImpact.description,
      color: 'bg-red-100 text-red-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.services.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-red-600 mx-auto" />
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm"
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg font-semibold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              {t.common.learnMore}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
