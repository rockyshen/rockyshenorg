# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development

```bash
pnpm install
pnpm run docs:dev      # Start dev server
pnpm run docs:build   # Build for production
pnpm run docs:preview # Preview production build
```

## Deployment

This blog is deployed on a **Tencent Cloud server** with Nginx.

### Deploy Steps

```bash
# 1. Build the project
pnpm run docs:build

# 2. Done! Build output is in docs/.vitepress/dist/
# Nginx is already configured to serve this directory
```

That's it! After running `pnpm run docs:build`, the site is immediately accessible via Nginx.

## Architecture

This is a personal blog built with **VitePress** (Vue 3 + Markdown-based SSG). The site uses a custom theme that extends VitePress's default theme.

### Structure

```
docs/
├── .vitepress/          # VitePress config and theme
│   ├── config.ts        # Main VitePress configuration (site metadata, head tags, theme)
│   ├── genFeed.ts       # RSS feed generator (latest 15 posts)
│   ├── markdownPlugin.ts# Custom markdown-it plugin for image processing
│   └── theme/
│       ├── index.ts     # Theme entry point (Sentry setup, global components)
│       ├── style.css    # Global styles (CSS variables, dark mode, custom components)
│       ├── configProvider.ts  # Vue context providers for page/category state
│       ├── utils/       # Helper functions (date formatting, image URL transformation)
│       └── components/  # Custom Vue components
│           ├── Layout.vue         # Main layout wrapper (image lazy loading, favicon injection, zoom)
│           ├── ArticleList.vue    # Home page article list
│           ├── ArticleMeta.vue    # Article metadata (date, categories, tags)
│           ├── CategoryNav.vue    # Category navigation
│           └── ...
├── *.md                   # Blog posts (frontmatter: title, date, cover, categories, tags)
└── index.md               # Home page entry
```

### Key Features

- **Custom image pipeline**: Images are processed with blur preview + lazy loading via OSS URL params (`resize,w_800&blur,r_10,s_10`)
- **RSS feed**: Auto-generated at build time (`/rss.xml`)
- **Sentry integration**: Error tracking and browser tracing configured in `theme/index.ts`
- **Dark mode**: Class-based toggle via `localStorage.theme`
- **Custom components**: Registered globally (`ArticleComment`, `TweetCard`)

### Configuration

- **Tailwind CSS**: Used for utility classes, configured in `postcss.config.js`
- **Prettier**: Code formatting with Tailwind plugin
- **Nginx**: Serves `docs/.vitepress/dist/` directly on Tencent Cloud server

## Content Creation

Blog posts are Markdown files in `docs/` with frontmatter:

```yaml
---
title: Post Title
date: "YYYY-MM-DD"
cover: https://...
categories:
  - category-name
tags:
  - tag-name
---
```
