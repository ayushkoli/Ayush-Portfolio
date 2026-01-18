// Subtle animated grid background using only CSS, optimized for dark mode
export default function AnimatedGrid() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="size-full opacity-[0.12] dark:opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px, 32px 32px",
          animation: "grid-pan 30s linear infinite",
        }}
      />
      <style>{`
        @keyframes grid-pan {
          0% { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-32px,-32px,0); }
        }
      `}</style>
    </div>
  )
}
