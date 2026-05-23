import Link from 'next/link';
import ContactForm from './ContactForm';

export default function ContactPage() {
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
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </section>

      {/* ── Two-column Contact Layout ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left: Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#1e3a5f' }}>
                Get in Touch
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#1e3a5f' }}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#1a1a2e' }}>Company</p>
                    <p className="text-sm mt-0.5" style={{ color: '#4a5568' }}>
                      Deliberate Services LLC
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#1e3a5f' }}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#1a1a2e' }}>Location</p>
                    <p className="text-sm mt-0.5" style={{ color: '#4a5568' }}>
                      Virginia Beach, Virginia
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div
                className="rounded-lg p-6 mb-8 border border-gray-200"
                style={{ backgroundColor: '#f8f9fa' }}
              >
                <h3 className="text-sm font-semibold mb-4" style={{ color: '#1a1a2e' }}>
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: '#c9a84c' }}
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
                    <div>
                      <p className="text-sm font-medium" style={{ color: '#1a1a2e' }}>
                        SDVOSB Certified
                      </p>
                      <p className="text-xs" style={{ color: '#4a5568' }}>
                        Service-Disabled Veteran-Owned Small Business
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: '#c9a84c' }}
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
                    <div>
                      <p className="text-sm font-medium" style={{ color: '#1a1a2e' }}>
                        Virginia Micro-Business Certified
                      </p>
                      <p className="text-xs" style={{ color: '#4a5568' }}>
                        Commonwealth of Virginia Certified
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Who we welcome */}
              <div>
                <p className="text-sm leading-relaxed" style={{ color: '#4a5568' }}>
                  We welcome inquiries from government agencies, prime contractors, and
                  teaming partners. Whether you are looking for an SDVOSB subcontractor,
                  exploring teaming arrangements, or have a direct contracting need,
                  Deliberate Services is ready to discuss how we can support your mission.
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
