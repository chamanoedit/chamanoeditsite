"use client"

import { ArrowUpRight, ArrowDownLeft, Check, X } from "lucide-react"

const paraVoceItems = [
  "Para editores cristãos que estão começando e querem sair do amadorismo",
  "Para quem edita para igrejas ou ministérios de forma voluntária e quer elevar o nível",
  "Para quem entende que mídia é ferramenta de impacto e propósito",
  "Para quem já edita, mas sente que os vídeos não performam",
  "Para quem quer ser reconhecido como editor que entrega resultado, não só edição",
  "Para quem quer trabalhar com perfis maiores e projetos relevantes",
]

const naoEItems = [
  "Não é para quem busca atalhos milagrosos ou não quer aplicar o método",
  "Não é para quem busca packs, templates copia e cola que não traz resultado",
]

export function MetodoSection() {
  return (
    <section className="w-full bg-[#111111] rounded-t-[3rem] -mt-12 relative z-[25] pb-16 md:pb-0">
      <div className="grid md:grid-cols-2">

        {/* Para Você */}
        <div className="relative flex flex-col gap-8 p-8 md:p-12 lg:p-16 md:min-h-[600px] border-r border-white/10">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#f5f5f5] leading-none">
              PARA QUEM É
              <br />
              O MÉTODO CHAMA:
            </h2>
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 border-2 border-emerald-500 bg-emerald-500/20" style={{ borderRadius: "8px" }}>
              <ArrowUpRight className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
          <ul className="flex flex-col gap-3">
            {paraVoceItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-sm md:text-base text-[#e0e0e0]">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-emerald-400" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Não É Para Você */}
        <div className="relative flex flex-col p-8 md:p-12 lg:p-16 bg-[#1a1a1a]">
          <div className="flex items-start justify-between mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#f5f5f5] leading-none">
              O QUE 
              <br />
              NÃO É:
            </h2>
            <div className="flex items-center justify-center w-12 h-12 border-2 border-red-500 bg-red-500/20" style={{ borderRadius: "8px" }}>
              <ArrowDownLeft className="w-5 h-5 text-red-400" />
            </div>
          </div>
          <ul className="flex flex-col gap-3">
            {naoEItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-sm md:text-base text-[#e0e0e0]">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5">
                  <X className="w-3 h-3 text-red-400" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}
