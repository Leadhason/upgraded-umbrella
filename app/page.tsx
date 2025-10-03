import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ExpertiseQuote } from "@/components/who-we-are"
import {  ExpertiseServices } from "@/components/what-we-do"
import { ServicesDeepDive } from "@/components/services-deep-dive"
import { ClientSuccessStories } from "@/components/client-success-stories"
import { Leadership } from "@/components/leadership"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ExpertiseQuote />
      <div className="relative h-24 w-full overflow-hidden bg-black">
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto h-px w-1/3 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        </div>
      </div>
      <ExpertiseServices />
      <ServicesDeepDive />
      <ClientSuccessStories />
      <Leadership/>
      <ContactSection />
      <Footer />
    </main>
  )
}
