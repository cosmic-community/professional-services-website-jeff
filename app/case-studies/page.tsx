import { cosmic } from '@/lib/cosmic';
import { CaseStudy } from '@/types';
import Link from 'next/link';

async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'case-studies' })
      .props(['title', 'slug', 'metadata', 'created_at'])
      .depth(1)
      .sort('-created_at');
    return response.objects;
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'status' in error && (error as any).status === 404) {
      return [];
    }
    throw error;
  }
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world examples of how we've helped our clients achieve success.
          </p>
        </div>

        {caseStudies.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy) => (
              <article
                key={caseStudy.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {caseStudy.metadata.featured_image && (
                  <img
                    src={`${caseStudy.metadata.featured_image.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
                    alt={caseStudy.title}
                    width="600"
                    height="400"
                    className="w-full h-64 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    {caseStudy.metadata.client_name && (
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {caseStudy.metadata.client_name}
                      </span>
                    )}
                    <span className="text-sm text-gray-500">
                      Case Study
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    <Link 
                      href={`/case-studies/${caseStudy.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {caseStudy.title}
                    </Link>
                  </h2>
                  
                  {caseStudy.metadata.project_overview && (
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {caseStudy.metadata.project_overview}
                    </p>
                  )}
                  
                  {caseStudy.metadata.results && typeof caseStudy.metadata.results === 'string' && (
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Key Results:</h3>
                      <p className="text-sm text-gray-600">
                        {caseStudy.metadata.results}
                      </p>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <time dateTime={caseStudy.created_at}>
                      {new Date(caseStudy.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long'
                      })}
                    </time>
                    <Link 
                      href={`/case-studies/${caseStudy.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No case studies found.</p>
          </div>
        )}
      </div>
    </div>
  );
}