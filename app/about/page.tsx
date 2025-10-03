import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Award, Users, Globe, Target, Calendar, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "About | Empire Sports Agency",
  description: "Learn about Empire Sports Agency's mission, values, and leadership team dedicated to elevating football careers worldwide. Discover our history of success in football player representation.",
  keywords: "about empire sports agency, football agency history, football agent team, FIFA licensed agents, football management company",
}

function AboutHero() {
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
            <h2 className="mb-6 text-lg font-bold tracking-wider text-red-500 md:text-xl">ABOUT US</h2>
            <h1 className="mb-8 text-balance font-bold leading-tight tracking-tight text-white">
              <span className="block text-2xl md:text-3xl lg:text-4xl xl:text-5xl">BUILDING FOOTBALL</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl xl:text-5xl">LEGACIES SINCE</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-red-500">2018</span>
            </h1>
            <p className="mb-8 max-w-xl text-pretty text-md leading-relaxed text-white/90 md:text-lg">
              We are a premier football management agency dedicated to transforming talented players 
              into global football icons through strategic representation and comprehensive career development.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#our-story"
                className="inline-flex items-center justify-center rounded-md bg-red-500 p-4 px-6 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-red-600"
              >
                OUR STORY
              </a>
              <a
                href="#leadership"
                className="inline-flex items-center justify-center rounded-md border-2 border-white px-6 p-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-white hover:text-black"
              >
                MEET THE TEAM
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CompanyStats() {
  const stats = [
    {
      icon: Users,
      number: "150+",
      label: "PLAYERS REPRESENTED",
      description: "Professional footballers across all major leagues"
    },
    {
      icon: Globe,
      number: "25+",
      label: "COUNTRIES",
      description: "Global network spanning five continents"
    },
    {
      icon: Award,
      number: "€2.5B+",
      label: "TRANSFER VALUE",
      description: "Total value of transfers facilitated"
    },
    {
      icon: Target,
      number: "95%",
      label: "SUCCESS RATE",
      description: "Successful contract negotiations"
    }
  ]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-red-500 text-2xl md:text-3xl font-bold mb-6 tracking-wide">BY THE NUMBERS</h2>
          <p className="text-white text-lg leading-relaxed max-w-2xl mx-auto">
            Seven years of excellence in football player representation and career development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-red-500/20 rounded-full border border-red-500/30 group-hover:bg-red-500/30 transition-colors duration-300">
                  <stat.icon className="h-8 w-8 text-red-500" />
                </div>
              </div>
              <div className="text-white text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-red-500 text-sm font-bold tracking-wider mb-2">{stat.label}</div>
              <div className="text-white/70 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function OurStory() {
  return (
    <section id="our-story" className="bg-[#0a2f2f] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-red-500 text-2xl md:text-3xl font-bold mb-8 tracking-wide">OUR STORY</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-red-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="h-5 w-5 text-red-500" />
                  <span className="text-red-500 text-sm font-bold tracking-wider">2018 - FOUNDATION</span>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Founded by former professional footballers and industry veterans with a vision to revolutionize 
                  player representation. We started with three core principles: transparency, dedication, and results.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="h-5 w-5 text-red-500" />
                  <span className="text-red-500 text-sm font-bold tracking-wider">2019-2021 - EXPANSION</span>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Rapid growth across European markets with our first major transfers to Premier League and La Liga. 
                  Established partnerships with top-tier clubs and built our reputation for excellence.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="h-5 w-5 text-red-500" />
                  <span className="text-red-500 text-sm font-bold tracking-wider">2022-2025 - GLOBAL REACH</span>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Expanded to become a truly global agency with offices across continents. Today, we represent 
                  some of the world's most promising football talent and continue to set new industry standards.
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="bg-black/20 rounded-lg p-8 border border-white/20">
            <h3 className="text-white text-xl font-bold mb-6 tracking-wide">MISSION & VALUES</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-red-500 text-sm font-bold uppercase tracking-wider mb-2">Mission</h4>
                <p className="text-white/90 text-sm leading-relaxed">
                  To elevate football careers through strategic representation, comprehensive support, 
                  and unwavering commitment to player success both on and off the pitch.
                </p>
              </div>

              <div>
                <h4 className="text-red-500 text-sm font-bold uppercase tracking-wider mb-2">Core Values</h4>
                <div className="space-y-3">
                  {[
                    "Integrity in every negotiation",
                    "Excellence as our standard",
                    "Innovation in our approach",
                    "Transparency in all dealings",
                    "Commitment to player success"
                  ].map((value, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Leadership() {
  const leaders = [
    {
      name: "Marcus Rodriguez",
      role: "Founder & CEO",
      location: "London, UK",
      bio: "Former professional footballer turned FIFA-licensed agent with over 15 years in the industry. Led negotiations for transfers exceeding €500M in total value.",
      credentials: [
        "FIFA Licensed Agent (2018)",
        "UEFA Pro License",
        "Former La Liga Professional",
        "Sports Law Certification"
      ],
      achievements: [
        "150+ successful transfers",
        "25 international caps represented",
        "Top 10 agent worldwide (2024)",
        "Industry Excellence Award (2023)"
      ]
    },
    {
      name: "Sarah Thompson",
      role: "Director of Operations",
      location: "Madrid, Spain",
      bio: "Strategic operations leader with extensive experience in international football management and player development programs across multiple continents.",
      credentials: [
        "FIFA Licensed Agent (2019)",
        "Sports Management MBA",
        "Former Club Executive",
        "Multilingual (5 languages)"
      ],
      achievements: [
        "90+ contract negotiations",
        "€200M+ in deals closed",
        "Youth academy partnerships",
        "Women's football advocate"
      ]
    },
    {
      name: "David Chen",
      role: "Head of Marketing & Brand Development", 
      location: "Milan, Italy",
      bio: "Creative marketing strategist specializing in athlete brand development and digital presence optimization for professional footballers worldwide.",
      credentials: [
        "Digital Marketing Expert",
        "Brand Strategy Certification",
        "Former Agency Creative Director",
        "Social Media Specialist"
      ],
      achievements: [
        "50M+ social media reach",
        "€10M+ in endorsement deals",
        "Award-winning campaigns",
        "Global brand partnerships"
      ]
    }
  ]

  return (
    <section id="leadership" className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-red-500 text-2xl md:text-3xl font-bold mb-6 tracking-wide">LEADERSHIP TEAM</h2>
          <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
            Meet the experienced professionals driving Empire Sports Agency's success and innovation in football player representation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-[#0a2f2f] rounded-lg overflow-hidden border border-white/20 hover:border-red-500/50 transition-all duration-300">
              {/* Header */}
              <div className="p-6 border-b border-white/20">
                <h3 className="text-white text-xl font-bold mb-2">{leader.name}</h3>
                <p className="text-red-500 text-sm font-bold tracking-wider mb-2">{leader.role}</p>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>{leader.location}</span>
                </div>
              </div>

              {/* Bio */}
              <div className="p-6 border-b border-white/20">
                <p className="text-white/90 text-sm leading-relaxed">{leader.bio}</p>
              </div>

              {/* Credentials */}
              <div className="p-6 border-b border-white/20">
                <h4 className="text-red-500 text-sm font-bold uppercase tracking-wider mb-3">Credentials</h4>
                <div className="space-y-2">
                  {leader.credentials.map((credential, credIndex) => (
                    <div key={credIndex} className="flex items-start gap-3">
                      <div className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{credential}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="p-6">
                <h4 className="text-red-500 text-sm font-bold uppercase tracking-wider mb-3">Key Achievements</h4>
                <div className="space-y-2">
                  {leader.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-3">
                      <Award className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GlobalPresence() {
  const offices = [
    {
      city: "London",
      country: "United Kingdom",
      role: "Global Headquarters",
      description: "Premier League partnerships and European operations center"
    },
    {
      city: "Madrid", 
      country: "Spain",
      role: "European Hub",
      description: "La Liga connections and Spanish market operations"
    },
    {
      city: "Milan",
      country: "Italy", 
      role: "Serie A Operations",
      description: "Italian football market and brand development"
    },
    {
      city: "São Paulo",
      country: "Brazil",
      role: "South American Base",
      description: "Talent scouting and development partnerships"
    },
    {
      city: "Lagos",
      country: "Nigeria",
      role: "African Operations",
      description: "Emerging talent identification and development"
    },
    {
      city: "Dubai",
      country: "UAE",
      role: "Middle East Hub",
      description: "Regional partnerships and market expansion"
    }
  ]

  return (
    <section className="bg-[#0a2f2f] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-red-500 text-2xl md:text-3xl font-bold mb-6 tracking-wide">GLOBAL PRESENCE</h2>
          <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
            Our worldwide network ensures we can serve players and clubs across all major football markets with local expertise and global reach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="bg-black/20 rounded-lg p-6 border border-white/20 hover:border-red-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-5 w-5 text-red-500" />
                <div>
                  <h3 className="text-white text-lg font-bold">{office.city}</h3>
                  <p className="text-white/70 text-sm">{office.country}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="text-red-500 text-sm font-bold tracking-wider">{office.role}</span>
              </div>
              
              <p className="text-white/90 text-sm leading-relaxed">{office.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header activeItem="ABOUT" />
      <AboutHero />
      <CompanyStats />
      <OurStory />
      <Leadership />
      <GlobalPresence />
      <ContactSection />
      <Footer />
    </main>
  )
}