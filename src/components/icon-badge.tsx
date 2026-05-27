import * as React from "react"
import { cn } from "@/lib/utils"
import { getTechColor } from "@/lib/tech-colors"

type IconBadgeProps = {
  icon: React.ComponentType<any>
  label: string
  className?: string
}

export default function IconBadge({ icon: Icon, label, className }: IconBadgeProps) {
  const [isHovered, setIsHovered] = React.useState(false)
  const brandColor = getTechColor(label)

  const getHoverStyles = () => {
    if (!brandColor) return undefined
    return {
      borderColor: isHovered ? `color-mix(in srgb, ${brandColor} 30%, transparent)` : undefined,
      boxShadow: isHovered ? `0 0 12px color-mix(in srgb, ${brandColor} 20%, transparent)` : undefined,
      backgroundColor: isHovered ? `color-mix(in srgb, ${brandColor} 10%, transparent)` : undefined,
    }
  }

  const isMultiColor = ["java", "python", "mysql", "google cloud", "firebase", "netlify", "jwt"].includes(label.toLowerCase().trim())

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-border/50 bg-muted/40",
        "text-base font-medium transition-all duration-300",
        "shadow-sm group cursor-default",
        className
      )}
      style={isHovered ? getHoverStyles() : undefined}
    >
      <Icon 
        className="text-lg sm:text-xl md:text-2xl opacity-90 transition-all duration-300 scale-100 group-hover:scale-110" 
        style={brandColor && !isMultiColor ? { color: brandColor } : undefined} 
      />
      <span className="text-xs sm:text-sm md:text-base transition-colors duration-300 group-hover:text-foreground">{label}</span>
    </div>
  )
}
