import { getServices, getCaseStudies, getTeamMembers, getBlogPosts, getFeaturedTestimonials } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import TeamSection from '@/components/TeamSection'
import BlogSection from '@/components/BlogSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'

export default async function HomePage() {
  const [services, caseStudies, teamMembers, blogPosts, testimonials] = await Promise.all([
    getServices(),
    getCaseStudies(),
    getTeamMembers(),
    getBlogPosts(),
    getFeaturedTestimonials(),
  ])

  return (
    <>
      <Hero />
      <ServicesSection services={services} />
      <CaseStudiesSection caseStudies={caseStudies} />
      <TestimonialsSection testimonials={testimonials} />
      <TeamSection teamMembers={teamMembers} />
      <BlogSection blogPosts={blogPosts} />
      <CTASection />
    </>
  )
}