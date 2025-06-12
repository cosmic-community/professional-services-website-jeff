<!-- README_START -->
# Professional Services Website

A modern, professional services website built with Next.js 15 and [Cosmic](https://www.cosmicjs.com) CMS. This responsive website showcases services, case studies, team members, blog posts, and client testimonials with a clean, modern design.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 📱 Mobile-first responsive layout
- 🚀 Fast performance with Next.js 15 App Router
- 📝 Dynamic content management with Cosmic CMS
- 🔍 SEO optimized pages
- 📊 Case studies showcase with detailed project information
- 👥 Team member profiles with bios and social links
- 📰 Blog with author attribution and tagging system
- 💬 Client testimonials with ratings
- 💼 Services portfolio with detailed descriptions
- 🖼️ Optimized image handling with imgix integration

## Clone this Bucket

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket to get started instantly:

[![Clone this Bucket](https://img.shields.io/badge/Clone%20this%20Bucket-4F46E5?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=my-ai-project-production)

## Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [Cosmic](https://www.cosmicjs.com) - Headless CMS for content management
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Bun](https://bun.sh/) - Fast JavaScript runtime and package manager

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine
- A [Cosmic](https://www.cosmicjs.com) account and bucket

### Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd professional-services-website
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Create environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Update your environment variables in `.env.local`:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

5. Run the development server:
   ```bash
   bun dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) to view the website.

## Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Case Studies with Related Services
```typescript
const { objects: caseStudies } = await cosmic.objects
  .find({ type: 'case-studies' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Includes related service data
```

### Fetching Blog Posts with Authors
```typescript
const { objects: posts } = await cosmic.objects
  .find({ type: 'blog-posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Includes author information
```

## Cosmic CMS Integration

This website integrates with [Cosmic](https://www.cosmicjs.com) to manage:

- **Services** - Business service offerings with descriptions and pricing
- **Case Studies** - Project showcases with challenges, solutions, and results
- **Team Members** - Staff profiles with photos, bios, and experience
- **Blog Posts** - Articles with author attribution and categorization
- **Testimonials** - Client feedback with ratings and photos

Visit the [Cosmic docs](https://www.cosmicjs.com/docs) to learn more about content modeling and API usage.

## Deployment Options

### Vercel (Recommended for Next.js)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy automatically

### Netlify

1. Build the application: `bun run build`
2. Deploy the `out` folder to [Netlify](https://netlify.com)
3. Configure environment variables in Netlify dashboard

### Environment Variables for Production

Set these environment variables in your hosting platform:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```
<!-- README_END -->