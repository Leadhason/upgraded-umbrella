"use client"

import { Quote, Star } from "lucide-react"

interface PlayerTestimonial {
  id: string
  playerName: string
  position: string
  currentClub: string
  quote: string
  context: string
  image: string
  rating: number
}

const testimonials: PlayerTestimonial[] = [
  {
    id: "rashford-testimonial",
    playerName: "Marcus Rashford",
    position: "Left Winger",
    currentClub: "Manchester United",
    quote: "Empire Sports Agency didn't just negotiate my contract, they shaped my entire career. From my breakthrough to securing my future, they've been with me every step of the way. Their understanding of both the business and the beautiful game is unmatched.",
    context: "On his career development and contract negotiations",
    image: "/pascal-siakam.jpg",
    rating: 5
  },
  {
    id: "saka-testimonial",
    playerName: "Bukayo Saka",
    position: "Right Winger", 
    currentClub: "Arsenal FC",
    quote: "Working with Empire Sports Agency has been transformative. They don't just focus on transfers - they've helped build my brand, manage my endorsements, and most importantly, they understand my vision for my career both on and off the pitch.",
    context: "On comprehensive player management and brand development",
    image: "/andrew-nembhard.jpg",
    rating: 5
  },
  {
    id: "modric-testimonial",
    playerName: "Luka Modric",
    position: "Central Midfielder",
    currentClub: "Real Madrid",
    quote: "The move to Real Madrid changed everything for me. Empire Sports Agency made what seemed impossible happen. Their expertise in navigating complex international transfers and their network across European football is extraordinary.",
    context: "On his career-defining transfer to Real Madrid",
    image: "/lead-1.jpg",
    rating: 5
  },
  {
    id: "haaland-testimonial",
    playerName: "Erling Haaland",
    position: "Striker",
    currentClub: "Manchester City",
    quote: "Empire Sports Agency understands what it takes to compete at the highest level. They've supported my journey from breakthrough talent to established star, always ensuring I'm in the best position to succeed both personally and professionally.",
    context: "On career progression and professional development",
    image: "/lead-2.jpg",
    rating: 5
  }
]

export function PlayerTestimonials() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-2xl font-bold uppercase tracking-wider text-red-500 md:text-3xl">
            PLAYER TESTIMONIALS
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
            The voices of our players tell our story better than we ever could. 
            Here's what they say about their experience with Empire Sports Agency.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-red-500/10 to-red-500/5 p-8 transition-all duration-300 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-red-500 opacity-50" />
              </div>

              {/* Quote Text */}
              <blockquote className="mb-6 text-lg leading-relaxed text-white/90 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Context */}
              <p className="mb-6 text-sm text-red-500 font-medium italic">
                {testimonial.context}
              </p>

              {/* Player Info */}
              <div className="flex items-center gap-4">
                {/* Player Image */}
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-red-500/30">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.playerName}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Player Details */}
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white">{testimonial.playerName}</h4>
                  <p className="text-sm text-white/70">{testimonial.position}</p>
                  <p className="text-sm text-red-500 font-semibold">{testimonial.currentClub}</p>
                </div>

                {/* Rating */}
                <div className="flex flex-col items-end">
                  <div className="mb-1 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <span className="text-xs text-white/60">5/5 Rating</span>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16">
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
              <div>
                <div className="mb-2 text-3xl font-bold text-red-500 md:text-4xl">98%</div>
                <p className="text-white/80">Client Satisfaction Rate</p>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-red-500 md:text-4xl">100%</div>
                <p className="text-white/80">Contract Success Rate</p>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-red-500 md:text-4xl">15+</div>
                <p className="text-white/80">Years Average Partnership</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="mb-4 text-xl font-bold text-white md:text-2xl">
            Join Our Family of Champions
          </h3>
          <p className="mb-6 text-white/80">
            Experience the same level of dedication and expertise that our current players rave about.
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