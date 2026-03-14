import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral';
  size?: 'sm' | 'md';
  className?: string;
  icon?: LucideIcon;
}

export function Badge({ 
  children, 
  variant = 'neutral', 
  size = 'sm', 
  className = '',
  icon: Icon 
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full gap-1.5';
  
  const variantStyles = {
    primary: 'bg-primary/10 text-primary-dark',
    secondary: 'bg-secondary/10 text-secondary',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-amber-100 text-amber-700',
    danger: 'bg-red-100 text-red-700',
    neutral: 'bg-neutral-100 text-neutral-700',
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
  };
  
  const iconSize = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4';
  
  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {Icon && <Icon className={iconSize} />}
      {children}
    </span>
  );
}
