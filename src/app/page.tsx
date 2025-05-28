'use client';

import { useState } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { HeroSection } from '@/app/components/HeroSection';
import { AboutSection } from '@/app/components/AboutSection';
import { ServicesSection } from '@/app/components/ServicesSection';
import { WhyChooseUsSection } from '@/app/components/WhyChooseUsSection';
import { AccommodationsSection } from '@/app/components/AccommodationsSection';
import { BlogPreviewSection } from '@/app/components/BlogPreviewSection';
import { ContactSection } from '@/app/components/ContactSection';
import { Footer } from '@/app/components/Footer';
import { type Locale, defaultLocale } from '@/lib/i18n';

export default function Home() {
  const [currentLocale, setCurrentLocale] = useState<Locale>(defaultLocale);

  const handleLocaleChange = (locale: Locale) => {
    setCurrentLocale(locale);
  };

  return (
    <div className={`min-h-screen ${currentLocale === 'ar' ? 'rtl' : 'ltr'}`}>
      <Navigation
        locale={currentLocale}
        onLocaleChange={handleLocaleChange}
      />

      <main>
        <HeroSection locale={currentLocale} />
        <AboutSection locale={currentLocale} />
        <ServicesSection locale={currentLocale} />
        <WhyChooseUsSection locale={currentLocale} />
        <AccommodationsSection locale={currentLocale} />
        <BlogPreviewSection locale={currentLocale} />
        <ContactSection locale={currentLocale} />
      </main>

      <Footer locale={currentLocale} />
    </div>
  );
}
