"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BioSheet } from "@/components/bio-sheet"

const teamMembers = [
  {
    name: "TODD D. RAMASAR",
    title: "FOUNDER, PRESIDENT + CEO",
    image: "/lead-1.jpg",
    bio: `Todd Ramasar is the Founder, President, and Chief Executive Officer of EMPIRE SPORTS Agency (ESA), a premier global sports, media, and technology firm specializing in athlete representation.

With over two decades of experience as a certified NBA agent, contract negotiator, and career strategist, Todd has built a reputation as a visionary leader in the industry. His career is defined by integrity, entrepreneurial excellence, and an unwavering commitment to empowering athletes on and off the court.

Todd has successfully negotiated over $1 billion in player contracts, leveraging his deep expertise in player recruitment, skill development, team contract negotiations, brand partnerships, marketing, and endorsements. Most recently, in the 2024 NBA offseason, he secured over $250 million in contracts for his clients, including three-time All-Star Pascal Siakam and Andrew Nembhard.

As the driving force behind ESA, Todd has expanded the agency's footprint across multiple professional sports leagues while pioneering innovative approaches to athlete management and development. He remains committed to guiding the next generation of sports professionals toward both athletic achievement and long-term financial success.

Todd graduated from UCLA with a degree in Political Science and remains actively involved in various charitable initiatives focused on youth development through sports.`,
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
      {/* Executive Team Description */}
      <div className="mx-auto max-w-5xl px-6 text-center md:px-12">
        <h2 className="text-red-500 text-center text-lg md:text-xl font-bold mb-8 tracking-wide">MEET OUR FOUNDER</h2>
        <p className="text-lg leading-relaxed text-white md:text-xl">
          Drawing from over 10 years of experience, our founder possesses a diverse skill set spanning
          various aspects of sports management, including talent representation, sports science, player development,
          marketing, entertainment, strategic partnerships, content development, and licensing. We're dedicated to
          delivering tailored management solutions and supporting our clients in achieving success in both their
          athletic careers and business ventures.
        </p>
      </div>

      {/* Team Members */}
      <div className="mx-auto mt-16 max-w-7xl space-y-4 px-6 md:mt-12 md:px-12">
        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className="flex flex-col items-center justify-center gap-8 md:flex-row"
          >
            {/* Text Content */}
            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <h2 className="mb-2 font-serif text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
                {member.name}
              </h2>
              <p className="mb-6 text-lg uppercase tracking-wider text-white/80">{member.title}</p>
              <Button
                className="rounded-full bg-red-500 px-8 py-6 font-sans text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-red-400"
                onClick={() => openBioSheet(index)}
              >
                Read Bio
              </Button>
            </div>

            {/* Image */}
            <div className="relative w-full max-w-md flex-1 overflow-hidden rounded-none flex items-center justify-center md:rounded-lg h-[600px]  -ml-10">
              <Image src={member.image || "/placeholder.svg"} 
              width={500} height={1000}
              alt={member.name} className="object-cover h-full" />
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
