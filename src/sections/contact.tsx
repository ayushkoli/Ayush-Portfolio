import Section from "@/components/section"
import { Button } from "@/components/ui/button"
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <Section id="contact" className="pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-24">
      <div className="rounded-xl border border-border/60 bg-card p-6 sm:p-8 md:p-10 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Let&apos;s build something exceptional.</h2>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          Have an opportunity or idea? I'd love to hear it — Twitter (X) is the quickest way to reach me.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
          <Button asChild size="sm" className="text-sm w-full sm:w-auto">
            <a href="mailto:ayushkoli0709@gmail.com" aria-label="Email me">
              Email me
              <MdOutlineMail className="ml-2" />
            </a>
          </Button>
          <Button asChild variant="secondary" size="sm" className="text-sm w-full sm:w-auto">
            <a href="https://www.linkedin.com/in/ayush-koli-445160299" target="_blank" rel="noreferrer" aria-label="Open LinkedIn">
              LinkedIn
              <FaLinkedin className="ml-2" />
            </a>
          </Button>
          
          <Button asChild variant="secondary" size="sm" className="text-sm w-full sm:w-auto">
            <a href="https://x.com/Ayush_1874" target="_blank" rel="noreferrer" aria-label="Open Twitter">
              Twitter (X)
              <FaSquareXTwitter className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </Section>
  )
}
