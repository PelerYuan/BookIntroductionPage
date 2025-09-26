# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based book presentation website (part of a larger personal website project). The site showcases "IT book for classmates" - a computer tutorial book for UNSW Foundation students. The project emphasizes modern design principles using golden ratio layouts, sophisticated color systems, and smooth animations.

## Architecture

### Core Structure
- **Framework**: Astro 4.x with static site generation
- **Styling**: TailwindCSS with custom design system
- **Base URL**: `/book` (configured for subpath deployment)
- **Language**: Primarily Chinese (zh-CN) with English content

### Component Architecture
- `src/layouts/BaseLayout.astro` - Main layout wrapper with global styles
- `src/pages/index.astro` - Single-page site aggregating all components
- `src/components/` - Modular sections:
  - `Hero.astro` - Book cover and intro with golden ratio grid
  - `Details.astro` - Book details sections
  - `Features.astro` - Feature highlights
  - `Reviews.astro` - User testimonials
  - `Roadmap.astro` - Development timeline
  - `Gallery.astro` - Visual showcase
  - `ScrollIndicator.astro` - Page navigation aid
  - `ReadersMarquee.astro` - Animated reader testimonials

### Design System
The project uses a sophisticated color system in `tailwind.config.mjs`:
- **Brand colors**: Blue-based primary palette
- **Warm colors**: Orange-based accent system
- **Creative colors**: Purple-based highlight system
- **Success colors**: Green-based completion states
- **Emotion mapping**: Specific colors for trust, passion, wisdom, growth, energy, calm

### Layout Philosophy
- **Golden ratio grids**: `grid-cols-phi` (1:1.618 ratio)
- **Phi-based spacing**: Custom spacing units based on golden ratio
- **Organic layouts**: Non-rigid, flowing design elements

## Development Commands

### Essential Commands
```bash
npm run dev          # Start development server on port 3001
npm run build        # Build for production
npm run preview      # Preview production build
npm run format       # Format code with Prettier (includes Astro plugin)
```

### Development Notes
- The dev server runs on port 3001 (not default 3000) to avoid conflicts
- Site is configured with base path `/book` for deployment as subdirectory
- Uses Prettier with Astro plugin for code formatting

## File Organization

### Key Directories
- `src/components/` - Reusable Astro components
- `src/layouts/` - Layout templates
- `src/pages/` - Route pages (currently just index)
- `src/styles/` - Global CSS
- `src/js/` - Client-side JavaScript utilities
- `public/` - Static assets
- `.astro/` - Astro build cache and settings

### Critical Files
- `astro.config.mjs` - Astro configuration with TailwindCSS integration
- `tailwind.config.mjs` - Comprehensive design system configuration
- `src/styles/global.css` - Global styles and CSS utilities
- `src/js/scroll-helper.js` - Scroll-based interactions

## Content Management

The site content is primarily defined in `src/pages/index.astro` with hardcoded data structures for:
- Book metadata (title, subtitle, description, cover)
- Details sections array
- Reviews/testimonials array
- Feature descriptions

When modifying content, update the corresponding data structures in the main page component.