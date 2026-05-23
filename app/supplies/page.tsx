import Link from 'next/link';

export default function SuppliesPage() {
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
            <span className="text-white">Contract Supplies</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Contract Supplies
          </h1>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed max-w-3xl" style={{ color: '#4a5568' }}>
            Deliberate Services procures and delivers government-specified supplies and
            equipment on contract. We work with verified vendors to source quality products
            that meet government specifications, ensuring reliable delivery and full
            compliance with contract terms. Our supply procurement operations are grounded
            in the same commitment to accountability and mission success that defines
            everything we do.
          </p>
        </div>
      </section>

      {/* ── What We Supply ── */}
      <section className="py-16" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8" style={{ color: '#1e3a5f' }}>
            What We Supply
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Grounds & Maintenance Equipment',
                desc: 'Powered and manual equipment for grounds maintenance, landscaping, and facilities upkeep at government-managed properties.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                ),
              },
              {
                title: 'Personal Protective Equipment (PPE)',
                desc: 'Government-specified PPE including gloves, eyewear, and protective gear meeting OSHA and contract requirements.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                ),
              },
              {
                title: 'Facilities & Operations Supplies',
                desc: 'Supplies for day-to-day facility operations, maintenance, and general upkeep across government-managed facilities.',
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
                title: 'General Government Supplies',
                desc: 'A broad range of supplies and equipment sourced to meet specific government contract requirements and specifications.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm flex flex-col"
                style={{ borderTopWidth: '4px', borderTopColor: '#1e3a5f' }}
              >
                <div className="mb-4">
                  <svg
                    className="w-9 h-9"
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
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#4a5568' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Past Performance ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8" style={{ color: '#1e3a5f' }}>
            Past Performance
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
                Completed Contract: Cemetery Maintenance Equipment
              </h3>
              <span
                className="inline-block px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap self-start sm:self-auto"
                style={{ backgroundColor: '#1e3a5f', color: '#ffffff' }}
              >
                Completed ✓
              </span>
            </div>
            <p className="text-base leading-relaxed mb-5" style={{ color: '#4a5568' }}>
              Deliberate Services successfully fulfilled a government supply contract
              providing grounds maintenance equipment to a cemetery facility. This contract
              demonstrated our ability to source, procure, and deliver specialized
              equipment on-time and within budget, meeting all government specifications
              and contract terms.
            </p>
            <div className="mb-5">
              <p className="text-sm font-semibold mb-3" style={{ color: '#1a1a2e' }}>
                Equipment Delivered:
              </p>
              <ul className="space-y-2">
                {[
                  'Gas-powered leaf blowers',
                  'Commercial weed eaters / string trimmers',
                  'Protective gloves and PPE',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: '#c9a84c' }}
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
            <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
              This contract established our track record for reliable supply procurement
              and on-time delivery in government contracting, and serves as a foundation
              for expanding our supply capabilities to additional government clients.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Us for Supplies ── */}
      <section className="py-16" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-center" style={{ color: '#1e3a5f' }}>
            Why Deliberate Services for Supply Procurement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Verified Vendors',
                desc: 'We source from vetted, reliable vendors to ensure quality, specification compliance, and supply chain integrity on every contract.',
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
                title: 'On-Time Delivery',
                desc: 'Proven track record of delivering contracted supplies on schedule, with proactive communication throughout the fulfillment process.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
              },
              {
                title: 'Full Contract Compliance',
                desc: 'Every delivery meets the full terms of the contract — specifications, documentation, reporting, and delivery requirements.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm text-center"
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
            Looking for a Reliable Supply Contractor?
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Contact Deliberate Services to discuss your supply procurement needs and how we can support your contracting requirements.
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
