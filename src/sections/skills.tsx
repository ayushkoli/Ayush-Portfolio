import Section from "@/components/section"
import IconBadge from "@/components/icon-badge"
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiSupabase,
  SiPrisma,
  SiJest,
  SiGithubactions,
  SiLighthouse,
} from "react-icons/si"
import { Accessibility, RefreshCw } from "lucide-react"
import type { IconType } from "react-icons"
import type { ForwardRefExoticComponent, RefAttributes } from "react"
import type { LucideProps } from "lucide-react"

// ✅ Define reusable Skill type
type Skill = {
  label: string
  icon:
    | IconType
    | ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}

const skills: Skill[] = [
  { label: "Next.js", icon: SiNextdotjs },
  { label: "React", icon: SiReact },
  { label: "TypeScript", icon: SiTypescript },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "Tailwind CSS", icon: SiTailwindcss },
  { label: "Postgres", icon: SiPostgresql },
  { label: "Supabase", icon: SiSupabase },
  { label: "Prisma", icon: SiPrisma },
  { label: "Testing", icon: SiJest },
  { label: "CI/CD", icon: SiGithubactions },
  { label: "Web Vitals", icon: SiLighthouse },
  { label: "A11Y", icon: Accessibility },
  { label: "SWR", icon: RefreshCw },
]

export default function Skills() {
  const chunkSize = 8
  const rows: Skill[][] = []

  for (let i = 0; i < skills.length; i += chunkSize) {
    rows.push(skills.slice(i, i + chunkSize))
  }

  return (
    <>
      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Core Skills</h2>

        <div className="flex flex-col gap-4">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="relative overflow-hidden rounded-lg border border-border/60 bg-card"
            >
              <div
                className={`flex whitespace-nowrap gap-8 py-3 animate-marquee ${
                  rowIndex % 2 === 1 ? "animate-marquee-reverse" : ""
                }`}
              >
                {/* Duplicate multiple times for continuous flow */}
                {[...Array(3)].map((_, dupIndex) => (
                  <div className="flex gap-6" key={dupIndex}>
                    {row.map((skill) => (
                      <IconBadge
                        key={`${rowIndex}-${dupIndex}-${skill.label}`}
                        icon={skill.icon}
                        label={skill.label}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ✅ Responsive Animation Speed */}
      <style>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Base (mobile): slower */
        .animate-marquee {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-right 40s linear infinite;
        }

        /* Medium screens: normal */
        @media (min-width: 768px) {
          .animate-marquee {
            animation-duration: 30s;
          }
          .animate-marquee-reverse {
            animation-duration: 30s;
          }
        }

        /* Large screens: faster */
        @media (min-width: 1280px) {
          .animate-marquee {
            animation-duration: 20s;
          }
          .animate-marquee-reverse {
            animation-duration: 20s;
          }
        }

        /* Pause on hover */
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  )
}
