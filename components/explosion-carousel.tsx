"use client"

import { useEffect, useState, useCallback, useRef } from "react"

const slides = [
  {
    name: "FLOPADO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/METODO1-CuI13O8maZT4onYaA3UcaRdFF3FG3R.png",
  },
  {
    name: "LOW",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/METODO2-PhpQ3Bat29U1M7Jh9QJo1dA9tDeEN8.png",
  },
  {
    name: "PRO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/METODO3-QkvIcSn8Kwn9F83ydnFBfKC4EzrHsh.png",
  },
  {
    name: "HOOK",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/METODO4-iIgu9ACeaTGGvAyAsYhYkYJUDfrztw.png",
  },
  {
    name: "EXPLOSIVO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/METODO5-0dD0kFyyZXGOU0RxEg6HszZzc9Z0sR.png",
  },
]

const GAP = 20
// Desktop: mostra 2.5 cards | Mobile: mostra 1.2 cards (maiores)
const CARD_WIDTH_DESKTOP = `calc((100% - ${GAP * 2}px) / 2.5)`
const CARD_WIDTH_MOBILE = `calc((100% - ${GAP}px) / 1.2)`

// Duplicate slides for seamless infinite loop
const infiniteSlides = [...slides, ...slides, ...slides]

export function ExplosionCarousel() {
  const [currentIndex, setCurrentIndex] = useState(slides.length)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Touch/Mouse drag state
  const touchStartX = useRef<number | null>(null)
  const touchCurrentX = useRef<number | null>(null)
  const isDragging = useRef(false)
  const isMouseDown = useRef(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const cardWidth = isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP

  const nextSlide = useCallback(() => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev + 1)
  }, [])

  const prevSlide = useCallback(() => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev - 1)
  }, [])

  useEffect(() => {
    if (currentIndex >= slides.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(slides.length)
      }, 500)
    }
    if (currentIndex <= 0) {
      setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(slides.length)
      }, 500)
    }
  }, [currentIndex])

  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => setIsTransitioning(true), 50)
    }
  }, [isTransitioning])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(nextSlide, 2500)
    return () => clearInterval(interval)
  }, [nextSlide, isPaused])

  // Touch handlers for mobile drag
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchCurrentX.current = e.touches[0].clientX
    isDragging.current = false
    setIsPaused(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchCurrentX.current = e.touches[0].clientX
    isDragging.current = true
  }

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchCurrentX.current !== null) {
      const diff = touchStartX.current - touchCurrentX.current
      if (Math.abs(diff) > 40) {
        if (diff > 0) nextSlide()
        else prevSlide()
      }
    }
    touchStartX.current = null
    touchCurrentX.current = null
    // Resume auto-play after 3s of inactivity
    setTimeout(() => setIsPaused(false), 3000)
  }

  const handleCardClick = () => {
    if (isDragging.current) return
    // Pause/resume on tap (mobile)
    setIsPaused((prev) => {
      if (!prev) {
        setTimeout(() => setIsPaused(false), 4000)
      }
      return !prev
    })
  }

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    isMouseDown.current = true
    isDragging.current = false
    touchStartX.current = e.clientX
    touchCurrentX.current = e.clientX
    setIsPaused(true)
    e.preventDefault()
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown.current) return
    touchCurrentX.current = e.clientX
    const diff = Math.abs((touchStartX.current ?? 0) - e.clientX)
    if (diff > 5) isDragging.current = true
  }

  const handleMouseUp = () => {
    if (!isMouseDown.current) return
    isMouseDown.current = false
    if (touchStartX.current !== null && touchCurrentX.current !== null) {
      const diff = touchStartX.current - touchCurrentX.current
      if (Math.abs(diff) > 40) {
        if (diff > 0) nextSlide()
        else prevSlide()
      }
    }
    touchStartX.current = null
    touchCurrentX.current = null
    setTimeout(() => {
      isDragging.current = false
      setIsPaused(false)
    }, 300)
  }

  const handleMouseLeaveTrack = () => {
    if (isMouseDown.current) handleMouseUp()
  }

  return (
    <section className="w-full pt-12 pb-20 rounded-t-[3rem] -mt-12 relative z-[45]" style={{ backgroundColor: "#111111" }}>

      {/* Header */}
      <div className="text-center mb-8 px-6">
        <h2
          className="uppercase leading-none mb-4"
          style={{
            fontFamily: "Tusker Grotesk, Impact, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            color: "#F2F0EA",
            letterSpacing: "-0.02em",
          }}
        >
          O Caminho da Explosão
        </h2>
        <p
          className="max-w-lg mx-auto leading-relaxed"
          style={{
            fontFamily: "Helvetica Neue, Arial, sans-serif",
            fontWeight: 400,
            fontSize: "1rem",
            color: "#888",
          }}
        >
          Esta trilha vai simplificar sua jornada de sucesso na edição viral em passos que facilitam seu resultado!
        </p>
      </div>

      {/* Pills */}
      <div className="flex justify-center gap-2 mb-8 px-6 flex-wrap">
        {slides.map((slide) => (
          <span
            key={slide.name}
            className="px-3 py-1 text-[10px] font-semibold uppercase tracking-widest"
            style={{
              fontFamily: "Helvetica Neue, Arial, sans-serif",
              backgroundColor: "transparent",
              color: "#555",
              border: "1px solid #2a2a2a",
              borderRadius: "999px",
            }}
          >
            {slide.name}
          </span>
        ))}
      </div>

      {/* Carousel */}
      <div
        className="relative overflow-hidden px-6 lg:px-12 select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeaveTrack}
        style={{ cursor: isMouseDown.current ? "grabbing" : "grab" }}
      >

        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: "120px",
            background: "linear-gradient(to right, transparent 0%, #111111 100%)",
          }}
        />

        {/* Track */}
        <div
          className="flex"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(calc(-${currentIndex} * (${cardWidth} + ${GAP}px)))`,
            transition: isTransitioning ? "transform 500ms ease-out" : "none",
          }}
        >
          {infiniteSlides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
              style={{
                width: cardWidth,
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
              onClick={handleCardClick}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.6)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.4)"
              }}
            >
              <img
                src={slide.image}
                alt={slide.name}
                className="w-full h-auto block"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pause indicator (mobile) */}
      {isPaused && isMobile && (
        <div className="flex justify-center mt-4">
          <span style={{
            fontFamily: "Helvetica Neue, Arial, sans-serif",
            fontSize: "0.75rem",
            color: "#555",
          }}>
            ⏸ toque para continuar
          </span>
        </div>
      )}

    </section>
  )
}
