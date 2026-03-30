"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#1e1e1e] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-12 border-b border-white/10"
        >
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white font-helvetica tracking-tight">
              ChamanoEdit
            </h3>
            <p className="text-white/60 font-helvetica text-sm leading-relaxed">
              Sua mensagem alcançando nações. Aprenda a editar vídeos virais do zero ao avançado.
            </p>
            {/* Redes Sociais */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com/chamadegui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/@chamanoedit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white font-helvetica">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-white font-helvetica text-sm transition-colors">
                  Curso Completo
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white font-helvetica text-sm transition-colors">
                  ChamaPack PRO
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white font-helvetica text-sm transition-colors">
                  Basic Pack
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white font-helvetica text-sm transition-colors">
                  Módulos
                </a>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white font-helvetica">
              Suporte
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-white font-helvetica text-sm transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="mailto:contato@chamanoedit.com" className="text-white/60 hover:text-white font-helvetica text-sm transition-colors">
                  contato@chamanoedit.com
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white font-helvetica text-sm transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white font-helvetica text-sm transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="pt-8 text-center"
        >
          <p className="text-white/40 font-helvetica text-sm">
            © {currentYear} ChamanoEdit. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
