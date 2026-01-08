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

This is a blank repository. See [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) for the detailed implementation plan.

## Technology Stack (Planned)

- **Framework**: Astro (static site generator optimized for content)
- **Styling**: Tailwind CSS + DaisyUI (utility-first CSS with pre-built components)
- **Content Format**: Markdown files with YAML frontmatter
- **Image Storage**: Local file system (in `/public/images/`)
- **Hosting**: Netlify or Vercel (free tier with auto-deploy from git)

## Site Structure (Planned)

- **Homepage**: Grid/list of recipe cards with links
- **Recipe Pages**: Individual pages with ingredients, instructions, metadata, and image gallery
- **Images**: One or more photos per recipe in a gallery format

## Contributing New Recipes (Future Workflow)

1. Create a new `.md` file in `/src/recipes/`
2. Add recipe images to `/public/images/[recipe-name]/`
3. Commit and push changes to GitHub
4. Site automatically redeploys via hosting platform

## Additional Documentation

- See [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) for complete implementation details
