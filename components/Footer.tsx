import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services & Consulting' },
  { href: '/technology', label: 'Technology' },
  { href: '/supplies', label: 'Contract Supplies' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1e3a5f' }} className="text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-white">Deliberate Services LLC</h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              Virginia Beach, VA
            </p>
            <p className="text-blue-200 text-sm leading-relaxed mt-2">
              A Service-Disabled Veteran-Owned Small Business committed to excellence in government contracting.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-white">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Certifications */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-white">Certifications</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  style={{ color: '#c9a84c' }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L3 7l9 5 9-5-9-5zM3 17l9 5 9-5M3 12l9 5 9-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <p className="text-white font-semibold text-sm">SDVOSB Certified</p>
                  <p className="text-blue-200 text-xs">Service-Disabled Veteran-Owned Small Business</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  style={{ color: '#c9a84c' }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <p className="text-white font-semibold text-sm">Virginia Micro-Business Certified</p>
                  <p className="text-blue-200 text-xs">Commonwealth of Virginia Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-blue-300 text-sm text-center">
            &copy; 2024 Deliberate Services LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
