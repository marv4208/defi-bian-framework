import Link from 'next/link';

export function FooterNew() {
  return (
    <footer className="bg-background-gray border-t border-neutral-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-soft">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="font-bold text-xl text-neutral-900">
                DIAN
              </span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Secure DeFi Integration for Institutional Finance
            </p>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/blog" 
                  className="text-sm text-neutral-600 hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/framework" 
                  className="text-sm text-neutral-600 hover:text-primary transition-colors"
                >
                  Framework
                </Link>
              </li>
              <li>
                <Link 
                  href="/case-studies" 
                  className="text-sm text-neutral-600 hover:text-primary transition-colors"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about" 
                  className="text-sm text-neutral-600 hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/consulting" 
                  className="text-sm text-neutral-600 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/privacy" 
                  className="text-sm text-neutral-600 hover:text-primary transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-sm text-neutral-600 hover:text-primary transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-neutral-200">
          <p className="text-center text-sm text-neutral-500">
            © {new Date().getFullYear()} Marlena DeHart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
