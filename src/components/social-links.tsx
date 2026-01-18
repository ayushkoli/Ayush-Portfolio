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

export default function SocialLinks({
  size = 18,
  className,
  email = "ayushkoli0709@gmail.com",
  github = "https://github.com/ayushkoli",
  linkedin = "https://www.linkedin.com/in/ayush-koli-445160299",
  xaccount = "https://x.com/Ayush_1874",
  leetcode = "https://leetcode.com/u/ayushkoli/"
}: SocialLinksProps) {
  const linkClasses =
    "inline-flex items-center justify-center rounded-md border border-border/60 bg-card/50 hover:bg-card transition-colors h-8 w-8 text-muted-foreground hover:text-foreground"

  return (
    <div className={["flex items-center gap-2", className].filter(Boolean).join(" ")}>
      <a href={`mailto:${email}`} aria-label="Email" className={linkClasses}>
        <MdOutlineEmail size={size} aria-hidden="true" />
        <span className="sr-only">Email</span>
      </a>
      <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={linkClasses}>
        <FaGithub size={size} aria-hidden="true" />
        <span className="sr-only">GitHub</span>
      </a>
      <a href={leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className={linkClasses}>
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
          className="text-current"
        >
          <path d="M33.8092 34.8772 26.8725 41.814a5.7258 5.7258 0 0 1-8.1154 0L8.6127 31.67a5.726 5.726 0 0 1 0-8.1155L18.7571 13.41a5.7258 5.7258 0 0 1 8.1154 0L34.5 21.0373" />
          <path d="M18.7571 13.41 27.7647 4.5" />
          <path d="M19.5838 27.5918h21.49" />
        </svg>
        <span className="sr-only">LeetCode</span>
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={linkClasses}>
        <CiLinkedin size={size} aria-hidden="true" />
        <span className="sr-only">LinkedIn</span>
      </a>

      <a href={xaccount} target="_blank" rel="noopener noreferrer" aria-label="xaccount" className={linkClasses}>
        <FaSquareXTwitter size={size} aria-hidden="true" />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a href="/ayushkoliresume.pdf" download aria-label="Resume" className={linkClasses}>
        <MdOutlineDescription size={size} aria-hidden="true" />
        <span className="sr-only">Resume</span>
      </a>
    </div>
  )
}
