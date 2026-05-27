import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg text-white mb-3">
              <span className="text-primary">Sourcing</span>Site
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              On-the-ground factory audits and sourcing trips across China. We visit
              factories so you don&apos;t have to.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-white/70 hover:text-primary transition text-sm">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/industries/electronics" className="text-white/70 hover:text-primary transition text-sm">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/industries/consumer-goods" className="text-white/70 hover:text-primary transition text-sm">
                  Consumer Goods
                </Link>
              </li>
              <li>
                <Link href="/industries/apparel-textile" className="text-white/70 hover:text-primary transition text-sm">
                  Apparel &amp; Textile
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="text-white/70 hover:text-primary transition text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-white/70 hover:text-primary transition text-sm">
                  Sourcing Guides
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/70 hover:text-primary transition text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/70 hover:text-primary transition text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-primary transition text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-white/60 text-center">
          &copy; {new Date().getFullYear()} Supply Chain Due Diligence. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
