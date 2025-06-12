// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type_slug: string;
  created_at: string;
  modified_at: string;
}

// Case Study interface
export interface CaseStudy extends CosmicObject {
  type_slug: 'case-studies';
  metadata: {
    project_title: string;
    client_name: string;
    project_overview: string;
    challenge?: string;
    solution?: string;
    results?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    project_gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    related_service?: Service;
    project_date?: string;
  };
}

// Team Member interface
export interface TeamMember extends CosmicObject {
  type_slug: 'team-members';
  metadata: {
    full_name: string;
    job_title: string;
    bio?: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    } | null;
    email?: string;
    linkedin_url?: string;
    years_experience?: number;
  };
}

// Blog Post interface
export interface BlogPost extends CosmicObject {
  type_slug: 'blog-posts';
  metadata: {
    title: string;
    excerpt?: string;
    content: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    author?: TeamMember;
    publication_date?: string;
    tags?: string[];
  };
}

// Service interface
export interface Service extends CosmicObject {
  type_slug: 'services';
  metadata: {
    service_name: string;
    short_description: string;
    full_description?: string;
    service_icon?: {
      url: string;
      imgix_url: string;
    };
    starting_price?: string;
    key_features?: string[];
  };
}

// Testimonial interface
export interface Testimonial extends CosmicObject {
  type_slug: 'testimonials';
  metadata: {
    client_name: string;
    client_title?: string;
    company_name: string;
    testimonial_text: string;
    rating?: {
      key: string;
      value: string;
    };
    client_photo?: {
      url: string;
      imgix_url: string;
    };
    featured?: boolean;
  };
}

// API Response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards
export function isCaseStudy(obj: CosmicObject): obj is CaseStudy {
  return obj.type_slug === 'case-studies';
}

export function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type_slug === 'team-members';
}

export function isBlogPost(obj: CosmicObject): obj is BlogPost {
  return obj.type_slug === 'blog-posts';
}

export function isService(obj: CosmicObject): obj is Service {
  return obj.type_slug === 'services';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type_slug === 'testimonials';
}