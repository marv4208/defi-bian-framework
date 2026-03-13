import React from 'react';
import Link from 'next/link';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

export interface PersonaCardProps {
  icon: string;
  title: string;
  description: string;
  topics: string[];
  ctaText: string;
  ctaHref: string;
}

export function PersonaCard({ icon, title, description, topics, ctaText, ctaHref }: PersonaCardProps) {
  return (
    <Card hover className="p-lg flex flex-col h-full">
      {/* Icon */}
      <div className="text-4xl mb-md">{icon}</div>
      
      {/* Title */}
      <h3 className="font-display text-lg font-semibold text-primary mb-sm">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 text-sm mb-base flex-grow">
        {description}
      </p>
      
      {/* Topics */}
      <div className="flex flex-wrap gap-sm mb-base">
        {topics.map((topic, index) => (
          <Badge key={index} variant="default" size="sm">
            {topic}
          </Badge>
        ))}
      </div>
      
      {/* CTA Link */}
      <Link 
        href={ctaHref}
        className="text-secondary font-medium text-sm hover:text-[#7C3AED] transition-colors inline-flex items-center group"
      >
        {ctaText}
        <svg 
          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </Card>
  );
}
