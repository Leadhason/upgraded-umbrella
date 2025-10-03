import type { Metadata } from "next"
import { Header } from "@/components/header"
import { TalentHero } from "@/components/talent-hero"
import { NbaRoster } from "@/components/nba-roster"
import { InternationalRoster } from "@/components/international-roster"
import { TransferSuccessStories } from "@/components/transfer-success-stories"
import { PlayerStatsAchievements } from "@/components/player-stats-achievements"
import { PlayerTestimonials } from "@/components/player-testimonials"
import { TransferMarketActivity } from "@/components/transfer-market-activity"
import { LifeSportsAgencyCTA } from "@/components/life-sports-cta"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Our Players | Empire Sports Agency",
  description: "Meet the elite footballers represented by Empire Sports Agency. Our roster showcases players at the crossroads of unwavering ambition, innate talent, and relentless determination.",
  keywords: "soccer players, football roster, Premier League players, European football, professional footballers, football representation, FIFA agents",
}

export default function TalentPage() {
  return (
    <main className="min-h-screen">
      <Header activeItem="TALENT" />
      <TalentHero />
      <NbaRoster />
      <InternationalRoster />
      <TransferSuccessStories />
      <PlayerStatsAchievements />
      <PlayerTestimonials />
      <TransferMarketActivity />
      <LifeSportsAgencyCTA />
      <ContactSection />
      <Footer />
    </main>
  )
}