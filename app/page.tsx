import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: '#1e3a5f' }}
      >
        {/* Diagonal pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Reliable. Certified. Deliberate.
          </h1>
          <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            A Service-Disabled Veteran-Owned Small Business delivering government contracting excellence from Virginia Beach, Virginia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-block px-8 py-3 text-base font-semibold rounded border-2 border-white text-white hover:bg-white hover:text-navy transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 text-base font-semibold rounded border-2 border-white text-white hover:bg-white hover:text-navy transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Certification Badges ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch max-w-3xl mx-auto">
            {/* Badge 1: SDVOSB */}
            <div
              className="flex-1 flex flex-col items-center text-center p-8 rounded-lg border-2"
              style={{ borderColor: '#1e3a5f' }}
            >
              <svg
                className="w-12 h-12 mb-4"
                style={{ color: '#1e3a5f' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <p
                className="text-4xl font-extrabold tracking-wider mb-2"
                style={{ color: '#1e3a5f' }}
              >
                SDVOSB
              </p>
              <p className="text-sm font-medium" style={{ color: '#4a5568' }}>
                Service-Disabled Veteran-Owned Small Business
              </p>
            </div>

            {/* Badge 2: Virginia Micro-Business */}
            <div
              className="flex-1 flex flex-col items-center text-center p-8 rounded-lg border-2"
              style={{ borderColor: '#1e3a5f' }}
            >
              <svg
                className="w-12 h-12 mb-4"
                style={{ color: '#1e3a5f' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <p
                className="text-3xl font-extrabold tracking-wide mb-2 leading-tight"
                style={{ color: '#1e3a5f' }}
              >
                Virginia<br />Micro-Business
              </p>
              <p className="text-sm font-medium" style={{ color: '#4a5568' }}>
                Commonwealth of Virginia Certified
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold mb-10 text-center"
            style={{ color: '#1e3a5f' }}
          >
            About Deliberate Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Text */}
            <div>
              <p className="text-base leading-relaxed mb-5" style={{ color: '#4a5568' }}>
                Deliberate Services LLC is a Virginia Beach-based government contracting
                company founded on a commitment to excellence, integrity, and service. As a
                Service-Disabled Veteran-Owned Small Business (SDVOSB) and Virginia
                Micro-Business, we bring military-grade discipline and precision to every
                engagement.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                Our team is led by Brodie Wells and Andy Holder, professionals who combine
                technical expertise with a deep understanding of government procurement
                processes, regulatory compliance, and mission-critical delivery.
              </p>
            </div>

            {/* Owner Cards */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Brodie Wells */}
              <div className="flex-1 bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold"
                  style={{ backgroundColor: '#1e3a5f' }}
                >
                  BW
                </div>
                <p className="text-lg font-semibold" style={{ color: '#1a1a2e' }}>
                  Brodie Wells
                </p>
                <p className="text-sm mt-1" style={{ color: '#4a5568' }}>
                  Co-Founder &amp; CEO
                </p>
              </div>

              {/* Andy Holder */}
              <div className="flex-1 bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold"
                  style={{ backgroundColor: '#1e3a5f' }}
                >
                  AH
                </div>
                <p className="text-lg font-semibold" style={{ color: '#1a1a2e' }}>
                  Andy Holder
                </p>
                <p className="text-sm mt-1" style={{ color: '#4a5568' }}>
                  Co-Founder &amp; COO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            style={{ color: '#1e3a5f' }}
          >
            Our Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Services & Consulting */}
            <div
              className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm flex flex-col"
              style={{ borderTopWidth: '4px', borderTopColor: '#1e3a5f' }}
            >
              <div className="mb-5">
                <svg
                  className="w-10 h-10"
                  style={{ color: '#1e3a5f' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#1a1a2e' }}>
                Services &amp; Consulting
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#4a5568' }}>
                Government consulting, project management, and environmental compliance
                including MS4 stormwater assessments.
              </p>
              <Link
                href="/services"
                className="mt-6 text-sm font-semibold inline-flex items-center gap-1 transition-opacity hover:opacity-70"
                style={{ color: '#1e3a5f' }}
              >
                Learn More →
              </Link>
            </div>

            {/* Card 2: Technology */}
            <div
              className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm flex flex-col"
              style={{ borderTopWidth: '4px', borderTopColor: '#1e3a5f' }}
            >
              <div className="mb-5">
                <svg
                  className="w-10 h-10"
                  style={{ color: '#1e3a5f' }}
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
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#1a1a2e' }}>
                Technology
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#4a5568' }}>
                Website design, software development, and digital solutions purpose-built
                for government clients.
              </p>
              <Link
                href="/technology"
                className="mt-6 text-sm font-semibold inline-flex items-center gap-1 transition-opacity hover:opacity-70"
                style={{ color: '#1e3a5f' }}
              >
                Learn More →
              </Link>
            </div>

            {/* Card 3: Contract Supplies */}
            <div
              className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm flex flex-col"
              style={{ borderTopWidth: '4px', borderTopColor: '#1e3a5f' }}
            >
              <div className="mb-5">
                <svg
                  className="w-10 h-10"
                  style={{ color: '#1e3a5f' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#1a1a2e' }}>
                Contract Supplies
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#4a5568' }}>
                Reliable procurement of government-specified supplies and equipment with
                on-time delivery.
              </p>
              <Link
                href="/supplies"
                className="mt-6 text-sm font-semibold inline-flex items-center gap-1 transition-opacity hover:opacity-70"
                style={{ color: '#1e3a5f' }}
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="py-20" style={{ backgroundColor: '#1e3a5f' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Contact Deliberate Services today to discuss your contracting needs.
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
