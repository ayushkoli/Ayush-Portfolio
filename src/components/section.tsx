import * as React from "react"

export default function Section({
  id,
  children,
  className,
}: {
  id?: string
  children: React.ReactNode
  className?: string
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  // Hero section is visible immediately, others start hidden
  const [visible, setVisible] = React.useState(id === "hero")

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true)
        })
      },
      { threshold: 0.15 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={[
        "mx-auto max-w-6xl px-4 sm:px-6",
        id === "hero" ? "py-0" : "py-12 sm:py-16 md:py-24",
        "transition-all duration-700",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className || "",
      ].join(" ")}
    >
      {children}
    </section>
  )
}
