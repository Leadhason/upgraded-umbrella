import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, MessageSquare, Users, Globe, Send } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Empire Sports Agency",
  description: "Get in touch with Empire Sports Agency's FIFA-licensed football agents. Contact us for player representation, transfer negotiations, and comprehensive football management services.",
  keywords: "contact empire sports agency, football agent contact, FIFA licensed agent, player representation contact, football management inquiry",
}

function ContactHero() {
  return (
    <section 
      className="relative min-h-[70vh] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/field.jpg')",
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      
      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[70vh] items-center px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl mt-20 p-3">
            <h2 className="mb-6 text-lg font-bold tracking-wider text-red-500 md:text-xl">CONTACT US</h2>
            <h1 className="mb-8 text-balance font-bold leading-tight tracking-tight text-white">
              <span className="block text-2xl md:text-3xl lg:text-4xl xl:text-5xl">START YOUR</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl xl:text-5xl">FOOTBALL JOURNEY</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-red-500">TODAY</span>
            </h1>
            <p className="mb-8 max-w-xl text-pretty text-md leading-relaxed text-white/90 md:text-lg">
              Ready to elevate your football career? Our FIFA-licensed agents are here to provide 
              world-class representation and comprehensive career management services.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center rounded-md bg-red-500 p-4 px-6 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-red-600"
              >
                GET IN TOUCH
              </a>
              <a
                href="#office-locations"
                className="inline-flex items-center justify-center rounded-md border-2 border-white px-6 p-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-white hover:text-black"
              >
                FIND US
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactMethods() {
  const methods = [
    {
      icon: Phone,
      title: "CALL US",
      primary: "+44 20 7946 0958",
      secondary: "+34 91 123 4567",
      description: "Available 24/7 for urgent player matters",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "EMAIL US",
      primary: "info@empiresports.com",
      secondary: "transfers@empiresports.com",
      description: "We respond within 2 hours during business days",
      action: "Send Email"
    },
    {
      icon: MessageSquare,
      title: "LIVE CHAT",
      primary: "Available 9 AM - 6 PM GMT",
      secondary: "Monday - Saturday",
      description: "Instant support for quick questions",
      action: "Start Chat"
    },
    {
      icon: Users,
      title: "BOOK MEETING",
      primary: "30-minute consultation",
      secondary: "In-person or virtual",
      description: "Schedule a meeting with our agents",
      action: "Book Now"
    }
  ]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-red-500 text-2xl md:text-3xl font-bold mb-6 tracking-wide">GET IN TOUCH</h2>
          <p className="text-white text-lg leading-relaxed max-w-2xl mx-auto">
            Multiple ways to connect with our team of FIFA-licensed football agents and industry experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methods.map((method, index) => (
            <div key={index} className="bg-[#0a2f2f] rounded-lg p-6 border border-white/20 hover:border-red-500/50 transition-all duration-300 text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-red-500/20 rounded-full border border-red-500/30">
                  <method.icon className="h-8 w-8 text-red-500" />
                </div>
              </div>
              
              <h3 className="text-white text-lg font-bold mb-4 tracking-wide">{method.title}</h3>
              
              <div className="space-y-2 mb-4">
                <p className="text-white/90 text-sm font-semibold">{method.primary}</p>
                <p className="text-white/70 text-sm">{method.secondary}</p>
              </div>
              
              <p className="text-white/80 text-sm leading-relaxed mb-6">{method.description}</p>
              
              <Button 
                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold text-sm tracking-wide"
              >
                {method.action}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  return (
    <section id="contact-form" className="bg-[#0a2f2f] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="text-red-500 text-2xl md:text-3xl font-bold mb-8 tracking-wide">SEND MESSAGE</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-bold tracking-wider mb-2">FIRST NAME *</label>
                  <input 
                    type="text"
                    className="w-full p-4 bg-black/20 border border-white/20 rounded-md text-white placeholder-white/50 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-bold tracking-wider mb-2">LAST NAME *</label>
                  <input 
                    type="text"
                    className="w-full p-4 bg-black/20 border border-white/20 rounded-md text-white placeholder-white/50 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-bold tracking-wider mb-2">EMAIL ADDRESS *</label>
                <input 
                  type="email"
                  className="w-full p-4 bg-black/20 border border-white/20 rounded-md text-white placeholder-white/50 focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-bold tracking-wider mb-2">PHONE NUMBER</label>
                <input 
                  type="tel"
                  className="w-full p-4 bg-black/20 border border-white/20 rounded-md text-white placeholder-white/50 focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-bold tracking-wider mb-2">INQUIRY TYPE *</label>
                <select className="w-full p-4 bg-black/20 border border-white/20 rounded-md text-white focus:border-red-500 focus:outline-none transition-colors">
                  <option value="">Select inquiry type</option>
                  <option value="player-representation">Player Representation</option>
                  <option value="transfer-negotiation">Transfer Negotiation</option>
                  <option value="marketing-branding">Marketing & Branding</option>
                  <option value="contract-review">Contract Review</option>
                  <option value="youth-development">Youth Development</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-white text-sm font-bold tracking-wider mb-2">CURRENT CLUB/LEAGUE</label>
                <input 
                  type="text"
                  className="w-full p-4 bg-black/20 border border-white/20 rounded-md text-white placeholder-white/50 focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="Enter your current club or league"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-bold tracking-wider mb-2">MESSAGE *</label>
                <textarea 
                  rows={6}
                  className="w-full p-4 bg-black/20 border border-white/20 rounded-md text-white placeholder-white/50 focus:border-red-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your goals, current situation, and how we can help..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="privacy"
                  className="mt-1 h-4 w-4 text-red-500 bg-black/20 border-white/20 rounded focus:ring-red-500"
                />
                <label htmlFor="privacy" className="text-white/80 text-sm leading-relaxed">
                  I agree to the privacy policy and consent to Empire Sports Agency contacting me about my inquiry. *
                </label>
              </div>

              <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold text-sm tracking-wider py-4">
                <Send className="h-4 w-4 mr-2" />
                SEND MESSAGE
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-6 tracking-wide">DIRECT CONTACT</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/20 rounded-full border border-red-500/30 flex-shrink-0">
                    <Mail className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">General Inquiries</h4>
                    <p className="text-white/70 text-sm">info@empiresports.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/20 rounded-full border border-red-500/30 flex-shrink-0">
                    <Users className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Player Representation</h4>
                    <p className="text-white/70 text-sm">players@empiresports.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/20 rounded-full border border-red-500/30 flex-shrink-0">
                    <Globe className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Transfer Department</h4>
                    <p className="text-white/70 text-sm">transfers@empiresports.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/20 rounded-full border border-red-500/30 flex-shrink-0">
                    <Phone className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">24/7 Hotline</h4>
                    <p className="text-white/70 text-sm">+44 20 7946 0958</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/20 rounded-lg p-6 border border-white/20">
              <h4 className="text-red-500 text-sm font-bold uppercase tracking-wider mb-4">Response Times</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">Email inquiries</span>
                  <span className="text-white text-sm font-semibold">2 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">Phone calls</span>
                  <span className="text-white text-sm font-semibold">Immediate</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">Meeting requests</span>
                  <span className="text-white text-sm font-semibold">24 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">Contract reviews</span>
                  <span className="text-white text-sm font-semibold">48 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function OfficeLocations() {
  const offices = [
    {
      city: "London",
      country: "United Kingdom",
      address: "25 Grosvenor Street, Mayfair",
      postal: "London W1K 4QN",
      phone: "+44 20 7946 0958",
      email: "london@empiresports.com",
      hours: "9 AM - 6 PM GMT",
      timezone: "GMT/BST",
      role: "Global Headquarters"
    },
    {
      city: "Madrid",
      country: "Spain", 
      address: "Calle de Serrano 88, 4º",
      postal: "28006 Madrid",
      phone: "+34 91 123 4567",
      email: "madrid@empiresports.com",
      hours: "9 AM - 6 PM CET",
      timezone: "CET/CEST",
      role: "European Hub"
    },
    {
      city: "Milan",
      country: "Italy",
      address: "Via Montenapoleone 21",
      postal: "20121 Milano MI",
      phone: "+39 02 1234 5678",
      email: "milan@empiresports.com", 
      hours: "9 AM - 6 PM CET",
      timezone: "CET/CEST",
      role: "Serie A Operations"
    }
  ]

  return (
    <section id="office-locations" className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-red-500 text-2xl md:text-3xl font-bold mb-6 tracking-wide">OFFICE LOCATIONS</h2>
          <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
            Visit us at our global offices or schedule a meeting with our local representatives in major football markets worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="bg-[#0a2f2f] rounded-lg p-6 border border-white/20 hover:border-red-500/50 transition-all duration-300">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="h-5 w-5 text-red-500" />
                  <h3 className="text-white text-xl font-bold">{office.city}</h3>
                </div>
                <p className="text-white/70 text-sm">{office.country}</p>
                <p className="text-red-500 text-sm font-bold tracking-wider">{office.role}</p>
              </div>

              {/* Address */}
              <div className="mb-6">
                <h4 className="text-white text-sm font-bold tracking-wider mb-2">ADDRESS</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  {office.address}<br />
                  {office.postal}
                </p>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-white text-sm font-bold tracking-wider mb-2">CONTACT</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-red-500" />
                      <span className="text-white/80 text-sm">{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-red-500" />
                      <span className="text-white/80 text-sm">{office.email}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white text-sm font-bold tracking-wider mb-2">HOURS</h4>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-red-500" />
                    <div>
                      <p className="text-white/80 text-sm">{office.hours}</p>
                      <p className="text-white/60 text-xs">{office.timezone}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold text-sm tracking-wide">
                GET DIRECTIONS
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const faqs = [
    {
      question: "How do I know if I need a football agent?",
      answer: "If you're a professional or semi-professional footballer looking to advance your career, negotiate contracts, or explore transfer opportunities, a FIFA-licensed agent can provide invaluable expertise and industry connections."
    },
    {
      question: "What makes Empire Sports Agency different?",
      answer: "Our comprehensive approach combines traditional representation with modern marketing strategies, data analytics, and global network. We focus on long-term career development, not just individual transfers."
    },
    {
      question: "How much do your services cost?",
      answer: "Our fees are competitive and transparent, typically based on a percentage of successful transfers or contracts negotiated. We offer free initial consultations to discuss your specific needs and goals."
    },
    {
      question: "Do you work with youth players?",
      answer: "Yes, we have specialized programs for promising youth players (16+) and work closely with academy systems to ensure proper development pathways and educational support."
    },
    {
      question: "Can you help with contract reviews?",
      answer: "Absolutely. Our legal team reviews all types of football contracts, including player agreements, endorsement deals, and image rights contracts to ensure your interests are protected."
    },
    {
      question: "How long does the transfer process take?",
      answer: "Transfer timelines vary depending on league regulations, club negotiations, and market conditions. Typically, the process can take 2-8 weeks once serious discussions begin."
    }
  ]

  return (
    <section className="bg-[#0a2f2f] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-red-500 text-2xl md:text-3xl font-bold mb-6 tracking-wide">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="text-white text-lg leading-relaxed">
            Get answers to common questions about our football representation and management services.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-black/20 rounded-lg border border-white/20 hover:border-red-500/50 transition-all duration-300">
              <div className="p-6">
                <h3 className="text-white text-lg font-bold mb-4 leading-tight">{faq.question}</h3>
                <p className="text-white/90 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/80 mb-6">Have more questions?</p>
          <Button className="bg-red-500 hover:bg-red-600 text-white font-bold text-sm tracking-wider px-8">
            CONTACT OUR TEAM
          </Button>
        </div>
      </div>
    </section>
  )
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header activeItem="CONTACT" />
      <ContactHero />
      <ContactMethods />
      <ContactForm />
      <OfficeLocations />
      <FAQ />
      <Footer />
    </main>
  )
}