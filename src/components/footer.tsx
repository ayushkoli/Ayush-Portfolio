import SocialLinks from "@/components/social-links"

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-muted-foreground">
        <p className="text-center md:text-left">© {new Date().getFullYear()} Ayush Koli. All rights reserved.</p>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <p className="font-mono text-center sm:text-left">Built with React · Tailwind CSS</p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}
