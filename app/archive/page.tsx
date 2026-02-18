import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'Article Archive - DIAN Framework | Complete CeFi ↔ DeFi Integration Library',
  description: 'Browse our complete archive of CeFi ↔ DeFi integration articles, organized by date, category, and topic. Technical guides, protocol updates, and case studies.',
};

export default function ArchivePage() {
  const allPosts = getAllPosts();
  
  // Group by year and month
  const postsByDate: Record<string, Record<string, typeof allPosts>> = {};
  
  allPosts.forEach(post => {
    const date = new Date(post.date);
    const year = date.getFullYear().toString();
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    
    if (!postsByDate[year]) {
      postsByDate[year] = {};
    }
    if (!postsByDate[year][month]) {
      postsByDate[year][month] = [];
    }
    postsByDate[year][month].push(post);
  });
  
  // Group by category
  const postsByCategory: Record<string, typeof allPosts> = {};
  allPosts.forEach(post => {
    if (!postsByCategory[post.category]) {
      postsByCategory[post.category] = [];
    }
    postsByCategory[post.category].push(post);
  });
  
  const categories = Object.keys(postsByCategory).sort();
  const years = Object.keys(postsByDate).sort().reverse();

  return (
    <main className="min-h-screen bg-[#F5F3F0]">
      {/* Hero */}
      <section className="bg-white pt-12 sm:pt-16 pb-8 sm:pb-12 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 sm:mb-6">
            Article Archive
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-secondary max-w-3xl mx-auto px-4">
            {allPosts.length} articles on CeFi ↔ DeFi integration, protocol updates, and Web3 security
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-6 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-accent">{allPosts.length}</div>
              <div className="text-xs sm:text-sm text-secondary mt-1">Total Articles</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-accent">{categories.length}</div>
              <div className="text-xs sm:text-sm text-secondary mt-1">Categories</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-accent">{years.length}</div>
              <div className="text-xs sm:text-sm text-secondary mt-1">Years</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-accent">150K+</div>
              <div className="text-xs sm:text-sm text-secondary mt-1">Words</div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-8 sm:mb-12">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categories.map(category => (
              <div key={category} className="card hover:shadow-xl">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-serif text-xl font-bold text-primary">{category}</h3>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-bold rounded-full">
                    {postsByCategory[category].length}
                  </span>
                </div>
                <ul className="space-y-3">
                  {postsByCategory[category].slice(0, 5).map(post => (
                    <li key={post.slug}>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-secondary hover:text-accent transition-colors text-sm line-clamp-2"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                  {postsByCategory[category].length > 5 && (
                    <li className="text-xs text-neutral pt-2">
                      +{postsByCategory[category].length - 5} more articles
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline by Date */}
      <section className="py-12 sm:py-16 bg-[#F5F3F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-8 sm:mb-12">
            Timeline
          </h2>
          
          {years.map(year => (
            <div key={year} className="mb-12 last:mb-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-6 pb-3 border-b-2 border-accent">
                {year}
              </h3>
              
              {Object.keys(postsByDate[year]).map(month => (
                <div key={month} className="mb-8 last:mb-0">
                  <h4 className="text-lg sm:text-xl font-bold text-secondary mb-4">{month}</h4>
                  
                  <div className="space-y-4">
                    {postsByDate[year][month].map(post => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="block bg-white p-4 sm:p-6 rounded-lg hover:shadow-lg transition-all group"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="text-3xl sm:text-4xl font-bold text-accent">
                              {new Date(post.date).getDate()}
                            </div>
                            <div className="text-xs text-neutral uppercase tracking-wider">
                              {new Date(post.date).toLocaleDateString('en-US', { weekday: 'short' })}
                            </div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2 flex-wrap">
                              <span className="text-xs font-bold text-accent uppercase tracking-wider">
                                {post.category}
                              </span>
                              <span className="text-xs text-neutral">{post.readingTime}</span>
                            </div>
                            <h5 className="font-serif text-lg sm:text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                              {post.title}
                            </h5>
                            <p className="text-sm text-secondary line-clamp-2">
                              {post.excerpt}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-4">
            Stay Updated
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-secondary mb-8">
            Get new articles delivered to your inbox. No spam, unsubscribe anytime.
          </p>
          <Link
            href="/blog#newsletter"
            className="inline-block px-6 sm:px-8 py-3 bg-accent hover:bg-accent-light text-white rounded-lg font-medium transition-colors"
          >
            Subscribe to Newsletter
          </Link>
        </div>
      </section>
    </main>
  );
}
