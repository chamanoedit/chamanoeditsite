"use client"

import { Check, ShieldCheck, Clock, Star } from "lucide-react"

const pricingPlans = [
  {
    id: "combo",
    title: "Curso + pack chamaPRO",
    subtitle: "",
    originalPrice: null,
    installments: "10X",
    price: "104",
    cents: ",40",
    totalPrice: "1044,00",
    checkoutUrl: "https://pay.hotmart.com/S99563210F?checkoutMode=10&bid=1774837879021",
    features: [
      "Acesso completo ao curso CHAMANOEDIT",
      "Pack completo ChamaPRO",
    ],
    buttonText: "Comprar AGORA!",
    isLarge: true,
    mobileOrder: 3,
  },
  {
    id: "curso",
    title: "CHAMA",
    titleSuper: "NO",
    titleEnd: "EDIT",
    subtitle: "Curso completo",
    originalPrice: "1.297,00",
    installments: "por 10X",
    price: "84",
    cents: ",70",
    totalPrice: "847,00",
    checkoutUrl: "https://pay.hotmart.com/S99563210F?checkoutMode=10&bid=1774837879021",
    features: [
      "16 módulos, +40 aulas +20 horas",
      "Basic Pack presets +10 presets",
      "Pack transições",
      "Pack fontes",
      "Pack Assets Trilha - SFX - molduras",
      "Módulo I.A.",
      "Acesso grupo VIP de alunos",
    ],
    buttonText: "Comprar AGORA!",
    highlighted: true,
    mobileOrder: 1,
  },
  {
    id: "pack",
    title: "ChamaPack PRO",
    subtitle: "Presets para Premiere",
    originalPrice: null,
    installments: "10X",
    price: "19",
    cents: ",70",
    totalPrice: "197,00",
    checkoutUrl: "https://pay.hotmart.com/K103405939L?bid=1774837835344",
    description: "Não precisa After Effects\nNão precisa saber animar",
    tagline: "arrastou, soltou e tá pronto",
    features: [
      "+100 presets",
      "Presets Áudio",
      "Presets Movimento",
      "Presets PNG",
      "Presets Text",
    ],
    buttonText: "Quero só o Pack",
    mobileOrder: 2,
  },
]

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void
  }
}

function trackAndRedirect(plan: { id: string; checkoutUrl: string; price: string; totalPrice: string }) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "InitiateCheckout", {
      content_name: plan.id === "combo" ? "Curso + Pack ChamaPRO" : plan.id === "curso" ? "ChamaNoEdit Curso" : "ChamaPack PRO",
      content_ids: [plan.id],
      currency: "BRL",
      value: parseFloat(plan.totalPrice.replace(".", "").replace(",", ".")),
    })
  }
  window.open(plan.checkoutUrl, "_blank")
}

