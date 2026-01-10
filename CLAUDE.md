# CLAUDE.md

This document provides context for AI coding assistants working on this project.

## Project Overview

This is a static website for hosting personal family recipes. The site is designed to be shared with family and friends via a public URL. There is no database connection or backend - all content is managed through source code updates.

## Key Constraints

- **Static site only** - No server-side processing, no APIs, no user input beyond navigation
- **No database** - Content stored in the file system (Markdown files)
- **Source-controlled updates** - The only way to add/update recipes is to modify source code and redeploy
- **Free hosting** - Should be deployable to free hosting platforms
- **Lightweight** - Minimal dependencies and fast load times
- **Modern UI** - Should look polished and professional using pre-built UI components

## Current State

The site is fully implemented and functional with 5 example recipes. It features a book-themed design with a dark mode aesthetic (black pages with white text) and a table of contents style homepage.

## Technology Stack

- **Framework**: Astro v5.16.7 (static site generator optimized for content)
- **Styling**: Tailwind CSS v3.4.19 + DaisyUI v5.5.14 (utility-first CSS with pre-built components)
- **Content Format**: Markdown files with YAML frontmatter in Astro Content Collections
- **Image Storage**: Local file system in `/public/images/[recipe-name]/`
- **Hosting**: Configured for Netlify deployment (site URL: jaffe-family-recipes.netlify.app)

## Site Structure

### Homepage ([index.astro](src/pages/index.astro))
- **Book-style layout**: Two-page spread design with left page showing title/intro and right page showing table of contents
- **Recipe search**: Client-side search functionality with debouncing that filters by title and tags
- **Recipe cards**: Compact cards showing recipe number, title, blurb, prep time, servings, difficulty, and tags
- **Dark theme**: Black background with white text, brown/gold accents, serif fonts

### Recipe Pages ([recipes/[slug].astro](src/pages/recipes/[slug].astro))
- **Single page layout**: Clean book-page design with recipe header, metadata, images, ingredients, and instructions
- **Dynamic routing**: Uses Astro's dynamic routing with content collections
- **Recipe layout**: Three-column grid on desktop (ingredients sidebar + instructions)
- **Image gallery**: Optional image display with support for multiple images
- **Metadata display**: Prep time, cook time, servings, and difficulty badges

### Components
- [Header.astro](src/components/Header.astro) - Site header with home link
- [RecipeCard.astro](src/components/RecipeCard.astro) - Compact recipe cards for homepage TOC
- [RecipeGallery.astro](src/components/RecipeGallery.astro) - Image gallery for recipe pages
- [IngredientList.astro](src/components/IngredientList.astro) - Formatted ingredient lists
- [MetadataDisplay.astro](src/components/MetadataDisplay.astro) - Recipe metadata badges

### Layouts
- [BaseLayout.astro](src/layouts/BaseLayout.astro) - Base HTML structure with SEO meta tags
- [RecipeLayout.astro](src/layouts/RecipeLayout.astro) - Recipe page layout template

## Content Schema

Recipes are defined in [src/content/config.ts](src/content/config.ts) with the following frontmatter fields:

```yaml
title: string           # Recipe name
description: string     # Full description (for SEO and recipe pages)
blurb: string          # Short 1-2 line description (for homepage cards)
prepTime: string       # e.g., "30 minutes"
cookTime: string       # e.g., "1 to 6 hours"
totalTime?: string     # Optional total time
servings: string       # e.g., "4-6"
difficulty?: string    # "Easy" | "Medium" | "Hard"
images?: string[]      # Array of image paths (e.g., ["/images/recipe-name/photo.jpg"])
ingredients: string[]  # List of ingredients
tags?: string[]        # Optional tags for search/categorization
```

## Current Recipes

1. [Brisket](src/content/recipes/brisket.md) - Jewish Braised Brisket (note: currently has chili content, needs updating)
2. [Chili](src/content/recipes/chili.md) - Turkey chili
3. [Guacamole](src/content/recipes/guacamole.md)
4. [Roasted Fall Root Vegetables](src/content/recipes/roasted-fall-root-vegetables.md)
5. [Turkey Meatballs](src/content/recipes/turkey-meatballs.md)

## Adding New Recipes

1. Create a new `.md` file in [src/content/recipes/](src/content/recipes/)
2. Add YAML frontmatter with required fields (title, description, blurb, prepTime, cookTime, servings, ingredients)
3. Write instructions in Markdown below the frontmatter
4. Optionally add recipe images to `/public/images/[recipe-name]/` and reference in frontmatter
5. Commit and push changes to GitHub
6. Site automatically rebuilds and redeploys via Netlify

## Design Theme

The site uses a unique **dark book aesthetic**:
- Black pages (`#000000`) with white text (`#ffffff`)
- Warm brown/gold accents for primary actions
- Serif fonts (Crimson Pro) for body text
- Sans-serif fonts (Inter) for UI elements
- Book-like shadows and page edge effects
- Custom Tailwind colors: `book-bg`, `page`, `page-dark`, `ink`, `ink-light`
