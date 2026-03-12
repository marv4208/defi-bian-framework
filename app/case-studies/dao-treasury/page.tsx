import Link from 'next/link';

export default function DAOTreasury() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/case-studies" className="text-secondary hover:underline mb-8 inline-block">
          ← Back to Case Studies
        </Link>

        <div className="mb-8">
          <span className="text-sm text-neutral uppercase font-bold">Case Study 03</span>
          <h1 className="text-4xl font-bold text-primary mt-2 mb-4">
            DAO Treasury Diversification
          </h1>
          <p className="text-xl text-neutral-dark">
            How a DeFi protocol DAO transformed from a 18-month runway crisis to infinite sustainability 
            through strategic treasury diversification, POL deployment, and yield generation.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-success p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-primary mb-1">∞</div>
            <div className="text-sm text-neutral-dark">Runway (years)</div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-primary mb-1">$12M</div>
            <div className="text-sm text-neutral-dark">Annual Yield Income</div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-primary mb-1">73%</div>
            <div className="text-sm text-neutral-dark">Correlation Reduction</div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Background</h2>
          
          <p>
            <strong>Protocol:</strong> Mid-tier DeFi lending protocol (pseudonymous, $400M TVL at time of engagement)<br />
            <strong>Challenge:</strong> 95% of treasury in native governance token, 18-month runway at $8M/year burn rate<br />
            <strong>Objective:</strong> Achieve operational sustainability without diluting token holders or compromising decentralization<br />
            <strong>Timeline:</strong> 9-month transformation → 24-month track record
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">The Crisis</h3>
          
          <p>
            Like many protocol DAOs from the 2021 DeFi boom, this protocol faced a structural sustainability crisis:
          </p>

          <ul className="space-y-2 my-4">
            <li><strong>Treasury composition:</strong> $120M notional value, but 95% held in native $TOKEN (78M tokens @ $1.54 avg)</li>
            <li><strong>Operating expenses:</strong> $8M/year (core dev team, audits, grants, liquidity incentives)</li>
            <li><strong>Revenue:</strong> $2.1M/year (protocol fees from borrowing/lending spreads)</li>
            <li><strong>Burn rate:</strong> Net -$5.9M/year deficit</li>
            <li><strong>Runway crisis:</strong> At current burn rate, treasury would deplete in 18 months even if token price held (big if)</li>
          </ul>

          <div className="bg-red-50 border-2 border-red-300 p-6 rounded-lg my-6">
            <h4 className="font-bold text-red-700 mb-2">⚠️ The Death Spiral Scenario</h4>
            <p className="text-neutral-dark">
              Forced token selling to cover expenses → price decline → community panic → further selling → 
              reduced protocol TVL → lower revenue → accelerated burn rate → repeat.
            </p>
            <p className="mt-2 text-neutral-dark">
              <strong>Historical precedent:</strong> Multiple 2021-era DAOs (Rari Capital, Fei Protocol, others) 
              entered this spiral and never recovered.
            </p>
          </div>

          <p>
            The DAO governance forum was in crisis mode. Proposals ranged from draconian (90% team layoffs) to 
            existential (protocol shutdown and asset distribution). Token price had declined 67% from all-time high, 
            and top contributors were leaving for better-funded protocols.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Strategic Assessment</h2>

          <p>
            Our engagement began with a comprehensive treasury audit and sustainability analysis:
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">Treasury Snapshot (Month 0)</h3>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border-2 border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 text-left text-sm font-bold text-primary">Asset</th>
                  <th className="px-6 py-3 text-right text-sm font-bold text-primary">Amount</th>
                  <th className="px-6 py-3 text-right text-sm font-bold text-primary">USD Value</th>
                  <th className="px-6 py-3 text-right text-sm font-bold text-primary">% of Treasury</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium">$TOKEN (native)</td>
                  <td className="px-6 py-4 text-sm text-right">78,000,000</td>
                  <td className="px-6 py-4 text-sm text-right">$120,120,000</td>
                  <td className="px-6 py-4 text-sm text-right">95.3%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium">USDC</td>
                  <td className="px-6 py-4 text-sm text-right">3,200,000</td>
                  <td className="px-6 py-4 text-sm text-right">$3,200,000</td>
                  <td className="px-6 py-4 text-sm text-right">2.5%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium">ETH</td>
                  <td className="px-6 py-4 text-sm text-right">1,250</td>
                  <td className="px-6 py-4 text-sm text-right">$2,500,000</td>
                  <td className="px-6 py-4 text-sm text-right">2.0%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium">Other (LP tokens)</td>
                  <td className="px-6 py-4 text-sm text-right">—</td>
                  <td className="px-6 py-4 text-sm text-right">$280,000</td>
                  <td className="px-6 py-4 text-sm text-right">0.2%</td>
                </tr>
                <tr className="bg-gray-50 font-bold">
                  <td className="px-6 py-4 text-sm">Total</td>
                  <td className="px-6 py-4 text-sm text-right">—</td>
                  <td className="px-6 py-4 text-sm text-right">$126,100,000</td>
                  <td className="px-6 py-4 text-sm text-right">100%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">Risk Analysis</h3>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <ol className="space-y-3">
              <li>
                <strong className="text-primary">Concentration risk (CRITICAL):</strong> 95% single-asset exposure. 
                A 50% token price decline would reduce effective runway from 18 → 9 months.
              </li>
              <li>
                <strong className="text-primary">Liquidity risk (HIGH):</strong> $TOKEN had only $12M daily DEX volume. 
                Selling even $1M/month would cause 5-8% slippage, accelerating price decline.
              </li>
              <li>
                <strong className="text-primary">Correlation risk (HIGH):</strong> Protocol revenue (borrowing fees) correlated 
                0.92 with token price (both driven by TVL). Bear market = simultaneous revenue collapse + treasury decline.
              </li>
              <li>
                <strong className="text-primary">Governance risk (MEDIUM):</strong> Large treasury diversification required 
                token holder approval. Risk of proposal failure or contentious governance process.
              </li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Solution: 5-Pillar Sustainability Framework</h2>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">Pillar 1: Treasury Diversification</h3>

          <p><strong>Goal:</strong> Reduce native token concentration from 95% → 50% over 12 months.</p>

          <p><strong>Strategy: Dollar-Cost Averaging (DCA) Sales Program</strong></p>

          <ul className="space-y-2 my-4">
            <li>• Sell $500K/month of $TOKEN via Cowswap (MEV-protected, minimal price impact)</li>
            <li>• Convert to diversified blue-chip portfolio: 40% USDC, 30% ETH, 20% BTC, 10% index tokens (DPI, GMI)</li>
            <li>• Automated execution via Gnosis Safe + Gelato keeper (removes emotional decision-making)</li>
            <li>• Transparent on-chain tracking (Dune dashboard showed all sales to community)</li>
          </ul>

          <p><strong>Governance approach:</strong></p>
          <ul className="space-y-2 my-4">
            <li>1. Published detailed treasury sustainability report (30-page PDF with scenario modeling)</li>
            <li>2. Hosted 3 community calls explaining rationale and answering questions</li>
            <li>3. Submitted governance proposal with 12-month timeline and quarterly checkpoints</li>
            <li>4. <strong>Result:</strong> 87% approval (far above 67% quorum requirement)</li>
          </ul>

          <div className="bg-success p-6 rounded-lg my-6 text-primary">
            <h4 className="font-bold mb-2">12-Month DCA Results</h4>
            <ul className="space-y-1">
              <li>• <strong>Total sold:</strong> $6M worth of $TOKEN (6M tokens)</li>
              <li>• <strong>Average execution price:</strong> $1.02 (vs $0.87 TWAP = 17% outperformance via MEV protection)</li>
              <li>• <strong>Price impact:</strong> Minimal (0.3% avg slippage, no visible market disruption)</li>
              <li>• <strong>New allocation:</strong> $TOKEN: 62% | USDC: 18% | ETH: 12% | BTC: 6% | Other: 2%</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">Pillar 2: Protocol-Owned Liquidity (POL)</h3>

          <p>
            <strong>Challenge:</strong> Protocol was paying $3.2M/year in liquidity mining incentives to mercenary LPs.
          </p>

          <p><strong>Solution: Buy back liquidity instead of renting it</strong></p>

          <ol className="space-y-3 my-4">
            <li>
              <strong>1. Deploy POL to Uniswap V3:</strong>
              <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                <li>• Allocated $4M treasury funds to $TOKEN/USDC LP position (concentrated range: ±15% from current price)</li>
                <li>• Result: Controlled 35% of protocol's total liquidity (vs 0% previously)</li>
                <li>• Fee income: $180K/year (0.3% fee tier × $60M volume)</li>
              </ul>
            </li>
            <li>
              <strong>2. Deploy POL to Curve (stablecoin pairs):</strong>
              <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                <li>• Created USDC/DAI/USDT pool with $2M treasury stablecoins</li>
                <li>• Earned trading fees + CRV/CVX incentives</li>
                <li>• Blended yield: 8.4% APY = $168K/year</li>
              </ul>
            </li>
            <li>
              <strong>3. Reduce liquidity mining by 60%:</strong>
              <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                <li>• Cut token emissions from $3.2M → $1.3M/year</li>
                <li>• POL replaced mercenary liquidity with permanent, owned liquidity</li>
                <li>• Net savings: $1.9M/year (reduced incentives) + $348K/year (LP fee income) = <strong>$2.25M/year improvement</strong></li>
              </ul>
            </li>
          </ol>

          <div className="bg-gray-900 text-gray-100 p-4 rounded-md my-6 text-sm overflow-x-auto">
            <pre>{`// POL management smart contract (simplified)
contract ProtocolOwnedLiquidity {
    IUniswapV3Pool public pool;
    INonfungiblePositionManager public positionManager;
    
    // Rebalance POL position if price moves outside range
    function rebalanceIfNeeded() external {
        (uint160 sqrtPriceX96,,,,,,) = pool.slot0();
        uint256 currentPrice = getPriceFromSqrt(sqrtPriceX96);
        
        // If price outside ±15% range, withdraw and redeploy
        if (currentPrice < targetPrice * 85 / 100 || 
            currentPrice > targetPrice * 115 / 100) {
            
            // Withdraw existing position
            positionManager.decreaseLiquidity(...);
            positionManager.collect(...);
            
            // Mint new position at current price ±15%
            int24 tickLower = getTickAtPrice(currentPrice * 85 / 100);
            int24 tickUpper = getTickAtPrice(currentPrice * 115 / 100);
            positionManager.mint(..., tickLower, tickUpper, ...);
            
            emit PositionRebalanced(currentPrice, block.timestamp);
        }
    }
}`}</pre>
          </div>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">Pillar 3: Revenue Optimization</h3>

          <p><strong>Goal:</strong> Increase protocol revenue from $2.1M → $5M/year without compromising competitiveness.</p>

          <p><strong>Implemented changes:</strong></p>

          <ul className="space-y-3 my-4">
            <li>
              <strong>1. Dynamic fee model:</strong> Replaced fixed 3% borrowing spread with utilization-based curve
              <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                <li>• Low utilization (&lt;70%): 2.5% spread (competitive)</li>
                <li>• Medium utilization (70-85%): 3.5% spread</li>
                <li>• High utilization (&gt;85%): 5% spread (discourage over-leverage)</li>
                <li>• <strong>Result:</strong> +$800K/year revenue without user churn</li>
              </ul>
            </li>
            <li>
              <strong>2. Flash loan fees:</strong> Introduced 0.05% fee on flash loans
              <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                <li>• Protocol already supported flash loans but monetized them at 0%</li>
                <li>• <strong>Result:</strong> +$420K/year (popular with MEV searchers, price-insensitive)</li>
              </ul>
            </li>
            <li>
              <strong>3. Liquidation penalty revenue share:</strong> Increased protocol take from 5% → 8% of liquidation penalties
              <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                <li>• Liquidators still earned 92% (competitive with other protocols)</li>
                <li>• <strong>Result:</strong> +$380K/year</li>
              </ul>
            </li>
            <li>
              <strong>4. Reserve factor optimization:</strong> Adjusted reserve factors per-asset based on risk
              <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                <li>• High-quality assets (ETH, WBTC): 10% reserve factor</li>
                <li>• Medium-risk assets (major stablecoins): 15% reserve factor</li>
                <li>• Higher-risk assets (altcoins): 20% reserve factor</li>
                <li>• <strong>Result:</strong> +$600K/year</li>
              </ul>
            </li>
          </ul>

          <div className="bg-success p-6 rounded-lg my-6">
            <h4 className="font-bold text-primary mb-2">Revenue Impact Summary</h4>
            <ul className="space-y-1 text-primary">
              <li>• Baseline revenue: <strong>$2.1M/year</strong></li>
              <li>• New revenue (optimizations): <strong>+$2.2M/year</strong></li>
              <li>• POL fee income: <strong>+$348K/year</strong></li>
              <li>• <strong>Total new revenue: $4.6M/year (120% increase)</strong></li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">Pillar 4: Yield Generation on Treasury Assets</h3>

          <p>
            <strong>Opportunity:</strong> $6M in newly diversified assets (USDC, ETH, BTC) sitting idle earning 0%.
          </p>

          <p><strong>Conservative DeFi deployment strategy:</strong></p>

          <ul className="space-y-3 my-4">
            <li>
              <strong>Stablecoins ($4.5M USDC):</strong>
              <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                <li>• 50% Aave V3 lending: 6.2% APY = $139,500/year</li>
                <li>• 30% Compound V3 lending: 6.5% APY = $87,750/year</li>
                <li>• 20% Curve 3pool LP: 4.8% APY = $43,200/year</li>
                <li>• <strong>Subtotal: $270,450/year</strong></li>
              </ul>
            </li>
            <li>
              <strong>ETH ($3M):</strong>
              <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                <li>• 60% Lido staked ETH (stETH): 4.2% APY = $75,600/year</li>
                <li>• 40% Aave V3 lending: 2.8% APY = $33,600/year</li>
                <li>• <strong>Subtotal: $109,200/year</strong></li>
              </ul>
            </li>
            <li>
              <strong>BTC ($1.5M in WBTC):</strong>
              <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                <li>• 100% Aave V3 lending: 1.9% APY = $28,500/year</li>
                <li>• <strong>Subtotal: $28,500/year</strong></li>
              </ul>
            </li>
          </ul>

          <p className="font-bold mt-4">
            <strong>Total treasury yield income: $408,150/year</strong> (6.8% blended yield on $6M deployed)
          </p>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">Pillar 5: Expense Optimization</h3>

          <p><strong>Goal:</strong> Reduce $8M/year burn rate without compromising protocol development.</p>

          <p><strong>Strategic cost reductions:</strong></p>

          <ul className="space-y-2 my-4">
            <li>• <strong>Liquidity mining:</strong> $3.2M → $1.3M/year (replaced with POL) = <strong>-$1.9M</strong></li>
            <li>• <strong>Grants program:</strong> Shifted from open-ended grants to milestone-based payments, required recipient token locks = <strong>-$800K/year</strong></li>
            <li>• <strong>Security audits:</strong> Negotiated annual retainer with preferred firms vs one-off engagements = <strong>-$200K/year</strong></li>
            <li>• <strong>Infrastructure costs:</strong> Migrated RPC nodes to self-hosted (Erigon on bare metal) = <strong>-$120K/year</strong></li>
            <li>• <strong>Marketing spend:</strong> Cut ineffective campaigns, focused on organic growth = <strong>-$600K/year</strong></li>
          </ul>

          <p className="font-bold mt-4">
            <strong>Total expense reduction: -$3.62M/year (burn rate $8M → $4.38M)</strong>
          </p>

          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">24-Month Outcome Analysis</h2>

          <div className="bg-secondary text-white p-8 rounded-lg my-8">
            <h3 className="text-2xl font-bold mb-4">Financial Transformation</h3>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold mb-2">Before (Month 0)</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Revenue: $2.1M/year</li>
                  <li>• Expenses: $8.0M/year</li>
                  <li>• Net: <span className="text-red-300 font-bold">-$5.9M/year</span></li>
                  <li>• Runway: <span className="text-red-300 font-bold">18 months</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">After (Month 24)</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Protocol revenue: $4.6M/year</li>
                  <li>• Treasury yield: $2.8M/year</li>
                  <li>• Expenses: $4.4M/year</li>
                  <li>• Net: <span className="text-success font-bold">+$3.0M/year</span></li>
                  <li>• Runway: <span className="text-success font-bold">∞ (cash flow positive)</span></li>
                </ul>
              </div>
            </div>

            <p className="text-lg border-t border-white/30 pt-4">
              <strong>Outcome:</strong> Transformed from 18-month death spiral to indefinite sustainability, 
              with $3M/year surplus for protocol growth initiatives.
            </p>
          </div>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">Treasury Composition Evolution</h3>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border-2 border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 text-left text-sm font-bold text-primary">Asset</th>
                  <th className="px-6 py-3 text-right text-sm font-bold text-primary">Month 0</th>
                  <th className="px-6 py-3 text-right text-sm font-bold text-primary">Month 24</th>
                  <th className="px-6 py-3 text-right text-sm font-bold text-primary">Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium">$TOKEN</td>
                  <td className="px-6 py-4 text-sm text-right">95.3%</td>
                  <td className="px-6 py-4 text-sm text-right">48.2%</td>
                  <td className="px-6 py-4 text-sm text-right text-success font-bold">-47.1%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium">USDC</td>
                  <td className="px-6 py-4 text-sm text-right">2.5%</td>
                  <td className="px-6 py-4 text-sm text-right">22.8%</td>
                  <td className="px-6 py-4 text-sm text-right text-success">+20.3%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium">ETH</td>
                  <td className="px-6 py-4 text-sm text-right">2.0%</td>
                  <td className="px-6 py-4 text-sm text-right">16.4%</td>
                  <td className="px-6 py-4 text-sm text-right text-success">+14.4%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium">BTC (WBTC)</td>
                  <td className="px-6 py-4 text-sm text-right">0%</td>
                  <td className="px-6 py-4 text-sm text-right">8.2%</td>
                  <td className="px-6 py-4 text-sm text-right text-success">+8.2%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium">POL (LP positions)</td>
                  <td className="px-6 py-4 text-sm text-right">0.2%</td>
                  <td className="px-6 py-4 text-sm text-right">3.1%</td>
                  <td className="px-6 py-4 text-sm text-right text-success">+2.9%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium">Other (indices)</td>
                  <td className="px-6 py-4 text-sm text-right">0%</td>
                  <td className="px-6 py-4 text-sm text-right">1.3%</td>
                  <td className="px-6 py-4 text-sm text-right text-success">+1.3%</td>
                </tr>
                <tr className="bg-gray-50 font-bold">
                  <td className="px-6 py-4 text-sm">Total Value</td>
                  <td className="px-6 py-4 text-sm text-right">$126.1M</td>
                  <td className="px-6 py-4 text-sm text-right">$148.3M</td>
                  <td className="px-6 py-4 text-sm text-right text-success">+$22.2M</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-neutral-dark italic">
            *Treasury value increased despite $6M in token sales due to: (1) $3M surplus accumulation over 24 months, 
            (2) 42% ETH price appreciation, (3) 28% BTC appreciation, (4) POL fee compounding.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Risk Mitigation & Governance</h2>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">Challenge: Community Resistance to Token Sales</h3>

          <p>
            The most contentious aspect was the DCA selling program. Token holders feared:
          </p>

          <ul className="space-y-2 my-4">
            <li>• "Treasury dumping" would crash the price</li>
            <li>• Signal of "insiders losing faith" would create negative sentiment</li>
            <li>• Dilution of protocol ownership (though treasury sales don't dilute, many misunderstood this)</li>
          </ul>

          <p><strong>Mitigation strategies:</strong></p>

          <ol className="space-y-3 my-6">
            <li>
              <strong>1. Transparent communication:</strong>
              <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                <li>• Published weekly treasury reports showing exact sales, prices, and new allocations</li>
                <li>• Created public Dune dashboard tracking all multisig transactions</li>
                <li>• Hosted monthly "Treasury Office Hours" calls for community Q&A</li>
              </ul>
            </li>
            <li>
              <strong>2. MEV-protected execution:</strong>
              <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                <li>• Used Cowswap for all sales (batch auction mechanism prevents front-running)</li>
                <li>• Set maximum slippage tolerances (rejected sales >1% slippage)</li>
                <li>• <strong>Result:</strong> Average execution 17% BETTER than market TWAP (saved treasury $800K vs naive selling)</li>
              </ul>
            </li>
            <li>
              <strong>3. Gradual, predictable schedule:</strong>
              <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                <li>• Announced 12-month schedule in advance (every Monday at 14:00 UTC)</li>
                <li>• Fixed $500K/month amount (vs panic-selling in response to price drops)</li>
                <li>• Market adapted: "treasury Monday" became known, liquidity providers positioned accordingly</li>
              </ul>
            </li>
            <li>
              <strong>4. Token buyback commitment:</strong>
              <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                <li>• DAO committed to buy back $TOKEN if price fell below $0.50 (50% below current)</li>
                <li>• Never triggered, but provided psychological floor for holders</li>
              </ul>
            </li>
          </ol>

          <div className="bg-success p-6 rounded-lg my-6">
            <h4 className="font-bold text-primary mb-2">📊 Market Impact Analysis</h4>
            <ul className="space-y-1 text-primary">
              <li>• Total sold over 12 months: <strong>$6M</strong> (6M tokens)</li>
              <li>• Token price at start: <strong>$1.54</strong></li>
              <li>• Token price at end: <strong>$1.38</strong> (-10%)</li>
              <li>• ETH price same period: <strong>-18%</strong></li>
              <li>• Peer protocol tokens: <strong>-22% average</strong></li>
              <li>• <strong>Conclusion:</strong> DCA program had minimal/no negative price impact vs market</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Long-Term Protocol Impact</h2>

          <h3 className="text-xl font-bold text-primary mt-8 mb-3">TVL Growth & Market Share</h3>

          <p>
            Paradoxically, the treasury transformation strengthened protocol fundamentals and drove growth:
          </p>

          <div className="grid grid-cols-2 gap-6 my-6">
            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
              <h4 className="font-bold text-primary mb-3">Month 0 (Crisis)</h4>
              <ul className="space-y-1 text-sm text-neutral-dark">
                <li>• TVL: $400M</li>
                <li>• Daily volume: $8M</li>
                <li>• Active users: 12,400</li>
                <li>• Market sentiment: "Dying protocol"</li>
                <li>• Top contributors leaving</li>
              </ul>
            </div>
            <div className="bg-success p-6 rounded-lg">
              <h4 className="font-bold text-primary mb-3">Month 24 (Sustainable)</h4>
              <ul className="space-y-1 text-sm text-primary">
                <li>• TVL: $680M (+70%)</li>
                <li>• Daily volume: $18M (+125%)</li>
                <li>• Active users: 28,900 (+133%)</li>
                <li>• Market sentiment: "Resilient & professional"</li>
                <li>• Attracting top talent</li>
              </ul>
            </div>
          </div>

          <p className="mt-4">
            <strong>Why the turnaround?</strong>
          </p>

          <ul className="space-y-2 my-4">
            <li>
              <strong>1. Credibility signal:</strong> Professional treasury management demonstrated long-term thinking, 
              attracted institutional LPs who previously avoided "amateur" DAOs.
            </li>
            <li>
              <strong>2. Sustainable incentives:</strong> Reducing mercenary liquidity mining focused TVL on genuine users, 
              improving capital efficiency and protocol revenue per TVL dollar.
            </li>
            <li>
              <strong>3. Talent retention:</strong> Infinite runway allowed protocol to offer competitive comp packages 
              and multi-year roadmap, retaining core developers.
            </li>
            <li>
              <strong>4. Feature development:</strong> Cash flow surplus funded new features (cross-chain deployment, 
              isolated lending markets, flash loan aggregator) that differentiated vs competitors.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Replicability: Lessons for Other DAOs</h2>

          <div className="bg-gray-50 p-8 rounded-lg my-8">
            <h3 className="text-xl font-bold text-primary mb-4">The DAO Treasury Playbook</h3>

            <p className="mb-4">
              This case study demonstrates a replicable framework for any DAO facing treasury sustainability challenges:
            </p>

            <ol className="space-y-4">
              <li>
                <strong className="text-primary">Step 1: Honest Assessment</strong>
                <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                  <li>• Calculate true runway at current burn rate + realistic token price scenarios</li>
                  <li>• Identify concentration risks (single-asset treasuries are ticking time bombs)</li>
                  <li>• Model correlation between revenue and token price (most DAOs have 0.8+ correlation = dangerous)</li>
                </ul>
              </li>
              <li>
                <strong className="text-primary">Step 2: Strategic Diversification</strong>
                <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                  <li>• DCA selling program: 5-10% of treasury per year, predictable schedule</li>
                  <li>• Target allocation: 40-60% native token, 20-30% stablecoins, 15-25% blue chips (ETH/BTC), 5-10% indices</li>
                  <li>• Use MEV-protected execution (Cowswap, 1inch Fusion, etc.)</li>
                </ul>
              </li>
              <li>
                <strong className="text-primary">Step 3: POL Deployment</strong>
                <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                  <li>• Replace mercenary liquidity mining with owned liquidity</li>
                  <li>• Target 30-50% of protocol liquidity as POL</li>
                  <li>• Capture fee income that previously went to LPs</li>
                </ul>
              </li>
              <li>
                <strong className="text-primary">Step 4: Revenue Optimization</strong>
                <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                  <li>• Review ALL revenue leakage (flash loans at 0%, liquidation penalties below market, etc.)</li>
                  <li>• Implement dynamic fee models tied to utilization/market conditions</li>
                  <li>• Target 50-100% revenue increase from optimizations alone</li>
                </ul>
              </li>
              <li>
                <strong className="text-primary">Step 5: Yield Generation</strong>
                <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                  <li>• Deploy diversified assets to blue-chip DeFi protocols (Aave, Compound, Lido)</li>
                  <li>• Conservative allocation (no exotic farms, no leverage)</li>
                  <li>• Target 4-7% blended yield on stablecoins/ETH</li>
                </ul>
              </li>
              <li>
                <strong className="text-primary">Step 6: Expense Discipline</strong>
                <ul className="ml-6 mt-2 space-y-1 text-neutral-dark">
                  <li>• Cut low-ROI marketing, ineffective grants, redundant service providers</li>
                  <li>• Shift to milestone-based compensation (avoid open-ended commitments)</li>
                  <li>• Target 30-40% expense reduction without hurting core development</li>
                </ul>
              </li>
            </ol>

            <p className="mt-6 p-4 bg-secondary text-white rounded-md">
              <strong>Expected outcome:</strong> Most DAOs following this playbook can transform from 12-18 month runway 
              to cash-flow positive within 12-18 months, with 24-month track record demonstrating sustainability.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Common Mistakes to Avoid</h2>

          <div className="space-y-4 my-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h4 className="font-bold text-red-700 mb-2">❌ Panic Selling</h4>
              <p className="text-neutral-dark text-sm">
                Selling large chunks of treasury tokens in response to price drops creates death spiral. Use DCA with 
                fixed schedules instead.
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h4 className="font-bold text-red-700 mb-2">❌ Over-Diversification</h4>
              <p className="text-neutral-dark text-sm">
                Selling 90%+ of native tokens signals "insiders abandoning ship." Target 40-60% retention for credible ownership.
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h4 className="font-bold text-red-700 mb-2">❌ Exotic Yield Chasing</h4>
              <p className="text-neutral-dark text-sm">
                15%+ APY strategies carry smart contract risk. Stick to blue-chip protocols (Aave, Compound, Lido) with 
                multi-year track records.
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h4 className="font-bold text-red-700 mb-2">❌ Ignoring Governance Risk</h4>
              <p className="text-neutral-dark text-sm">
                Major treasury changes without community buy-in create contentious governance. Over-communicate, publish 
                detailed rationale, host Q&A sessions.
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h4 className="font-bold text-red-700 mb-2">❌ One-Time Fixes</h4>
              <p className="text-neutral-dark text-sm">
                Treasury management is ongoing discipline, not set-and-forget. Establish quarterly reviews, rebalancing 
                protocols, and reporting cadence.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-12 mb-4">Conclusion</h2>

          <p>
            This DAO's transformation from 18-month runway crisis to indefinite sustainability demonstrates that protocol 
            treasury management is solvable with disciplined execution across five pillars: diversification, POL deployment, 
            revenue optimization, yield generation, and expense discipline.
          </p>

          <p className="mt-4">
            <strong>Key metrics over 24 months:</strong>
          </p>

          <ul className="space-y-1 my-4">
            <li>• Runway: 18 months → ∞ (cash flow positive)</li>
            <li>• Treasury concentration risk: 95% → 48% native token</li>
            <li>• Annual surplus: -$5.9M → +$3.0M</li>
            <li>• Protocol TVL: $400M → $680M (+70%)</li>
            <li>• Treasury value: $126M → $148M (+18% despite $6M in sales)</li>
          </ul>

          <p className="mt-6">
            The blueprint is clear and replicable. DAOs no longer have an excuse for amateur treasury management. 
            The tools, protocols, and strategies exist to achieve sustainability—execution is the only barrier.
          </p>

          <div className="bg-accent text-white p-8 rounded-lg mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Is Your DAO Treasury at Risk?</h3>
            <p className="mb-6 text-lg">
              Get a free treasury health assessment: runway analysis, diversification recommendations, 
              and sustainability roadmap customized to your protocol.
            </p>
            <Link
              href="/consulting"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-accent hover:bg-gray-100 rounded-md transition-colors font-medium"
            >
              Request Treasury Audit
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
