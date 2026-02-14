import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-foreground-inverse">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              The BIAN for DeFi
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-light max-w-3xl mx-auto mb-8">
              A comprehensive framework mapping traditional banking service domains to decentralized finance protocols.
            </p>
            <p className="text-lg text-neutral-light max-w-2xl mx-auto mb-12">
              Bridge the gap between centralized and decentralized finance with structured architecture analysis, protocol comparisons, and integration patterns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/framework"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-foreground-inverse bg-accent hover:bg-accent-light transition-colors"
              >
                Explore Framework
              </Link>
              <Link
                href="/mappings"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-secondary text-base font-medium rounded-md text-foreground-inverse hover:bg-secondary hover:border-secondary transition-colors"
              >
                View Mappings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Why This Framework Matters
            </h2>
            <p className="text-lg text-neutral max-w-3xl mx-auto">
              Built on BIAN's proven service-oriented architecture, adapted for the decentralized finance ecosystem.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg border-2 border-neutral-light hover:border-secondary transition-colors">
              <div className="text-secondary text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-bold text-primary mb-2">
                For Financial Institutions
              </h3>
              <p className="text-neutral-dark">
                Assess DeFi integration opportunities, evaluate protocols as infrastructure components, and understand architecture for compliance.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border-2 border-neutral-light hover:border-secondary transition-colors">
              <div className="text-secondary text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-primary mb-2">
                For DeFi Protocols
              </h3>
              <p className="text-neutral-dark">
                Communicate functionality in banking terms, map to regulatory frameworks, and identify traditional finance integration points.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border-2 border-neutral-light hover:border-secondary transition-colors">
              <div className="text-secondary text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-primary mb-2">
                For Consultants
              </h3>
              <p className="text-neutral-dark">
                Gap analysis for CeFi → DeFi migration, architecture design for hybrid systems, and compliance strategy navigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            8 Domain Clusters Mapped
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Payments & Settlement', icon: '💸', href: '/domains/payments' },
              { name: 'Lending & Credit', icon: '🏛️', href: '/domains/lending' },
              { name: 'Trading & Market Making', icon: '📊', href: '/domains/trading' },
              { name: 'Custody & Asset Management', icon: '🔐', href: '/domains/custody' },
              { name: 'Identity & Compliance', icon: '🆔', href: '/domains/identity' },
              { name: 'Treasury & Liquidity', icon: '💰', href: '/domains/treasury' },
              { name: 'Derivatives', icon: '📈', href: '/domains/derivatives' },
              { name: 'Governance', icon: '🗳️', href: '/domains/governance' },
            ].map((domain) => (
              <Link
                key={domain.name}
                href={domain.href}
                className="bg-white p-6 rounded-lg border border-neutral-light hover:border-secondary hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-3">{domain.icon}</div>
                <h3 className="text-lg font-semibold text-primary">
                  {domain.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary text-foreground-inverse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-success mb-2">300+</div>
              <div className="text-lg text-neutral-light">BIAN Service Domains Analyzed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">50+</div>
              <div className="text-lg text-neutral-light">DeFi Protocols Mapped</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">8</div>
              <div className="text-lg text-neutral-light">Core Domain Clusters</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Bridge CeFi and DeFi?
          </h2>
          <p className="text-lg text-neutral-dark mb-8 max-w-2xl mx-auto">
            Whether you're integrating DeFi protocols into traditional finance or building the next generation of financial infrastructure, this framework provides the roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consulting"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-foreground-inverse bg-accent hover:bg-accent-light transition-colors"
            >
              Work With Me
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-base font-medium rounded-md text-primary hover:bg-gray-50 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
