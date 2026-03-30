"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqItems = [
  {
    question: "O que está incluído no curso?",
    answer: "O Chama no Edit 2.0 inclui todos os módulos completos, arquivos de apoio, Basic Pack de presets para premiere exclusivos ChamanoEdit, atualizações futuras e acesso à comunidade de alunos. Você recebe tudo que precisa para editar vídeos virais do zero ao avançado."
  },
  {
    question: "Preciso ter experiência com edição?",
    answer: "Não! O curso começa do zero e te leva até técnicas avançadas. Mesmo que você nunca tenha aberto o Premiere, vai conseguir acompanhar perfeitamente."
  },
  {
    question: "Funciona para celular?",
    answer: "O curso é focado em Premiere Pro (desktop/pc). Mas também ensino princípios de edição e geração de conteúdo que você pode aplicar no CapCut ou VN caso edite no celular."
  },
  {
    question: "Quais softwares preciso?",
    answer: "O treinamento é 100% baseado no Premiere Pro, mas as técnicas também funcionam para Final Cut, DaVinci e CapCut (princípios de narrativa, cortes virais, ritmo, construção de vídeos etc)."
  },
  {
    question: "Tenho acesso aos arquivos usados nas aulas?",
    answer: "Terá uma pasta exclusiva no Drive com alguns arquivos que irão elevar o nível da sua edição!"
  },
  {
    question: "O curso tem atualizações?",
    answer: "Sim! Sempre que houver atualização do Premiere, novas estratégias de viralização ou tendências, módulos novos serão adicionados sem custo extra."
  },
  {
    question: "Tem certificado?",
    answer: "Sim! Ao concluir o curso você recebe seu certificado automaticamente."
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer: "Acesso por 12 meses. Você terá mais que tempo suficiente para aprender a ser um editor de resultados, e com atualizações periódicas de módulos e novos módulos."
  },
  {
    question: "É possível comprar apenas alguns módulos separadamente?",
    answer: "Não. O método foi criado para funcionar como uma estrutura completa. Todos os módulos se complementam."
  },
  {
    question: "Tem garantia?",
    answer: "Sim! 7 dias de garantia. Se não fizer sentido pra você, devolvemos seu dinheiro sem burocracia."
  },
  {
    question: "O curso ensina só a parte técnica ou também como viralizar?",
    answer: "Ensina tudo: técnica, ritmo, narrativa, cortes virais, thumbnails, criatividade, edição rápida, edição para pregações e podcasts, estratégia de engajamento e muito mais."
  },
  {
    question: "Como recebo o acesso após a compra?",
    answer: "O curso está disponibilizado pela plataforma HOTMART. Assim que o pagamento for aprovado, você recebe automaticamente seu acesso para nossa plataforma."
  },
  {
    question: "Preciso de um computador muito potente?",
    answer: "Não. Basta que rode o Premiere em configurações básicas."
  },
  {
    question: "Posso assistir pelo celular?",
    answer: "Sim! As aulas podem ser vistas pelo celular, mesmo sendo editadas no computador."
  },
  {
    question: "O curso serve para quem trabalha na igreja?",
    answer: "Totalmente. O conteúdo foi criado especialmente para quem edita recortes de mensagens, podcasts, conteúdos criativos e materiais para ministérios."
  },
  {
    question: "O curso serve para quem não é cristão?",
    answer: "Com certeza! A parte técnica e criativa é universal. A linguagem é leve, direta e acessível para qualquer editor."
  },
  {
    question: "O que eu faço se tiver dúvidas ou problemas técnicos?",
    answer: "Você terá acesso ao suporte por e-mail, além da comunidade de alunos onde pode tirar dúvidas e receber ajuda."
  },
  {
    question: "Vou aprender a criar vídeos virais mesmo?",
    answer: "Sim. Essa é a essência do curso: entender estrutura, ritmo, personalidade e narrativa para construir vídeos que realmente performam. E a edição sendo uma ferramenta poderosa."
  },
  {
    question: "O curso ensina sobre inteligência artificial?",
    answer: "Sim! Porém, esse ainda não é um curso voltado para I.A., Incluo ferramentas que utilizo para geração de videos em I.A."
  },
  {
    question: "Depois de quanto tempo começo a ver resultados?",
    answer: "Depende do seu ritmo de estudo, mas muitos alunos começam a ver evolução real nas primeiras aulas — especialmente no módulo de cortes virais."
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Split items into two columns
  const midPoint = Math.ceil(faqItems.length / 2)
  const leftColumn = faqItems.slice(0, midPoint)
  const rightColumn = faqItems.slice(midPoint)

  return (
    <section className="relative bg-[#111111] py-16 md:py-24 rounded-t-[3rem] -mt-12 z-[90]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12 md:mb-16"
        >
          <div className="border-2 border-[#f6f6f6] rounded-xl px-8 py-3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#f6f6f6] font-helvetica tracking-wide">
              FAQ
            </h2>
          </div>
        </motion.div>

        {/* FAQ Grid - Two columns on desktop, one on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-0">
            {leftColumn.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => toggleItem(index)}
                index={index}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-0">
            {rightColumn.map((item, index) => {
              const actualIndex = index + midPoint
              return (
                <FaqItem
                  key={actualIndex}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === actualIndex}
                  onClick={() => toggleItem(actualIndex)}
                  index={actualIndex}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
  index: number
}

function FaqItem({ question, answer, isOpen, onClick, index }: FaqItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="border-b border-[#f6f6f6]"
    >
      <button
        onClick={onClick}
        className="cursor-pointer w-full py-5 md:py-6 flex items-center justify-between text-left group"
      >
        <span className="text-white font-helvetica text-base md:text-lg pr-4 group-hover:text-[#f6f6f6] transition-colors">
          {question}
        </span>
        <span className={`text-[#f6f6f6] text-2xl md:text-3xl font-light flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-white/70 font-helvetica text-sm md:text-base pb-5 md:pb-6 pr-8 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
