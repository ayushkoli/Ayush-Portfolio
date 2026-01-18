import { cn } from "@/lib/utils"
import type { IconType } from "react-icons"
import type { ForwardRefExoticComponent, RefAttributes } from "react"
import type { LucideProps } from "lucide-react"

type IconBadgeProps = {
  icon:
    | IconType
    | ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
      >
  label: string
  className?: string
}

export default function IconBadge({ icon: Icon, label, className }: IconBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-1 px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-border/50 bg-muted/40",
        "text-base font-medium hover:bg-muted/60 transition-colors duration-200",
        "shadow-sm hover:shadow-md",
        className
      )}
    >
      <Icon className="text-lg sm:text-xl md:text-2xl opacity-90" />
      <span className="text-xs sm:text-sm md:text-base">{label}</span>
    </div>
  )
}
