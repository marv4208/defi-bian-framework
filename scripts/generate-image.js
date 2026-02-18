#!/usr/bin/env node

/**
 * DIAN Framework - AI Image Generation Script
 * 
 * Usage:
 *   npm run generate-image "article-title"
 *   npm run generate-image -- --batch
 * 
 * Requirements:
 *   - OpenAI API key in .env.local
 *   - npm install openai sharp
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Check for OpenAI package
let OpenAI;
try {
  OpenAI = require('openai');
} catch (e) {
  console.error('❌ OpenAI package not installed. Run: npm install openai sharp');
  process.exit(1);
}

// Load environment variables
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.error('❌ OPENAI_API_KEY not found in .env.local');
  console.error('Add: OPENAI_API_KEY=sk-...');
  process.exit(1);
}

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

// Style guidelines for consistent image generation
const STYLE_GUIDE = `Professional minimal illustration with clean geometric shapes, blue (#14A5E9) and teal (#2E865F) gradient background, abstract technical visualization, modern fintech aesthetic, 16:9 landscape format, no text or logos, no faces`;

// Article prompts mapping
const ARTICLE_PROMPTS = {
  'aave-v4-institutional-features': 'DeFi lending protocol with institutional-grade security features, smart contract visualization',
  'circle-usdc-bank-integration': 'Traditional bank vault connected to blockchain network via bridge, stablecoin flow',
  'uniswap-v4-integration-deep-dive': 'Automated market maker liquidity pools with geometric token swap visualization',
  'zksync-era-layer-2-institutions': 'Layered blockchain architecture showing Layer 2 above Ethereum mainchain, zero-knowledge cryptography elements',
  'makerdao-endgame-strategy-analysis': 'Decentralized governance structure with interconnected protocol modules, DAI stablecoin ecosystem',
  'cross-border-payments-defi': 'World map with glowing blockchain payment routes connecting continents, instant settlements',
  'institutional-defi-custody-solutions': 'Secure digital vault with multi-signature access, cryptographic key management visualization',
  'real-world-asset-tokenization': 'Traditional assets transforming into digital tokens on blockchain',
  'defi-risk-management-banks': 'Risk assessment dashboard with geometric charts showing volatility metrics',
  'smart-contract-auditing-best-practices': 'Code security analysis with vulnerability scanning visualization, geometric shield elements',
};

// Generic prompt generator based on title
function generatePromptFromTitle(title) {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  if (ARTICLE_PROMPTS[slug]) {
    return `${ARTICLE_PROMPTS[slug]}, ${STYLE_GUIDE}`;
  }
  
  // Fallback: generate from title
  return `${title}, ${STYLE_GUIDE}`;
}

// Download image from URL
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

// Optimize image with sharp (if installed)
async function optimizeImage(filepath) {
  try {
    const sharp = require('sharp');
    const buffer = await sharp(filepath)
      .resize(1792, 1024, { fit: 'cover' })
      .jpeg({ quality: 85, progressive: true })
      .toBuffer();
    
    fs.writeFileSync(filepath, buffer);
    console.log('✅ Optimized image');
  } catch (e) {
    console.log('⚠️  Sharp not installed. Skipping optimization.');
    console.log('   Install with: npm install sharp');
  }
}

// Generate single image
async function generateImage(title, slug) {
  console.log(`\n🎨 Generating image for: ${title}`);
  console.log(`📝 Slug: ${slug}`);
  
  const prompt = generatePromptFromTitle(title);
  console.log(`🔮 Prompt: ${prompt.substring(0, 100)}...`);
  
  try {
    console.log('⏳ Calling DALL-E 3 API...');
    
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: prompt,
      n: 1,
      size: '1792x1024',
      quality: 'standard',
      style: 'natural',
    });
    
    const imageUrl = response.data[0].url;
    const filename = `${slug}.jpg`;
    const filepath = path.join(__dirname, '../public/images/blog', filename);
    
    // Ensure directory exists
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    console.log('⬇️  Downloading image...');
    await downloadImage(imageUrl, filepath);
    
    console.log('🔧 Optimizing image...');
    await optimizeImage(filepath);
    
    console.log(`✅ Image saved: ${filename}`);
    console.log(`📸 Path: /images/blog/${filename}`);
    
    return {
      success: true,
      filename,
      path: `/images/blog/${filename}`,
    };
    
  } catch (error) {
    console.error('❌ Error generating image:', error.message);
    return {
      success: false,
      error: error.message,
    };
  }
}

// Batch generation
async function generateBatch() {
  console.log('🚀 Batch Image Generation\n');
  
  const articles = [
    { title: 'Aave V4 Institutional Features', slug: 'aave-v4-institutional-features' },
    { title: 'Circle USDC Bank Integration', slug: 'circle-usdc-bank-integration' },
    { title: 'Uniswap V4 Integration Deep Dive', slug: 'uniswap-v4-integration-deep-dive' },
    { title: 'zkSync Era Layer 2 for Institutions', slug: 'zksync-era-layer-2-institutions' },
    { title: 'MakerDAO Endgame Strategy Analysis', slug: 'makerdao-endgame-strategy-analysis' },
    { title: 'Cross-Border Payments via DeFi', slug: 'cross-border-payments-defi' },
    { title: 'Institutional DeFi Custody Solutions', slug: 'institutional-defi-custody-solutions' },
    { title: 'Real-World Asset Tokenization', slug: 'real-world-asset-tokenization' },
    { title: 'DeFi Risk Management for Banks', slug: 'defi-risk-management-banks' },
    { title: 'Smart Contract Auditing Best Practices', slug: 'smart-contract-auditing-best-practices' },
  ];
  
  const results = [];
  
  for (const article of articles) {
    const result = await generateImage(article.title, article.slug);
    results.push({ ...article, ...result });
    
    // Rate limiting: wait 10 seconds between requests
    if (articles.indexOf(article) < articles.length - 1) {
      console.log('\n⏱️  Waiting 10 seconds (rate limiting)...\n');
      await new Promise(resolve => setTimeout(resolve, 10000));
    }
  }
  
  console.log('\n\n📊 Batch Generation Summary:\n');
  console.table(results.map(r => ({
    title: r.title,
    status: r.success ? '✅' : '❌',
    filename: r.filename || 'N/A',
  })));
  
  const successCount = results.filter(r => r.success).length;
  console.log(`\n✅ Generated ${successCount}/${articles.length} images`);
}

// Main CLI
async function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--batch')) {
    await generateBatch();
  } else if (args.length > 0) {
    const title = args.join(' ');
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    await generateImage(title, slug);
  } else {
    console.log(`
🎨 DIAN Framework - AI Image Generator

Usage:
  npm run generate-image "Article Title"
  npm run generate-image -- --batch

Examples:
  npm run generate-image "Chainlink CCIP Integration"
  npm run generate-image -- --batch

Requirements:
  1. Add OPENAI_API_KEY to .env.local
  2. Install dependencies: npm install openai sharp dotenv

Batch mode generates all 10 predefined article images.
    `);
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { generateImage };