function CheckIcon() {
  return (
    <svg style={{ width: "14px", height: "14px", flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4 4L19 7" />
    </svg>
  )
}

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-24 px-6 relative overflow-hidden rounded-t-[3rem] -mt-12 z-[80]" style={{ backgroundColor: "#F2F0EA" }}>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
      

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-end">
          {[...pricingPlans].sort((a, b) => {
            // No mobile, ordena por mobileOrder; no desktop mantém ordem original
            if (typeof window !== "undefined" && window.innerWidth < 768) {
              return (a.mobileOrder ?? 99) - (b.mobileOrder ?? 99)
            }
            return 0
          }).map((plan) => (
            <div
              key={plan.id}
              className={`
                relative p-6 md:p-8 flex flex-col
                transition-all duration-300 ease-out
                hover:scale-[1.02] hover:-translate-y-1
                ${plan.isLarge ? "md:min-h-[520px]" : ""}
                ${plan.highlighted ? "md:min-h-[580px]" : ""}
                ${plan.id === "combo" ? "order-3 md:order-none" : ""}
                ${plan.id === "curso" ? "order-1 md:order-none" : ""}
                ${plan.id === "pack" ? "order-2 md:order-none" : ""}
              `}
              style={{
                backgroundColor: plan.highlighted 
                  ? "rgba(34, 197, 94, 0.08)" 
                  : "rgba(0, 0, 0, 0.04)",
                border: plan.highlighted 
                  ? "1px solid rgba(34, 197, 94, 0.4)" 
                  : "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "20px",
                boxShadow: plan.highlighted 
                  ? "0 0 40px rgba(34, 197, 94, 0.12)" 
                  : "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              {/* Badge/Logo */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={
                    plan.id === "combo" ? "/images/CHAMANOEDIT1.png"
                    : plan.id === "curso" ? "/images/CHAMANOEDIT2.png"
                    : "/images/CHAMANOEDIT3.png"
                  }
                  alt={plan.id === "combo" ? "Curso completo + Pack ChamaPRO" : plan.id === "curso" ? "ChamaNoEdit - Curso completo" : "ChamaPack PRO"}
                  className="h-14 w-auto object-contain flex-shrink-0"
                  draggable={false}
                />
                <div>
                  {plan.titleSuper ? (
                    <h3
                      className="text-lg md:text-xl font-black leading-tight"
                      style={{ color: "#111111", fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 900 }}
                    >
                      {plan.title}<sup className="text-xs">{plan.titleSuper}</sup>{plan.titleEnd}
                    </h3>
                  ) : (
                    <h3
                      className="text-lg md:text-xl font-black italic leading-tight"
                      style={{ color: "#111111", fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 900 }}
                    >
                      {plan.title}
                    </h3>
                  )}
                  <p className="text-sm mt-0.5" style={{ color: "#555", fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 700 }}>
                    {plan.subtitle}
                  </p>
                </div>
              </div>

              {/* Original Price (if exists) */}
              {plan.originalPrice && (
                <div className="mb-2">
                  <span 
                    className="line-through text-sm"
                    style={{ color: "#ef4444" }}
                  >
                    de R$ {plan.originalPrice}
                  </span>
                </div>
              )}

              {/* Price */}
              <div className="mb-4">
                <span 
                  style={{
                    fontFamily: "Helvetica Neue, Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    color: "#22c55e",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {plan.installments} de
                </span>
                <div className="flex items-baseline gap-1">
                  <span style={{
                    fontFamily: "Helvetica Neue, Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.8rem",
                    color: "#555",
                  }}>R$</span>
                  <span style={{
                    fontFamily: "Helvetica Neue, Arial, sans-serif",
                    fontWeight: 900,
                    fontSize: "6.5rem",
                    color: "#111111",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}>
                    {plan.price}
                  </span>
                  <span style={{
                    fontFamily: "Helvetica Neue, Arial, sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    color: "#111111",
                    letterSpacing: "-0.03em",
                  }}>
                    {plan.cents}
                  </span>
                </div>
                <p style={{
                  fontFamily: "Helvetica Neue, Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: "0.75rem",
                  color: "#777",
                  marginTop: "2px",
                }}>
                  Valor total: R$ <span style={{ fontWeight: 700 }}>{plan.totalPrice}</span>
                </p>
              </div>

              {/* Description (for pack) */}
              {plan.description && (
                <p 
                  className="text-sm whitespace-pre-line mb-2"
                  style={{ color: "#555" }}
                >
                  {plan.description}
                </p>
              )}

              {/* Tagline (for pack) */}
              {plan.tagline && (
                <p 
                  className="text-sm font-bold mb-4"
                  style={{ color: "#111111" }}
                >
                  {plan.tagline}
                </p>
              )}

              {/* Features */}
              <ul className="space-y-3 mb-6 mt-2 flex-1">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 flex items-center justify-center mt-0.5"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        border: "1.5px solid rgba(34,197,94,0.6)",
                        backgroundColor: "rgba(34,197,94,0.12)",
                      }}
                    >
                      <CheckIcon />
                    </span>
                    <span className="text-sm" style={{ color: "#333", fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 400 }}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className="w-full py-4 px-6 rounded-xl font-bold text-lg transition-all hover:brightness-110 cursor-pointer"
                style={{
                  backgroundColor: "#22c55e",
                  color: "#fff",
                  fontFamily: "Helvetica Neue, Arial, sans-serif",
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  borderRadius: "12px",
                }}
                onClick={() => trackAndRedirect(plan)}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Selos de Segurança */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          {/* Segurança na Compra */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                backgroundColor: "rgba(34,197,94,0.12)",
                border: "1.5px solid rgba(34,197,94,0.4)",
              }}
            >
              <ShieldCheck size={22} color="#22c55e" />
            </div>
            <div>
              <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 900, fontSize: "0.85rem", color: "#111111", letterSpacing: "-0.02em" }}>
                Compra Segura
              </p>
              <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 400, fontSize: "0.75rem", color: "#777" }}>
                Dados criptografados SSL
              </p>
            </div>
          </div>

          {/* Divisor */}
          <div className="hidden sm:block w-px h-10" style={{ backgroundColor: "rgba(0,0,0,0.1)" }} />

          {/* 7 Dias de Garantia */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                backgroundColor: "rgba(34,197,94,0.12)",
                border: "1.5px solid rgba(34,197,94,0.4)",
              }}
            >
              <Clock size={22} color="#22c55e" />
            </div>
            <div>
              <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 900, fontSize: "0.85rem", color: "#111111", letterSpacing: "-0.02em" }}>
                7 Dias de Garantia
              </p>
              <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 400, fontSize: "0.75rem", color: "#777" }}>
                Satisfação ou reembolso total
              </p>
            </div>
          </div>

          {/* Divisor */}
          <div className="hidden sm:block w-px h-10" style={{ backgroundColor: "rgba(0,0,0,0.1)" }} />

          {/* Plataforma Hotmart */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                backgroundColor: "rgba(34,197,94,0.12)",
                border: "1.5px solid rgba(34,197,94,0.4)",
              }}
            >
              <Star size={22} color="#22c55e" />
            </div>
            <div>
              <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 900, fontSize: "0.85rem", color: "#111111", letterSpacing: "-0.02em" }}>
                Plataforma Hotmart
              </p>
              <p style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 400, fontSize: "0.75rem", color: "#777" }}>
                A maior plataforma de cursos do Brasil
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
