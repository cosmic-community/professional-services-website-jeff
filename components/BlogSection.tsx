import Link from 'next/link'
import { BlogPost } from '@/types'

interface BlogSectionProps {
  blogPosts: BlogPost[]
}

export default function BlogSection({ blogPosts }: BlogSectionProps) {
  if (!blogPosts || blogPosts.length === 0) {
    return null
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest thoughts on business and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.slice(0, 2).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              {post.metadata.featured_image && (
                <div className="aspect-video">
                  <img
                    src={`${post.metadata.featured_image.imgix_url}?w=600&h=300&fit=crop&auto=format,compress`}
                    alt={post.metadata.title}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-8">
                {post.metadata.tags && post.metadata.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.metadata.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {post.metadata.title}
                </h3>
                
                {post.metadata.excerpt && (
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {post.metadata.excerpt}
                  </p>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {post.metadata.author?.metadata?.profile_photo && (
                      <img
                        src={`${post.metadata.author.metadata.profile_photo.imgix_url}?w=40&h=40&fit=crop&auto=format,compress`}
                        alt={post.metadata.author.metadata.full_name}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                    <div>
                      {post.metadata.author && (
                        <p className="text-sm font-medium text-gray-900">
                          {post.metadata.author.metadata.full_name}
                        </p>
                      )}
                      {post.metadata.publication_date && (
                        <p className="text-sm text-gray-500">
                          {formatDate(post.metadata.publication_date)}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="btn-secondary">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}