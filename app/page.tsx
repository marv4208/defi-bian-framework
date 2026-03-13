import { Button } from '@/components/ui/Button';
import { PersonaCard } from '@/components/PersonaCard';
import { BlogThumbnail } from '@/components/BlogThumbnail';
import { getLatestPosts } from '@/lib/blog';

export default function HomePage() {
  const latestPosts = getLatestPosts(6);

  // Persona cards data
  const personas = [
    {
      icon: '🏦',
      title: 'Bankers & Product Owners',
      description:
        'Navigate DeFi integration with confidence. Risk assessment, compliance roadmaps, and business case frameworks for institutional adoption.',
      topics: ['RWA Tokenization', 'Custody Solutions', 'Regulatory Compliance'],
      ctaText: 'View Banking Solutions',
      ctaHref: '/solutions/banking',
    },
    {
      icon: '🏗️',
      title: 'Architects & Builders',
      description:
        'Build secure, scalable DeFi infrastructure. Technical architecture, smart contract patterns, and integration guides for production systems.',
      topics: ['Oracle Integration', 'Cross-Chain Architecture', 'Security Patterns'],
      ctaText: 'Explore Technical Guides',
      ctaHref: '/solutions/architecture',
    },
    {
      icon: '⚖️',
      title: 'Regulators & Auditors',
      description:
        'Understand DeFi risks and controls. Audit frameworks, compliance mapping, and regulatory landscape analysis for oversight.',
      topics: ['CFTC Guidance', 'Audit Trails', 'AML/KYC Standards'],
      ctaText: 'View Compliance Resources',
      ctaHref: '/solutions/compliance',
    },
    {
      icon: '🔒',
      title: 'Cybersecurity & Risk Managers',
      description:
        'Harden DeFi systems against threats. Vulnerability assessments, incident response, and security best practices for institutional deployments.',
      topics: ['Smart Contract Audits', 'Key Management', 'Oracle Security'],
      ctaText: 'Access Security Playbooks',
      ctaHref: '/solutions/security',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Secure DeFi Integration for
            <br />
            <span className="text-secondary">Institutional Finance</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Expert consulting in blockchain security, regulatory compliance, and DeFi
            architecture for banks, enterprises, and financial institutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/consulting" variant="primary" size="lg">
              Schedule Consultation →
            </Button>
            <Button href="/framework" variant="outline" size="lg">
              View DIAN Framework
            </Button>
          </div>
        </div>
      </section>

      {/* Persona Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Who We Serve
            </h2>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized guidance for every role in institutional DeFi integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {personas.map((persona, index) => (
              <PersonaCard key={index} {...persona} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Articles Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Latest Insights
            </h2>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              In-depth analysis of DeFi integration, security, and compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {latestPosts.map((post) => (
              <BlogThumbnail key={post.slug} {...post} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/blog" variant="outline" size="lg">
              View All Articles →
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 to-purple-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to integrate DeFi securely?
          </h2>
          <p className="font-sans text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Let's discuss your institutional DeFi integration strategy, security
            requirements, and compliance framework
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/consulting" variant="primary" size="lg">
              Schedule a Consultation →
            </Button>
            <Button href="/framework" variant="outline" size="lg">
              Download DIAN Framework →
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
