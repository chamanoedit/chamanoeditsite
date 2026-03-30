"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"

const profiles = [
  {
    username: "@andrefernandes.ofc",
    followers: "3.1M SEGUIDORES",
    image: "/perfis/ANDREFERNANDES.png"
  },
  {
    username: "@chamadegui",
    followers: "65K SEGUIDORES",
    image: "/perfis/CHAMADEGUI.png"
  },
  {
    username: "@davidmirandaneto",
    followers: "247K SEGUIDORES",
    image: "/perfis/DAVIDMIRANDANETO.png"
  },
  {
    username: "@dunamismovement",
    followers: "872K SEGUIDORES",
    image: "/perfis/DUNAMIS.png"
  },
  {
    username: "@chrisduranoofficial",
    followers: "766K SEGUIDORES",
    image: "/perfis/DURANO.png"
  },
  {
    username: "@filipelevak",
    followers: "443K SEGUIDORES",
    image: "/perfis/FILIPELEVAK.png"
  },
  {
    username: "@jeffersonesuellen",
    followers: "2.9M SEGUIDORES",
    image: "/perfis/JEFFERSONESUELLEN.png"
  },
  {
    username: "@thiagolobos",
    followers: "1M SEGUIDORES",
    image: "/perfis/THIAGOLOBOS.png"
  },
]

export function FeaturesBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isPaused, setIsPaused] = useState(false)

  // Drag state
  const isMouseDown = useRef(false)
  const dragStartX = useRef<number | null>(null)
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Duplicar os perfis para criar o efeito de loop infinito
  const duplicatedProfiles = [...profiles, ...profiles, ...profiles]

  const pause = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    setIsPaused(true)
  }

  const resume = (delay = 1500) => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => setIsPaused(false), delay)
  }

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX
    pause()
  }
  const handleTouchEnd = () => {
    dragStartX.current = null
    resume(2000)
  }

  // Mouse handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isMouseDown.current = true
    dragStartX.current = e.clientX
    pause()
    e.preventDefault()
  }
  const handleMouseUp = () => {
    if (!isMouseDown.current) return
    isMouseDown.current = false
    dragStartX.current = null
    resume(1500)
  }

  return (
    <section ref={ref} className="py-10 pb-32 px-6 overflow-hidden rounded-t-[3rem] -mt-12 relative z-20" style={{ backgroundColor: "#ff0000" }}>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <p
          className="text-center text-5xl uppercase text-accent-foreground mb-6"
          style={{ fontFamily: "Tusker Grotesk, Impact, sans-serif", fontWeight: 700 }}
        >
          PERFIS QUE JÁ PROVARAM O MÉTODO CHAMA
        </p>

        {/* Carrossel de perfis — CSS animation para scroll suave e pausável */}
        <style>{`
          @keyframes marquee-scroll {
            0%   { transform: translateX(0%); }
            100% { transform: translateX(-33.333%); }
          }
          .marquee-track {
            animation: marquee-scroll 30s linear infinite;
          }
          .marquee-track.paused {
            animation-play-state: paused;
          }
        `}</style>

        <div
          className="relative w-full overflow-hidden py-4 select-none"
          style={{ cursor: isMouseDown.current ? "grabbing" : "grab" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className={`marquee-track flex gap-8 items-center${isPaused ? " paused" : ""}`} style={{ width: "max-content" }}>
            {duplicatedProfiles.map((profile, index) => (
              <div
                key={`${profile.username}-${index}`}
                className="flex items-center gap-4 flex-shrink-0"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-[3px] border-white flex-shrink-0">
                  <Image
                    src={profile.image}
                    alt={profile.username}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-base uppercase tracking-wide text-accent-foreground whitespace-nowrap"
                    style={{ fontFamily: "Tusker Grotesk, Impact, sans-serif", fontWeight: 700, letterSpacing: "-0.01em" }}
                  >
                    {profile.username}
                  </span>
                  <span className="text-xs uppercase tracking-wide text-accent-foreground/80 font-medium"
                    style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                    {profile.followers}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Gradientes nas bordas */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#ff0000] to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#ff0000] to-transparent pointer-events-none z-10" />
        </div>
      </motion.div>
    </section>
  )
}
