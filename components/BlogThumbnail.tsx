import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

export interface BlogThumbnailProps {
  title: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  category: string;
  readingTime: string;
  date: string;
}

export function BlogThumbnail({ 
  title, 
  excerpt, 
  slug, 
  coverImage, 
  category, 
  readingTime 
}: BlogThumbnailProps) {
  // Map categories to badge variants
  const categoryVariant = {
    'Integration': 'secondary',
    'Security': 'danger',
    'Compliance': 'warning',
    'Architecture': 'default',
  }[category] as 'default' | 'secondary' | 'success' | 'warning' | 'danger' || 'default';

  return (
    <Link href={`/blog/${slug}`} className="block h-full">
      <Card hover className="overflow-hidden h-full flex flex-col">
        {/* Image */}
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        {/* Content */}
        <div className="p-lg flex flex-col flex-grow">
          {/* Category and Reading Time */}
          <div className="flex items-center gap-sm mb-sm">
            <Badge variant={categoryVariant} size="sm">
              {category}
            </Badge>
            <span className="text-xs text-gray-500">{readingTime}</span>
          </div>
          
          {/* Title */}
          <h3 className="font-display text-base font-semibold text-primary mb-sm line-clamp-2">
            {title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-sm text-gray-600 line-clamp-3 flex-grow">
            {excerpt}
          </p>
          
          {/* Read More Link */}
          <div className="mt-base">
            <span className="text-secondary font-medium text-sm hover:text-[#7C3AED] transition-colors inline-flex items-center group">
              Read Article
              <svg 
                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
