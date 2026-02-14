export default function Consulting() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Consulting Services</h1>
          <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
            Bridge the gap between traditional finance and DeFi with expert guidance on architecture, 
            integration, and regulatory strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg border-2 border-neutral-light hover:border-secondary transition-colors">
            <div className="text-4xl mb-4">🏦</div>
            <h3 className="text-2xl font-bold text-primary mb-4">For Financial Institutions</h3>
            <ul className="space-y-3 text-neutral-dark">
              <li>✓ DeFi integration strategy & roadmap</li>
              <li>✓ Protocol evaluation & due diligence</li>
              <li>✓ Risk assessment & compliance frameworks</li>
              <li>✓ Treasury optimization via DeFi yield</li>
              <li>✓ Stablecoin payment rail integration</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg border-2 border-neutral-light hover:border-secondary transition-colors">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-primary mb-4">For DeFi Protocols</h3>
            <ul className="space-y-3 text-neutral-dark">
              <li>✓ Institutional go-to-market strategy</li>
              <li>✓ Regulatory compliance positioning</li>
              <li>✓ Integration with TradFi systems</li>
              <li>✓ Architecture review & security audit coordination</li>
              <li>✓ Tokenomics & DAO governance design</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg border-2 border-neutral-light hover:border-secondary transition-colors">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-2xl font-bold text-primary mb-4">Custom Projects</h3>
            <ul className="space-y-3 text-neutral-dark">
              <li>✓ CeFi → DeFi migration planning</li>
              <li>✓ Hybrid finance architecture design</li>
              <li>✓ Smart contract integration strategy</li>
              <li>✓ RWA (Real-World Asset) tokenization</li>
              <li>✓ Training & workshops for teams</li>
            </ul>
          </div>
        </div>

        <div className="bg-secondary text-white p-12 rounded-lg mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Work With Me?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Deep Technical Expertise</h3>
              <p className="text-neutral-light">
                Master's degree in Blockchain & Digital Currencies from University of Nicosia. Hands-on 
                experience with smart contracts, DeFi protocols, and blockchain architecture.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Institutional Finance Knowledge</h3>
              <p className="text-neutral-light">
                Understanding of traditional banking systems, regulatory frameworks, and institutional 
                requirements. Fluent in both TradFi and DeFi languages.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Practical Implementation Focus</h3>
              <p className="text-neutral-light">
                Not just theory — real-world integration patterns, risk mitigation strategies, and 
                actionable roadmaps that get results.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Vendor-Neutral Perspective</h3>
              <p className="text-neutral-light">
                Independent consultant with no protocol affiliations. Recommendations based purely on 
                your needs and technical merit.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-12 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">Engagement Models</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-secondary mb-2">Discovery Session (Free)</h3>
              <p className="text-neutral-dark">
                30-minute consultation to understand your needs and determine if we're a good fit. 
                No obligation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-secondary mb-2">Project-Based</h3>
              <p className="text-neutral-dark">
                Fixed-scope engagements with clear deliverables. Ideal for specific initiatives like 
                protocol evaluation, integration planning, or architecture design.
              </p>
              <p className="text-neutral mt-2 text-sm">
                Typical range: $10k-$50k depending on scope
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-secondary mb-2">Retainer</h3>
              <p className="text-neutral-dark">
                Ongoing advisory relationship with dedicated monthly hours. Best for organizations 
                navigating continuous DeFi integration or protocol development.
              </p>
              <p className="text-neutral mt-2 text-sm">
                Typical range: $5k-$20k/month
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-secondary mb-2">Workshops & Training</h3>
              <p className="text-neutral-dark">
                Half-day or full-day sessions for teams. Topics include DeFi architecture, protocol 
                evaluation, integration patterns, and regulatory compliance.
              </p>
              <p className="text-neutral mt-2 text-sm">
                Typical range: $5k-$15k per session
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Ready to Start?</h2>
          <p className="text-lg text-neutral-dark mb-8 max-w-2xl mx-auto">
            Schedule a free discovery call to discuss your DeFi strategy and how I can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/marlena-dehart/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent hover:bg-accent-light text-white rounded-md transition-colors font-medium"
            >
              Schedule Discovery Call
            </a>
            <a
              href="mailto:marlena@defibian.com"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary hover:bg-gray-50 rounded-md transition-colors font-medium"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
