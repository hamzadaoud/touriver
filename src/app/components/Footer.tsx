'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { type Locale, getTranslation } from '@/lib/i18n';

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const t = getTranslation(locale);

  const quickLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#impact', label: t.nav.impact },
  ];

  const serviceLinks = [
    { href: '#services', label: 'Sustainable Tourism' },
    { href: '#services', label: 'Agritourism' },
    { href: '#services', label: 'Renewable Energy' },
    { href: '#services', label: 'Local Resources' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-green-600 to-red-600">
                  <span className="text-sm font-bold text-white">T</span>
                </div>
                <span className="font-bold text-xl">Touriver</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Promoting sustainable growth through eco-tourism, agritourism, renewable energy, local resource valorization, and education in Morocco.
              </p>
              <div className="bg-green-900/30 p-4 rounded-lg border border-green-800">
                <p className="text-sm text-green-300 font-medium">
                  🏆 {t.contact.partnership}
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="#accommodations"
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    {t.nav.accommodations}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#blog"
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    {t.nav.blog}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Our Services</h3>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-6">{t.contact.title}</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    {t.contact.address}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">+212 5XX XXX XXX</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">info@touriver.ma</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <h4 className="font-medium mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <Link
                        key={social.label}
                        href={social.href}
                        className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                        aria-label={social.label}
                      >
                        <IconComponent className="w-4 h-4" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2025 Touriver. Designed by mohatotech.com. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
