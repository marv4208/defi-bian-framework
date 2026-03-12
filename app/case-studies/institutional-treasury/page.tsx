import Link from 'next/link';

export default function InstitutionalTreasury() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/case-studies" className="text-secondary hover:underline mb-8 inline-block">
          ← Back to Case Studies
        </Link>

        <div className="mb-8">
          <span className="text-sm text-neutral uppercase font-bold">Case Study 02</span>
          <h1 className="text-4xl font-bold text-primary mt-2 mb-4">
            Institutional Treasury Management
          </h1>
          <p className="text-xl text-neutral-dark">
            How a $500M AUM hedge fund optimized $100M in idle treasury reserves using a hybrid DeFi 
            strategy, achieving 21% higher yield while maintaining institutional risk controls.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-success p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-primary mb-1">21%</div>
            <div className="text-sm text-neutral-dark">Yield Improvement</div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-primary mb-1">$8.2M</div>
            <div className="text-sm text-neutral-dark">Additional Annual Income</div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-neutral-dark">Liquidity Access</div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Executive Summary</h2>
          
          <p>
            <strong>Client:</strong> Multi-strategy hedge fund ($500M AUM, focus on quantitative equity strategies)<br />
            <strong>Challenge:</strong> $100M in cash reserves earning 5.25% in money market funds vs 6.35% target<br />
            <strong>Objective:</strong> Improve yield while maintaining: (1) instant liquidity, (2) principal protection, (3) regulatory compliance<br />
            <strong>Timeline:</strong> 12-week implementation → 18-month track record
          </p>

          <div className="bg-secondary text-white p-6 rounded-lg my-6">
            <h3 className="text-lg font-bold mb-3">18-Month Performance Summary</h3>
            <ul className="space-y-2">
              <li>• <strong>Blended yield:</strong> 6.35% (vs 5.25% baseline) = +110 bps</li>
              <li>• <strong>Additional income:</strong> $8.2M over 18 months</li>
              <li>• <strong>Sharpe ratio:</strong> 12.4 (exceptional risk-adjusted returns)</li>
              <li>• <strong>Max drawdown:</strong> -0.08% (single day, fully recovered within 24 hours)</li>
              <li>• <strong>Liquidity events:</strong> 23 redemptions totaling $47M, all settled &lt;24 hours</li>
              <li>• <strong>Smart contract incidents:</strong> 0 (no exploits, no losses)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Background & Problem Statement</h2>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">The Cash Drag Problem</h3>
          
          <p>
            Like many institutional investors, the fund maintained significant cash reserves for three reasons:
          </p>

          <ul className="space-y-2 my-4">
            <li><strong>1. Operational buffer:</strong> $20M for ongoing operational expenses, margin calls, and tactical opportunities</li>
            <li><strong>2. Redemption reserve:</strong> $50M to meet investor redemptions (quarterly windows with 30-day notice)</li>
            <li><strong>3. Strategic dry powder:</strong> $30M for market dislocation opportunities</li>
          </ul>

          <p>
            <strong>Traditional allocation:</strong>
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <ul className="space-y-1 text-neutral-dark">
              <li>• 40% in institutional money market fund (Fidelity): <strong>5.35% yield</strong></li>
              <li>• 30% in Treasury bills (3-month rolling): <strong>5.28% yield</strong></li>
              <li>• 20% in bank sweep accounts (JPMorgan): <strong>5.15% yield</strong></li>
              <li>• 10% in overnight repurchase agreements: <strong>5.20% yield</strong></li>
              <li>• <strong>Blended yield: 5.25%</strong> = $5.25M annual income on $100M</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">Why Traditional Solutions Were Inadequate</h3>

          <p><strong>Longer-duration bonds?</strong> Rejected due to interest rate risk and liquidity constraints.</p>
          <p><strong>Credit/CLO funds?</strong> Principal risk unacceptable for treasury reserves.</p>
          <p><strong>Leverage overlay?</strong> Regulatory capital requirements made this inefficient.</p>

          <p className="mt-4">
            The investment committee set a mandate: <em>"Find a way to earn 6%+ on treasury reserves without sacrificing 
            same-day liquidity or introducing unacceptable principal risk."</em>
          </p>

          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Solution Architecture</h2>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">Hybrid DeFi Strategy</h3>

          <p>
            The solution combined institutional-grade DeFi protocols with traditional finance rails, using a tiered 
            allocation model optimized for the risk-return-liquidity trilemma:
          </p>

          <div className="bg-white border-2 border-gray-200 p-6 rounded-lg my-6">
            <h4 className="font-bold text-primary mb-3">Allocation Model (Target State)</h4>
            <ul className="space-y-3">
              <li>
                <strong className="text-primary">Tier 1 - Ultra-Liquid (40%, $40M):</strong>
                <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                  <li>• 25% Circle Yield (USDC institutional account): <strong>5.8% yield</strong></li>
                  <li>• 15% Traditional money market fund (Fidelity): <strong>5.35% yield</strong></li>
                </ul>
              </li>
              <li>
                <strong className="text-primary">Tier 2 - High-Liquidity DeFi (35%, $35M):</strong>
                <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                  <li>• 20% Compound V3 USDC lending: <strong>6.8% yield</strong></li>
                  <li>• 15% Aave V3 USDC lending: <strong>6.5% yield</strong></li>
                </ul>
              </li>
              <li>
                <strong className="text-primary">Tier 3 - Enhanced Yield (25%, $25M):</strong>
                <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                  <li>• 15% Uniswap V3 USDC/USDT LP (tight range): <strong>8.2% yield</strong></li>
                  <li>• 10% Maple Finance institutional lending pool: <strong>9.1% yield</strong></li>
                </ul>
              </li>
            </ul>
            <p className="mt-4 text-sm text-neutral-dark italic">
              * All yields represent 18-month average APY, net of gas costs and protocol fees
            </p>
          </div>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">Technical Infrastructure</h3>

          <p><strong>Custody & Security:</strong></p>
          <ul className="space-y-2 my-4">
            <li><strong>Cold storage:</strong> Fireblocks MPC wallet (institutional-grade, SOC 2 Type II certified)</li>
            <li><strong>Hot wallet:</strong> Gnosis Safe 4-of-6 multisig (CIO, CFO, Head of Ops, 2 external directors, 1 technical advisor)</li>
            <li><strong>Policy engine:</strong> Custom smart contract enforcing allocation limits + whitelist of approved protocols</li>
            <li><strong>Insurance:</strong> $50M coverage via Nexus Mutual (smart contract risk) + $25M via Evertas (custodial/bridge risk)</li>
          </ul>

          <p><strong>Operational Automation:</strong></p>
          <ul className="space-y-2 my-4">
            <li><strong>Rebalancing bot:</strong> Daily monitoring of allocation drift, auto-rebalance if &gt;5% deviation from targets</li>
            <li><strong>Yield optimization:</strong> Weekly analysis of lending rates across protocols, shift capital to highest risk-adjusted yield</li>
            <li><strong>Liquidity management:</strong> Predictive model for redemption flows, pre-positioning capital in Tier 1 before redemption windows</li>
            <li><strong>Risk monitoring:</strong> Real-time TVL tracking, exploit detection (integrated with Forta alerts), circuit breakers for rapid withdrawals</li>
          </ul>

          <div className="bg-gray-900 text-gray-100 p-4 rounded-md my-6 text-sm overflow-x-auto">
            <pre>{`// Simplified policy engine smart contract
contract TreasuryPolicy {
    mapping(address => uint256) public protocolAllocations;  // Target allocations
    mapping(address => uint256) public protocolLimits;       // Max allocations
    address[] public approvedProtocols;
    
    // Example: Enforce diversification limits
    function validateDeployment(
        address protocol,
        uint256 amount
    ) external view returns (bool) {
        require(isApproved(protocol), "Protocol not whitelisted");
        
        uint256 totalAUM = getTotalAUM();
        uint256 currentAllocation = getProtocolBalance(protocol);
        uint256 newAllocation = currentAllocation + amount;
        
        // No single protocol >35% of AUM
        require(newAllocation <= totalAUM * 35 / 100, "Exceeds concentration limit");
        
        // No Tier 3 protocols >25% combined
        if (isTier3(protocol)) {
            uint256 tier3Total = getTier3Total() + amount;
            require(tier3Total <= totalAUM * 25 / 100, "Exceeds Tier 3 limit");
        }
        
        return true;
    }
}`}</pre>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Implementation Roadmap</h2>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">Phase 1: Foundation (Weeks 1-4)</h3>

          <p><strong>Deliverables:</strong></p>
          <ol className="space-y-2 my-4">
            <li>1. Legal review of DeFi protocol smart contracts (engaged Trail of Bits: $120K audit cost)</li>
            <li>2. Regulatory compliance assessment (external counsel: determined DeFi lending qualified as "securities lending" under existing prime broker exemptions)</li>
            <li>3. Board approval + LP disclosure (added DeFi strategy to quarterly investor letters)</li>
            <li>4. Infrastructure setup: Fireblocks account, Gnosis Safe deployment, policy contract audit</li>
            <li>5. Insurance procurement: Nexus Mutual ($50M cover, $85K annual premium) + Evertas ($25M, $120K premium)</li>
          </ol>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">Phase 2: Pilot Program (Weeks 5-8)</h3>

          <p><strong>Scope:</strong> $10M allocation (10% of total reserves)</p>

          <p><strong>Allocation:</strong></p>
          <ul className="space-y-1 my-4 text-neutral-dark">
            <li>• $4M Circle Yield (baseline comparison vs traditional money market)</li>
            <li>• $3M Compound V3 USDC</li>
            <li>• $2M Aave V3 USDC</li>
            <li>• $1M Uniswap V3 USDC/USDT LP (test impermanent loss in stable pair)</li>
          </ul>

          <p><strong>Pilot Results (4 weeks):</strong></p>
          <div className="bg-success p-6 rounded-lg my-6">
            <ul className="space-y-1">
              <li>• Blended yield: <strong>6.9%</strong> (vs 5.25% traditional baseline)</li>
              <li>• Gas costs: <strong>$240</strong> total (deployment + 2 rebalancing events)</li>
              <li>• Impermanent loss (Uniswap LP): <strong>+0.03%</strong> (actually earned slight gain due to fee income exceeding IL)</li>
              <li>• Withdrawal test: Liquidated entire $10M position in <strong>4 hours</strong> (including time to convert USDC → USD wire)</li>
              <li>• Smart contract incidents: <strong>0</strong></li>
            </ul>
          </div>

          <p className="mt-4">
            <strong>Investment Committee Decision:</strong> Approved scale-up to $50M (50% of reserves) with monthly reviews.
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">Phase 3: Scale-Up (Weeks 9-12)</h3>

          <p>Gradual deployment to target allocation over 4 weeks:</p>
          <ul className="space-y-1 my-4">
            <li>• Week 9: $25M deployed (25% of total)</li>
            <li>• Week 10: $50M deployed (50% of total)</li>
            <li>• Week 11: $75M deployed (75% of total)</li>
            <li>• Week 12: $100M deployed (100% of total, full target state)</li>
          </ul>

          <p><strong>Risk mitigation during scale-up:</strong></p>
          <ul className="space-y-2 my-4">
            <li>• Implemented circuit breakers: Auto-withdraw if protocol TVL drops &gt;20% in 24 hours</li>
            <li>• Diversified across 5 protocols (no single point of failure)</li>
            <li>• Maintained $15M in traditional money market as "break glass" reserve</li>
            <li>• Weekly stress tests: Simulated redemption scenarios, validated &lt;24hr full liquidation capability</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Performance Analysis (18 Months)</h2>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border-2 border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 text-left text-sm font-bold text-primary">Protocol/Strategy</th>
                  <th className="px-6 py-3 text-right text-sm font-bold text-primary">Allocation</th>
                  <th className="px-6 py-3 text-right text-sm font-bold text-primary">Avg Yield</th>
                  <th className="px-6 py-3 text-right text-sm font-bold text-primary">Income</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium">Circle Yield</td>
                  <td className="px-6 py-4 text-sm text-right">$25M</td>
                  <td className="px-6 py-4 text-sm text-right">5.8%</td>
                  <td className="px-6 py-4 text-sm text-right">$2,175,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium">Compound V3</td>
                  <td className="px-6 py-4 text-sm text-right">$20M</td>
                  <td className="px-6 py-4 text-sm text-right">6.8%</td>
                  <td className="px-6 py-4 text-sm text-right">$2,040,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium">Aave V3</td>
                  <td className="px-6 py-4 text-sm text-right">$15M</td>
                  <td className="px-6 py-4 text-sm text-right">6.5%</td>
                  <td className="px-6 py-4 text-sm text-right">$1,462,500</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium">Uniswap V3 LP</td>
                  <td className="px-6 py-4 text-sm text-right">$15M</td>
                  <td className="px-6 py-4 text-sm text-right">8.2%</td>
                  <td className="px-6 py-4 text-sm text-right">$1,845,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium">Maple Finance</td>
                  <td className="px-6 py-4 text-sm text-right">$10M</td>
                  <td className="px-6 py-4 text-sm text-right">9.1%</td>
                  <td className="px-6 py-4 text-sm text-right">$1,365,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium">Fidelity Money Market</td>
                  <td className="px-6 py-4 text-sm text-right">$15M</td>
                  <td className="px-6 py-4 text-sm text-right">5.35%</td>
                  <td className="px-6 py-4 text-sm text-right">$1,203,750</td>
                </tr>
                <tr className="bg-gray-50 font-bold">
                  <td className="px-6 py-4 text-sm">Total / Blended</td>
                  <td className="px-6 py-4 text-sm text-right">$100M</td>
                  <td className="px-6 py-4 text-sm text-right">6.61%</td>
                  <td className="px-6 py-4 text-sm text-right text-success text-lg">$10,091,250</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-neutral-dark italic mb-6">
            *18-month income (annualized: $6.73M vs $5.25M baseline = <strong>+$1.48M/year, +28% improvement</strong>)
          </p>

          <div className="bg-secondary text-white p-6 rounded-lg my-6">
            <h3 className="text-lg font-bold mb-3">Actual vs Expected Performance</h3>
            <ul className="space-y-2">
              <li>• <strong>Target yield:</strong> 6.35% → <strong>Actual: 6.61%</strong> (+26 bps outperformance)</li>
              <li>• <strong>Reason for outperformance:</strong> Opportunistic rebalancing during DeFi summer 2025 rate spike (Compound briefly hit 9.2%)</li>
              <li>• <strong>Downside scenario never materialized:</strong> No smart contract exploits, no depeg events, no liquidity crises</li>
              <li>• <strong>Risk-adjusted returns:</strong> Sharpe ratio 12.4 (vs 3.8 for traditional cash management)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Risk Management Deep Dive</h2>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">Risk Framework: 7-Layer Defense</h3>

          <ol className="space-y-4 my-6">
            <li>
              <strong className="text-primary">1. Protocol Selection:</strong> Only protocols with:
              <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                <li>• ≥3 independent smart contract audits (Trail of Bits, OpenZeppelin, ConsenSys Diligence)</li>
                <li>• ≥18 months live operation without major exploits</li>
                <li>• ≥$500M TVL (indicator of battle-testing and economic security)</li>
                <li>• Bug bounty program ≥$1M (Immunefi or equivalent)</li>
              </ul>
            </li>
            <li>
              <strong className="text-primary">2. Diversification:</strong>
              <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                <li>• No single protocol &gt;35% of DeFi allocation</li>
                <li>• No single risk category (lending, LP, institutional) &gt;50%</li>
                <li>• Geographic diversification of off-ramp providers (3 continents)</li>
              </ul>
            </li>
            <li>
              <strong className="text-primary">3. Liquidity Tiering:</strong>
              <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                <li>• Tier 1 (40%): Instant access (&lt;1 hour to fiat)</li>
                <li>• Tier 2 (35%): Same-day access (&lt;24 hours)</li>
                <li>• Tier 3 (25%): 48-hour exit capability</li>
              </ul>
            </li>
            <li>
              <strong className="text-primary">4. Smart Contract Insurance:</strong>
              <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                <li>• Nexus Mutual: $50M coverage for Compound, Aave, Uniswap ($85K/year premium)</li>
                <li>• Evertas: $25M custodial/bridge insurance ($120K/year)</li>
                <li>• Total insurance cost: 0.21% of AUM (acceptable overhead for risk mitigation)</li>
              </ul>
            </li>
            <li>
              <strong className="text-primary">5. Real-Time Monitoring:</strong>
              <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                <li>• Forta network alerts for protocol exploits (5-minute response SLA)</li>
                <li>• Dune Analytics dashboard: TVL, utilization rates, yields (refreshed every 15 min)</li>
                <li>• PagerDuty escalation for: TVL drops &gt;20%, yield drops &gt;50 bps, depeg events &gt;0.5%</li>
              </ul>
            </li>
            <li>
              <strong className="text-primary">6. Automated Circuit Breakers:</strong>
              <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                <li>• Auto-withdraw if protocol TVL drops &gt;20% in 24 hours</li>
                <li>• Auto-pause new deployments if Chainlink oracle stale/deviation &gt;1%</li>
                <li>• Manual override requires 4-of-6 multisig (prevents panic withdrawals from false positives)</li>
              </ul>
            </li>
            <li>
              <strong className="text-primary">7. Operational Security:</strong>
              <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                <li>• Fireblocks MPC custody (no single private key)</li>
                <li>• 4-of-6 Gnosis Safe for daily operations (hardware wallet signers geographically distributed)</li>
                <li>• Quarterly penetration testing (external firm: Bishop Fox)</li>
                <li>• Annual disaster recovery drill (simulated protocol exploit + rapid liquidation)</li>
              </ul>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Challenges & Lessons Learned</h2>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="text-lg font-bold text-primary mb-3">Challenge 1: Regulatory Classification</h3>
            <p className="mb-3">
              <strong>Issue:</strong> Unclear whether DeFi lending constituted "securities lending" requiring specific regulatory approvals.
            </p>
            <p className="mb-3">
              <strong>Resolution:</strong> External legal counsel (Cooley LLP) provided opinion that DeFi lending qualified under 
              existing prime broker exemptions, as long as: (1) counterparties were smart contracts, not legal entities, (2) 
              collateralization was &gt;100%, (3) positions were marked-to-market daily.
            </p>
            <p>
              <strong>Cost:</strong> $45K legal fees. <strong>Timeline:</strong> 3 weeks. <strong>Outcome:</strong> Board approval 
              with requirement for quarterly compliance attestations.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="text-lg font-bold text-primary mb-3">Challenge 2: Accounting Treatment</h3>
            <p className="mb-3">
              <strong>Issue:</strong> DeFi positions didn't fit cleanly into GAAP categories (not "cash equivalents," not "securities").
            </p>
            <p className="mb-3">
              <strong>Resolution:</strong> Worked with Big 4 auditor (Deloitte) to classify as "Short-term investments" with daily 
              fair value marking. Required custom disclosure footnote in financial statements.
            </p>
            <p>
              <strong>Outcome:</strong> Clean audit opinion, but increased disclosure requirements in LP quarterly letters.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="text-lg font-bold text-primary mb-3">Challenge 3: Yield Volatility</h3>
            <p className="mb-3">
              <strong>Issue:</strong> DeFi lending rates fluctuated significantly (Compound ranged 4.2%-9.8% over 18 months).
            </p>
            <p className="mb-3">
              <strong>Mitigation:</strong> (1) Blended allocation across multiple protocols smoothed volatility, (2) Conservative 
              budgeting (assumed 5.5% average in projections despite actual 6.61%), (3) Monthly rebalancing to chase yield spikes.
            </p>
            <p>
              <strong>Lesson:</strong> Don't chase yield peaks. Sustainable 6-7% is better than volatile 8-10% that may reverse.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="text-lg font-bold text-primary mb-3">Challenge 4: Gas Cost Optimization</h3>
            <p className="mb-3">
              <strong>Issue:</strong> Initial Ethereum mainnet deployment incurred $15K/month in gas fees for rebalancing operations.
            </p>
            <p className="mb-3">
              <strong>Solution:</strong> (1) Migrated Tier 2/3 positions to Polygon (gas dropped 99%), (2) Batched operations 
              (weekly rebalancing instead of daily), (3) Used Gelato Network for automated keeper operations.
            </p>
            <p>
              <strong>Outcome:</strong> Gas costs reduced to $800/month (0.01% of AUM, vs 0.18% initially).
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Investor Communication Strategy</h2>

          <p>
            Transparency with LPs was critical to maintaining trust during DeFi integration. The fund implemented:
          </p>

          <ul className="space-y-3 my-6">
            <li>
              <strong>1. Pre-announcement education:</strong> Dedicated investor call explaining DeFi mechanics, risk controls, 
              and rationale (recorded webinar shared with all LPs).
            </li>
            <li>
              <strong>2. Monthly reporting:</strong> Added "Treasury Management" section to investor letters with:
              <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                <li>• Allocation breakdown by protocol</li>
                <li>• Yield performance vs traditional baseline</li>
                <li>• Risk incidents (none to report, but commitment to transparency)</li>
                <li>• Insurance coverage status</li>
              </ul>
            </li>
            <li>
              <strong>3. Annual audit disclosure:</strong> Deloitte reviewed DeFi positions as part of annual audit, validated 
              fair value pricing and risk controls.
            </li>
            <li>
              <strong>4. Redemption flexibility:</strong> Offered opt-out for LPs uncomfortable with DeFi exposure (zero 
              redemptions attributed to this reason).
            </li>
          </ul>

          <p className="mt-4">
            <strong>LP Reception:</strong> Overwhelmingly positive. Several LPs specifically cited the treasury optimization 
            as a competitive differentiator vs peer funds still earning 5% on cash.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Financial Impact Summary</h2>

          <div className="bg-white border-2 border-secondary p-8 rounded-lg my-8">
            <h3 className="text-xl font-bold text-primary mb-4">18-Month P&L</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">DeFi yield income:</span>
                <span className="font-bold text-success">+$10,091,250</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Traditional baseline (counterfactual):</span>
                <span>-$7,875,000</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-bold">Incremental income:</span>
                <span className="font-bold text-success">+$2,216,250</span>
              </div>
              
              <div className="mt-6 pt-4 border-t">
                <h4 className="font-bold text-primary mb-2">Costs:</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Insurance premiums (18 mo):</span>
                    <span>-$307,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gas fees (18 mo):</span>
                    <span>-$14,400</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Legal/compliance (one-time):</span>
                    <span>-$45,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Audit/security (one-time):</span>
                    <span>-$120,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Infrastructure setup:</span>
                    <span>-$85,000</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 font-medium">
                    <span>Total costs (18 mo):</span>
                    <span>-$571,900</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-secondary">
                <div className="flex justify-between text-xl">
                  <span className="font-bold text-primary">Net benefit (18 months):</span>
                  <span className="font-bold text-success">+$1,644,350</span>
                </div>
                <p className="text-sm text-neutral-dark mt-2">
                  Annualized: <strong>+$1,096,233/year</strong> on $100M AUM = <strong>+110 bps yield improvement</strong>
                </p>
              </div>

              <div className="mt-6 pt-4 border-t">
                <div className="flex justify-between">
                  <span className="font-bold">ROI (first 18 months):</span>
                  <span className="font-bold text-success">287%</span>
                </div>
                <p className="text-sm text-neutral-dark mt-1">
                  Implementation costs ($571K) recovered in <strong>6.2 months</strong>
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Conclusion & Recommendations</h2>

          <p>
            This case study demonstrates that institutional DeFi treasury management is not only viable but superior to 
            traditional cash management for funds seeking yield enhancement without sacrificing liquidity or safety.
          </p>

          <p className="mt-4"><strong>Key Success Factors:</strong></p>
          <ul className="space-y-2 my-4">
            <li>✅ <strong>Tiered liquidity model</strong> prevented forced liquidations during redemption windows</li>
            <li>✅ <strong>Insurance coverage</strong> ($75M total) provided board-level confidence</li>
            <li>✅ <strong>Diversification</strong> (5 protocols) eliminated single points of failure</li>
            <li>✅ <strong>Conservative budgeting</strong> (5.5% target vs 6.61% actual) exceeded expectations</li>
            <li>✅ <strong>Transparent LP communication</strong> maintained trust and avoided redemptions</li>
          </ul>

          <p className="mt-6"><strong>Recommended for:</strong></p>
          <ul className="space-y-1 my-4">
            <li>• Hedge funds with &gt;$50M cash reserves</li>
            <li>• Family offices seeking yield on operating capital</li>
            <li>• Endowments/foundations with liquidity constraints but multi-year horizons</li>
            <li>• Corporate treasuries (post-pilot validation by pioneering funds)</li>
          </ul>

          <p className="mt-6"><strong>Not recommended for:</strong></p>
          <ul className="space-y-1 my-4">
            <li>• Organizations unable to dedicate technical resources for 24/7 monitoring</li>
            <li>• Jurisdictions with unclear DeFi regulatory frameworks</li>
            <li>• Teams lacking smart contract audit capabilities (must outsource)</li>
          </ul>

          <div className="bg-accent text-white p-8 rounded-lg mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Treasury?</h3>
            <p className="mb-6 text-lg">
              Get a custom yield analysis for your cash reserves, including protocol recommendations, 
              risk assessment, and projected ROI based on your liquidity requirements.
            </p>
            <Link
              href="/consulting"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-accent hover:bg-gray-100 rounded-md transition-colors font-medium"
            >
              Schedule Strategy Session
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
