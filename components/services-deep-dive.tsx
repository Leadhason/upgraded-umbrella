"use client"

import { FileText, TrendingUp, Users, Smartphone, Heart, Briefcase } from "lucide-react"

interface ServiceDetail {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  examples: string[]
  caseStudy: {
    title: string
    result: string
  }
}

const serviceDetails: ServiceDetail[] = [
  {
    id: "contract-negotiation",
    title: "CONTRACT NEGOTIATION",
    icon: <FileText className="h-6 w-6" />,
    description: "Strategic transfer negotiation expertise that maximizes value and protects long-term interests.",
    examples: [
      "Multi-year contract structuring",
      "Performance bonus optimization",
      "Release clause negotiations",
      "International transfer compliance"
    ],
    caseStudy: {
      title: "Premier League Transfer",
      result: "Secured record transfer worth €85M with performance bonuses"
    }
  },
  {
    id: "marketing-branding",
    title: "MARKETING & BRANDING",
    icon: <TrendingUp className="h-6 w-6" />,
    description: "Building compelling narratives that elevate athlete brands and create lasting market value.",
    examples: [
      "Personal brand development",
      "Endorsement deal negotiations",
      "Media training and PR strategy",
      "Content creation partnerships"
    ],
    caseStudy: {
      title: "Brand Portfolio Growth",
      result: "Average 300% increase in endorsement value for represented footballers"
    }
  },
  {
    id: "performance-optimization",
    title: "PERFORMANCE OPTIMIZATION",
    icon: <Users className="h-6 w-6" />,
    description: "Cutting-edge technology and analytics to maximize on-pitch performance and career longevity.",
    examples: [
      "Advanced analytics and match analysis",
      "Training program customization",
      "Recovery and wellness protocols",
      "Mental performance coaching"
    ],
    caseStudy: {
      title: "Career Renaissance",
      result: "Helped veteran client achieve 25+ goals in season at age 33"
    }
  },
  {
    id: "social-media",
    title: "SOCIAL MEDIA STRATEGY",
    icon: <Smartphone className="h-6 w-6" />,
    description: "Authentic digital presence strategies that build engagement and amplify personal brands.",
    examples: [
      "Platform-specific content strategies",
      "Community engagement management",
      "Crisis communication protocols",
      "Influencer collaboration coordination"
    ],
    caseStudy: {
      title: "Digital Transformation",
      result: "Grew client's combined social following from 500K to 2.5M in 18 months"
    }
  },
  {
    id: "philanthropy",
    title: "PHILANTHROPY & IMPACT",
    icon: <Heart className="h-6 w-6" />,
    description: "Creating meaningful community impact and building legacies that extend beyond sports.",
    examples: [
      "Foundation establishment and management",
      "Community program development",
      "Charitable partnership facilitation",
      "Youth mentorship initiatives"
    ],
    caseStudy: {
      title: "Community Foundation",
      result: "Launched foundation that has impacted 10,000+ youth in underserved communities"
    }
  },
  {
    id: "business-planning",
    title: "BUSINESS & WEALTH PLANNING",
    icon: <Briefcase className="h-6 w-6" />,
    description: "Strategic financial planning and investment guidance for long-term wealth generation.",
    examples: [
      "Investment portfolio diversification",
      "Business venture evaluation",
      "Real estate acquisition strategy",
      "Post-career transition planning"
    ],
    caseStudy: {
      title: "Investment Success",
      result: "Generated €35M+ in off-pitch revenue through strategic business investments"
    }
  }
]

export function ServicesDeepDive() {
  return (
    <section className="bg-[#0a2f2f] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-2xl font-bold uppercase tracking-wider text-red-500 md:text-3xl">
            COMPREHENSIVE EXPERTISE
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
            Beyond representation, we provide end-to-end footballer management with proven methodologies 
            and measurable results across every aspect of professional football careers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {serviceDetails.map((service, index) => (
            <div
              key={service.id}
              className="group rounded-lg border border-white/20 bg-black/20 p-8 transition-all duration-300 hover:border-red-500/50 hover:bg-black/30"
            >
              {/* Header */}
              <div className="mb-6 flex items-center gap-4">
                <div className="flex rounded-full bg-red-500 p-3 text-white transition-all duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold tracking-wide text-white">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mb-6 text-white/80 leading-relaxed">
                {service.description}
              </p>

              {/* Examples */}
              <div className="mb-6">
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-red-500">
                  KEY SERVICES
                </h4>
                <ul className="space-y-2">
                  {service.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-start gap-3 text-sm text-white/70">
                      <div className="mt-2 h-1 w-1 rounded-full bg-red-500 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Case Study */}
              <div className="rounded-lg bg-white/5 p-4 border-l-4 border-red-500">
                <h5 className="mb-1 text-sm font-bold uppercase tracking-wider text-red-500">
                  SUCCESS STORY
                </h5>
                <p className="mb-2 text-sm font-semibold text-white">
                  {service.caseStudy.title}
                </p>
                <p className="text-sm text-white/70">
                  {service.caseStudy.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="rounded-lg bg-gradient-to-r from-red-500/10 to-red-500/5 border border-red-500/20 p-8">
            <h3 className="mb-4 text-xl font-bold text-white md:text-2xl">
              Ready to Experience the Empire Difference?
            </h3>
            <p className="mb-6 text-white/80">
              Our comprehensive approach ensures every aspect of your football career is optimized for success.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-red-500 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-red-600"
            >
              Discuss Your Goals
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}