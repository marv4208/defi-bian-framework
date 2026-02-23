import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import NewsletterSignup from '@/components/NewsletterSignup';
import BlogGrid from '@/components/BlogGrid';

export const metadata = {
  title: 'The Journal - DIAN Framework | CeFi ↔ DeFi Integration Insights',
  description: 'Daily analysis, protocol updates, and integration patterns for connecting traditional finance with DeFi.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[#F5F3F0]">
      {/* Hero Section */}
      <section className="bg-[#F5F3F0] pt-12 sm:pt-16 pb-8 sm:pb-12 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
            The Journal
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-secondary max-w-3xl mx-auto leading-relaxed px-4">
            Your gateway to insights, strategies, and inspiration to elevate CeFi ↔ DeFi integration—with a fun mix of technical depth and everyday innovation.
          </p>
        </div>
      </section>

      {/* Blog Grid with Category Filter */}
      <BlogGrid allPosts={posts} />

      {/* Newsletter Signup */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Subscribe to DIAN Insights
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-secondary mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Get daily CeFi ↔ DeFi integration analysis, protocol updates, and exclusive insights delivered to your inbox.
          </p>
          <NewsletterSignup variant="featured" />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 sm:py-16 bg-[#F5F3F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Need Custom Integration Strategy?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-secondary mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Work with an expert to design your CeFi ↔ DeFi integration roadmap.
          </p>
          <Link
            href="/consulting"
            className="inline-block px-6 sm:px-8 py-3 bg-accent hover:bg-accent-light text-white rounded-lg font-medium transition-colors text-sm sm:text-base"
          >
            Explore Consulting Services
          </Link>
        </div>
      </section>
    </main>
  );
}
