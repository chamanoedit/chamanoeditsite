"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { BookOpen, RefreshCw, Users, Gift } from "lucide-react"

// Row 1 modules (1-4) - scrolls right
const modulesRow1 = [
  { id: 1, image: "/images/modulos/imagem-modulo1.png" },
  { id: 2, image: "/images/modulos/imagem-modulo2.png" },
  { id: 3, image: "/images/modulos/imagem-modulo3.png" },
  { id: 4, image: "/images/modulos/imagem-modulo4.png" },
]

// Row 2 modules (5-8) - scrolls left
const modulesRow2 = [
  { id: 5, image: "/images/modulos/imagem-modulo5.png" },
  { id: 6, image: "/images/modulos/imagem-modulo6.png" },
  { id: 7, image: "/images/modulos/imagem-modulo7.png" },
  { id: 8, image: "/images/modulos/imagem-modulo8.png" },
]

// Column 1 modules for desktop (1-8)
const modulesColumn1 = [
  { id: 1, image: "/images/modulos/imagem-modulo1.png" },
  { id: 2, image: "/images/modulos/imagem-modulo2.png" },
  { id: 3, image: "/images/modulos/imagem-modulo3.png" },
  { id: 4, image: "/images/modulos/imagem-modulo4.png" },
  { id: 5, image: "/images/modulos/imagem-modulo5.png" },
  { id: 6, image: "/images/modulos/imagem-modulo6.png" },
  { id: 7, image: "/images/modulos/imagem-modulo7.png" },
  { id: 8, image: "/images/modulos/imagem-modulo8.png" },
]

// Column 2 modules for desktop (9-16)
const modulesColumn2 = [
  { id: 9, image: "/images/modulos/imagem-modulo9.png" },
  { id: 10, image: "/images/modulos/imagem-modulo10.png" },
  { id: 11, image: "/images/modulos/imagem-modulo11.png" },
  { id: 12, image: "/images/modulos/imagem-modulo12.png" },
  { id: 13, image: "/images/modulos/imagem-modulo13.png" },
  { id: 14, image: "/images/modulos/imagem-modulo14.png" },
  { id: 15, image: "/images/modulos/imagem-modulo15.png" },
  { id: 16, image: "/images/modulos/imagem-modulo16.png" },
]

