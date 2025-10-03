"use client"

import { TrendingUp, MapPin, Calendar, Euro } from "lucide-react"

interface TransferStory {
  id: string
  playerName: string
  fromClub: string
  toClub: string
  fromLeague: string
  toLeague: string
  transferFee: string
  year: string
  impact: string
  description: string
  image: string
}

const transferStories: TransferStory[] = [
  {
    id: "rashford-move",
    playerName: "Marcus Rashford",
    fromClub: "Youth Academy",
    toClub: "Manchester United",
    fromLeague: "Academy",
    toLeague: "Premier League",
    transferFee: "€0M",
    year: "2016",
    impact: "Breakthrough to First Team",
    description: "Facilitated Marcus's seamless transition from academy to first team, negotiating a breakthrough contract that recognized his immense potential.",
    image: "/pascal-siakam.jpg"
  },
  {
    id: "saka-extension",
    playerName: "Bukayo Saka",
    fromClub: "Arsenal FC",
    toClub: "Arsenal FC",
    fromLeague: "Premier League",
    toLeague: "Premier League",
    transferFee: "€70M",
    year: "2023",
    impact: "Record Contract Extension",
    description: "Secured a landmark contract extension making Bukayo one of the highest-paid young players in Europe, reflecting his status as a key player.",
    image: "/andrew-nembhard.jpg"
  },
  {
    id: "modric-madrid",
    playerName: "Luka Modric",
    fromClub: "Tottenham",
    toClub: "Real Madrid",
    fromLeague: "Premier League",
    toLeague: "La Liga",
    transferFee: "€35M",
    year: "2012",
    impact: "Career Transformation",
    description: "Orchestrated the career-defining move that led to multiple Champions League titles and a Ballon d'Or win.",
    image: "/lead-1.jpg"
  }
]

export function TransferSuccessStories() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-2xl font-bold uppercase tracking-wider text-red-500 md:text-3xl">
            TRANSFER SUCCESS STORIES
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
            Every transfer tells a story of ambition, strategy, and success. These are the career-defining moves 
            that showcase our expertise in navigating the complex world of football transfers.
          </p>
        </div>

        {/* Transfer Stories */}
        <div className="space-y-16">
          {transferStories.map((story, index) => (
            <div
              key={story.id}
              className={`flex flex-col gap-8 lg:flex-row lg:gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Story Content */}
              <div className="flex-1 lg:max-w-lg">
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">
                    {story.playerName}
                  </h3>
                  <div className="mb-4 flex items-center gap-2 text-red-500">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-semibold">{story.year}</span>
                    <span className="text-white/30">•</span>
                    <span className="text-sm font-semibold">{story.impact}</span>
                  </div>
                </div>

                {/* Transfer Details */}
                <div className="mb-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* From */}
                    <div className="rounded-lg border border-white/20 bg-white/5 p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-white/60" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                          From
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-white">{story.fromClub}</p>
                      <p className="text-xs text-white/70">{story.fromLeague}</p>
                    </div>

                    {/* To */}
                    <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-red-500" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-red-500">
                          To
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-white">{story.toClub}</p>
                      <p className="text-xs text-white/70">{story.toLeague}</p>
                    </div>
                  </div>

                  {/* Transfer Fee */}
                  <div className="mt-4 rounded-lg border border-green-500/30 bg-green-500/10 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Euro className="h-4 w-4 text-green-500" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-green-500">
                          Transfer Value
                        </span>
                      </div>
                      <span className="text-lg font-bold text-white">{story.transferFee}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/80 leading-relaxed">{story.description}</p>

                {/* Impact Badge */}
                <div className="mt-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-4 py-2 text-red-500">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-semibold">{story.impact}</span>
                  </div>
                </div>
              </div>

              {/* Player Image */}
              <div className="flex-1 lg:max-w-md">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white/5">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.playerName}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-8">
            <h3 className="mb-4 text-xl font-bold text-white md:text-2xl">
              Ready to Write Your Transfer Story?
            </h3>
            <p className="mb-6 text-white/80">
              Let us help you navigate your next career move with the same expertise and dedication.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-red-500 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-red-600"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}