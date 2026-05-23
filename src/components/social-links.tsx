import { CiLinkedin } from "react-icons/ci"
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineDescription } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";

type SocialLinksProps = {
  size?: number
  className?: string
  email?: string
  github?: string
  linkedin?: string
  xaccount?: string
  leetcode?: string
}

type SocialLink = {
  href: string
  label: string
  icon: React.ReactNode
  color: string
  external?: boolean
  download?: boolean
}

export default function SocialLinks({
  size = 18,
  className,
  email = "ayushkoli0709@gmail.com",
  github = "https://github.com/ayushkoli",
  linkedin = "https://www.linkedin.com/in/ayush-koli-445160299",
  xaccount = "https://x.com/Ayush_1874",
  leetcode = "https://leetcode.com/u/ayushkoli/"
}: SocialLinksProps): React.JSX.Element {

  const links: SocialLink[] = [
    {
      href: `mailto:${email}`,
      label: "Gmail",
      color: "hover:shadow-[0_0_12px_2px_rgba(234,67,53,0.5)] hover:border-red-400/60 hover:text-red-400",
      icon: <MdOutlineEmail size={size} aria-hidden="true" />,
    },
    {
      href: github,
      label: "GitHub",
      color: "hover:shadow-[0_0_12px_2px_rgba(255,255,255,0.2)] hover:border-white/40 hover:text-white",
      icon: <FaGithub size={size} aria-hidden="true" />,
      external: true,
    },
    {
      href: leetcode,
      label: "LeetCode",
      color: "hover:shadow-[0_0_12px_2px_rgba(255,161,22,0.4)] hover:border-orange-400/60 hover:text-orange-400",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width={size}
          height={size}
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M33.8092 34.8772 26.8725 41.814a5.7258 5.7258 0 0 1-8.1154 0L8.6127 31.67a5.726 5.726 0 0 1 0-8.1155L18.7571 13.41a5.7258 5.7258 0 0 1 8.1154 0L34.5 21.0373" />
          <path d="M18.7571 13.41 27.7647 4.5" />
          <path d="M19.5838 27.5918h21.49" />
        </svg>
      ),
      external: true,
    },
    {
      href: linkedin,
      label: "LinkedIn",
      color: "hover:shadow-[0_0_12px_2px_rgba(10,102,194,0.5)] hover:border-blue-500/60 hover:text-blue-400",
      icon: <CiLinkedin size={size} aria-hidden="true" />,
      external: true,
    },
    {
      href: xaccount,
      label: "Twitter / X",
      color: "hover:shadow-[0_0_12px_2px_rgba(255,255,255,0.15)] hover:border-white/30 hover:text-white",
      icon: <FaSquareXTwitter size={size} aria-hidden="true" />,
      external: true,
    },
    {
      href: "/ayushkoliresume.pdf",
      label: "Resume",
      color: "hover:shadow-[0_0_12px_2px_rgba(168,85,247,0.4)] hover:border-purple-400/60 hover:text-purple-400",
      icon: <MdOutlineDescription size={size} aria-hidden="true" />,
      download: true,
    },
  ]

  return (
    <div className={["flex items-center gap-2", className].filter(Boolean).join(" ")}>
      {links.map(({ href, label, icon, color, external, download }) => {
        const isExternal = external === true
        const isDownload = download === true

        return (
          <div key={label} className="relative group">
            <a
              href={href}
              aria-label={label}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              {...(isDownload ? { download: true } : {})}
              className={[
                "inline-flex items-center justify-center rounded-md border border-border/60 bg-card/50 backdrop-blur-sm",
                "h-8 w-8 text-muted-foreground transition-all duration-200",
                "hover:-translate-y-0.5 hover:scale-105 hover:bg-white/[0.03]",
                color,
              ].join(" ")}
            >
              {icon}
              <span className="sr-only">{label}</span>
            </a>

            <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded px-1.5 py-0.5 text-[10px] font-mono bg-card border border-border/60 text-muted-foreground opacity-0 scale-95 -translate-y-1 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-200 ease-out z-50">
              {label}
            </span>
          </div>
        );
      })}
    </div>
  )
}