export function ModulesSection() {
  return (
    <section className="relative pt-24 pb-32 rounded-t-[3rem] -mt-12 z-10" style={{ backgroundColor: "#111111" }}>
      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col">
        {/* Text Content - Centered */}
        <motion.div
          className="flex flex-col items-center justify-center px-6 mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/text-aprender-logo.png"
            alt="o que você irá aprender"
            width={600}
            height={300}
            className="w-full max-w-md"
          />
        </motion.div>

        {/* Benefits Section - Mobile */}
        <motion.div
          className="px-6 mb-8 space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-bold text-white text-center">
            Ao entrar hoje no CHAMANOEDIT, você recebe:
          </h3>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#9999FF]/20 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/pr-colorido.png"
                  alt="Adobe Premiere"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
              </div>
              <span className="text-[#e0e0e0] text-sm">Curso completo de edição no Adobe Premiere</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-4 h-4 text-amber-400" />
              </div>
              <span className="text-[#e0e0e0] text-sm">16 módulos + 45 aulas práticas</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <RefreshCw className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-[#e0e0e0] text-sm">Atualizações inclusas</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-4 h-4 text-green-400" />
              </div>
              <span className="text-[#e0e0e0] text-sm">Comunidade exclusiva no WhatsApp</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                <Gift className="w-4 h-4 text-pink-400" />
              </div>
              <span className="text-[#e0e0e0] text-sm">BÔNUS — pack transições, molduras, sfx, trilhas virais, fontes e mais</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#2a2a2a] border border-[#3a3a3a]">
            <h4 className="text-base font-bold text-white mb-2">🎁 BASIC PACK DE PRESENTE PRA VOCÊ</h4>
            <ul className="space-y-1 text-[#c0c0c0] text-xs">
              <li>13 presets nativos do Premiere</li>
              <li>Animações e efeitos prontos para agilizar sua edição</li>
            </ul>
          </div>

          <p className="text-[#a0a0a0] text-xs italic text-center">
            Um método completo, validado e aplicado por quem vive disso há anos.
          </p>
        </motion.div>

        {/* Horizontal Scrolling Rows */}
        <div className="w-full overflow-hidden space-y-2">
          {/* Row 1 - Scrolls Right */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-2"
              animate={{
                x: [0, -300 * modulesRow1.length],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 15,
                  ease: "linear",
                },
              }}
            >
              {[...modulesRow1, ...modulesRow1, ...modulesRow1].map((module, index) => (
                <div key={`row1-${index}`} className="flex-shrink-0 w-[280px] aspect-[404/227] bg-gray-900">
                  <Image
                    src={module.image || "/placeholder.svg"}
                    alt={`Módulo ${module.id}`}
                    width={404}
                    height={227}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Scrolls Left */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-2"
              animate={{
                x: [-300 * modulesRow2.length, 0],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 15,
                  ease: "linear",
                },
              }}
            >
              {[...modulesRow2, ...modulesRow2, ...modulesRow2].map((module, index) => (
                <div key={`row2-${index}`} className="flex-shrink-0 w-[280px] aspect-[404/227] bg-gray-900">
                  <Image
                    src={module.image || "/placeholder.svg"}
                    alt={`Módulo ${module.id}`}
                    width={404}
                    height={227}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Text Content */}
          <motion.div
            className="flex flex-col justify-start space-y-6 sticky top-8 self-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="relative lg:mt-0 center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/images/text-capas-modulos.png"
                alt="essas são as capas dos módulos"
                width={200}
                height={60}
                className="opacity-100"
              />
            </motion.div>

            <motion.div
              className="relative center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src="/images/text-aprender-logo.png"
                alt="o que você irá aprender"
                width={600}
                height={300}
                className="w-full max-w-2xl"
              />
            </motion.div>

            {/* Benefits Section */}
            <motion.div
              className="mt-12 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Ao entrar hoje no CHAMANOEDIT, você recebe:
              </h3>

              <div className="space-y-4">
                {/* Premiere Course */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#9999FF]/20 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/pr-colorido.png"
                      alt="Adobe Premiere"
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="text-[#e0e0e0] text-base">Curso completo de edição no Adobe Premiere</span>
                </div>

                {/* Modules and Classes */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="text-[#e0e0e0] text-base">16 módulos + 45 aulas práticas</span>
                </div>

                {/* Updates */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-[#e0e0e0] text-base">Atualizações inclusas</span>
                </div>

                {/* Community */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-[#e0e0e0] text-base">Comunidade exclusiva no WhatsApp</span>
                </div>

                {/* Bonus */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <Gift className="w-5 h-5 text-pink-400" />
                  </div>
                  <span className="text-[#e0e0e0] text-base">BÔNUS — pack transições, molduras, sfx, trilhas virais, fontes e mais</span>
                </div>
              </div>

              {/* Basic Pack Card */}
              <motion.div
                className="mt-8 p-6 rounded-2xl bg-[#2a2a2a] border border-[#3a3a3a]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h4 className="text-lg font-bold text-white mb-3">🎁 BASIC PACK DE PRESENTE PRA VOCÊ</h4>
                <ul className="space-y-2 text-[#c0c0c0] text-sm">
                  <li>13 presets nativos do Premiere</li>
                  <li>Animações e efeitos prontos para agilizar sua edição</li>
                </ul>
              </motion.div>

              <p className="text-[#a0a0a0] text-sm italic mt-6">
                Um método completo, validado e aplicado por quem vive disso há anos.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Infinite Scrolling Cards (Vertical) */}
          <motion.div
            className="relative h-[800px] overflow-hidden self-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex gap-4">
              {/* Column 1 - Modules 1-8 */}
              <motion.div
                className="flex-1 space-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  className="space-y-2"
                  animate={{
                    y: [0, -100 * modulesColumn1.length],
                  }}
                  transition={{
                    y: {
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      duration: 20,
                      ease: "linear",
                    },
                  }}
                >
                  {[...modulesColumn1, ...modulesColumn1].map((module, index) => (
                    <div key={`col1-${index}`} className="overflow-hidden aspect-[404/227] bg-gray-900">
                      <Image
                        src={module.image || "/placeholder.svg"}
                        alt={`Módulo ${module.id}`}
                        width={404}
                        height={227}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Column 2 - Modules 9-16 - Scrolls in opposite direction */}
              <motion.div
                className="flex-1 space-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  className="space-y-2"
                  animate={{
                    y: [-100 * modulesColumn2.length, 0],
                  }}
                  transition={{
                    y: {
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      duration: 20,
                      ease: "linear",
                    },
                  }}
                >
                  {[...modulesColumn2, ...modulesColumn2].map((module, index) => (
                    <div key={`col2-${index}`} className="overflow-hidden aspect-[404/227] bg-gray-900">
                      <Image
                        src={module.image || "/placeholder.svg"}
                        alt={`Módulo ${module.id}`}
                        width={404}
                        height={227}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Gradient overlays for smooth fade */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1e1e1e] to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1e1e1e] to-transparent pointer-events-none z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
