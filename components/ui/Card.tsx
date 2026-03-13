import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className = '', hover = false, onClick }: CardProps) {
  const baseStyles = 'bg-surface rounded-xl shadow-paper transition-all duration-300';
  const hoverStyles = hover ? 'hover:shadow-paper-hover hover:-translate-y-1 cursor-pointer' : '';
  const clickStyles = onClick ? 'cursor-pointer' : '';
  
  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${clickStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`p-lg border-b border-gray-100 ${className}`}>
      {children}
    </div>
  );
}

export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={`p-lg ${className}`}>
      {children}
    </div>
  );
}

export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`p-lg border-t border-gray-100 ${className}`}>
      {children}
    </div>
  );
}
