import Link from 'next/link'
import { Service } from '@/types'

interface ServicesSectionProps {
  services: Service[]
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  if (!services || services.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 text-center"
            >
              {service.metadata.service_icon && (
                <div className="mb-6">
                  <img
                    src={`${service.metadata.service_icon.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                    alt={service.metadata.service_name}
                    width={80}
                    height={80}
                    className="mx-auto rounded-lg"
                  />
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.metadata.service_name}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.metadata.short_description}
              </p>

              {service.metadata.starting_price && (
                <p className="text-primary-600 font-semibold mb-6">
                  Starting at {service.metadata.starting_price}
                </p>
              )}

              {service.metadata.key_features && service.metadata.key_features.length > 0 && (
                <ul className="text-sm text-gray-600 mb-6 space-y-1">
                  {service.metadata.key_features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              <Link
                href={`/services/${service.slug}`}
                className="btn-primary w-full"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}