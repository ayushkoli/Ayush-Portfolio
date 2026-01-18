import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import SocialLinks from "./social-links"
import * as React from "react"
import { X, Link as LinkIcon } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === "/"
  const [scrollProgress, setScrollProgress] = React.useState(0)
  const [linksOpen, setLinksOpen] = React.useState(false)

  React.useEffect(() => {
    let rafId: number | null = null
    let isUpdating = false

    const updateProgress = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = windowHeight > 0 ? (window.scrollY / windowHeight) * 100 : 0
      const newProgress = Math.min(100, Math.max(0, scrolled))
      setScrollProgress(newProgress)
      isUpdating = false
      rafId = null
    }

    const handleScroll = () => {
      if (!isUpdating) {
        isUpdating = true
        rafId = requestAnimationFrame(updateProgress)
      }
    }

    // Use passive listener for maximum performance
    window.addEventListener("scroll", handleScroll, { passive: true })
    // Initial update
    updateProgress()
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [])

  // Handle smooth scrolling for anchor links with custom easing
  React.useEffect(() => {
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    const smoothScrollTo = (targetY: number, duration: number = 1000) => {
      const startY = window.pageYOffset || window.scrollY
      const distance = targetY - startY
      let startTime: number | null = null
      let rafId: number | null = null

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / duration, 1)
        const ease = easeInOutCubic(progress)

        const currentY = startY + distance * ease
        window.scrollTo({
          top: currentY,
          behavior: 'auto' // Use 'auto' to prevent browser smooth scroll interference
        })

        if (progress < 1) {
          rafId = requestAnimationFrame(animation)
        } else {
          rafId = null
        }
      }

      rafId = requestAnimationFrame(animation)
      
      // Return cleanup function if needed
      return () => {
        if (rafId !== null) {
          cancelAnimationFrame(rafId)
        }
      }
    }

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a[href^='#']")
      if (anchor) {
        const href = anchor.getAttribute("href")
        if (href && href.startsWith("#")) {
          e.preventDefault()
          e.stopPropagation()
          
          const targetId = href.substring(1)
          const targetElement = document.getElementById(targetId)
          if (targetElement) {
            // Prevent any scroll jump by using instant scroll first
            const currentScroll = window.pageYOffset
            window.scrollTo({ top: currentScroll, behavior: 'auto' })
            
            // Calculate target position
            const headerOffset = 80
            const elementPosition = targetElement.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            // Start smooth scroll immediately on next frame
            requestAnimationFrame(() => {
              smoothScrollTo(offsetPosition)
            })
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/60">
      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-primary"
        style={{ 
          width: `${scrollProgress}%`,
          willChange: "width",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden"
        }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="font-mono text-xs sm:text-sm tracking-tight text-muted-foreground hover:text-foreground transition-colors"
        >
          {"<dev/>"} Ayushkoli.exe
        </Link>

        {/* NAVIGATION - Desktop */}
        {isHome && (
          <nav className="hidden md:flex items-center gap-3">
          <a href="#hero" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Home
          </a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </a>
          {/* <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Experience
          </a> */}
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
          <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            skills
          </a>
        </nav>
        )}
        
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Social Links - Desktop */}
          <SocialLinks className="hidden md:flex" />

          {/* Mobile Social Links Hamburger */}
          <button
            onClick={() => setLinksOpen(!linksOpen)}
            className="md:hidden p-2 rounded-md border border-border/60 bg-card/50 hover:bg-card transition-colors text-muted-foreground hover:text-foreground relative"
            aria-label="Toggle social links menu"
          >
            {linksOpen ? <X size={18} /> : <LinkIcon size={18} />}
          </button>

          {/* <ThemeToggle /> */}

          {/* Hire Me button (only show on homepage) */}
          {isHome && (
            <Button asChild size="sm" className="hidden md:flex font-mono text-xs sm:text-sm px-2 sm:px-3">
            <a href="#contact" aria-label="Contact me">
              Hire me
            </a>
          </Button>
          )}
          
        </div>
      </div>

      {/* Mobile Social Links Menu */}
      <AnimatePresence mode="wait">
        {linksOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 500,
              damping: 40,
              mass: 0.6
            }}
            className="md:hidden border-t border-border/60 bg-card/95 backdrop-blur-sm overflow-hidden"
            style={{ 
              willChange: "height, opacity",
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              WebkitTransform: "translateZ(0)"
            }}
          >
            <div className="mx-auto max-w-6xl px-4 py-4">
              <SocialLinks size={18} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
