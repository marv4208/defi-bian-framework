'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from './ui/Button';

export function Header() {
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
        isScrolled ? 'bg-white shadow-paper' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">D</span>
            </div>
            <span className="font-display font-bold text-xl text-primary">
              DIAN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-secondary transition-colors font-sans text-base"
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-secondary transition-colors font-sans text-base"
            >
              Blog
            </Link>
            <Link 
              href="/case-studies" 
              className="text-gray-700 hover:text-secondary transition-colors font-sans text-base"
            >
              Case Studies
            </Link>
            <Link 
              href="/framework" 
              className="text-gray-700 hover:text-secondary transition-colors font-sans text-base"
            >
              Framework
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-secondary transition-colors font-sans text-base"
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
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-paper-lg">
          <nav className="px-4 py-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/case-studies"
              className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              href="/framework"
              className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Framework
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-secondary transition-colors"
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
