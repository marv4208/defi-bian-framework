import React from 'react';
import Link from 'next/link';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

export interface PersonaCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  topics: string[];
  ctaText: string;
  ctaHref: string;
  iconColor?: string;
  iconBgColor?: string;
}

export function PersonaCard({ 
  icon: Icon, 
  title, 
  description, 
  topics, 
  ctaText, 
  ctaHref,
  iconColor = 'text-primary',
  iconBgColor = 'bg-primary/10'
}: PersonaCardProps) {
  return (
    <Card hover className="h-full flex flex-col">
      {/* Icon */}
      <div className={`w-14 h-14 ${iconBgColor} rounded-xl flex items-center justify-center mb-4`}>
        <Icon className={`w-7 h-7 ${iconColor}`} />
      </div>
      
      {/* Title */}
      <h3 className="font-semibold text-xl text-neutral-900 mb-3">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-neutral-600 text-base mb-4 flex-grow leading-relaxed">
        {description}
      </p>
      
      {/* Topics */}
      <div className="flex flex-wrap gap-2 mb-4">
        {topics.map((topic, index) => (
          <Badge key={index} variant="neutral" size="sm">
            {topic}
          </Badge>
        ))}
      </div>
      
      {/* CTA Link */}
      <Link 
        href={ctaHref}
        className="text-primary font-medium text-base hover:text-primary-dark transition-colors inline-flex items-center group"
      >
        {ctaText}
        <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
      </Link>
    </Card>
  );
}
