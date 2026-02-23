'use client';

import Link from 'next/link';
import { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import type { BlogPost } from '@/lib/blog';

interface BlogGridProps {
  allPosts: BlogPost[];
}

export default function BlogGrid({ allPosts }: BlogGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  
  // Filter posts based on selected category
  const posts = selectedCategory === 'ALL' 
    ? allPosts 
    : allPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      {/* Category Filter Bar */}
      <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

      {/* Article Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12 sm:py-16 bg-white rounded-lg">
              <p className="text-lg sm:text-xl text-secondary mb-4">
                {selectedCategory === 'ALL' 
                  ? 'No articles yet. Check back soon!' 
                  : `No articles in "${selectedCategory}" yet. Check back soon!`}
              </p>
              <p className="text-sm sm:text-base text-neutral">Daily CeFi ↔ DeFi integration insights coming soon.</p>
              {selectedCategory !== 'ALL' && (
                <button
                  onClick={() => setSelectedCategory('ALL')}
                  className="mt-4 text-accent hover:text-accent-light font-medium"
                >
                  ← View all articles
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Article Image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-accent/40 relative overflow-hidden">
                    {post.coverImage ? (
                      <img 
                        src={post.coverImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-6xl text-white">📰</div>
                      </div>
                    )}
                  </div>
                  
                  {/* Article Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-xs text-neutral">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: '2-digit', 
                          day: '2-digit', 
                          year: '2-digit' 
                        }).replace(/\//g, '.')}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-2xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-secondary text-sm mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-neutral">{post.readingTime}</span>
                      <span className="text-sm font-medium text-accent group-hover:text-accent-light">
                        Read more →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
              
              {/* Coming Soon Placeholders */}
              {selectedCategory === 'ALL' && posts.length < 6 && [1, 2, 3].map((i) => (
                <div key={`placeholder-${i}`} className="bg-white rounded-lg overflow-hidden opacity-60">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-5xl">⏳</div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-neutral uppercase tracking-wider">
                      Coming Soon
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-primary mt-3 mb-3">
                      {
                        i === 1 ? 'Layer 2 Cost Comparison 2026' :
                        i === 2 ? 'Regulatory Update: MiCA & US Bills' :
                        'Chainlink CCIP Treasury Integration'
                      }
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed">
                      In-depth analysis and integration patterns. Publishing soon.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Article count display */}
          {posts.length > 0 && (
            <div className="mt-8 text-center text-sm text-secondary">
              Showing {posts.length} article{posts.length !== 1 ? 's' : ''}
              {selectedCategory !== 'ALL' && ` in "${selectedCategory}"`}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
