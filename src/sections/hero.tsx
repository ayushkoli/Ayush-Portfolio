import Section from "@/components/section"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { SiJavascript, SiNodedotjs, SiExpress, SiMongodb, SiReact } from "react-icons/si";
import { HeroTechBubbles } from "@/components/hero-tech-bubbles"


export default function Hero() {

  return (
    <Section id="hero" className="min-h-[calc(100vh-64px)] flex items-center justify-center pt-0 pb-0 -mt-12 md:-mt-4">
      <div className="grid md:grid-cols-2 items-center gap-6 md:gap-10 w-full">
        <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
          <span className="block mb-1 sm:mb-0">
            <ShimmerButton
              className="inline-flex items-center text-xs font-mono px-2 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/60">
              Open to new opportunities
            </ShimmerButton>
          </span>
          <h1 className="text-pretty text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mt-2 sm:mt-0">
          From concept to production ready systems
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground text-balance">
            Full-stack developer focused on backend engineering. I enjoy designing efficient backend systems, and exploring new technologies. As a fresher, I'm focused on growing through practical projects, open-source work, and solving engineering challenges.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Button asChild size="sm" className="text-sm">
              <a href="#projects" aria-label="View projects">
                See my work
              </a>
            </Button>
            <Button asChild variant="secondary" size="sm" className="text-sm">
              <a href="#contact" aria-label="Contact me">
                Let&apos;s talk
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="text-sm">
              <a href="/ayushkoliresume.PDF" download aria-label="Download resume">
                My Resume
              </a>
            </Button>
          </div>
          <ul className="flex flex-wrap gap-2 sm:gap-3 text-xs text-muted-foreground">
            <SiJavascript className="size-5 sm:size-7" />
            <SiNodedotjs className="size-5 sm:size-7" />
            <SiExpress className="size-5 sm:size-7" />
            <SiMongodb className="size-5 sm:size-7" />
            <SiReact className="size-5 sm:size-7" />
          </ul>
        </div>

        {/* Tech Bubbles Game - Hidden on mobile */}
        <div className="hidden md:block order-1 md:order-2">
          <HeroTechBubbles />
        </div>

      </div>
    </Section>
  )
}
