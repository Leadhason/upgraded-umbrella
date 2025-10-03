"use client"

import { Trophy, Target, Calendar, Star, Award, TrendingUp } from "lucide-react"

interface PlayerStats {
  id: string
  playerName: string
  position: string
  currentClub: string
  image: string
  seasonStats: {
    goals: number
    assists: number
    appearances: number
    season: string
  }
  careerHighlights: {
    totalGoals: number
    totalAssists: number
    totalAppearances: number
    trophiesWon: number
  }
  majorTrophies: string[]
  individualAwards: string[]
}

const playerStats: PlayerStats[] = [
  {
    id: "rashford-stats",
    playerName: "Marcus Rashford",
    position: "Left Winger",
    currentClub: "Manchester United",
    image: "/pascal-siakam.jpg",
    seasonStats: {
      goals: 17,
      assists: 6,
      appearances: 32,
      season: "2024/25"
    },
    careerHighlights: {
      totalGoals: 131,
      totalAssists: 63,
      totalAppearances: 359,
      trophiesWon: 4
    },
    majorTrophies: [
      "FA Cup Winner (2024)",
      "EFL Cup Winner (2023)",
      "Europa League Winner (2017)"
    ],
    individualAwards: [
      "England Player of the Year (2022)",
      "Manchester United Players' Player (2023)",
      "Premier League Player of the Month (x3)"
    ]
  },
  {
    id: "saka-stats",
    playerName: "Bukayo Saka",
    position: "Right Winger",
    currentClub: "Arsenal FC",
    image: "/andrew-nembhard.jpg",
    seasonStats: {
      goals: 14,
      assists: 11,
      appearances: 34,
      season: "2024/25"
    },
    careerHighlights: {
      totalGoals: 67,
      totalAssists: 58,
      totalAppearances: 219,
      trophiesWon: 2
    },
    majorTrophies: [
      "FA Cup Winner (2020)",
      "FA Community Shield (2020)"
    ],
    individualAwards: [
      "Arsenal Player of the Season (2022, 2023)",
      "England Young Player of the Year (2021)",
      "Premier League Player of the Month (x2)"
    ]
  }
]

export function PlayerStatsAchievements() {
  return (
    <section className="bg-[#0a2f2f] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-2xl font-bold uppercase tracking-wider text-red-500 md:text-3xl">
            PLAYER STATISTICS & ACHIEVEMENTS
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
            Excellence on the pitch speaks volumes. These statistics and achievements showcase 
            the exceptional talent and consistent performance of our represented players.
          </p>
        </div>

        {/* Player Stats Cards */}
        <div className="space-y-16">
          {playerStats.map((player, index) => (
            <div key={player.id} className="overflow-hidden rounded-2xl border border-white/20 bg-black/20 backdrop-blur-sm">
              <div className={`grid grid-cols-1 lg:grid-cols-5 gap-0 ${index % 2 === 1 ? 'lg:grid-cols-5' : ''}`}>
                {/* Player Image & Info */}
                <div className={`relative lg:col-span-2 h-[400px] lg:h-[500px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={player.image || "/placeholder.svg"}
                    alt={player.playerName}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="mb-2 text-2xl font-bold text-white">{player.playerName}</h3>
                    <p className="text-red-500 font-semibold">{player.position}</p>
                    <p className="text-white/80">{player.currentClub}</p>
                  </div>
                </div>

                {/* Stats Content */}
                <div className={`lg:col-span-3 p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {/* Current Season Stats */}
                  <div className="mb-8">
                    <div className="mb-6 flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-red-500" />
                      <h4 className="text-xl font-bold text-white">Season {player.seasonStats.season}</h4>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="rounded-lg border border-white/20 bg-white/5 p-4 text-center">
                        <div className="mb-2 text-2xl font-bold text-red-500">{player.seasonStats.goals}</div>
                        <div className="flex items-center justify-center gap-1">
                          <Target className="h-4 w-4 text-white/60" />
                          <span className="text-sm text-white/80">Goals</span>
                        </div>
                      </div>
                      <div className="rounded-lg border border-white/20 bg-white/5 p-4 text-center">
                        <div className="mb-2 text-2xl font-bold text-green-500">{player.seasonStats.assists}</div>
                        <div className="flex items-center justify-center gap-1">
                          <TrendingUp className="h-4 w-4 text-white/60" />
                          <span className="text-sm text-white/80">Assists</span>
                        </div>
                      </div>
                      <div className="rounded-lg border border-white/20 bg-white/5 p-4 text-center">
                        <div className="mb-2 text-2xl font-bold text-blue-500">{player.seasonStats.appearances}</div>
                        <div className="flex items-center justify-center gap-1">
                          <Star className="h-4 w-4 text-white/60" />
                          <span className="text-sm text-white/80">Apps</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Career Highlights */}
                  <div className="mb-8">
                    <h4 className="mb-4 text-lg font-bold text-white">Career Highlights</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-white/70">Total Goals:</span>
                        <span className="font-semibold text-white">{player.careerHighlights.totalGoals}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Total Assists:</span>
                        <span className="font-semibold text-white">{player.careerHighlights.totalAssists}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Appearances:</span>
                        <span className="font-semibold text-white">{player.careerHighlights.totalAppearances}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Trophies Won:</span>
                        <span className="font-semibold text-red-500">{player.careerHighlights.trophiesWon}</span>
                      </div>
                    </div>
                  </div>

                  {/* Major Trophies */}
                  <div className="mb-6">
                    <div className="mb-3 flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-yellow-500" />
                      <h5 className="text-sm font-bold uppercase tracking-wider text-white">Major Trophies</h5>
                    </div>
                    <div className="space-y-2">
                      {player.majorTrophies.map((trophy, trophyIndex) => (
                        <div key={trophyIndex} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                          <span className="text-sm text-white/80">{trophy}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Individual Awards */}
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4 text-red-500" />
                      <h5 className="text-sm font-bold uppercase tracking-wider text-white">Individual Awards</h5>
                    </div>
                    <div className="space-y-2">
                      {player.individualAwards.slice(0, 3).map((award, awardIndex) => (
                        <div key={awardIndex} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                          <span className="text-sm text-white/80">{award}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}