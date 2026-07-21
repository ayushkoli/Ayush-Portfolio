import Section from "@/components/section"
import TiltCard from "@/components/tilt-card"
import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa"
import { ArrowRight } from "lucide-react"

const projects = [
  
  {
    title: "WriteSpace - Social Media Blog Platform",
    desc: "Built a full-stack social media application with JWT auth, CRUD posts, like/comment system, and user profiles using React, Node.js, Express, and MongoDB.",
    skills: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "React.js",
      "JWT",
      "bcrypt",
    ],
    img: "/quick-tools.png",
    link: "https://writespace-black.vercel.app/",
    githubLink: "https://github.com/ayushkoli/Writespace",
    showArrow: true,
  },
  {
  title: "Gramin Arogya – AI-Powered Rural Healthcare Platform",
  desc: "Built an AI-powered telemedicine platform connecting rural patients with urban doctors, enabling online consultations, digital prescriptions, and government health scheme discovery. Integrated Puter.js for AI-driven symptom analysis and WebSockets for real-time communication, while designing a multilingual, low-bandwidth optimized interface for improved accessibility in rural India.",
  skills: [
    "JavaScript",
    "Node.js",
    "Express.js",
    "WebSocket",
    "Puter.js",
    "HTML/CSS",
    "AI Integration",
  ],
  img: "/gramin-arogya.png",
  githubLink: "https://github.com/ayushkoli/Gramin-Arogya",
  showArrow: false,
},
  {
    title: "Video Calling App – Real-Time Communication Platform",
    desc: "Developed a secure, real-time video calling application using WebRTC, enabling low-latency peer-to-peer communication. Implemented dynamic room creation, encrypted media streams, and real-time connection management, optimizing connection setup to reduce call initiation time by 20%.",
    skills: [
      "WebRTC",
      "JavaScript",
      "Node.js",
      "Express.js",
      "HTML/CSS",
      "Socket.IO",
      "STUN/TURN",
    ],
    img: "/video.png",
    link: "https://videocall-lza3.onrender.com",
    githubLink: "https://github.com/ayushkoli/videocall",
    showArrow: true,
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-2.5 md:gap-3">
        {projects.map((p) => (
          <TiltCard key={p.title} className="group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-3 sm:mb-4">
              <img
                src={p.img || "/placeholder.svg"}
                alt={`${p.title} preview`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <h3 className="text-base sm:text-lg font-semibold">{p.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-3">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
              {p.skills.map((s) => (
                <span
                  key={s}
                  className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md bg-muted text-muted-foreground border border-border/60"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              <Button asChild size="sm" variant="secondary" className="text-xs sm:text-sm w-full sm:w-auto">
                <a href={p.githubLink} aria-label={`Open ${p.title}`} target="_blank" rel="noopener noreferrer">
                  Open <FaGithub className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </a>
              </Button>
              {p.showArrow && (
                <Button asChild size="sm" className="text-xs sm:text-sm w-full sm:w-auto">
                  <a href={p.link} aria-label={`View ${p.title}`} target="_blank" rel="noopener noreferrer">
                    View Project <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </a>
                </Button>
              )}
            </div>
          </TiltCard>
        ))}
      </div>
    </Section>
  )
}
