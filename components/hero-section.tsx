"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    // Mobile layout: vídeo no topo + conteúdo logo abaixo; Desktop: full-screen hero
    <section className="relative overflow-hidden" style={{ backgroundColor: "#111111" }}>

      {/* ── DESKTOP: hero full-screen ── */}
      <div className="hidden md:flex relative min-h-screen items-center justify-center px-6 py-20">
        {/* Background Video desktop */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video autoPlay loop muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover">
            <source src="https://chamanoedit.b-cdn.net/bg.mov" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Decorative */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 right-20 w-64 h-64 border-2 border-foreground/20 rounded-full z-10"
        />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full flex flex-col items-center gap-12"
          >
            <div className="relative w-full max-w-6xl">
              <Image
                src="/images/headline2.png"
                alt="Sua Mensagem Alcançando Nações - Se torne um editor de resultados"
                width={1400}
                height={600}
                className="w-full h-auto"
                priority
              />
              <h1 className="sr-only">chamanoedit · curso chama de gui · sua mensagem alcançando as nações</h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-row items-center justify-center gap-3 w-full"
            >
              <a href="#aula-gratuita">
                <Button size="lg" className="cursor-pointer hover:brightness-110 hover:scale-[1.01] active:scale-[0.98] transition-all duration-200"
                  style={{ fontFamily: "Neue Montreal, Helvetica Neue, Arial, sans-serif", fontWeight: 900, fontSize: "30px", letterSpacing: "-0.01em", backgroundColor: "#F2F0EA", color: "#111111", lineHeight: 1, borderRadius: "999px", paddingLeft: "5rem", paddingRight: "5rem", paddingTop: "2rem", paddingBottom: "2rem" }}>
                  assistir aula gratuita!
                </Button>
              </a>
              <a href="#pricing">
                <Button size="lg" className="cursor-pointer hover:brightness-110 hover:scale-[1.01] active:scale-[0.98] transition-all duration-200"
                  style={{ fontFamily: "Neue Montreal, Helvetica Neue, Arial, sans-serif", fontWeight: 900, fontSize: "30px", letterSpacing: "-0.01em", backgroundColor: "#5da533", color: "#ffffff", lineHeight: 1, borderRadius: "999px", paddingLeft: "5rem", paddingRight: "5rem", paddingTop: "2rem", paddingBottom: "2rem" }}>
                  adquirir CHAMANOEDIT
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative sketch lines */}
        <motion.svg
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="absolute bottom-32 right-20 w-32 h-32 text-foreground"
          viewBox="0 0 100 100"
        >
          <motion.path d="M 10 10 L 30 40 L 50 20 L 70 50 L 90 30" stroke="currentColor" strokeWidth="2" fill="none" />
          <motion.path d="M 20 60 L 40 80 L 60 70 L 80 90" stroke="currentColor" strokeWidth="2" fill="none" />
        </motion.svg>

        {/* Aba arredondada de transição — desktop */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
          style={{
            height: "60px",
            backgroundColor: "#111111",
            borderRadius: "3rem 3rem 0 0",
          }}
        />
      </div>

      {/* ── MOBILE: vídeo 50svh com conteúdo sobreposto ── */}
      <div className="md:hidden relative" style={{ height: "50svh" }}>
        {/* Vídeo de fundo */}
        <video autoPlay loop muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover">
          <source src="https://chamanoedit.b-cdn.net/bg.mov" type="video/mp4" />
        </video>
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Fade na base para a próxima section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#111111]" />

        {/* Conteúdo sobre o vídeo — centralizado verticalmente */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-5 z-10 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <Image
              src="/images/headline2.png"
              alt="Sua Mensagem Alcançando Nações"
              width={1400}
              height={600}
              className="w-full h-auto"
              priority
            />
            <h1 className="sr-only">chamanoedit · sua mensagem alcançando as nações</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-3 w-full"
          >
            <a href="#aula-gratuita" className="w-full">
              <Button size="lg" className="w-full cursor-pointer hover:brightness-110 active:scale-[0.98] transition-all duration-200"
                style={{ fontFamily: "Neue Montreal, Helvetica Neue, Arial, sans-serif", fontWeight: 900, fontSize: "16px", letterSpacing: "-0.01em", backgroundColor: "#F2F0EA", color: "#111111", lineHeight: 1, borderRadius: "999px", paddingTop: "1.1rem", paddingBottom: "1.1rem" }}>
                assistir aula gratuita!
              </Button>
            </a>
            <a href="#pricing" className="w-full">
              <Button size="lg" className="w-full cursor-pointer hover:brightness-110 active:scale-[0.98] transition-all duration-200"
                style={{ fontFamily: "Neue Montreal, Helvetica Neue, Arial, sans-serif", fontWeight: 900, fontSize: "16px", letterSpacing: "-0.01em", backgroundColor: "#5da533", color: "#ffffff", lineHeight: 1, borderRadius: "999px", paddingTop: "1.1rem", paddingBottom: "1.1rem" }}>
                adquirir CHAMANOEDIT
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
