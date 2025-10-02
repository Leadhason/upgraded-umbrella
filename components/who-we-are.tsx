export function ExpertiseQuote() {
  return (
    <section id="expertise" className="bg-[#0a2f2f] px-6 py-10 lg:px-12">
      <div className="mx-auto max-w-5xl mb-10">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="mb-8 text-2xl font-bold tracking-wider text-red-500 md:text-3xl">WHO WE ARE</h2>
          <h1 className="max-w-5xl font-display text-xl font-bold uppercase leading-tight text-white md:text-2xl lg:text-3xl xl:text-4xl">
            AT EMPIRE SPORTS AGENCY, WE PRIDE OURSELVES ON BEING A PREMIER GLOBAL SPORTS AGENCY, DEDICATED TO ENHANCING
            BOTH THE ATHLETIC PERFORMANCE AND BRAND STATURE OF OUR ESTEEMED CLIENT-PARTNERS.
          </h1>
        </div>


        {/* Quote Text with Icons at Start and End */}
        <div className="space-y-8 text-center flex flex-col items-center">
          <div className="mb-6 mt-10 flex justify-center">
            <svg
              width="60"
              height="38"
              viewBox="0 0 50 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-red-500"
            >
              <path
                d="M0 48V28.8C0 20.8 1.6 14.1333 4.8 8.8C8.13333 3.46667 13.3333 0 20.4 0V9.6C17.0667 10.1333 14.4 11.7333 12.4 14.4C10.5333 17.0667 9.6 20.2667 9.6 24H24V48H0ZM36 48V28.8C36 20.8 37.6 14.1333 40.8 8.8C44.1333 3.46667 49.3333 0 56.4 0V9.6C53.0667 10.1333 50.4 11.7333 48.4 14.4C46.5333 17.0667 45.6 20.2667 45.6 24H60V48H36Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-white md:text-md lg:text-lg">
              As the guiding force behind EMPIRE SPORTS Agency, I stand firm in the belief that our agency's hallmark is our
              integrity, passion and unwavering dedication to our clients. Whether they're rising stars or established
              icons, we treat every athlete as a valued partner in their journey to greatness.
            </p>
            <p className="text-sm leading-relaxed text-white md:text-md lg:text-lg mt-6">
              Our approach is built on trust, transparency, and a deep understanding of the sports industry. We don't just
              manage careers; we build legacies that extend far beyond the playing field.
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <svg
              width="60"
              height="38"
              viewBox="0 0 50 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-red-500"
            >
              <path
                d="M0 48V28.8C0 20.8 1.6 14.1333 4.8 8.8C8.13333 3.46667 13.3333 0 20.4 0V9.6C17.0667 10.1333 14.4 11.7333 12.4 14.4C10.5333 17.0667 9.6 20.2667 9.6 24H24V48H0ZM36 48V28.8C36 20.8 37.6 14.1333 40.8 8.8C44.1333 3.46667 49.3333 0 56.4 0V9.6C53.0667 10.1333 50.4 11.7333 48.4 14.4C46.5333 17.0667 45.6 20.2667 45.6 24H60V48H36Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* Author */}
        <div className="mt-16 text-center">
          <p className="text-md font-bold text-white md:text-lg">Alex Morgan</p>
          <p className="mt-2 text-md text-white/80">Founder & CEO, EMPIRE SPORTS Agency</p>
        </div>
      </div>
    </section>
  )
}
