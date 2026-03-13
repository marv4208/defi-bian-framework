import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({ children, variant = 'default', size = 'sm', className = '' }: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full';
  
  const variantStyles = {
    default: 'bg-gray-100 text-gray-700',
    secondary: 'bg-purple-100 text-secondary',
    success: 'bg-green-100 text-success',
    warning: 'bg-orange-100 text-warning',
    danger: 'bg-red-100 text-danger',
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
  };
  
  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {children}
    </span>
  );
}
