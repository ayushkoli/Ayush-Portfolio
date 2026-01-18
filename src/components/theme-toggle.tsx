import * as React from "react"
import { Button } from "@/components/ui/button"

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 4a1 1 0 0 0 1-1V2a1 1 0 1 0-2 0v1a1 1 0 0 0 1 1Zm0 16a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1Zm8-8a1 1 0 0 0 1-1h1a1 1 0 1 0 0-2h-1a1 1 0 0 0-1 1 1 1 0 0 0 0 2ZM3 13a1 1 0 0 0 1-1 1 1 0 0 0-1-1H2a1 1 0 1 0 0 2h1Zm13.657-7.071a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 1 0-1.414 1.414l.707.707Zm-9.9 14.142a1 1 0 0 0-1.414 1.414l.707.707a1 1 0 0 0 1.414-1.414l-.707-.707Zm12.728 1.414a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 1.414l.707.707ZM5.636 5.636a1 1 0 0 0 1.414-1.414l-.707-.707A1 1 0 1 0 4.93 4.93l.707.707ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
      />
    </svg>
  )
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M21.64 13.64A9 9 0 0 1 10.36 2.36 7 7 0 1 0 21.64 13.64Z" />
    </svg>
  )
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = React.useState<boolean>(false)

  React.useEffect(() => {
    try {
      const ls = localStorage.getItem("theme")
      const mql = window.matchMedia("(prefers-color-scheme: dark)")
      const initial = ls ? ls === "dark" : mql.matches
      setIsDark(initial)
    } catch {}
  }, [])

  const toggle = React.useCallback(() => {
    const next = !isDark
    setIsDark(next)
    try {
      localStorage.setItem("theme", next ? "dark" : "light")
    } catch {}
    if (next) document.documentElement.classList.add("dark")
    else document.documentElement.classList.remove("dark")
  }, [isDark])

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="gap-2 bg-transparent"
    >
      {isDark ? <SunIcon /> : <MoonIcon />} <span className="sr-only">Toggle theme</span>
      <span aria-hidden="true">{isDark ? "Light" : "Dark"}</span>
    </Button>
  )
}
