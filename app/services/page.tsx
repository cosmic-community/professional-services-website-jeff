import { cosmic } from '@/lib/cosmic';
import { Service } from '@/types';

async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['title', 'slug', 'metadata'])
      .depth(1);
    return response.objects;
  } catch (error) {
    if (error.status === 404) {
      return [];
    }
    throw error;
  }
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive professional services to help your business grow and succeed.
          </p>
        </div>

        {services.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                {service.metadata.icon && (
                  <img
                    src={`${service.metadata.icon.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                    alt={service.metadata.icon.alt || service.title}
                    width="60"
                    height="60"
                    className="w-15 h-15 mb-4"
                  />
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.metadata.description}
                </p>
                {service.metadata.features && (
                  <ul className="text-sm text-gray-500 space-y-1">
                    {service.metadata.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No services found.</p>
          </div>
        )}
      </div>
    </div>
  );
}