'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/app/components/ui/sheet';
import { LanguageSwitcher } from './LanguageSwitcher';
import { type Locale, getTranslation } from '@/lib/i18n';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';


interface NavigationProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export function Navigation({ locale, onLocaleChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = getTranslation(locale);

  const navItems = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#impact', label: t.nav.impact },
    { href: '#accommodations', label: t.nav.accommodations },
    { href: 'blog', label: t.nav.blog },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-green-600 to-red-600">
            <span className="text-sm font-bold text-white">T</span>
          </div>
          <span className="font-bold text-xl">Touriver</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Language Switcher & Mobile Menu */}
        <div className="flex items-center space-x-2">
          <LanguageSwitcher currentLocale={locale} onLocaleChange={onLocaleChange} />

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
