#!/usr/bin/env node

/**
 * DIAN Framework - Gemini Image Generation (Imagen 3)
 * 
 * Usage:
 *   npm run generate-image "article-title"
 *   npm run generate-image -- --batch
 * 
 * Requirements:
 *   - Google Cloud project with Vertex AI API enabled
 *   - npm install @google-cloud/vertexai sharp dotenv
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Check for Google Vertex AI package
let VertexAI;
try {
  VertexAI = require('@google-cloud/vertexai').VertexAI;
} catch (e) {
  console.error('❌ Google Vertex AI package not installed. Run: npm install @google-cloud/vertexai sharp dotenv');
  process.exit(1);
}

// Load environment variables
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const PROJECT_ID = process.env.GOOGLE_CLOUD_PROJECT;
const LOCATION = process.env.GOOGLE_CLOUD_LOCATION || 'us-central1';

if (!PROJECT_ID) {
  console.error('❌ GOOGLE_CLOUD_PROJECT not found in .env.local');
  console.error('Add: GOOGLE_CLOUD_PROJECT=your-project-id');
  process.exit(1);
}

// Initialize Vertex AI
const vertexAI = new VertexAI({
  project: PROJECT_ID,
  location: LOCATION,
});

// Style guidelines
const STYLE_GUIDE = `Professional minimal illustration with clean geometric shapes, blue (#14A5E9) and teal (#2E865F) gradient background, abstract technical visualization, modern fintech aesthetic, landscape format, no text or logos, no faces, high quality`;

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

function generatePromptFromTitle(title) {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  if (ARTICLE_PROMPTS[slug]) {
    return `${ARTICLE_PROMPTS[slug]}, ${STYLE_GUIDE}`;
  }
  
  return `${title}, ${STYLE_GUIDE}`;
}

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
  }
}

async function generateImage(title, slug) {
  console.log(`\n🎨 Generating image for: ${title}`);
  console.log(`📝 Slug: ${slug}`);
  
  const prompt = generatePromptFromTitle(title);
  console.log(`🔮 Prompt: ${prompt.substring(0, 100)}...`);
  
  try {
    console.log('⏳ Calling Google Imagen 3 API...');
    
    const imageGenerationModel = vertexAI.preview.getGenerativeModel({
      model: 'imagen-3.0-generate-001',
    });

    const result = await imageGenerationModel.generateImages({
      prompt: prompt,
      numberOfImages: 1,
      aspectRatio: '16:9',
      safetySettings: [{
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_ONLY_HIGH',
      }],
    });
    
    const generatedImages = result.response.predictions;
    if (!generatedImages || generatedImages.length === 0) {
      throw new Error('No images generated');
    }

    const imageData = generatedImages[0].bytesBase64Encoded;
    const filename = `${slug}.jpg`;
    const filepath = path.join(__dirname, '../public/images/blog', filename);
    
    // Ensure directory exists
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    console.log('💾 Saving image...');
    const buffer = Buffer.from(imageData, 'base64');
    fs.writeFileSync(filepath, buffer);
    
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

async function generateBatch() {
  console.log('🚀 Batch Image Generation (Google Gemini)\n');
  
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
    
    // Rate limiting: wait 5 seconds between requests
    if (articles.indexOf(article) < articles.length - 1) {
      console.log('\n⏱️  Waiting 5 seconds (rate limiting)...\n');
      await new Promise(resolve => setTimeout(resolve, 5000));
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
🎨 DIAN Framework - Gemini Image Generator

Usage:
  npm run generate-image "Article Title"
  npm run generate-image -- --batch

Examples:
  npm run generate-image "Chainlink CCIP Integration"
  npm run generate-image -- --batch

Requirements:
  1. Google Cloud project with Vertex AI API enabled
  2. Add GOOGLE_CLOUD_PROJECT to .env.local
  3. Install: npm install @google-cloud/vertexai sharp dotenv

Setup Guide: https://cloud.google.com/vertex-ai/docs/generative-ai/image/generate-images
    `);
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { generateImage };
