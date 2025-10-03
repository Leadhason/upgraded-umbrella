import Link from "next/link"
import { EmpireLogo } from "@/components/empire-logo"

export function Header({ activeItem }: { activeItem?: string }) {
  const navItems = [
    { label: "WHAT WE DO", href: "/what-we-do" },
    { label: "ABOUT", href: "/about" },
    { label: "TALENT", href: "/talent" },
    { label: "CONTACT", href: "/contact" },
  ]

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-6 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center">
          <EmpireLogo />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium tracking-wider transition-colors hover:underline hover:underline-offset-8 ${
                    activeItem === item.label ? "text-red-500 border-b-2 border-red-500 pb-1" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
