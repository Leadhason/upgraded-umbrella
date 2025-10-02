import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <div>
            <p className="text-sm text-white/60">
              © {currentYear} EMPIRE SPORTS Agency. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-white/60 transition-colors hover:text-red-500"
              aria-label="Instagram"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-sm text-white/60 transition-colors hover:text-red-500"
              aria-label="Twitter"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="text-sm text-white/60 transition-colors hover:text-red-500"
              aria-label="LinkedIn"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}