export function TalentHero() {
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
          <div className="max-w-4xl mt-20 p-3 -ml-20">
            <h2 className="mb-6 text-lg font-bold tracking-wider text-red-500 md:text-xl">TALENT</h2>
            <h1 className="mb-8 text-balance font-bold leading-tight tracking-tight text-white">
              <span className="block text-lg md:text-xl lg:text-2xl xl:text-3xl">OUR ROSTER SHOWCASES FOOTBALLERS AT THE</span>
              <span className="block text-lg md:text-xl lg:text-2xl xl:text-3xl">CROSSROADS OF UNWAVERING AMBITION, INNATE</span>
              <span className="block text-lg md:text-xl lg:text-2xl xl:text-3xl">TALENT, AND RELENTLESS DETERMINATION.</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}