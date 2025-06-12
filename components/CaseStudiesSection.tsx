import Link from 'next/link'
import { CaseStudy } from '@/types'

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[]
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  if (!caseStudies || caseStudies.length === 0) {
    return null
  }

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses achieve their goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.slice(0, 2).map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              {caseStudy.metadata.featured_image && (
                <div className="aspect-video">
                  <img
                    src={`${caseStudy.metadata.featured_image.imgix_url}?w=600&h=300&fit=crop&auto=format,compress`}
                    alt={caseStudy.metadata.project_title}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {caseStudy.metadata.related_service?.metadata?.service_name || 'Case Study'}
                  </span>
                  {caseStudy.metadata.project_date && (
                    <span className="text-sm text-gray-500">
                      {new Date(caseStudy.metadata.project_date).getFullYear()}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {caseStudy.metadata.project_title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  Client: {caseStudy.metadata.client_name}
                </p>

                <p className="text-gray-700 mb-6 line-clamp-3">
                  {caseStudy.metadata.project_overview}
                </p>

                <Link
                  href={`/case-studies/${caseStudy.slug}`}
                  className="btn-primary"
                >
                  Read Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/case-studies" className="btn-secondary">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}