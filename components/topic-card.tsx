"use client"

interface TopicCardProps {
  text: string
}

export function TopicCard({ text }: TopicCardProps) {
  return (
    <div className="group relative cursor-pointer">
      {/* Glow behind on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-red-600/30 scale-105" />

      {/* Card */}
      <div
        className="relative flex items-center gap-3 rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-4 transition-all duration-300 group-hover:border-red-600/50 group-hover:bg-neutral-800"
      >
        {/* Bomb icon */}
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
          <img src="/images/bomba.png" alt="bomba" className="w-9 h-9 object-contain" />
        </div>

        {/* Text */}
        <p
          className="text-white text-sm leading-snug font-bold"
          style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontWeight: 700 }}
        >
          {text}
        </p>
      </div>
    </div>
  )
}
