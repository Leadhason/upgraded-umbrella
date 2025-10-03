"use client"

import { TrendingUp, Trophy, DollarSign, Users, Globe } from "lucide-react"

interface Achievement {
  id: string
  title: string
  value: string
  description: string
  icon: React.ReactNode
  highlight?: boolean
}

const achievements: Achievement[] = [
  {
    id: "contracts-2024",
    title: "TRANSFER FEES SECURED",
    value: "€180M+",
    description: "Total value of transfers negotiated in 2024 summer window",
    icon: <DollarSign className="h-8 w-8" />,
    highlight: true
  },
  {
    id: "world-cup-clients",
    title: "WORLD CUP WINNERS",
    value: "5x",
    description: "Five World Cup winners among our elite football roster",
    icon: <Trophy className="h-8 w-8" />
  },
  {
    id: "career-growth",
    title: "CAREER ADVANCEMENT",
    value: "100%",
    description: "Client career progression and performance improvement rate",
    icon: <TrendingUp className="h-8 w-8" />
  },
  {
    id: "global-reach",
    title: "INTERNATIONAL PRESENCE",
    value: "40+",
    description: "Professional footballers represented across multiple continents",
    icon: <Globe className="h-8 w-8" />
  },
  {
    id: "total-clients",
    title: "ACTIVE PLAYERS",
    value: "65+",
    description: "Elite footballers across Premier League, La Liga, Serie A, and more",
    icon: <Users className="h-8 w-8" />
  },
  {
    id: "experience",
    title: "YEARS OF EXCELLENCE",
    value: "20+",
    description: "Combined experience in professional football representation",
    icon: <Trophy className="h-8 w-8" />
  }
]

export function ClientSuccessStories() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-2xl font-bold uppercase tracking-wider text-red-500 md:text-3xl">
            PROVEN RESULTS
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
            Our track record speaks for itself. From record-breaking transfers to career-defining moments, 
            Empire Sports Agency delivers exceptional results for our football client-partners.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`group relative overflow-hidden rounded-lg border p-8 transition-all duration-300 hover:scale-105 ${
                achievement.highlight
                  ? "border-red-500 bg-gradient-to-br from-red-500/10 to-red-500/5"
                  : "border-white/20 bg-white/5 hover:border-red-500/50"
              }`}
            >
              {/* Icon */}
              <div className={`mb-6 inline-flex rounded-full p-3 ${
                achievement.highlight 
                  ? "bg-red-500 text-white" 
                  : "bg-white/10 text-red-500 group-hover:bg-red-500 group-hover:text-white"
              } transition-all duration-300`}>
                {achievement.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="mb-2 text-sm font-bold tracking-wider text-white/80 uppercase">
                  {achievement.title}
                </h3>
                <div className={`mb-4 text-4xl font-bold ${
                  achievement.highlight ? "text-red-500" : "text-white"
                } md:text-5xl`}>
                  {achievement.value}
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  {achievement.description}
                </p>
              </div>

              {/* Highlight Border Effect */}
              {achievement.highlight && (
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              )}
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="mt-16 text-center">
          <p className="mb-8 text-lg text-white/80">
            Ready to write your own success story?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-red-500 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-red-600"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  )
}