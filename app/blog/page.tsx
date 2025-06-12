import { cosmic } from '@/lib/cosmic';
import { BlogPost } from '@/types';
import Link from 'next/link';

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'blog-posts' })
      .props(['title', 'slug', 'metadata', 'created_at'])
      .depth(1)
      .sort('-created_at');
    return response.objects;
  } catch (error) {
    if (error.status === 404) {
      return [];
    }
    throw error;
  }
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tips, and updates from our team of experts.
          </p>
        </div>

        {blogPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {post.metadata.featured_image && (
                  <img
                    src={`${post.metadata.featured_image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                    alt={post.metadata.featured_image.alt || post.title}
                    width="400"
                    height="300"
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  {post.metadata.excerpt && (
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.metadata.excerpt}
                    </p>
                  )}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    {post.metadata.author && (
                      <span>By {post.metadata.author}</span>
                    )}
                    <time dateTime={post.created_at}>
                      {new Date(post.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  {post.metadata.tags && post.metadata.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.metadata.tags.map((tag: string, index: number) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No blog posts found.</p>
          </div>
        )}
      </div>
    </div>
  );
}