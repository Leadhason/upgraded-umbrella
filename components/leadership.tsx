"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BioSheet } from "@/components/bio-sheet"
import { Award, Users, TrendingUp, Globe } from "lucide-react"

const teamMembers = [
  {
    name: "TODD D. RAMASAR",
    title: "FOUNDER, PRESIDENT + CEO",
    image: "/lead-1.jpg",
    credentials: [
      "Licensed FIFA Agent",
      "UEFA Certified",
      "20+ Years Experience",
      "Transfer Negotiation Expert"
    ],
    achievements: [
      { icon: <TrendingUp className="h-5 w-5" />, text: "€500M+ in transfer fees negotiated" },
      { icon: <Award className="h-5 w-5" />, text: "€150M secured in 2024 transfers" },
      { icon: <Users className="h-5 w-5" />, text: "Represents World Cup winners" },
      { icon: <Globe className="h-5 w-5" />, text: "Global football industry leader" }
    ],
    bio: `Todd Ramasar is the Founder, President, and Chief Executive Officer of EMPIRE SPORTS Agency (ESA), a premier global football agency specializing in soccer player representation.

With over two decades of experience as a licensed FIFA agent, transfer negotiator, and career strategist, Todd has built a reputation as a visionary leader in the football industry. His career is defined by integrity, entrepreneurial excellence, and an unwavering commitment to empowering footballers on and off the pitch.

Todd has successfully negotiated over €500 million in transfer fees and contracts, leveraging his deep expertise in player recruitment, skill development, club negotiations, brand partnerships, marketing, and endorsements. Most recently, in the 2024 transfer window, he secured over €150 million in transfers for his clients, including World Cup winners and Champions League stars.

As the driving force behind ESA, Todd has expanded the agency's footprint across major European leagues, MLS, and emerging football markets while pioneering innovative approaches to player management and development. He remains committed to guiding the next generation of footballers toward both on-pitch excellence and long-term financial success.

Todd graduated from UCLA with a degree in Political Science and remains actively involved in various charitable initiatives focused on youth development through football.`,
  },
]

export function Leadership() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null)
  
  const openBioSheet = (index: number) => {
    setSelectedMember(index)
  }

  const closeBioSheet = () => {
    setSelectedMember(null)
  }
  
  return (
    <section id="leadership" className="bg-[#0a2f2f] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-2xl font-bold uppercase tracking-wider text-red-500 md:text-3xl">
            LEADERSHIP
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
            Visionary leadership driving unprecedented success in global football representation and player development.
          </p>
        </div>

        {/* Leadership Cards */}
        {teamMembers.map((member, index) => (
          <div key={member.name} className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-[500px] lg:h-[600px]">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/60" />
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  {/* Name and Title */}
                  <div className="mb-8">
                    <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                      {member.name}
                    </h3>
                    <p className="text-lg font-semibold text-red-500 uppercase tracking-wide">
                      {member.title}
                    </p>
                  </div>

                  {/* Credentials */}
                  <div className="mb-8">
                    <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/80">
                      Credentials
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {member.credentials.map((credential, credIndex) => (
                        <div key={credIndex} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-red-500 flex-shrink-0" />
                          <span className="text-sm text-white/80">{credential}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-8">
                    <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/80">
                      Key Achievements
                    </h4>
                    <div className="space-y-3">
                      {member.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center gap-3">
                          <div className="flex-shrink-0 rounded-full bg-red-500/20 p-2 text-red-500">
                            {achievement.icon}
                          </div>
                          <span className="text-sm text-white/90">{achievement.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => openBioSheet(index)}
                    className="self-start rounded-full bg-red-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-red-600 hover:scale-105"
                  >
                    Read Full Biography
                  </Button>
                </div>
              </div>
            </div>

            {/* Bio Sheet */}
            {selectedMember === index && (
              <BioSheet 
                isOpen={selectedMember === index}
                onClose={closeBioSheet}
                name={member.name}
                title={member.title}
                bioContent={member.bio}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
