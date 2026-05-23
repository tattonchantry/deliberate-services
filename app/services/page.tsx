import Link from 'next/link';

export default function ServicesPage() {
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
            <span className="text-white">Services</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Services &amp; Consulting
          </h1>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed max-w-3xl" style={{ color: '#4a5568' }}>
            Deliberate Services provides professional consulting and project management
            services to federal, state, and local government clients. Our team brings deep
            expertise in regulatory compliance, environmental planning, and operational
            project management. We understand that government work demands precision,
            accountability, and a deep familiarity with the rules and requirements that
            govern public-sector procurement and delivery.
          </p>
        </div>
      </section>

      {/* ── Government Consulting ── */}
      <section className="py-16" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-shrink-0">
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#1e3a5f' }}
              >
                <svg
                  className="w-8 h-8 text-white"
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
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1e3a5f' }}>
                Government Consulting
              </h2>
              <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                We provide strategic advisory services to government agencies navigating
                procurement, regulatory compliance, and program management challenges. Our
                consultants understand the unique requirements of government contracting and
                deliver actionable guidance that moves missions forward. Whether you need
                help structuring an acquisition strategy, navigating compliance
                requirements, or optimizing an existing program, Deliberate Services brings
                the expertise and credibility that government clients demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Project Management ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-shrink-0">
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#1e3a5f' }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1e3a5f' }}>
                Project Management
              </h2>
              <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                From initiation through closeout, Deliberate Services manages government
                projects with rigor and accountability. We apply industry-standard
                methodologies (PMI/PMP-aligned) to ensure on-scope, on-schedule,
                on-budget delivery across complex multi-stakeholder environments. Our
                project managers are experienced in coordinating with contracting officers,
                program managers, end users, and oversight bodies — keeping all parties
                informed and all deliverables on track throughout the project lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MS4 Stormwater — Upcoming Capability ── */}
      <section className="py-16" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-lg p-8 border-l-4"
            style={{
              backgroundColor: '#fffbf0',
              borderLeftColor: '#c9a84c',
              borderWidth: '0 0 0 4px',
              borderStyle: 'solid',
            }}
          >
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-shrink-0">
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#c9a84c' }}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-2xl font-bold" style={{ color: '#1e3a5f' }}>
                    MS4 Stormwater Plan Assessments
                  </h2>
                  <span
                    className="inline-block px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap"
                    style={{ backgroundColor: '#c9a84c', color: '#152c4a' }}
                  >
                    Upcoming Capability
                  </span>
                </div>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#4a5568' }}>
                  Deliberate Services is developing a specialized capability to support
                  Chesapeake Bay watershed municipalities with MS4 (Municipal Separate Storm
                  Sewer System) stormwater plan assessments and compliance reviews. This
                  service will help local governments meet EPA and Virginia DEQ regulatory
                  requirements under the Clean Water Act.
                </p>
                <p className="text-base leading-relaxed mb-5" style={{ color: '#4a5568' }}>
                  We are actively building partnerships and expertise to serve municipalities
                  in the Hampton Roads region and throughout the Chesapeake Bay watershed
                  area. Early engagement with municipalities and stormwater program managers
                  is welcomed.
                </p>
                <div
                  className="inline-block px-4 py-2 rounded text-sm font-semibold"
                  style={{ backgroundColor: '#1e3a5f', color: '#ffffff' }}
                >
                  Upcoming Capability — Accepting Inquiries
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-center" style={{ color: '#1e3a5f' }}>
            Why Choose Deliberate Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Veteran-Led',
                desc: 'Founded and operated by service-disabled veterans who understand mission-critical delivery.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                ),
              },
              {
                title: 'Regulatory Expertise',
                desc: 'Deep knowledge of EPA, Virginia DEQ, and federal procurement regulations.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                ),
              },
              {
                title: 'Government-Focused',
                desc: 'We work exclusively in the government contracting space — it is all we do.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                ),
              },
              {
                title: 'SDVOSB Certified',
                desc: 'Certified SDVOSB status provides set-aside eligibility for government contracting vehicles.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg p-6 text-center border border-gray-200"
                style={{ backgroundColor: '#f8f9fa' }}
              >
                <div className="flex justify-center mb-4">
                  <svg
                    className="w-10 h-10"
                    style={{ color: '#1e3a5f' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: '#1a1a2e' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4a5568' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16" style={{ backgroundColor: '#1e3a5f' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Discuss Your Consulting Needs?
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Reach out to our team to learn how Deliberate Services can support your government program.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 text-base font-semibold rounded transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#ffffff', color: '#1e3a5f' }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
