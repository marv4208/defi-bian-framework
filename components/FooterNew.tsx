import Link from 'next/link';

export function FooterNew() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">D</span>
              </div>
              <span className="font-display font-bold text-xl text-primary">
                DIAN
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Secure DeFi Integration for Institutional Finance
            </p>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-display font-semibold text-primary mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/blog" 
                  className="text-sm text-gray-600 hover:text-secondary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/framework" 
                  className="text-sm text-gray-600 hover:text-secondary transition-colors"
                >
                  Framework
                </Link>
              </li>
              <li>
                <Link 
                  href="/case-studies" 
                  className="text-sm text-gray-600 hover:text-secondary transition-colors"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display font-semibold text-primary mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about" 
                  className="text-sm text-gray-600 hover:text-secondary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/consulting" 
                  className="text-sm text-gray-600 hover:text-secondary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-display font-semibold text-primary mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/privacy" 
                  className="text-sm text-gray-600 hover:text-secondary transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-sm text-gray-600 hover:text-secondary transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Marlena DeHart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
