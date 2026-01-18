import Section from "@/components/section"

const items = [
  {
    role: "Web Developer Intern",
    org: "Abhinav IT Solutions Pvt Ltd",
    period: "2024",
    points: [
      "Completed an in-office, stipend-based internship at a product-based company",
      "Contributed to building and maintaining company products",
      "Collaborated with teams and attended client meetings",
      "Optimized development workflows — reducing dev time and improving product delivery",
    ],
  },
  {
    role: "National Level Hackathon WINNER",
    org: "InnovateYou Techathon 2.0",
    period: "2024",
    points: [
      "Winner of a 24-hour national-level hackathon at AISSMS IoT College",
      "Competed in the healthcare domain",
      "Recognized for developing an AI-powered health solution",
    ],
  },
]

export default function Experience() {
  return (
    <Section id="experience">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-10">Experience</h2>
      <ol className="relative border-s border-border/60 dark:border-border/40">
        {items.map((item, idx) => (
          <li key={idx} className="ms-4 sm:ms-6 pb-8 sm:pb-10 last:pb-0 group">
            <span 
              className="absolute -start-2.5 sm:-start-2 mt-1.5 size-3.5 sm:size-4 rounded-full bg-primary ring-2 ring-background transition-all duration-300 group-hover:scale-125 group-hover:ring-primary/30" 
              aria-hidden="true" 
            />
            <div className="rounded-lg border border-border/60 dark:border-border/40 bg-card p-4 sm:p-5 md:p-6 transition-all duration-300 hover:border-border hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5">
              <div className="flex flex-wrap items-baseline justify-between gap-2 sm:gap-3 mb-3">
                <h3 className="text-base sm:text-lg font-semibold leading-tight">
                  {item.role} · <span className="text-muted-foreground font-medium">{item.org}</span>
                </h3>
                <span className="text-xs sm:text-sm text-muted-foreground font-medium px-2 py-1 rounded-md bg-muted/50 border border-border/40">
                  {item.period}
                </span>
              </div>
              <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 list-disc ps-4 sm:ps-5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {item.points.map((p) => (
                  <li key={p} className="transition-colors duration-200 group-hover:text-foreground/80">{p}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
