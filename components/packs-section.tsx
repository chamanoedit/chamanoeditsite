"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function PacksSection() {
  return (
    <section className="relative overflow-hidden bg-[#c1c2c3]">
      {/* ========== MOBILE VERSION ========== */}
      <div className="lg:hidden">
        {/* SECTION 1: CABECALHO COM LIVROS */}
        <div className="relative">
          {/* Rounded top transition from dark section */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-[#1e1e1e] rounded-b-[2rem] z-10" />

          {/* Cabecalho Livros */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full pt-16 pb-4"
          >
            <div className="max-w-[1080px] mx-auto px-4">
              <Image
                src="/images/cabecalho-livros.png"
                alt="O que é Basic Pack e ChamaPro"
                width={1920}
                height={1080}
                priority
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* SECTION 2: VIDEO PACK */}
        <div className="relative py-8 z-10">
          <div className="max-w-5xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-[#1a1a1a] tracking-tighter text-3xl font-bold text-center font-helvetica mb-6"
            >
              VIDEO PACK
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden relative z-20"
            >
              <video
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
                poster="/images/video-poster.jpg"
              >
                <source src="https://chamanoedit2.b-cdn.net/chamapack.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </motion.div>
          </div>
        </div>

        {/* SECTION 3: BASIC PACK */}
        <div className="relative overflow-visible -mt-10">
          <div className="absolute inset-x-0 top-0 z-0 flex justify-end pr-[-5%]">
            <Image
              src="/images/basic-pack-design2.png"
              alt="Basic Pack Background"
              width={1200}
              height={1400}
              className="w-[90%] max-w-[900px] h-auto object-contain translate-x-[10%]"
            />
          </div>

          <div className="relative z-10 max-w-9xl mx-auto px-4 pt-20 pb-12">
            <div className="flex flex-col gap-6 items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-full flex justify-center"
              >
                <Image
                  src="/images/basic-pack-premiere.png"
                  alt="Basic Pack Premiere"
                  width={470}
                  height={380}
                  className="w-[85%] max-w-[470px] h-auto shadow-xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-2 text-center"
              >
                <h3 className="text-3xl tracking-tighter font-bold text-black font-helvetica">Basic Pack</h3>
                <p className="text-base tracking-tighter text-black font-helvetica leading-4">
                  Gratuito para<br />alunos ChamanoEdit
                </p>
                <div className="text-black tracking-tighter font-helvetica text-base space-y-[-8px]">
                  <p>+10 presets</p>
                  <p>audio</p>
                  <p>movimento</p>
                  <p>text fx</p>
                </div>
                <div className="pt-2">
                  <p className="text-2xl font-bold text-black font-helvetica relative inline-block">
                    <span className="text-xs font-normal text-gray-500 align-top mr-0.5">de</span>R$97,00
                    <span className="absolute left-0 right-0 top-1/2 h-1 bg-[#e63946] -rotate-12"></span>
                  </p>
                  <p className="text-5xl font-bold text-[#5da533] font-helvetica mt-1 leading-none">
                    <span className="text-base font-normal align-top mr-1">por</span>R$0
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* SECTION 4: CHAMAPRO */}
        <div className="relative mt-16 overflow-visible">
          <div className="absolute inset-x-0 top-0 z-0 flex justify-center">
            <Image
              src="/images/chama-pro-design2.png"
              alt="ChamaPro Background"
              width={1200}
              height={1400}
              className="w-[95%] max-w-[900px] h-auto object-contain"
            />
          </div>

          <div className="relative z-10 max-w-9xl mx-auto px-4 pt-20 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center mb-6"
            >
              <Image
                src="/images/pro-pack-premiere.png"
                alt="ChamaPro Premiere"
                width={900}
                height={500}
                className="w-[90%] max-w-[880px] h-auto shadow-xl"
              />
            </motion.div>

            <div className="w-[90%] max-w-[900px] mx-auto flex flex-col items-center gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-1 text-center"
              >
                <h3 className="text-4xl tracking-tighter font-bold text-white font-helvetica">ChamaPro</h3>
                <p className="text-xl tracking-tighter text-black font-helvetica leading-tight">
                  Pack Profissional de<br />presets nativos
                </p>
                <div className="text-black tracking-tighter font-helvetica text-lg space-y-[-6px]">
                  <p>+100 presets</p>
                  <p>audio</p>
                  <p>movimento</p>
                  <p>camera move</p>
                  <p>text fx</p>
                  <p>pro effects</p>
                  <p>Basic pack incluso</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex-shrink-0"
              >
                <Image
                  src="/images/preco-pro.png"
                  alt="10x R$19,70"
                  width={400}
                  height={200}
                  className="w-auto h-auto max-w-[250px]"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* SECTION 5: CHAMAPACK PRO FINAL CARD */}
        <div className="relative py-8">
          <div className="max-w-4xl mx-auto px-4 flex justify-center">
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                console.log("ChamaPack PRO card clicked")
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="cursor-pointer hover:scale-[1.02] transition-transform duration-300 w-full flex justify-center"
            >
              <Image
                src="/images/chama-pack-pro-final-card.png"
                alt="ChamaPack PRO"
                width={1200}
                height={400}
                className="w-[95%] max-w-[900px] h-auto"
              />
            </motion.a>
          </div>
        </div>

        {/* SECTION 6: CTA BUTTONS */}
        <div className="relative py-8 pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center items-center gap-4"
            >
              <a href="#pricing" className="w-full">
                <Button
                  size="lg"
                  className="text-white hover:opacity-90 text-lg px-8 py-6 tracking-tight rounded-2xl flex flex-col items-center justify-center cursor-pointer leading-none gap-0 w-full"
                  style={{ fontFamily: "Neue Montreal, sans-serif", fontWeight: 800, backgroundColor: "#5da533" }}
                >
                  <span>Curso Completo!</span>
                  <span>+ ChamaPack PRO</span>
                </Button>
              </a>
              <Button
                size="lg"
                className="text-white hover:opacity-90 text-lg px-8 py-6 tracking-tight rounded-2xl flex items-center justify-center cursor-pointer w-full"
                style={{ fontFamily: "Neue Montreal, sans-serif", fontWeight: 800, backgroundColor: "#0099CC", lineHeight: 1.2 }}
              >
                ChamaPack
              </Button>
            </motion.div>
          </div>

          {/* Rounded bottom transition */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#1e1e1e] rounded-t-[2rem]" />
        </div>
      </div>

      {/* ========== DESKTOP VERSION ========== */}
      <div className="hidden lg:block relative bg-[#c1c2c3]">
        {/* Rounded top transition from dark section */}
        <div className="absolute top-0 left-0 right-0 h-10 lg:h-12 xl:h-14 bg-[#1e1e1e] rounded-b-[2rem] lg:rounded-b-[3rem] z-40" />

        <div className="relative pt-12 lg:pt-16 xl:pt-20 pb-12 lg:pb-16 xl:pb-20">
          {/* Container principal */}
          <div className="relative w-full max-w-[1920px] mx-auto">
            {/* Layer 1: LIVROS.PNG - Caixas dos packs no canto superior esquerdo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute -top-3 lg:-top-5 xl:-top-8 left-0 w-[55%] lg:w-[50%] xl:w-[45%] 2xl:w-[42%] max-w-[950px] z-10"
            >
              <Image
                src="/images/livros.png"
                alt="Pack boxes - Audio Pack, Pro Pack, Text Pack"
                width={1000}
                height={800}
                className="w-full h-auto"
              />
            </motion.div>

            {/* Layer 2: TEXTOS-PACKS.PNG - Tipografia completa */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative z-20 w-full flex justify-center"
            >
              <Image
                src="/images/textos-packs.png"
                alt="Basic Pack e ChamaPro - Descrições e preços"
                width={1920}
                height={1080}
                priority
                className="w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[75%] h-auto"
              />
            </motion.div>

            {/* Layer 3: Basic Pack Premiere - Screenshot inferior esquerdo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute bottom-[30%] lg:bottom-[32%] xl:bottom-[33%] left-[8%] lg:left-[10%] xl:left-[12.5%] w-[25%] lg:w-[22%] xl:w-[20%] max-w-[300px] z-30"
            >
              <Image
                src="/images/basic-pack-premiere.png"
                alt="Basic Pack Premiere"
                width={500}
                height={400}
                className="w-full h-auto shadow-2xl"
              />
            </motion.div>

            {/* Layer 4: Pro Pack Premiere - Screenshot inferior direito */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute bottom-[24%] lg:bottom-[26%] xl:bottom-[27%] right-[5%] lg:right-[8%] xl:right-[11%] w-[45%] lg:w-[40%] xl:w-[35%] max-w-[550px] z-30"
            >
              <Image
                src="/images/pro-pack-premiere.png"
                alt="Pro Pack Premiere"
                width={850}
                height={500}
                className="w-full h-auto shadow-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Rounded bottom transition to next dark section */}
        <div className="absolute bottom-0 left-0 right-0 h-10 lg:h-12 xl:h-14 bg-[#1e1e1e] rounded-t-[2rem] lg:rounded-t-[3rem] z-40" />
      </div>
    </section>
  )
}
