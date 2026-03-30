"use client"

const REDFACE_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/redface-SIhhdFXgxOJobT7FX5aZ97MqyyP8ED.png"

const IMG = {
  1: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-os2Qz0PkbrJmuadm5pggAmIZfBMCEY.png",
  2: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-QhYYfQCnnzbCRWnjfWncH31TJUcItX.png",
  3: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-oY1wrSKrrPrVWA9WLI7KXiJ0H6Z7Ve.png",
  4: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-KpTG56uVDug8Pabwa6bsj1Gvgq53XK.png",
  5: "images/depoimento5.png",
  6: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-Dc7n6JajfVER7fQdi4SoOxbGibvZTb.png",
  7: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-68JAHTPobnK37uXXH9akvxnlgs8tVq.png",
  8: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-39wuf5ULrXXcOT8BAV1SEho5WJxTzt.png",
  9: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-JBY7mYQAOORnNjDNLuc28fZb49dUc7.png",
}

function Card({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 ease-out hover:scale-[1.02] ${className}`}
      style={{
        borderRadius: "16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.18)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)"
      }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover block" draggable={false} />
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="w-full pt-20 pb-28 px-6 rounded-t-[3rem] -mt-12 relative z-30" style={{ backgroundColor: "#F2F0EA" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
          <h2
            className="uppercase leading-none"
            style={{
              fontFamily: "Tusker Grotesk, Impact, sans-serif",
              fontWeight: 700,
              fontStyle: "",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#111111",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Esse é o efeito do<br />
            ChamaNoEdit em perfis reais
          </h2>

          <div className="flex flex-col items-start gap-3 lg:pt-2">
            <img src={REDFACE_URL} alt="Red smiley faces" className="w-36 object-contain" />
            <p
              style={{
                fontFamily: "Helvetica Neue, Arial, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
                color: "#111111",
                lineHeight: 1.35,
              }}
            >
              Bom, vamos deixar quem<br />
              adquiriu o curso dar o feedback:
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* COLUNA ESQUERDA */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <Card src={IMG[1]} alt="Depoimento 1" />
              <Card src={IMG[2]} alt="Depoimento 2" />
            </div>
            <Card src={IMG[4]} alt="Depoimento 4" />
            <div className="grid grid-cols-2 gap-4">
              <Card src={IMG[7]} alt="Depoimento 7" />
              <Card src={IMG[8]} alt="Depoimento 8" />
            </div>
          </div>

          {/* COLUNA DIREITA */}
          <div className="flex flex-col gap-4">
            <Card src={IMG[3]} alt="Depoimento 3" />
            <div className="grid grid-cols-2 gap-4">
              <Card src={IMG[5]} alt="Depoimento 5" />
              <Card src={IMG[6]} alt="Depoimento 6" />
            </div>
            <Card src={IMG[9]} alt="Depoimento 9" />
          </div>

        </div>
      </div>
    </section>
  )
}
