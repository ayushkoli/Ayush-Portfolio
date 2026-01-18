import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import {
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiReact,
  SiPython,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiPostgresql,
} from "react-icons/si"
import { FaNodeJs, FaJava } from "react-icons/fa"
import type { IconType } from "react-icons"

type TechBubble = {
  icon: IconType
  name: string
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
}

const techs = [
  { icon: SiJavascript, name: "JavaScript" },
  { icon: FaJava, name: "Java" },
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiPython, name: "Python" },
  { icon: SiHtml5, name: "HTML5" },
  { icon: SiCss3, name: "CSS3" },
  { icon: SiGit, name: "Git" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiPostgresql, name: "PostgreSQL" },
]

const BUBBLE_SPEED = 0.08
const BUBBLE_MIN_SIZE = 60
const BUBBLE_MAX_SIZE = 80
const MOUSE_INFLUENCE = 0.01

export function HeroTechBubbles() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [bubbles, setBubbles] = React.useState<TechBubble[]>([])
  const [mousePosition, setMousePosition] = React.useState({ x: 50, y: 50 })
  const animationFrameRef = React.useRef<number>()

  // Track mouse position
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setMousePosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Initialize bubbles
  React.useEffect(() => {
    const initialBubbles: TechBubble[] = techs.map((tech, index) => ({
      ...tech,
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * BUBBLE_SPEED,
      vy: (Math.random() - 0.5) * BUBBLE_SPEED,
      size: BUBBLE_MIN_SIZE + Math.random() * (BUBBLE_MAX_SIZE - BUBBLE_MIN_SIZE),
    }))
    setBubbles(initialBubbles)
  }, [])

  // Animation loop
  React.useEffect(() => {
    const animate = () => {
      setBubbles((prevBubbles) =>
        prevBubbles.map((bubble) => {
          // Calculate distance from mouse
          const dx = mousePosition.x - bubble.x
          const dy = mousePosition.y - bubble.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          // Mouse influence - push bubbles away from cursor (smooth and responsive)
          let mouseVx = 0
          let mouseVy = 0
          if (distance < 30 && distance > 0) {
            const force = (30 - distance) / 30 // Stronger when closer
            mouseVx = (-dx / distance) * force * MOUSE_INFLUENCE * 30
            mouseVy = (-dy / distance) * force * MOUSE_INFLUENCE * 30
          }

          // Update velocity with mouse influence
          let newVx = bubble.vx + mouseVx
          let newVy = bubble.vy + mouseVy
          
          // Keep minimum velocity to ensure continuous movement - always moving!
          const minSpeed = BUBBLE_SPEED * 0.8 // Higher minimum to ensure visible movement
          const currentSpeed = Math.sqrt(newVx * newVx + newVy * newVy)
          
          // Always ensure minimum speed is maintained
          if (currentSpeed < minSpeed) {
            if (currentSpeed === 0 || (Math.abs(newVx) < 0.001 && Math.abs(newVy) < 0.001)) {
              // Completely stopped - give new random velocity
              const angle = Math.random() * Math.PI * 2
              newVx = Math.cos(angle) * minSpeed
              newVy = Math.sin(angle) * minSpeed
            } else {
              // Too slow - maintain minimum speed in current direction
              const scale = minSpeed / currentSpeed
              newVx *= scale
              newVy *= scale
            }
          }

          let newX = bubble.x + newVx
          let newY = bubble.y + newVy

          // Bounce off walls
          if (newX <= 0 || newX >= 100) {
            newX = Math.max(0, Math.min(100, newX))
            newVx = -newVx * 0.9 // Keep momentum
            if (Math.abs(newVx) < minSpeed) newVx = newVx > 0 ? minSpeed : -minSpeed
          }
          if (newY <= 0 || newY >= 100) {
            newY = Math.max(0, Math.min(100, newY))
            newVy = -newVy * 0.9 // Keep momentum
            if (Math.abs(newVy) < minSpeed) newVy = newVy > 0 ? minSpeed : -minSpeed
          }

          return { ...bubble, x: newX, y: newY, vx: newVx, vy: newVy }
        })
      )

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [mousePosition])

  return (
    <div
      ref={containerRef}
      className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full max-w-lg mx-auto rounded-2xl border border-border/60 bg-gradient-to-br from-card/50 via-card/30 to-card/50 backdrop-blur-sm overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.2) 0%, transparent 70%)`,
            animation: "pulse 4s ease-in-out infinite",
          }}
        />
      </div>

      {/* Floating bubbles */}
      <AnimatePresence>
        {bubbles.map((bubble) => {
          const Icon = bubble.icon
          return (
            <motion.div
              key={bubble.id}
              className="absolute cursor-pointer"
              style={{
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: [0, 5, -5, 0],
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                scale: { duration: 0.5 },
                rotate: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.15,
                zIndex: 10,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className={cn(
                  "w-full h-full rounded-full border-2 border-primary/50",
                  "bg-card/90 backdrop-blur-md shadow-lg",
                  "flex items-center justify-center",
                  "hover:border-primary hover:shadow-xl",
                  "transition-all duration-300",
                  "group relative"
                )}
                animate={{
                  boxShadow: [
                    "0 0 15px hsl(var(--primary) / 0.3)",
                    "0 0 25px hsl(var(--primary) / 0.5)",
                    "0 0 15px hsl(var(--primary) / 0.3)",
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <Icon className="text-2xl text-foreground group-hover:scale-110 transition-transform" />
                
                {/* Tooltip on hover */}
                <motion.div
                  className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-foreground text-background text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none z-20"
                  initial={{ y: 5, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {bubble.name}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">
                    <div className="border-4 border-transparent border-t-foreground" />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )
        })}
      </AnimatePresence>

      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" />
    </div>
  )
}
