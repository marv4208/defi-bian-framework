#!/usr/bin/env node

/**
 * Update MDX frontmatter with generated cover images
 * 
 * Usage:
 *   npm run update-mdx-images
 */

const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../content/blog');
const IMAGES_DIR = path.join(__dirname, '../public/images/blog');

function updateMDXFile(filepath, imagePath) {
  const content = fs.readFileSync(filepath, 'utf8');
  
  // Check if coverImage already exists
  if (content.includes('coverImage:')) {
    console.log(`⚠️  ${path.basename(filepath)} already has coverImage`);
    return false;
  }
  
  // Find the frontmatter section
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) {
    console.log(`❌ No frontmatter found in ${path.basename(filepath)}`);
    return false;
  }
  
  const frontmatter = frontmatterMatch[1];
  const updatedFrontmatter = frontmatter + `\ncoverImage: "${imagePath}"`;
  const updatedContent = content.replace(/^---\n[\s\S]*?\n---/, `---\n${updatedFrontmatter}\n---`);
  
  fs.writeFileSync(filepath, updatedContent);
  console.log(`✅ Updated ${path.basename(filepath)}`);
  return true;
}

function main() {
  console.log('🔄 Updating MDX files with cover images\n');
  
  // Get all MDX files
  if (!fs.existsSync(BLOG_DIR)) {
    console.error('❌ Blog directory not found:', BLOG_DIR);
    return;
  }
  
  const mdxFiles = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));
  
  if (mdxFiles.length === 0) {
    console.log('⚠️  No MDX files found');
    return;
  }
  
  // Get all generated images
  const images = fs.existsSync(IMAGES_DIR) 
    ? fs.readdirSync(IMAGES_DIR).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
    : [];
  
  if (images.length === 0) {
    console.log('⚠️  No images found in', IMAGES_DIR);
    console.log('Run: npm run generate-image -- --batch');
    return;
  }
  
  console.log(`Found ${mdxFiles.length} MDX files and ${images.length} images\n`);
  
  let updatedCount = 0;
  
  for (const mdxFile of mdxFiles) {
    const slug = path.basename(mdxFile, '.mdx');
    
    // Try to find matching image
    const matchingImage = images.find(img => {
      const imgSlug = path.basename(img, path.extname(img));
      return imgSlug === slug;
    });
    
    if (matchingImage) {
      const imagePath = `/images/blog/${matchingImage}`;
      const mdxPath = path.join(BLOG_DIR, mdxFile);
      
      if (updateMDXFile(mdxPath, imagePath)) {
        updatedCount++;
      }
    } else {
      console.log(`⚠️  No image found for ${mdxFile}`);
    }
  }
  
  console.log(`\n✅ Updated ${updatedCount}/${mdxFiles.length} MDX files`);
}

if (require.main === module) {
  main();
}

module.exports = { updateMDXFile };
