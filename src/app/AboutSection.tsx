'use client';

import { Card, CardContent } from '@/app/components/ui/card';
import { type Locale, getTranslation } from '@/lib/i18n';

interface AboutSectionProps {
  locale: Locale;
}

export function AboutSection({ locale }: AboutSectionProps) {
  const t = getTranslation(locale);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {t.about.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.about.description}
              </p>

              <Card className="bg-white shadow-sm border-l-4 border-l-green-600">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t.about.mission}
                  </h3>
                  <p className="text-gray-600">
                    {t.about.missionText}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1544734372-1b5f3da43e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Sustainable tourism in Morocco"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-100 rounded-full opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-100 rounded-full opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
