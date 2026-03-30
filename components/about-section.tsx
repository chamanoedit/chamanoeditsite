"use client"

const FOTOGUI_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FOTOGUI-Fse4ht5GhHbJGoFTGH77q2jDNMRh1N.png"
const REDFACE_URL = "/images/REDFACE-2.png"

const names = [
  "David Miranda Neto",
  "Jefferson e Suellen",
  "Filipe Levak",
  "Andre Fernandes",
  "Bianca Franco",
  "Thiago Lobos",
  "E outros...",
]

function RedSmiley() {
  return (
    <img src={REDFACE_URL} alt="Red smiley" className="w-16 h-16 flex-shrink-0 object-contain" />
  )
}

export function AboutSection() {
  return (
    <section className="w-full pt-20 pb-28 px-6 rounded-t-[3rem] -mt-12 relative z-[70]" style={{ backgroundColor: "#F2F0EA" }}>
      <div className="max-w-7xl mx-auto">

        {/* 2-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* LEFT — Photo */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={FOTOGUI_URL}
              alt="Guilherme Guisolfi - @chamadegui"
              className="w-full h-auto object-contain rounded-3xl"
              style={{ filter: "drop-shadow(0px 24px 48px rgba(120,120,120,0.45))" }}
              draggable={false}
            />
          </div>

          {/* RIGHT — Text content */}
          <div className="flex flex-col gap-6">

            {/* Title + smiley */}
            <div className="flex items-center gap-4 flex-wrap">
              <h2
                className="uppercase leading-none"
                style={{
                  fontFamily: "Tusker Grotesk, Impact, sans-serif",
                  fontWeight: 900,
                  fontStyle: "",
                  fontSize: "90px",
                  color: "#111111",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                QUEM É<br />@CHAMADEGUI?
              </h2>
              <RedSmiley />
            </div>

            {/* Bio paragraph 1 */}
            <p
              style={{
                fontFamily: "Helvetica Neue, Arial, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                color: "#111111",
                lineHeight: 1.5,
              }}
            >
              Meu nome e Guilherme Guisolfi. Apaixonado por Jesus, casado com Lia e pai de 2 meninos. Pregador do evangelho e palestrante de criatividade. Acredito que criatividade não é dom, é treinável.
            </p>

            {/* Bio paragraph 2 */}
            <p
              style={{
                fontFamily: "Helvetica Neue, Arial, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                color: "#111111",
                lineHeight: 1.5,
              }}
            >
              Uso minha arte para comunicar o Evangelho de forma intencional e relevante. Por isso, criei o CHAMANOEDIT para te ajudar a levar sua mensagem as nações, entendendo o idioma das redes sociais para impactar o mundo com aquilo que queima no seu coração.
            </p>

            {/* Bio paragraph 3 + list intro */}
            <p
              style={{
                fontFamily: "Helvetica Neue, Arial, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                color: "#111111",
                lineHeight: 1.5,
              }}
            >
              São mais de 8 anos como editor e diretor criativo no nicho cristão, editando para grandes igrejas e nomes como:
            </p>

            {/* Names list */}
            <ul className="flex flex-col gap-1">
              {names.map((name, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: "Helvetica Neue, Arial, sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                    color: "#111111",
                    lineHeight: 1.5,
                  }}
                >
                  • {name}
                </li>
              ))}
            </ul>

            {/* Final paragraph */}
            <p
              style={{
                fontFamily: "Helvetica Neue, Arial, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                color: "#111111",
                lineHeight: 1.5,
              }}
            >
              Além de servir grandes eventos como a Dunamis Con, Aprovadas Conf. e outros. Gerei milhões de views tanto no meu perfil pessoal quanto para clientes utilizando o meu método.
            </p>

          </div>
        </div>

      </div>
    </section>
  )
}
