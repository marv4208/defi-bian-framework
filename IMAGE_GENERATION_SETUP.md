# Image Generation Setup Guide

## Quick Start (5 Minutes)

### Step 1: Install Dependencies

```bash
cd site
npm install openai sharp dotenv
```

**Packages:**
- `openai` - Official OpenAI API client
- `sharp` - Image optimization (optional but recommended)
- `dotenv` - Environment variable loading

### Step 2: Get OpenAI API Key

1. Go to: https://platform.openai.com/api-keys
2. Click "Create new secret key"
3. Copy the key (starts with `sk-...`)
4. Store securely (you won't see it again!)

### Step 3: Configure Environment

Create `.env.local` in the `site/` directory:

```bash
# OpenAI API Configuration
OPENAI_API_KEY=sk-proj-your-key-here

# Optional: Model selection (default: dall-e-3)
DALLE_MODEL=dall-e-3

# Optional: Image quality (standard | hd)
DALLE_QUALITY=standard

# Optional: Image size (1024x1024 | 1792x1024 | 1024x1792)
DALLE_SIZE=1792x1024
```

**Security:**
- ✅ `.env.local` is in `.gitignore` (not committed)
- ❌ Never commit API keys to git
- ✅ Use separate keys for dev/prod

---

## Usage

### Generate Single Image

```bash
npm run generate-image "Article Title Here"
```

**Example:**
```bash
npm run generate-image "Chainlink CCIP Integration Guide"
```

**Output:**
```
🎨 Generating image for: Chainlink CCIP Integration Guide
📝 Slug: chainlink-ccip-integration-guide
⏳ Calling DALL-E 3 API...
⬇️  Downloading image...
🔧 Optimizing image...
✅ Image saved: chainlink-ccip-integration-guide.jpg
📸 Path: /images/blog/chainlink-ccip-integration-guide.jpg
```

### Generate All 10 Articles (Batch)

```bash
npm run generate-image -- --batch
```

**What it does:**
1. Generates 10 predefined article images
2. Downloads and optimizes each
3. Saves to `public/images/blog/`
4. Takes ~2 minutes total (10s delay between requests)

**Cost:** ~$0.40 total (10 images × $0.04 each, DALL-E 3 standard quality)

### Update MDX Files Automatically

```bash
npm run update-mdx-images
```

**What it does:**
1. Scans `content/blog/` for `.mdx` files
2. Matches with images in `public/images/blog/`
3. Adds `coverImage:` to frontmatter if missing
4. Skips files that already have images

**Example output:**
```
🔄 Updating MDX files with cover images

Found 10 MDX files and 10 images

✅ Updated aave-v4-institutional-features.mdx
✅ Updated circle-usdc-bank-integration.mdx
⚠️  uniswap-v4-hooks.mdx already has coverImage

✅ Updated 8/10 MDX files
```

### One-Command Workflow

```bash
npm run batch-images
```

**Runs:**
1. `npm run generate-image -- --batch` (generate all images)
2. `npm run update-mdx-images` (update MDX files)

**Perfect for:** Initial setup or bulk regeneration

---

## Scripts Overview

| Script | Purpose | Usage |
|--------|---------|-------|
| `generate-image` | Generate single image | `npm run generate-image "Title"` |
| `update-mdx-images` | Update MDX frontmatter | `npm run update-mdx-images` |
| `batch-images` | Generate all + update | `npm run batch-images` |

---

## Customization

### Add Custom Article Prompts

Edit `scripts/generate-image.js`:

```javascript
const ARTICLE_PROMPTS = {
  'your-article-slug': 'Your custom prompt description',
  'chainlink-ccip': 'Cross-chain messaging infrastructure with geometric bridges',
  // Add more...
};
```

### Change Style Guidelines

Edit the `STYLE_GUIDE` constant:

```javascript
const STYLE_GUIDE = `
  Your custom style description here.
  Colors, aesthetic, technical requirements, etc.
`;
```

### Adjust Image Quality

In `.env.local`:
```bash
# HD quality (better, costs $0.08 per image)
DALLE_QUALITY=hd

# Standard quality (good enough, $0.04 per image)
DALLE_QUALITY=standard
```

---

## Cost Breakdown

### DALL-E 3 Pricing (as of Feb 2026)

| Quality | Size | Cost per Image |
|---------|------|----------------|
| Standard | 1024×1024 | $0.040 |
| Standard | 1792×1024 | $0.040 |
| HD | 1024×1024 | $0.080 |
| HD | 1792×1024 | $0.080 |

**Monthly Estimates:**
- 22 articles/month × $0.04 = $0.88/month (standard)
- 22 articles/month × $0.08 = $1.76/month (HD)

**Initial batch (10 images):** $0.40 (standard) or $0.80 (HD)

---

## Troubleshooting

### Error: "OPENAI_API_KEY not found"

**Solution:**
1. Check `.env.local` exists in `site/` directory
2. Verify key format: `OPENAI_API_KEY=sk-proj-...`
3. Restart terminal/dev server

### Error: "OpenAI package not installed"

**Solution:**
```bash
cd site
npm install openai sharp dotenv
```

### Error: "Rate limit exceeded"

**Solution:**
- Wait 60 seconds
- Batch script has 10s delays built-in
- For faster generation, increase OpenAI tier

### Images not appearing on site

**Checklist:**
1. Images in `public/images/blog/`? ✓
2. MDX has `coverImage:` field? ✓
3. Path format correct? `/images/blog/filename.jpg` ✓
4. Restart dev server? `npm run dev`

### Images too large (>200KB)

**Solution:**
```bash
# Install sharp (if not already)
npm install sharp

# Re-run generation (auto-optimizes)
npm run generate-image "Title"
```

Or use TinyPNG: https://tinypng.com

---

## Manual Workflow (No API)

If you prefer manual generation:

1. Open ChatGPT Plus: https://chat.openai.com
2. Use prompts from `prompts/dalle-image-prompts.md`
3. Download images manually
4. Save to `public/images/blog/`
5. Run `npm run update-mdx-images`

**Pros:** Visual review before saving  
**Cons:** More manual work

---

## Advanced: CI/CD Integration

### GitHub Actions (Optional)

Create `.github/workflows/generate-images.yml`:

```yaml
name: Generate Blog Images

on:
  workflow_dispatch:
    inputs:
      article_title:
        description: 'Article title'
        required: true

jobs:
  generate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install
        working-directory: site
      - run: npm run generate-image "${{ github.event.inputs.article_title }}"
        working-directory: site
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
      - uses: stefanzweifel/git-auto-commit-action@v5
        with:
          commit_message: "Add generated image for ${{ github.event.inputs.article_title }}"
```

**Setup:**
1. Add `OPENAI_API_KEY` to GitHub Secrets
2. Trigger manually from Actions tab
3. Image auto-committed to repo

---

## Security Best Practices

### API Key Management

✅ **Do:**
- Store in `.env.local` (not committed)
- Use separate keys per environment
- Rotate keys every 90 days
- Set usage limits in OpenAI dashboard

❌ **Don't:**
- Commit keys to git
- Share keys in Slack/email
- Use production keys in dev
- Hardcode in scripts

### Rate Limiting

- Default: 10 seconds between batch requests
- Adjust in `generate-image.js` if needed
- Monitor usage: https://platform.openai.com/usage

---

## Monitoring & Analytics

### Track Generation

Add to script (optional):

```javascript
// Log to file
fs.appendFileSync('image-generation.log', 
  `${new Date().toISOString()} - ${slug} - ${result.success}\n`
);
```

### OpenAI Dashboard

Monitor:
- Daily usage
- Cost per request
- Rate limit hits
- Model performance

Dashboard: https://platform.openai.com/usage

---

## FAQ

**Q: Can I use DALL-E 2 instead?**  
A: Yes, change `model: 'dall-e-2'` in script. Cheaper ($0.02) but lower quality.

**Q: Can I use Midjourney?**  
A: Midjourney doesn't have API yet. Use manual workflow with prompts.

**Q: Can I use Stable Diffusion?**  
A: Yes! Replace OpenAI client with Stability AI or local Stable Diffusion. Different setup required.

**Q: How do I regenerate a single image?**  
A: Delete from `public/images/blog/`, remove `coverImage:` from MDX, re-run script.

**Q: Can I customize prompts per category?**  
A: Yes! Edit `ARTICLE_PROMPTS` object to add category-specific styles.

---

## Next Steps

1. ✅ Install dependencies: `npm install openai sharp dotenv`
2. ✅ Add API key to `.env.local`
3. ✅ Run batch generation: `npm run batch-images`
4. ✅ Verify images on dev server: `npm run dev`
5. ✅ Commit and deploy: `git add . && git commit && git push`

**You're ready to automate blog image generation!** 🎨🚀
