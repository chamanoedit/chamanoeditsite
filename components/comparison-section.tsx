"use client"

const withoutItems = [
  { icon: "X", text: "Tentativa e erro" },
  { icon: "Bell", text: "Falta de padrão" },
  { icon: "Chart", text: "Conteúdos sem impacto" },
  { icon: "Brackets", text: "Frustração constante" },
]

const withItems = [
  { icon: "Sparkle", text: "Método claro" },
  { icon: "Heart", text: "Edição estratégica" },
  { icon: "Lightning", text: "Conteúdos que performam" },
  { icon: "Wifi", text: "Propósito + resultado" },
]

function getIconComponent(type: string) {
  switch (type) {
    case "X": return XIcon
    case "Bell": return BellIcon
    case "Chart": return BarChartIcon
    case "Brackets": return BracketsIcon
    case "Sparkle": return SparkleSettingsIcon
    case "Heart": return HeartIcon
    case "Lightning": return LightningIcon
    case "Wifi": return WifiIcon
    default: return XIcon
  }
}

function XIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  )
}

function BarChartIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5">
      <rect x="3" y="12" width="4" height="8" rx="1" />
      <rect x="10" y="6" width="4" height="14" rx="1" />
      <rect x="17" y="9" width="4" height="11" rx="1" />
    </svg>
  )
}

function BracketsIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7v10M16 7v10M6 5h2M6 19h2M16 5h2M16 19h2" />
    </svg>
  )
}

function SparkleSettingsIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
      <circle cx="12" cy="12" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v6m0 6v6M1 12h6m6 0h6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.64 5.64l4.24 4.24M14.12 14.12l4.24 4.24M18.36 5.64l-4.24 4.24M9.88 14.12l-4.24 4.24" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function LightningIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}

function WifiIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19h.01M5.64 9.88a6 6 0 0 1 8.72 0M2.52 7.04C3.52 5.98 5.24 5 7.07 5c1.83 0 3.55.98 4.55 2.04M21.48 7.04a9 9 0 0 0-13.42 0M12 14h.01" />
    </svg>
  )
}

// Ícone de MacBook melhorado — mais detalhado e premium
function MacIcon() {
  return (
    <svg
      viewBox="0 0 80 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "80px", height: "56px" }}
    >
      {/* Corpo do laptop */}
      <rect x="6" y="2" width="68" height="42" rx="4" stroke="#5eead4" strokeWidth="1.5" fill="none" />
      {/* Tela interna */}
      <rect x="11" y="7" width="58" height="32" rx="2" fill="rgba(94,234,212,0.06)" stroke="#5eead4" strokeWidth="1" />
      {/* Câmera */}
      <circle cx="40" cy="5" r="1.2" fill="#5eead4" opacity="0.6" />
      {/* Olho esquerdo — X triste */}
      <path d="M25 17 L29 21 M29 17 L25 21" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" />
      {/* Olho direito — X triste */}
      <path d="M51 17 L55 21 M55 17 L51 21" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" />
      {/* Boca triste */}
      <path d="M30 28 Q40 24 50 28" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Base / dobradiça */}
      <path d="M2 44 Q6 48 10 48 H70 Q74 48 78 44" stroke="#5eead4" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Entalhe da base (MacBook style) */}
      <path d="M32 48 Q40 52 48 48" stroke="#5eead4" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function ComparisonSection() {
  return (
    <section className="w-full pt-24 pb-32 px-6 relative overflow-hidden rounded-t-[3rem] -mt-12 z-50" style={{ backgroundColor: "#111111" }}>

      {/* Subtle green glow at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(34, 197, 94, 0.15) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Mac Icon */}
        <div className="flex justify-center mb-8">
          <MacIcon />
        </div>

        {/* Title */}
        <div className="text-center mb-16">
          <h2
            className="uppercase leading-tight"
            style={{
              fontFamily: "Tusker Grotesk, Impact, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              color: "#F2F0EA",
              letterSpacing: "-0.02em",
            }}
          >
            comparando o chamanoedit com Outras Soluções
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* WITHOUT Card */}
          <div
            className="p-8"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
            }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 flex items-center justify-center"
                style={{ backgroundColor: "rgba(239, 68, 68, 0.15)", borderRadius: "8px" }}
              >
                <XIcon />
              </div>
              <h3
                style={{
                  fontFamily: "Helvetica Neue, Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  color: "#F2F0EA",
                }}
              >
                Sem o CHAMANOEDIT
              </h3>
            </div>
            <ul className="flex flex-col gap-5">
              {withoutItems.map((item, i) => {
                const IconComp = getIconComponent(item.icon)
                return (
                  <li key={i} className="flex items-center gap-3">
                    <IconComp />
                    <span style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: "1rem", color: "#999", lineHeight: 1.5 }}>
                      {item.text}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* WITH Card */}
          <div
            className="p-8"
            style={{
              backgroundColor: "rgba(34, 197, 94, 0.05)",
              border: "1px solid rgba(34, 197, 94, 0.25)",
              boxShadow: "0 0 40px rgba(34, 197, 94, 0.1)",
              borderRadius: "16px",
            }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 flex items-center justify-center"
                style={{ backgroundColor: "rgba(34, 197, 94, 0.2)", borderRadius: "8px" }}
              >
                <CheckIcon />
              </div>
              <h3
                style={{
                  fontFamily: "Helvetica Neue, Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  color: "#F2F0EA",
                }}
              >
                Com o CHAMANOEDIT
              </h3>
            </div>
            <ul className="flex flex-col gap-5">
              {withItems.map((item, i) => {
                const IconComp = getIconComponent(item.icon)
                return (
                  <li key={i} className="flex items-center gap-3">
                    <IconComp />
                    <span style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: "1rem", color: "#F2F0EA", lineHeight: 1.5 }}>
                      {item.text}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
