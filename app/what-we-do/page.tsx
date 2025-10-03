import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ServicesDeepDive } from "@/components/services-deep-dive"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "What We Do | Empire Sports Agency",
  description: "Discover Empire Sports Agency's comprehensive football management services including transfer negotiations, marketing, performance optimization, and brand development for professional footballers worldwide.",
  keywords: "football services, transfer negotiations, player marketing, football agent services, FIFA agent, player representation, football management",
}

function ServicesHero() {
  return (
    <section 
      className="relative min-h-[70vh] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/field.jpg')",
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      
      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[70vh] items-center px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl mt-20 p-3">
            <h2 className="mb-6 text-lg font-bold tracking-wider text-red-500 md:text-xl">WHAT WE DO</h2>
            <h1 className="mb-8 text-balance font-bold leading-tight tracking-tight text-white">
              <span className="block text-2xl md:text-3xl lg:text-4xl xl:text-5xl">COMPREHENSIVE FOOTBALL</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl xl:text-5xl">MANAGEMENT SERVICES</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl xl:text-5xl">FOR ELITE PLAYERS</span>
            </h1>
            <p className="mb-8 max-w-xl text-pretty text-md leading-relaxed text-white/90 md:text-lg">
              From transfer negotiations to brand development, we provide end-to-end football management 
              services that elevate careers and maximize potential both on and off the pitch.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services-overview"
                className="inline-flex items-center justify-center rounded-md bg-red-500 p-4 px-6 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-red-600"
              >
                EXPLORE SERVICES
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border-2 border-white px-6 p-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-white hover:text-black"
              >
                GET STARTED
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesOverview() {
  const services = [
    {
      number: "01.",
      title: "TRANSFER NEGOTIATIONS",
      description: "Expert negotiation strategies that secure optimal contract terms and transfer fees.",
      keyPoints: [
        "Multi-year contract structuring",
        "Performance bonus optimization", 
        "Release clause negotiations",
        "International transfer compliance"
      ]
    },
    {
      number: "02.",
      title: "MARKETING & BRAND DEVELOPMENT",
      description: "Strategic brand building that transforms players into global football icons.",
      keyPoints: [
        "Personal brand development",
        "Endorsement deal negotiations",
        "Media training and PR strategy",
        "Content creation partnerships"
      ]
    },
    {
      number: "03.",
      title: "PERFORMANCE OPTIMIZATION",
      description: "Data-driven performance enhancement using cutting-edge football analytics.",
      keyPoints: [
        "Advanced match analysis",
        "Training program customization",
        "Recovery and wellness protocols",
        "Mental performance coaching"
      ]
    },
    {
      number: "04.",
      title: "SOCIAL MEDIA STRATEGY",
      description: "Authentic digital presence strategies that engage fans and build following.",
      keyPoints: [
        "Platform-specific content strategies",
        "Community engagement management",
        "Crisis communication protocols",
        "Influencer collaboration coordination"
      ]
    },
    {
      number: "05.",
      title: "PHILANTHROPY & COMMUNITY",
      description: "Building meaningful legacies through impactful community initiatives.",
      keyPoints: [
        "Foundation establishment and management",
        "Community program development",
        "Charitable partnership facilitation",
        "Youth mentorship initiatives"
      ]
    },
    {
      number: "06.",
      title: "WEALTH & BUSINESS PLANNING",
      description: "Strategic financial planning for long-term wealth generation and career security.",
      keyPoints: [
        "Investment portfolio diversification",
        "Business venture evaluation",
        "Real estate acquisition strategy",
        "Post-career transition planning"
      ]
    }
  ]

  return (
    <section id="services-overview" className="bg-[#0a2f2f] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-red-500 text-2xl md:text-3xl font-bold mb-6 tracking-wide">OUR SERVICES</h2>
          <p className="text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Six core service areas that form the foundation of our comprehensive approach to football player management.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service) => (
            <div key={service.number} className="bg-black/20 rounded-lg p-8 border border-white/20 hover:border-red-500/50 transition-all duration-300">
              <div className="text-red-500 text-3xl md:text-4xl font-bold mb-4">{service.number}</div>
              <h3 className="text-white text-xl font-bold tracking-wide mb-4 border-b border-white/30 pb-4">
                {service.title}
              </h3>
              <p className="text-white/90 text-base leading-relaxed mb-6">{service.description}</p>
              
              <div className="space-y-3">
                <h4 className="text-red-500 text-sm font-bold uppercase tracking-wider">Key Services:</h4>
                {service.keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen">
      <Header activeItem="WHAT WE DO" />
      <ServicesHero />
      <ServicesOverview />
      <ServicesDeepDive />
      <ContactSection />
      <Footer />
    </main>
  )
}