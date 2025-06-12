import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Transform Your Business with
            <span className="text-primary-200"> Expert Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto text-balance">
            We help businesses grow through strategic consulting, cutting-edge web development, 
            and data-driven digital marketing that delivers measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Explore Our Services
            </Link>
            <Link href="/case-studies" className="btn-secondary border-primary-300 text-white hover:bg-primary-600">
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}