'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export function HeaderNew() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-soft' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-soft-lg transition-shadow">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="font-bold text-xl text-neutral-900">
              DIAN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-neutral-700 hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className="text-neutral-700 hover:text-primary transition-colors font-medium"
            >
              Blog
            </Link>
            <Link 
              href="/case-studies" 
              className="text-neutral-700 hover:text-primary transition-colors font-medium"
            >
              Case Studies
            </Link>
            <Link 
              href="/framework" 
              className="text-neutral-700 hover:text-primary transition-colors font-medium"
            >
              Framework
            </Link>
            <Link 
              href="/about" 
              className="text-neutral-700 hover:text-primary transition-colors font-medium"
            >
              About
            </Link>
            <Button href="/consulting" variant="primary" size="sm">
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-neutral-900" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 shadow-soft-lg">
          <nav className="px-4 py-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-3 rounded-lg text-neutral-700 hover:bg-neutral-50 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="block px-4 py-3 rounded-lg text-neutral-700 hover:bg-neutral-50 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/case-studies"
              className="block px-4 py-3 rounded-lg text-neutral-700 hover:bg-neutral-50 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              href="/framework"
              className="block px-4 py-3 rounded-lg text-neutral-700 hover:bg-neutral-50 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Framework
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 rounded-lg text-neutral-700 hover:bg-neutral-50 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-2">
              <Button href="/consulting" variant="primary" size="md" className="w-full">
                Contact
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
