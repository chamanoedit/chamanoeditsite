import { TopicCard } from "@/components/topic-card"

const leftCards = [
  "porque você precisa viralizar seus cortes",
  "Como criar cortes que prendem atenção nos primeiros segundos",
  "Por que editar melhor não é suficiente, e o que realmente faz um vídeo performar",
]

const rightCards = [
  "O padrão de edição usado em perfis cristãos que batem milhares (e milhões) de views",
  "Como sair do amadorismo e entrar no jogo de verdade da edição cristã",
]

export function VideoAulaSection() {
  return (
    <section
      id="aula-gratuita"
      className="w-full flex items-center justify-center px-6 pt-16 pb-28 sm:pt-20 sm:pb-32"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-8">

        {/* Video Block */}
        <div className="w-full rounded-2xl overflow-hidden relative aspect-video bg-neutral-900">
          <iframe
            src="https://www.youtube.com/embed/Dp829s0amho?rel=0&modestbranding=1"
            title="Viralizando Vídeos Cristãos na Internet"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Headline */}
        <h1
          className="text-center text-white uppercase tracking-wide w-full"
          style={{
            fontFamily: "Tusker Grotesk, Impact, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.6rem, 7.5vw, 4rem)",
            lineHeight: 1.1,
            letterSpacing: "0.02em",
            whiteSpace: "nowrap",
          }}
        >
          <span className="sm:hidden block">
            VIRALIZANDO{" "}
            <span style={{ color: "#E53E3E" }}>VÍDEOS</span>
            <br />
            <span style={{ color: "#E53E3E" }}>CRISTÃOS</span>{" "}
            NA INTERNET
          </span>
          <span className="hidden sm:inline">
            VIRALIZANDO{" "}
            <span style={{ color: "#E53E3E" }}>VÍDEOS CRISTÃOS</span>{" "}
            NA INTERNET
          </span>
        </h1>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-8">
          {/* Left column */}
          <div className="flex flex-col gap-3">
            {leftCards.map((text) => (
              <TopicCard key={text} text={text} />
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-3">
            {rightCards.map((text) => (
              <TopicCard key={text} text={text} />
            ))}

            {/* Red faces */}
            <div className="flex items-start justify-start pt-2">
              <img
                src="images/redface.png"
                alt="Red smiley faces"
                className="w-full max-w-[180px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a href="#pricing" className="w-full max-w-lg">
          <button
            className="w-full rounded-xl px-8 py-3 uppercase text-white font-bold tracking-widest cursor-pointer transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-green-700/30"
            style={{
              fontFamily: "Neue Montreal, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1rem, 3vw, 1.25rem)",
              letterSpacing: "-0.05em",
              backgroundColor: "#5da533",
            }}
          >
            USAR MÉTODO CHAMA 🔥
          </button>
        </a>

      </div>
    </section>
  )
}
