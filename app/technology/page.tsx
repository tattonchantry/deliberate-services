import Link from 'next/link';

export default function TechnologyPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section
        className="relative"
        style={{ backgroundColor: '#1e3a5f', minHeight: '200px' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <nav className="text-sm text-blue-300 mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Technology</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Technology Solutions
          </h1>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed max-w-3xl" style={{ color: '#4a5568' }}>
            Deliberate Services delivers modern technology solutions designed specifically
            for government clients. We understand the unique requirements of government IT
            procurement — security, accessibility, compliance, and long-term
            maintainability. Every solution we build is engineered to government standards
            and designed to serve the public effectively.
          </p>
        </div>
      </section>

      {/* ── Website Design & Development ── */}
      <section className="py-16" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#1e3a5f' }}
                >
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold" style={{ color: '#1e3a5f' }}>
                  Website Design &amp; Development
                </h2>
              </div>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#4a5568' }}>
                We design and develop professional, accessible, and Section 508-compliant
                websites for government agencies and contractors. Our sites are built with
                modern frameworks, optimized for performance, and designed to meet
                government standards for accessibility (WCAG 2.1 AA). From initial scoping
                through launch and ongoing maintenance, Deliberate Services manages the
                full website lifecycle with transparency and accountability.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#1a1a2e' }}>
                Key Features &amp; Standards
              </h3>
              <ul className="space-y-3">
                {[
                  'Section 508 / WCAG 2.1 AA Compliance',
                  'Mobile-responsive design',
                  'Performance-optimized loading',
                  'CMS integration and content management',
                  'Government-standard security practices',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: '#1e3a5f' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm" style={{ color: '#4a5568' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Software & Application Development ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#1e3a5f' }}
                >
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold" style={{ color: '#1e3a5f' }}>
                  Software &amp; Application Development
                </h2>
              </div>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#4a5568' }}>
                From custom web applications to data management tools, Deliberate Services
                builds software that solves real government operational challenges. We
                prioritize security, maintainability, and user experience in every build.
                Our development team follows secure coding practices, provides complete
                documentation, and delivers solutions that government teams can operate and
                maintain long after project completion.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#1a1a2e' }}>
                Capabilities
              </h3>
              <ul className="space-y-3">
                {[
                  'Custom web applications',
                  'Government data integrations',
                  'API development and documentation',
                  'Cloud-ready architecture',
                  'Documentation and training materials',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: '#1e3a5f' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm" style={{ color: '#4a5568' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Past Performance / Active Bid ── */}
      <section className="py-16" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8" style={{ color: '#1e3a5f' }}>
            Past Performance &amp; Active Pipeline
          </h2>
          <div
            className="rounded-lg p-8 border-l-4"
            style={{
              backgroundColor: '#fffbf0',
              borderLeftColor: '#c9a84c',
              borderWidth: '0 0 0 4px',
              borderStyle: 'solid',
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
              <h3 className="text-xl font-bold" style={{ color: '#1e3a5f' }}>
                Active Pipeline: Allegheny County Website
              </h3>
              <span
                className="inline-block px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap self-start sm:self-auto"
                style={{ backgroundColor: '#c9a84c', color: '#152c4a' }}
              >
                Active Bid
              </span>
            </div>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#4a5568' }}>
              Deliberate Services has submitted a bid to design and develop the official
              website for Allegheny County. This project represents our commitment to
              delivering modern, accessible digital infrastructure for county governments.
              Our proposal emphasizes accessibility compliance, long-term maintainability,
              and a user-centered design approach tailored to serve county residents
              effectively.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
              This engagement would include full website redesign, content migration,
              accessibility compliance review, and ongoing maintenance support — delivering
              a complete, sustainable digital presence for the county.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16" style={{ backgroundColor: '#1e3a5f' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need a Technology Solution for Your Agency?
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Contact Deliberate Services to discuss your technology requirements and how we can help deliver a compliant, modern solution.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 text-base font-semibold rounded transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#ffffff', color: '#1e3a5f' }}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
