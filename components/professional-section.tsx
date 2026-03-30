"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ProfessionalSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-background py-20 px-6 relative overflow-hidden rounded-t-[3rem] -mt-24 z-30">
      {/* Background decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.05, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-foreground/10 rounded-full"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="space-y-24"
        >
          {/* Headline with image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <Image
              src="/images/edicoes-text.png"
              alt="suas edições ainda mais profissionais"
              width={800}
              height={200}
              className="mx-auto w-full max-w-3xl h-auto"
            />
          </motion.div>

          {/* Mac Mockup with Premiere Pro */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-5xl mx-auto mb-32"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -left-40 bottom-12 z-10 hidden lg:block"
            >
              <div className="relative">
                <Image src="/images/pr-colorido.png" alt="Adobe Premiere Pro" width={160} height={160} />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="absolute bottom-0 top-20 left-25 w-[240px] h-[280px]"
                >
                  <Image src="/images/options.png" alt="Options" width={240} height={280} className="w-full h-full object-contain" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -right-16 top-1/2 -translate-y-1/2 hidden lg:flex lg:flex-col lg:gap-4 z-10"
            >
              <Image src="/images/pr-branco.png" alt="Premiere Pro" width={70} height={70} />
              <Image src="/images/ae-branco.png" alt="After Effects" width={70} height={70} />
              <Image src="/images/ps-branco.png" alt="Photoshop" width={70} height={70} />
            </motion.div>

            {/* Mac mockup */}
            <div className="relative">
              <Image
                src="/images/mac-mockup.png"
                alt="Adobe Premiere Pro Interface"
                width={1400}
                height={900}
                className="w-full h-auto scale-180"
              />
            </div>
          </motion.div>

          {/* Description and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center space-y-6 relative z-20"
          >
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto font-helvetica font-bold">
              do básico ao avançado do Adobe Premiere, o software
              <br />
              mais usado no mundo das edições profissionais
            </p>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-7 rounded-full font-bold lowercase font-helvetica cursor-pointer"
            >
              quero começar agora!
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
