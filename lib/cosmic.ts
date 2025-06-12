import { createBucketClient } from '@cosmicjs/sdk'
import { CaseStudy, TeamMember, BlogPost, Service, Testimonial, CosmicResponse } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Fetch all services
export async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Service[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    console.error('Error fetching services:', error)
    throw new Error('Failed to fetch services')
  }
}

// Fetch single service by slug
export async function getService(slug: string): Promise<Service | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'services', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object as Service
  } catch (error) {
    if (error.status === 404) {
      return null
    }
    console.error('Error fetching service:', error)
    throw new Error('Failed to fetch service')
  }
}

// Fetch all case studies
export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'case-studies' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as CaseStudy[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    console.error('Error fetching case studies:', error)
    throw new Error('Failed to fetch case studies')
  }
}

// Fetch single case study by slug
export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'case-studies', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object as CaseStudy
  } catch (error) {
    if (error.status === 404) {
      return null
    }
    console.error('Error fetching case study:', error)
    throw new Error('Failed to fetch case study')
  }
}

// Fetch all team members
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as TeamMember[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    console.error('Error fetching team members:', error)
    throw new Error('Failed to fetch team members')
  }
}

// Fetch single team member by slug
export async function getTeamMember(slug: string): Promise<TeamMember | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'team-members', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object as TeamMember
  } catch (error) {
    if (error.status === 404) {
      return null
    }
    console.error('Error fetching team member:', error)
    throw new Error('Failed to fetch team member')
  }
}

// Fetch all blog posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'blog-posts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as BlogPost[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    console.error('Error fetching blog posts:', error)
    throw new Error('Failed to fetch blog posts')
  }
}

// Fetch single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'blog-posts', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object as BlogPost
  } catch (error) {
    if (error.status === 404) {
      return null
    }
    console.error('Error fetching blog post:', error)
    throw new Error('Failed to fetch blog post')
  }
}

// Fetch all testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Testimonial[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    console.error('Error fetching testimonials:', error)
    throw new Error('Failed to fetch testimonials')
  }
}

// Fetch featured testimonials
export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'testimonials',
        'metadata.featured': true 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Testimonial[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    console.error('Error fetching featured testimonials:', error)
    throw new Error('Failed to fetch featured testimonials')
  }
}