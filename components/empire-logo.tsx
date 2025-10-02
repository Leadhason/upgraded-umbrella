export function EmpireLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-12 w-12">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          {/* Union Jack inspired design */}
          <rect width="100" height="100" fill="#E63946" />
          <path d="M50 0 L50 100 M0 50 L100 50" stroke="white" strokeWidth="8" />
          <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="8" />
          <path d="M50 0 L50 100 M0 50 L100 50" stroke="#E63946" strokeWidth="4" />
          <path d="M0 0 L100 100 M100 0 L0 100" stroke="#E63946" strokeWidth="4" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold leading-none tracking-tight text-white">EMPIRE</span>
        <span className="text-xs font-medium tracking-widest text-white/90">SPORTS AGENCY</span>
      </div>
    </div>
  )
}