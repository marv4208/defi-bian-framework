import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'Web3 Cybersecurity - DIAN Framework | DeFi Security Best Practices',
  description: 'Comprehensive Web3 security guides: smart contract auditing, custody solutions, attack vectors, defense strategies, and institutional security frameworks.',
};

export default function SecurityPage() {
  const allPosts = getAllPosts();
  const securityPosts = allPosts.filter(
    post => post.category === 'Web3 Security' || 
            post.title.toLowerCase().includes('security') ||
            post.title.toLowerCase().includes('audit') ||
            post.title.toLowerCase().includes('custody')
  );

  const securityTopics = [
    {
      icon: '🛡️',
      title: 'Smart Contract Security',
      description: 'Auditing, formal verification, attack vectors, defense patterns',
      articles: ['Smart Contract Auditing Best Practices', 'Common Vulnerabilities', 'Formal Verification'],
    },
    {
      icon: '🔐',
      title: 'Custody & Key Management',
      description: 'Multi-sig, MPC, hardware wallets, institutional custody solutions',
      articles: ['Institutional Custody Solutions', 'Multi-Signature Patterns', 'MPC vs Hardware Wallets'],
    },
    {
      icon: '⚠️',
      title: 'Attack Vectors & Exploits',
      description: 'Flash loans, reentrancy, front-running, bridge attacks, oracle manipulation',
      articles: ['Flash Loan Attack Patterns', 'Bridge Security', 'Oracle Manipulation Defense'],
    },
    {
      icon: '🔍',
      title: 'Security Auditing',
      description: 'Audit process, tools, methodologies, continuous monitoring',
      articles: ['Audit Frameworks', 'Security Tools Comparison', 'Post-Deployment Monitoring'],
    },
    {
      icon: '🏛️',
      title: 'Institutional Security',
      description: 'Enterprise-grade security, compliance, risk management, incident response',
      articles: ['Enterprise Security Architecture', 'Compliance Frameworks', 'Incident Response Plans'],
    },
    {
      icon: '🌐',
      title: 'Infrastructure Security',
      description: 'Node security, RPC endpoints, API security, DDoS protection',
      articles: ['Node Hardening', 'RPC Security', 'DDoS Mitigation'],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-5xl sm:text-6xl mb-6">🛡️</div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              Web3 Cybersecurity
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90">
              Comprehensive security guides for protecting DeFi protocols, smart contracts, and digital assets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#articles"
                className="px-6 sm:px-8 py-3 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Read Articles
              </Link>
              <Link
                href="/consulting"
                className="px-6 sm:px-8 py-3 border-2 border-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Security Consulting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Security Topics Grid */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
              Security Coverage
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-secondary max-w-3xl mx-auto">
              From smart contract auditing to institutional custody, comprehensive Web3 security guidance
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {securityTopics.map((topic) => (
              <div key={topic.title} className="card hover:shadow-xl">
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-3">
                  {topic.title}
                </h3>
                <p className="text-sm sm:text-base text-secondary mb-4 leading-relaxed">
                  {topic.description}
                </p>
                <div className="space-y-2">
                  {topic.articles.map((article, idx) => (
                    <div key={idx} className="text-xs sm:text-sm text-neutral flex items-start">
                      <span className="text-accent mr-2">→</span>
                      <span>{article}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Framework */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Security Framework
            </h2>
            <p className="text-base sm:text-lg text-secondary mb-12 text-center">
              Our comprehensive approach to Web3 security
            </p>

            <div className="space-y-6">
              {[
                {
                  phase: 'Prevention',
                  icon: '🛡️',
                  description: 'Secure development practices, code reviews, static analysis',
                  practices: ['Secure coding standards', 'Threat modeling', 'Access control design']
                },
                {
                  phase: 'Detection',
                  icon: '🔍',
                  description: 'Auditing, formal verification, penetration testing',
                  practices: ['Smart contract audits', 'Formal verification', 'Security testing']
                },
                {
                  phase: 'Monitoring',
                  icon: '📊',
                  description: 'Real-time alerts, anomaly detection, transaction monitoring',
                  practices: ['On-chain monitoring', 'Alerting systems', 'Incident detection']
                },
                {
                  phase: 'Response',
                  icon: '⚡',
                  description: 'Incident response, recovery procedures, post-mortem analysis',
                  practices: ['Incident response plans', 'Emergency procedures', 'Post-incident analysis']
                },
              ].map((phase) => (
                <div key={phase.phase} className="bg-gray-50 p-6 sm:p-8 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{phase.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">
                        {phase.phase}
                      </h3>
                      <p className="text-sm sm:text-base text-secondary mb-4">
                        {phase.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {phase.practices.map((practice) => (
                          <span
                            key={practice}
                            className="px-3 py-1 bg-white text-secondary text-xs sm:text-sm rounded-full border border-gray-200"
                          >
                            {practice}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Articles */}
      <section id="articles" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
            Security Articles
          </h2>

          {securityPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {securityPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card hover:shadow-xl group"
                >
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full mb-4">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-secondary mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="text-xs text-neutral">
                    {post.readingTime} • {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 card max-w-2xl mx-auto">
              <div className="text-5xl mb-4">🚧</div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Coming Soon
              </h3>
              <p className="text-secondary mb-6">
                Web3 security articles are currently in development. Subscribe to get notified when they're published.
              </p>
              <Link
                href="/blog#newsletter"
                className="inline-block px-6 py-3 bg-accent hover:bg-accent-light text-white rounded-lg font-medium transition-colors"
              >
                Subscribe for Updates
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Security Consulting CTA */}
      <section className="py-16 sm:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Need Security Consulting?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Expert guidance on smart contract audits, security architecture, incident response, and institutional custody solutions
          </p>
          <Link
            href="/consulting"
            className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Schedule Security Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
