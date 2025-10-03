export function ExpertiseServices() {
  const services = [
    {
      number: "01.",
      title: "CONTRACT NEGOTIATION",
      description: "Expertise and persistence in transfer negotiations culminate in successful contract outcomes.",
    },
    {
      number: "02.",
      title: "MARKETING",
      description: "Strategically capitalizing on achievements to forge compelling narratives and bolster brand value.",
    },
    {
      number: "03.",
      title: "PERFORMANCE OPTIMIZATION",
      description:
        "Utilizing cutting-edge technology and analytics to optimize each player's on-pitch performance.",
    },
    {
      number: "04.",
      title: "SOCIAL MEDIA STRATEGY",
      description: "Crafting authentic, dynamic social media strategies to boost engagement and brand growth.",
    },
    {
      number: "05.",
      title: "PHILANTHROPY",
      description: "Fostering a legacy of giving, empowering players to make a meaningful impact beyond football.",
    },
    {
      number: "06.",
      title: "BUSINESS PLANNING",
      description:
        "Guiding our players to build lasting legacies with savvy off-pitch business investments and wealth generation strategies.",
    },
  ]

  return (
    <section id="services" className="bg-[#0a2e2e] py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* What We Do Header */}
        <div className="mb-16">
          <h2 className="text-red-500 text-center text-lg md:text-xl font-bold mb-8 tracking-wide">WHAT WE DO</h2>
          <p className="text-white text-xl md:text-2xl lg:text-3xl text-center font-bold leading-tight tracking-wide">
            DELIVERING ALL-ENCOMPASSING FOOTBALLER MANAGEMENT, INDIVIDUAL BRAND BUILDING AND ELITE REPRESENTATION, OUR TEAM
            AT EMPIRE SPORTS AGENCY COMMITS TO INNOVATIVE, FIRST-CLASS SERVICE ACROSS ALL FACETS OF OUR SOCCER CLIENTS&apos;
            CAREERS.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-24 items-center justify-center">
          {services.map((service) => (
            <div key={service.number} className="space-y-4">
              <div className="text-red-500 text-3xl md:text-4xl font-bold">{service.number}</div>
              <h3 className="text-white text-md font-bold tracking-wide border-b border-white/30 pb-4 text-nowrap">
                {service.title}
              </h3>
              <p className="text-white/90 text-base text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
