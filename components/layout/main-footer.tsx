'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ROUTE_CONFIG } from '@/configs/routes';
import { Facebook, Instagram, Linkedin, Send } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';

// Social Media Links
const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: Facebook,
    hoverColor: 'hover:bg-blue-600',
  },
  {
    name: 'Telegram',
    href: 'https://telegram.org',
    icon: Send,
    hoverColor: 'hover:bg-blue-500',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: Instagram,
    hoverColor: 'hover:bg-pink-600',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: Linkedin,
    hoverColor: 'hover:bg-blue-700',
  },
] as const;

// Quick Links
const QUICK_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Instructors', href: '/instructors' },
  { label: 'Contact', href: '/contact' },
] as const;

// Support Links
const SUPPORT_LINKS = [
  { label: 'Help Center', href: '/help' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Refund Policy', href: '/refund' },
] as const;

// Contact Information
const CONTACT_INFO = [
  {
    icon: '✉️',
    label: 'support@mokalms.com',
    href: 'mailto:support@mokalms.com',
  },
  { icon: '📞', label: '+84 (123) 419-3939', href: 'tel:+841234193939' },
  { icon: '📍', label: 'Hanoi, Vietnam', href: null },
] as const;

// Footer Bottom Links
const FOOTER_BOTTOM_LINKS = [
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Cookies', href: '/cookies' },
] as const;

const MainFooter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    setIsSubmitting(true);

    // TODO: Implement newsletter subscription API
    setTimeout(() => {
      toast.success('Feature coming soon!');
      setEmail('');
      setIsSubmitting(false);
    }, 100);
  };

  return (
    <footer className="bg-gray-50 border-t">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Moka Branding */}
          <div className="space-y-4">
            <Link href={ROUTE_CONFIG.HOME}>
              <span className="text-2xl font-bold">Moka</span>
            </Link>

            <p className="text-base text-gray-600 leading-relaxed">
              Transform your future with our comprehensive online courses. Learn
              from industry experts and advance your career.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-9 h-9 rounded-lg bg-gray-200 ${social.hoverColor} hover:text-white text-gray-600 transition-colors`}
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Stay Connected
            </h3>

            {/* Contact Info */}
            <div className="space-y-3 mb-4">
              {CONTACT_INFO.map((contact, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-sm text-gray-600"
                >
                  <span>{contact.icon}</span>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {contact.label}
                    </a>
                  ) : (
                    <span>{contact.label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Newsletter Subscription */}
            <div>
              <p className="text-sm text-gray-600 mb-3">
                Subscribe to our newsletter
              </p>
              <form onSubmit={handleSubscribe} className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  disabled={isSubmitting}
                />
                <Button type="submit" disabled={isSubmitting} size="sm">
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-base text-gray-600 text-center sm:text-left">
              © {new Date().getFullYear()} Moka LMS. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              {FOOTER_BOTTOM_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
