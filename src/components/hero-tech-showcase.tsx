import * as React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import {
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiReact,
} from "react-icons/si"
import { FaNodeJs, FaJava } from "react-icons/fa"
import type { IconType } from "react-icons"

type TechIcon = {
  icon: IconType
  name: string
  delay: number
  position: { x: number; y: number }
}

const techStack: TechIcon[] = [
  { icon: SiJavascript, name: "JavaScript", delay: 0, position: { x: 10, y: 20 } },
  { icon: FaJava, name: "Java", delay: 0.1, position: { x: 70, y: 30 } },
  { icon: SiReact, name: "React", delay: 0.2, position: { x: 40, y: 60 } },
  { icon: SiNextdotjs, name: "Next.js", delay: 0.3, position: { x: 80, y: 70 } },
  { icon: FaNodeJs, name: "Node.js", delay: 0.4, position: { x: 20, y: 80 } },
  { icon: SiExpress, name: "Express", delay: 0.5, position: { x: 60, y: 15 } },
  { icon: SiMongodb, name: "MongoDB", delay: 0.6, position: { x: 15, y: 50 } },
]

export function HeroTechShowcase() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })

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

  return (
    <div
      ref={containerRef}
      className="relative h-[400px] w-full max-w-lg mx-auto rounded-2xl border border-border/60 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm overflow-hidden"
    >
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.3) 0%, transparent 50%)`,
        }}
      />

      {/* Floating tech icons */}
      <div className="relative h-full w-full">
        {techStack.map((tech, index) => {
          const Icon = tech.icon
          const baseX = tech.position.x
          const baseY = tech.position.y
          const mouseInfluence = {
            x: (mousePosition.x - 50) / 500,
            y: (mousePosition.y - 50) / 500,
          }

          return (
            <motion.div
              key={tech.name}
              className="absolute"
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: `${baseX}%`,
                y: `${baseY}%`,
                rotate: mouseInfluence.x * 5,
              }}
              transition={{
                duration: 0.6,
                delay: tech.delay,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              whileHover={{
                scale: 1.2,
                rotate: 0,
                zIndex: 10,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className={cn(
                  "flex flex-col items-center justify-center gap-2",
                  "w-16 h-16 rounded-xl border border-border/60",
                  "bg-card/80 backdrop-blur-sm shadow-lg",
                  "hover:shadow-xl hover:border-primary/50",
                  "cursor-pointer transition-all duration-300"
                )}
                whileHover={{ y: -5 }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: tech.delay,
                }}
              >
                <Icon className="text-2xl text-foreground" />
                <span className="text-[10px] font-medium text-muted-foreground hidden group-hover:block">
                  {tech.name}
                </span>
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Center spotlight effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="absolute w-32 h-32 rounded-full blur-3xl bg-primary/20"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      </motion.div>

      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" />
    </div>
  )
}
