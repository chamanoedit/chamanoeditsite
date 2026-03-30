"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const REDFACE_URL = "/images/REDFACE-2.png"
const CHAMA_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CHAMA-ecSZDAl92WnUHYNOAE8GLC0cSfyQPJ.png"
const DINAMITE_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DINAMITECHAMA-5SsKhqQzzwkatjpw3tE7wLRV4L41Ax.png"
const ESTOPIM_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ESTOPIMCHAMA-5C1Cl9PoRae6Xno21o83viyT3b1OAS.png"

const pillarTitleStyle = {
  fontFamily: "Tusker Grotesk, Impact, sans-serif",
  fontWeight: 700,
  fontSize: "clamp(2.2rem, 6vw, 3.5rem)",
  color: "#F2F0EA",
  letterSpacing: "-0.02em",
  lineHeight: 1.0,
}

export function MetodoChamaSection() {
  const header = useScrollAnimation()
  const pillar1 = useScrollAnimation()
  const pillar2 = useScrollAnimation()
  const pillar3 = useScrollAnimation()

  return (
    <section className="w-full pt-20 pb-28 px-6 overflow-hidden relative rounded-t-[3rem] -mt-12 z-40" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-4xl mx-auto relative" style={{ zIndex: 1 }}>

        {/* Title + Subtitle */}
        <div
          ref={header.ref}
          className={`animate-from-bottom ${header.visible ? "animate-visible" : ""}`}
        >
          <h2
            className="text-center uppercase leading-none mb-6"
            style={{
              fontFamily: "Tusker Grotesk, Impact, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(3rem, 8vw, 5rem)",
              color: "#F2F0EA",
              letterSpacing: "-0.02em",
            }}
          >
            O MÉTODO CHAMA
          </h2>
          <p
            className="text-center max-w-2xl mx-auto mb-16 leading-relaxed px-2"
            style={{
              fontFamily: "Helvetica Neue, Arial, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
              color: "#EDEBE7",
              opacity: 0.9,
            }}
          >
            O único método capaz de fazer sua mensagem viralizar nas redes sociais, alcançando as nações e vivendo o IDE. O método consiste em 3 pilares simples, porém quando combinados o resultado explode nas redes:
          </p>
        </div>

        {/* Pillar 1 - A CHAMA — entra da esquerda */}
        <div
          ref={pillar1.ref}
          className={`flex flex-col md:flex-row items-center gap-8 mb-12 md:mb-16 animate-from-left ${pillar1.visible ? "animate-visible" : ""}`}
        >
          <div className="relative flex-shrink-0">
            <div className="w-48 h-48 flex items-center justify-center" style={{ backgroundColor: "#f5f5f5", borderRadius: "24px" }}>
              <img src={CHAMA_URL} alt="A Chama" className="w-32 h-32 object-contain" />
            </div>
            <img src={REDFACE_URL} alt="" className="absolute -bottom-3 -right-3 w-10 h-10" />
          </div>
          <div className="flex-1 text-center md:text-left px-2 md:px-0">
            <h3 className="uppercase mb-3" style={pillarTitleStyle}>1. A CHAMA</h3>
            <p className="leading-relaxed" style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(0.85rem, 1.8vw, 1rem)", color: "#EDEBE7" }}>
              Aqui você aprende a identificar a sua mensagem e aquilo que queima no seu coração. Sem a chama não há explosão.
            </p>
          </div>
        </div>

        {/* Pillar 2 - O DINAMITE — entra da direita */}
        <div
          ref={pillar2.ref}
          className={`flex flex-col md:flex-row-reverse items-center gap-8 mb-12 md:mb-16 animate-from-right ${pillar2.visible ? "animate-visible" : ""}`}
        >
          <div className="relative flex-shrink-0">
            <div className="w-48 h-48 flex items-center justify-center" style={{ backgroundColor: "#f5f5f5", borderRadius: "24px" }}>
              <img src={DINAMITE_URL} alt="O Dinamite" className="w-40 h-auto object-contain" />
            </div>
            <img src={REDFACE_URL} alt="" className="absolute -bottom-3 -right-3 w-10 h-10" />
          </div>
          <div className="flex-1 text-center md:text-right px-2 md:px-0">
            <h3 className="uppercase mb-3" style={pillarTitleStyle}>2. O DINAMITE</h3>
            <p className="leading-relaxed" style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(0.85rem, 1.8vw, 1rem)", color: "#EDEBE7" }}>
              Nesta etapa do método você aprende a construir aquilo que vai explodir, os elementos de uma dinamite que combinados irão viralizar nas redes sociais.
            </p>
          </div>
        </div>

        {/* Pillar 3 - O ESTOPIM — entra da esquerda */}
        <div
          ref={pillar3.ref}
          className={`flex flex-col md:flex-row items-center gap-8 pb-10 md:pb-20 animate-from-left ${pillar3.visible ? "animate-visible" : ""}`}
        >
          <div className="relative flex-shrink-0">
            <div className="w-48 h-48 flex items-center justify-center" style={{ backgroundColor: "#f5f5f5", borderRadius: "24px" }}>
              <img src={ESTOPIM_URL} alt="O Estopim" className="w-40 h-40 object-contain" />
            </div>
            <img src={REDFACE_URL} alt="" className="absolute -bottom-3 -left-3 w-10 h-10" />
          </div>
          <div className="flex-1 text-center md:text-left px-2 md:px-0">
            <h3 className="uppercase mb-3" style={pillarTitleStyle}>3. O ESTOPIM</h3>
            <p className="leading-relaxed" style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 700, fontSize: "clamp(0.85rem, 1.8vw, 1rem)", color: "#EDEBE7" }}>
              Aqui, nesta etapa que você aprende como conectar a chama à dinamite. Com técnicas de edição profissional que irão transformar seu vídeo em explosão nas redes sociais.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
