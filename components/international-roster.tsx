"use client"

import Link from "next/link"

interface InternationalPlayer {
  id: string
  name: string
  team: string
  location: string
  position: string
  profileUrl: string
}

const internationalPlayers: InternationalPlayer[] = [
  {
    id: "luka-modric",
    name: "LUKA MODRIC",
    team: "REAL MADRID",
    location: "(SPAIN)",
    position: "CM",
    profileUrl: "#"
  },
  {
    id: "dusan-vlahovic",
    name: "DUSAN VLAHOVIC",
    team: "JUVENTUS",
    location: "(ITALY)",
    position: "ST",
    profileUrl: "#"
  },
  {
    id: "pedri-gonzalez",
    name: "PEDRI GONZALEZ",
    team: "FC BARCELONA",
    location: "(SPAIN)",
    position: "CM",
    profileUrl: "#"
  },
  {
    id: "erling-haaland",
    name: "ERLING HAALAND",
    team: "MANCHESTER CITY",
    location: "(ENGLAND)",
    position: "ST",
    profileUrl: "#"
  },
  {
    id: "federico-chiesa",
    name: "FEDERICO CHIESA",
    team: "LIVERPOOL FC",
    location: "(ENGLAND)",
    position: "RW",
    profileUrl: "#"
  },
  {
    id: "christian-pulisic",
    name: "CHRISTIAN PULISIC",
    team: "AC MILAN",
    location: "(ITALY)",
    position: "RW",
    profileUrl: "#"
  }
]

export function InternationalRoster() {
  return (
    <section className="bg-[#0a2f2f] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-red-500 text-xl md:text-2xl font-bold mb-4 tracking-wide">
            EUROPEAN + INTERNATIONAL ROSTER
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-red-500 via-red-500/50 to-transparent"></div>
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {internationalPlayers.map((player) => (
            <div key={player.id} className="text-center">
              {/* Player Name */}
              <h3 className="text-white text-lg md:text-xl font-bold mb-2 tracking-wide">
                {player.name}
              </h3>
              
              {/* Team and Location */}
              <p className="text-white/80 text-xs md:text-sm mb-6 tracking-wider">
                {player.team} {player.location} / {player.position}
              </p>

              {/* Profile Button */}
              <Link
                href={player.profileUrl}
                className="inline-block px-8 py-3 border-2 border-red-500 text-red-500 font-bold text-sm tracking-wider uppercase hover:bg-red-500 hover:text-white transition-all duration-300 rounded-full"
              >
                PROFILE
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}