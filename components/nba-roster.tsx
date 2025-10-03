"use client"

import Image from "next/image"
import Link from "next/link"

interface Player {
  id: string
  name: string
  team: string
  position: string
  image: string
  instagram: string
  twitter: string
  nbaProfile: string
}

const premierLeaguePlayers: Player[] = [
  {
    id: "marcus-rashford",
    name: "MARCUS RASHFORD",
    team: "MANCHESTER UNITED",
    position: "LW",
    image: "/pascal-siakam.jpg",
    instagram: "https://instagram.com/marcusrashford",
    twitter: "https://twitter.com/marcusrashford",
    nbaProfile: "https://www.premierleague.com/players/8609/Marcus-Rashford"
  },
  {
    id: "bukayo-saka",
    name: "BUKAYO SAKA",
    team: "ARSENAL FC", 
    position: "RW",
    image: "/andrew-nembhard.jpg",
    instagram: "https://instagram.com/bukayosaka87",
    twitter: "https://twitter.com/bukayosaka87",
    nbaProfile: "https://www.premierleague.com/players/15678/Bukayo-Saka"
  }
]

export function NbaRoster() {
  return (
    <section className="bg-[#0a2f2f] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-red-500 text-xl md:text-2xl font-bold mb-4 tracking-wide">PREMIER LEAGUE ROSTER</h2>
          <div className="h-px w-full bg-gradient-to-r from-red-500 via-red-500/50 to-transparent"></div>
        </div>

        {/* Players Grid */}
        <div className="space-y-16 md:space-y-24">
          {premierLeaguePlayers.map((player, index) => (
            <div key={player.id} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Player Image */}
              <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl flex-1">
                <div className="aspect-[4/3] relative overflow-hidden bg-black/20">
                  <Image
                    src={player.image || "/placeholder.svg"}
                    alt={player.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  />
                </div>
              </div>

              {/* Player Info */}
              <div className="flex-1 max-w-lg">
                <div className="bg-[#f5f5f5] p-8 lg:p-12">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 leading-tight">
                    {player.name}
                  </h3>
                  
                  <p className="text-base md:text-lg text-black/80 mb-6 font-semibold">
                    {player.team}, {player.position}
                  </p>

                  {/* Social Media Links */}
                  <div className="flex gap-4 mb-8">
                    <Link
                      href={player.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/70 hover:text-red-500 underline underline-offset-4 transition-colors"
                    >
                      INSTAGRAM
                    </Link>
                    <span className="text-black/30">/</span>
                    <Link
                      href={player.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/70 hover:text-red-500 underline underline-offset-4 transition-colors"
                    >
                      TWITTER
                    </Link>
                  </div>

                  {/* NBA Profile Button */}
                  <Link
                    href={player.nbaProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 border-2 border-red-500 text-red-500 font-bold text-sm tracking-wider uppercase hover:bg-red-500 hover:text-white transition-all duration-300"
                  >
                    PLAYER PROFILE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}