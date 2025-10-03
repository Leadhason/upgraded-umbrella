import Link from "next/link"

export function LifeSportsAgencyCTA() {
  return (
    <section className="bg-[#0a2f2f] py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
        <p className="text-white text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-12">
          TO INQUIRE ABOUT EMPIRE SPORTS AGENCY'S 35+<br />
          INTERNATIONAL CLIENTS
        </p>
        
        <Link
          href="#contact"
          className="inline-block px-12 py-4 bg-red-500 text-white font-bold text-sm tracking-wider uppercase hover:bg-red-600 transition-all duration-300 rounded-full"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  )
}