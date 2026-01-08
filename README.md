# Jaffe Family Recipes

A modern, static website for hosting and sharing family recipes. Built with Astro, styled with Tailwind CSS and DaisyUI, and designed to look like a beautiful recipe book.

## Features

- Static site generation (no backend required)
- Beautiful book-inspired design
- Responsive layout (mobile, tablet, desktop)
- Recipe content stored in Markdown files
- Image galleries for recipe photos
- SEO-optimized with Open Graph tags
- Fast loading times with lazy-loaded images
- Auto-deployment via Netlify

## Tech Stack

- **Framework**: [Astro](https://astro.build) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com) + [DaisyUI](https://daisyui.com)
- **Content**: Markdown files with YAML frontmatter
- **Hosting**: Netlify (free tier)

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- Git for version control

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd jaffe-family-recipes
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:4321`

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |

## Adding New Recipes

### Step 1: Create a Recipe Markdown File

Create a new file in `/src/content/recipes/` with a kebab-case filename (e.g., `chocolate-chip-cookies.md`):

```markdown
---
title: "Grandma's Chocolate Chip Cookies"
description: "The best chocolate chip cookies you'll ever taste"
prepTime: "15 minutes"
cookTime: "12 minutes"
totalTime: "27 minutes"
servings: 24
difficulty: "Easy"
images:
  - "/images/chocolate-chip-cookies/hero.jpg"
  - "/images/chocolate-chip-cookies/baked.jpg"
ingredients:
  - "2 cups all-purpose flour"
  - "1 tsp baking soda"
  - "1 cup butter, softened"
  - "2 large eggs"
  - "2 cups chocolate chips"
tags:
  - "dessert"
  - "cookies"
---

## Instructions

1. Preheat oven to 375°F (190°C).
2. Mix dry ingredients in a bowl.
3. Cream butter and sugars together.
4. Add eggs and vanilla.
5. Combine with dry ingredients.
6. Fold in chocolate chips.
7. Bake for 10-12 minutes.

## Notes

- For chewier cookies, slightly underbake them
- Can be frozen for up to 3 months
```

### Step 2: Add Recipe Images

1. Create a directory in `/public/images/` matching your recipe name:
   ```bash
   mkdir -p public/images/chocolate-chip-cookies
   ```

2. Add optimized images to this directory (recommended: max 1920px width, compressed)

3. Update the `images` array in your recipe's frontmatter to match the file paths

### Step 3: Deploy

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Add new recipe: Chocolate Chip Cookies"
   git push
   ```

2. Netlify will automatically build and deploy your changes (takes ~1-2 minutes)

## Image Optimization Tips

Before adding images to the repository:

- **Resize**: Scale images to 1920px max width
- **Compress**: Use tools like [TinyPNG](https://tinypng.com), [Squoosh](https://squoosh.app), or ImageOptim
- **Format**: JPEG for photos, PNG for graphics with transparency
- **File size**: Aim for under 500KB per image

## Project Structure

```
jaffe-family-recipes/
├── public/
│   ├── images/              # Recipe photos organized by recipe
│   │   ├── recipe-1/
│   │   └── recipe-2/
│   └── favicon.svg
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.astro
│   │   ├── RecipeCard.astro
│   │   ├── RecipeGallery.astro
│   │   ├── IngredientList.astro
│   │   └── MetadataDisplay.astro
│   ├── content/
│   │   └── recipes/         # Recipe markdown files
│   │       ├── config.ts    # Content collection schema
│   │       └── *.md         # Individual recipes
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── RecipeLayout.astro
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   └── recipes/
│   │       └── [slug].astro # Dynamic recipe pages
│   └── styles/
│       └── global.css       # Global styles & Tailwind imports
├── astro.config.mjs
├── netlify.toml             # Netlify deployment config
├── package.json
└── tailwind.config.cjs
```

## Deployment to Netlify

### Initial Setup

1. Push your code to GitHub
2. Log in to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to your GitHub repository
5. Build settings are auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Automatic Deployments

After initial setup, every push to your `main` branch will automatically trigger a new deployment.

### Custom Domain (Optional)

1. In Netlify dashboard, go to Site settings → Domain management
2. Add your custom domain
3. Follow DNS configuration instructions

## Customization

### Change Site Colors

Edit the theme in [src/styles/global.css](src/styles/global.css):

```css
@theme {
  --color-page: /* paper background color */;
  --color-ink: /* text color */;
  --color-primary: /* accent color */;
}
```

### Modify Layout

- Homepage: [src/pages/index.astro](src/pages/index.astro)
- Recipe pages: [src/layouts/RecipeLayout.astro](src/layouts/RecipeLayout.astro)
- Header/navigation: [src/components/Header.astro](src/components/Header.astro)

## Troubleshooting

### Images not showing up

- Verify image paths in frontmatter match actual file locations
- Paths should be relative to `/public/` (e.g., `/images/recipe-name/photo.jpg`)
- Check that images are committed to git

### Build fails on Netlify

- Check build logs in Netlify dashboard
- Verify all dependencies are in `package.json`
- Ensure recipe markdown files have valid YAML frontmatter

### Recipe not appearing on site

- Verify the markdown file is in `/src/content/recipes/`
- Check that frontmatter matches the schema in `src/content/config.ts`
- Rebuild the site (`npm run build`)

## Contributing

This is a personal family recipe site. If you're a family member:

1. Clone the repository
2. Create a branch for your recipe
3. Add your recipe following the guide above
4. Create a pull request
5. After review, it will be merged and auto-deployed

## License

Private family project - not for public use or distribution.

## Questions?

Contact the repository maintainer or check out:
- [Astro documentation](https://docs.astro.build)
- [Tailwind CSS docs](https://tailwindcss.com/docs)
- [Netlify docs](https://docs.netlify.com)
