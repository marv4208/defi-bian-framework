import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight } from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

export interface BlogThumbnailProps {
  title: string;
  excerpt: string;
  slug: string;
  coverImage?: string;
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
  const getCategoryVariant = (cat: string): 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral' => {
    const variants: Record<string, 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral'> = {
      'Integration': 'primary',
      'Security': 'danger',
      'Compliance': 'warning',
      'Architecture': 'secondary',
      'Protocol Updates': 'success',
    };
    return variants[cat] || 'neutral';
  };

  return (
    <Link href={`/blog/${slug}`} className="block h-full group">
      <Card hover padding="none" className="overflow-hidden h-full flex flex-col">
        {/* Image */}
        <div className="relative w-full aspect-video overflow-hidden bg-neutral-100">
          {coverImage ? (
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
              <span className="text-primary text-2xl font-bold">DIAN</span>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Category and Reading Time */}
          <div className="flex items-center gap-3 mb-3">
            <Badge variant={getCategoryVariant(category)} size="sm">
              {category}
            </Badge>
            <div className="flex items-center text-neutral-500 text-sm">
              <Clock className="w-4 h-4 mr-1" />
              <span>{readingTime}</span>
            </div>
          </div>
          
          {/* Title */}
          <h3 className="font-semibold text-lg text-neutral-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-neutral-600 text-sm line-clamp-3 flex-grow leading-relaxed mb-4">
            {excerpt}
          </p>
          
          {/* Read More Link */}
          <div className="flex items-center text-primary font-medium text-sm group-hover:text-primary-dark transition-colors">
            Read Article
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
