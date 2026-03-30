"use client"

const PRESETS_BAIXO_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PRESETS-BAIXO-H19PcZehX6i6CPywLyih6orhNhzm2p.png"

const features = [
  { label: "+100 presets.", icon: "stack" },
  { label: "audio", icon: "wave" },
  { label: "movimento", icon: "move" },
  { label: "camera move", icon: "camera" },
  { label: "text fx", icon: "text" },
  { label: "pro effects", icon: "sparkle" },
]

function FeatureIcon({ type }: { type: string }) {
  const s = { width: "18px", height: "18px", flexShrink: 0, marginTop: "2px" }
  const stroke = "#22c55e"
  const sw = "1.8"
  switch (type) {
    case "stack": return (
      <svg style={s} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="4" rx="1" />
        <rect x="2" y="13" width="20" height="4" rx="1" />
        <rect x="2" y="1" width="20" height="4" rx="1" />
      </svg>
    )
    case "wave": return (
      <svg style={s} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12 Q4 6 6 12 Q8 18 10 12 Q12 6 14 12 Q16 18 18 12 Q20 6 22 12" />
      </svg>
    )
    case "move": return (
      <svg style={s} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M12 3v18M3 12h18" />
      </svg>
    )
    case "camera": return (
      <svg style={s} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    )
    case "text": return (
      <svg style={s} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7V5h16v2M9 19h6M12 5v14" />
      </svg>
    )
    case "sparkle": return (
      <svg style={s} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
      </svg>
    )
    default: return null
  }
}

export function ChamaProSection() {
  return (
    <section className="w-full relative rounded-t-[3rem] -mt-12 z-[60] pb-28" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT — Text */}
          <div className="flex flex-col gap-6 text-left">

            <p style={{
              fontFamily: "Helvetica Neue, Arial, sans-serif",
              fontWeight: 700,
              fontSize: "24px",
              color: "#F2F0EA",
              letterSpacing: "-0.05em",
              lineHeight: 0.8,
            }}>
              aumente o nível dos<br />seus edits com meu
            </p>

            <h2
              className="uppercase leading-none"
              style={{
                fontFamily: "Tusker Grotesk, Impact, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(3rem, 7vw, 6rem)",
                color: "#F2F0EA",
                letterSpacing: "-0.01em",
                lineHeight: 0.99,
              }}
            >
              PACK DE PRESETS <br /> NO PREMIERE PRO
            </h2>

            <div style={{
              fontFamily: "Helvetica Neue, Arial, sans-serif",
              fontWeight: 700,
              fontSize: "24px",
              letterSpacing: "-0.05em",
              color: "#F2F0EA",
              lineHeight: 0.8,
            }}>
              <p>Não precisa After Effects</p>
              <p>Não precisa saber animar</p>
              <p>arrastou, soltou e tá pronto</p>
            </div>

            <h3 style={{
              fontFamily: "Helvetica Neue, Arial, sans-serif",
              fontWeight: 900,
              fontSize: "70px",
              color: "#F2F0EA",
              letterSpacing: "-0.05em",
              lineHeight: 1,
            }}>
              ChamaPro
            </h3>

            <p style={{
              fontFamily: "Helvetica Neue, Arial, sans-serif",
              fontWeight: 700,
              fontSize: "24px",
              letterSpacing: "-0.05em",
              color: "#F2F0EA",
              lineHeight: 0.8,
            }}>
              Pack profissional de presets<br />
              nativos de adobe premiere.
            </p>

            <ul className="flex flex-col gap-2">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FeatureIcon type={f.icon} />
                  <span style={{
                    fontFamily: "Helvetica Neue, Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: "1rem",
                    color: "#F2F0EA",
                    lineHeight: 1.5,
                  }}>
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>

          {/* Botão CTA */}
          <a href="#pricing" className="w-fit">
            <button
              className="cursor-pointer hover:brightness-110 active:scale-[0.98] transition-all duration-200"
              style={{
                fontFamily: "Neue Montreal, Helvetica Neue, Arial, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                letterSpacing: "-0.02em",
                backgroundColor: "#5da533",
                color: "#ffffff",
                lineHeight: 1,
                borderRadius: "999px",
                paddingLeft: "2.5rem",
                paddingRight: "2.5rem",
                paddingTop: "1.2rem",
                paddingBottom: "1.2rem",
                border: "none",
              }}
            >
              quero o ChamaPack PRO!
            </button>
          </a>

          </div>

          {/* RIGHT — Desktop: vídeo + presets-baixo em camadas / Mobile: só vídeo */}
          <div className="relative flex md:mt-15 flex-col">

            {/* ── DESKTOP: container com camadas absolutas ── */}
            <div className="hidden lg:block relative w-full" style={{ minHeight: "480px" }}>

              {/* Label — canto superior direito acima do vídeo */}
              <div className="absolute right-0" style={{ top: "calc(18% - 52px)", zIndex: 3 }}>
                <p style={{
                  fontFamily: "Helvetica Neue, Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(0.9rem, 1.6vw, 1.1rem)",
                  color: "#F2F0EA",
                  lineHeight: 1.35,
                  textAlign: "right",
                }}>
                  aqui é como os<br />presets funcionam:
                </p>
              </div>

              {/* PRESETS-BAIXO — fixo no fundo */}
              <div className="absolute inset-x-0 bottom-[-190px]" style={{ zIndex: 1, transform: "scale(1.30)", transformOrigin: "bottom center", opacity: 0.4 }}>
                <img
                  src={PRESETS_BAIXO_URL}
                  alt="Presets do CHAMANOEDIT no Premiere Pro"
                  className="w-full h-auto block"
                  draggable={false}
                />
              </div>

              {/* Vídeo 16:9 */}
              <div
                className="absolute inset-x-0 overflow-hidden"
                style={{
                  top: "18%",
                  aspectRatio: "16/9",
                  borderRadius: "12px",
                  zIndex: 2,
                  transform: "scale(1.25)",
                  transformOrigin: "top center",
                  border: "2px solid #ffffff",
                }}
              >
                <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                  <source src="https://chamanoedit2.b-cdn.net/GIF - CHAMAPACK.mp4" type="video/mp4" />
                </video>
              </div>

            </div>

            {/* ── MOBILE: só o vídeo, simples e limpo ── */}
            <div className="lg:hidden w-full mt-8">
              <p className="text-right mb-3" style={{
                fontFamily: "Helvetica Neue, Arial, sans-serif",
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "#F2F0EA",
                lineHeight: 1.35,
              }}>
                aqui é como os<br />presets funcionam:
              </p>
              <div className="w-full overflow-hidden" style={{ aspectRatio: "16/9", borderRadius: "12px", border: "2px solid #ffffff" }}>
                <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                  <source src="https://chamanoedit2.b-cdn.net/GIF - CHAMAPACK.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
