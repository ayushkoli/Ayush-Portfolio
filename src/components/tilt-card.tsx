import * as React from "react"
import { cn } from "@/lib/utils"

export default function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [pos, setPos] = React.useState({ x: 0, y: 0 })

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    const rotX = (py - 0.5) * -10
    const rotY = (px - 0.5) * 10
    setPos({ x: rotX, y: rotY })
  }

  return (
    <div
      ref={ref}
      className={cn(
        "relative rounded-xl border border-border/60 bg-card p-4 transition-shadow hover:shadow-[0_0_0_1px_var(--color-border),0_6px_30px_-10px_color-mix(in_oklab,var(--color-primary),transparent_80%)]",
        className,
      )}
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      style={{ perspective: "900px" }}
    >
      <div
        style={{
          transform: `rotateX(${pos.x}deg) rotateY(${pos.y}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 200ms ease",
        }}
      >
        {children}
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-border/70" />
    </div>
  )
}
