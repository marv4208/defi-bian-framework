export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">About This Framework</h1>
        
        <div className="prose max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">What is DeFiBIAN?</h2>
            <p className="text-lg text-neutral-dark mb-4">
              The DeFi-BIAN Framework is a comprehensive mapping between traditional banking service domains 
              (as defined by the Banking Industry Architecture Network) and decentralized finance protocols.
            </p>
            <p className="text-lg text-neutral-dark">
              Built to bridge the gap between centralized and decentralized finance, this framework provides 
              structured architecture analysis, protocol comparisons, and integration patterns for financial 
              institutions, DeFi protocols, and consultants navigating the evolving landscape.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">About the Author</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-secondary mb-4">Marlena DeHart</h3>
              <p className="text-lg text-neutral-dark mb-4">
                Master's in Blockchain & Digital Currencies  
                <br />
                University of Nicosia
              </p>
              <p className="text-neutral-dark mb-4">
                Marlena bridges the worlds of traditional finance and decentralized systems, bringing deep 
                technical expertise in blockchain architecture, smart contracts, and financial system design.
              </p>
              <p className="text-neutral-dark">
                Her unique positioning combines institutional finance knowledge with cutting-edge Web3 
                development, making her an ideal consultant for organizations navigating the CeFi to DeFi transition.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why BIAN?</h2>
            <p className="text-neutral-dark mb-4">
              The Banking Industry Architecture Network (BIAN) has established the global standard for 
              service-oriented banking architecture, with over 300 defined service domains used by major 
              financial institutions worldwide.
            </p>
            <p className="text-neutral-dark">
              By mapping DeFi protocols to BIAN's proven framework, we create a common language between 
              traditional finance and blockchain-based systems, enabling better evaluation, integration, 
              and compliance strategies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Methodology</h2>
            <div className="space-y-4 text-neutral-dark">
              <p>
                <strong className="text-primary">Functional Equivalence:</strong> We map BIAN service domains 
                to DeFi protocols based on functional outcome, not implementation. For example, BIAN's "Loan" 
                domain provides credit facilities — the DeFi equivalent is Aave/Compound lending pools.
              </p>
              <p>
                <strong className="text-primary">Gap Analysis:</strong> Not all BIAN domains have direct DeFi 
                equivalents, and vice versa. We identify these gaps and explain why they exist.
              </p>
              <p>
                <strong className="text-primary">Protocol Categories:</strong> DeFi protocols are grouped by 
                primary function (DEXs, lending, stablecoins, derivatives, etc.) to facilitate comparison.
              </p>
              <p>
                <strong className="text-primary">Real-World Examples:</strong> Each domain mapping includes 
                practical implementation examples and case studies.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Framework Structure</h2>
            <p className="text-neutral-dark mb-4">
              The framework is organized into 8 core domain clusters:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-neutral-dark pl-4">
              <li><strong>Payments & Settlement:</strong> Stablecoins, L1/L2 blockchains, cross-border transfers</li>
              <li><strong>Lending & Credit:</strong> Over-collateralized lending, flash loans, RWA credit</li>
              <li><strong>Trading & Market Making:</strong> AMMs, DEXs, MEV, liquidity provision</li>
              <li><strong>Custody & Asset Management:</strong> Self-custody, multisigs, yield aggregators</li>
              <li><strong>Identity & Compliance:</strong> KYC/AML, decentralized identity, privacy tools</li>
              <li><strong>Treasury & Liquidity:</strong> DAO treasuries, liquidity management, reserves</li>
              <li><strong>Derivatives & Structured Products:</strong> Perpetuals, options, synthetic assets</li>
              <li><strong>Governance & Operations:</strong> DAOs, on-chain voting, treasury management</li>
            </ol>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Get Involved</h2>
            <p className="text-neutral-dark mb-4">
              This framework is a living resource, continuously updated as DeFi protocols evolve and new 
              integrations emerge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="/consulting"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent-light text-white rounded-md transition-colors font-medium"
              >
                Work With Me
              </a>
              <a
                href="mailto:marlena@defibian.com"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary hover:bg-gray-50 rounded-md transition-colors font-medium"
              >
                Get In Touch
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
