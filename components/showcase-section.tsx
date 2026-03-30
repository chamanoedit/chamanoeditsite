"use client"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { X } from "lucide-react"

// Dados dos vídeos - vídeos locais da pasta public/videos
const videos = [
  {
    id: 1,
    videoUrl: "https://chamanoedit2.b-cdn.net/showcase1_1.mp4",
    thumbnail: "/videos/showcase1-thumb.jpg",
    title: "Vídeo 1",
  },
  {
    id: 2,
    videoUrl: "https://chamanoedit2.b-cdn.net/showcase2_1.mp4",
    thumbnail: "/videos/showcase2-thumb.jpg",
    title: "Vídeo 2",
  },
  {
    id: 3,
    videoUrl: "https://chamanoedit2.b-cdn.net/showcase3_1.mp4",
    thumbnail: "/videos/showcase3-thumb.jpg",
    title: "Vídeo 3",
  },
  {
    id: 4,
    videoUrl: "https://chamanoedit2.b-cdn.net/showcase4_1.mp4",
    thumbnail: "/videos/showcase4-thumb.jpg",
    title: "Vídeo 4",
  },
  {
    id: 5,
    videoUrl: "https://chamanoedit2.b-cdn.net/showcase5_1.mp4",
    thumbnail: "/videos/showcase5-thumb.jpg",
    title: "Vídeo 5",
  },
  {
    id: 6,
    videoUrl: "https://chamanoedit2.b-cdn.net/showcase6_1.mp4",
    thumbnail: "/videos/showcase6-thumb.jpg",
    title: "Vídeo 6",
  },
  {
    id: 7,
    videoUrl: "https://chamanoedit2.b-cdn.net/showcase7_1.mp4",
    thumbnail: "/videos/showcase7-thumb.jpg",
    title: "Vídeo 7",
  },
  {
    id: 8,
    videoUrl: "https://chamanoedit2.b-cdn.net/showcase9_1.mp4",
    thumbnail: "/videos/showcase9-thumb.jpg",
    title: "Vídeo 9",
  },
  {
    id: 9,
    videoUrl: "https://chamanoedit2.b-cdn.net/showcase10_1.mp4",
    thumbnail: "/videos/showcase10-thumb.jpg",
    title: "Vídeo 10",
  },
  {
    id: 10,
    videoUrl: "https://chamanoedit2.b-cdn.net/showcase11_1.mp4",
    thumbnail: "/videos/showcase11-thumb.jpg",
    title: "Vídeo 11",
  },
  {
    id: 11,
    videoUrl: "https://chamanoedit2.b-cdn.net/showcase12_1.mp4",
    thumbnail: "/videos/showcase12-thumb.jpg",
    title: "Vídeo 12",
  },
  {
    id: 12,
    videoUrl: "https://chamanoedit2.b-cdn.net/showcase13_1.mp4",
    thumbnail: "/videos/showcase13-thumb.jpg",
    title: "Vídeo 13",
  },
]

export function ShowcaseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null)
  const isPausedRef = useRef(false)

  // Drag state (touch + mouse)
  const dragStartX = useRef<number | null>(null)
  const dragCurrentX = useRef<number | null>(null)
  const isDragging = useRef(false)
  const isMouseDown = useRef(false)
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const startCarousel = () => {
    controls.start({
      x: ["-33.333%", "-66.666%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: videos.length * 4.5,
          ease: "linear",
        },
      },
    })
  }

  // Carrossel automático infinito
  useEffect(() => {
    if (!isInView) return
    startCarousel()
    return () => { controls.stop() }
  }, [isInView, controls])

  const pauseCarousel = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    isPausedRef.current = true
    controls.stop()
  }

  const resumeCarousel = (delay = 1500) => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => {
      isDragging.current = false
      isMouseDown.current = false
      isPausedRef.current = false
      startCarousel()
    }, delay)
  }

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX
    isDragging.current = false
    pauseCarousel()
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    dragCurrentX.current = e.touches[0].clientX
    isDragging.current = true
  }
  const handleTouchEnd = () => {
    dragStartX.current = null
    dragCurrentX.current = null
    resumeCarousel(2000)
  }

  // Mouse handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isMouseDown.current = true
    isDragging.current = false
    dragStartX.current = e.clientX
    pauseCarousel()
    e.preventDefault()
  }
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown.current) return
    if (Math.abs((dragStartX.current ?? 0) - e.clientX) > 5) isDragging.current = true
  }
  const handleMouseUp = () => {
    if (!isMouseDown.current) return
    dragStartX.current = null
    resumeCarousel(1500)
  }

  const handleVideoClick = (video: typeof videos[0]) => {
    if (isDragging.current) return
    setSelectedVideo(video)
  }

  const closeModal = () => {
    setSelectedVideo(null)
  }

  return (
    <>
      <section ref={ref} className="bg-[#090909] py-20 px-6 rounded-t-[3rem] -mt-12 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-12"
          >
            {/* Header */}
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:items-center md:gap-6">
              <motion.div variants={itemVariants} transition={{ duration: 0.6 }} className="text-center md:text-left">
                <p className="text-sm font-medium text-accent-foreground">Videos editados</p>
                <p className="text-sm font-medium text-accent-foreground">com o método chama</p>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-7xl text-center"
                style={{ fontFamily: "Tusker Grotesk, Impact, sans-serif", fontWeight: 700 }}
              >
                QUER EDITAR NESSE NÍVEL?
              </motion.h2>

              <motion.div variants={itemVariants} transition={{ duration: 0.6 }} className="text-center md:text-right">
                <p className="text-sm font-medium text-accent-foreground">Cortes que alcançaram</p>
                <p className="text-sm font-medium text-accent-foreground">milhões de views</p>
              </motion.div>
            </div>

            {/* Carrossel de Video cards */}
            <div
              className="relative overflow-hidden -mx-6 px-6 select-none"
              style={{ cursor: isMouseDown.current ? "grabbing" : "grab" }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <motion.div
                animate={controls}
                className="flex gap-4 md:gap-6 py-4"
                style={{ width: "fit-content" }}
              >
                {/* Duplicamos os vídeos para criar o efeito infinito */}
                {[...videos, ...videos, ...videos].map((video, index) => (
                  <motion.div
                    key={`${video.id}-${index}`}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onClick={() => handleVideoClick(video)}
                    className="flex-shrink-0 w-[240px] md:w-[280px] aspect-[9/16] bg-background rounded-[2rem] overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-2xl"
                  >
                    {/* Thumbnail do vídeo */}
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />

                    {/* Overlay escuro ao hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0.7 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/30 transition-colors"
                      >
                        <div className="w-0 h-0 border-l-[14px] md:border-l-[16px] border-l-primary border-t-[9px] md:border-t-[10px] border-t-transparent border-b-[9px] md:border-b-[10px] border-b-transparent ml-1" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal de vídeo */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-6"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-3xl md:max-w-5xl aspect-[9/16] md:aspect-video bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão fechar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Player de vídeo HTML5 */}
            <video
              src={selectedVideo.videoUrl}
              className="w-full h-full object-contain"
              controls
              autoPlay
              playsInline
            />
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
