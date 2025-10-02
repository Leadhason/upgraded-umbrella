"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

interface BioSheetProps {
  isOpen: boolean
  onClose: () => void
  name: string
  title: string
  bioContent: string
}

export function BioSheet({ isOpen, onClose, name, title, bioContent }: BioSheetProps) {
  const [mounted, setMounted] = useState(false)
  
  // Handle escape key press to close sheet
  useEffect(() => {
    setMounted(true)
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])
  
  // Handle click outside to close sheet
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!mounted) return null

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity"
          onClick={handleBackdropClick}
        >
          <div 
            className={`w-full max-w-2xl max-h-[90vh] bg-[#0d1f1f] overflow-y-auto shadow-xl transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
            } scrollbar-hide`}
            style={{
              scrollbarWidth: 'none', /* Firefox */
              msOverflowStyle: 'none', /* IE 10+ */
            }}
          >
            <div className="relative px-6 py-10 lg:px-12">
              {/* Close button */}
              <button 
                onClick={onClose}
                className="absolute right-6 top-6 rounded-full border border-white/20 bg-white/10 p-2 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
                aria-label="Close bio sheet"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Content */}
              <div className="mt-4">
                <h2 className="text-3xl font-bold uppercase tracking-wide text-white">
                  {name}
                </h2>
                <h3 className="mt-1 text-lg uppercase tracking-wider text-red-500">
                  {title}
                </h3>
                <div className="mt-6 h-px w-1/3 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>

                <div className="mt-8 space-y-6 text-white/90 pb-4">
                  {bioContent.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}