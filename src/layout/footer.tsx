import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-serif mb-4">Portfolio</h3>
            <p className="text-sm opacity-70">Exceptional design and creative excellence.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 opacity-70">Navigate</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm hover:opacity-60">
                Home
              </Link>
              <Link href="/projects" className="text-sm hover:opacity-60">
                Projects
              </Link>
              <Link href="/#about" className="text-sm hover:opacity-60">
                About
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold mb-4 opacity-70">Social</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm hover:opacity-60">
                LinkedIn
              </a>
              <a href="#" className="text-sm hover:opacity-60">
                Twitter
              </a>
              <a href="#" className="text-sm hover:opacity-60">
                Instagram
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 opacity-70">Contact</h4>
            <a href="mailto:hello@portfolio.com" className="text-sm hover:opacity-60">
              hello@portfolio.com
            </a>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-70">
          <p>&copy; 2025 Creative Designer. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:opacity-60">
              Privacy
            </Link>
            <Link href="#" className="hover:opacity-60">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}