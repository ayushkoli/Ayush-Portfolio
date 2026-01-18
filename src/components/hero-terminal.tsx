import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/ui/terminal"

export function HeroTerminal() {
    return (
        <Terminal
            className="
            max-w-full
            overflow-hidden
            whitespace-pre-wrap
            break-words
            px-3
            ">
            <TypingAnimation>Initializing system... 🔧</TypingAnimation>
            <TypingAnimation>Connecting to Dev Network... ✅</TypingAnimation>
            <TypingAnimation> whoami</TypingAnimation>
            <AnimatedSpan>ayush@developer: Full Stack Developer 💻</AnimatedSpan>

            <AnimatedSpan>{`>`} skills --list</AnimatedSpan>
            <TypingAnimation>Next.js | TypeScript | Node.js | Express | MongoDB</TypingAnimation>

            <AnimatedSpan>{`>`} motto</AnimatedSpan>
            <TypingAnimation>"Building scalable systems, one API at a time 🚀"</TypingAnimation>

            <AnimatedSpan>{`>`} fun.fact</AnimatedSpan>
            <TypingAnimation>I sometimes console.log(myLife) to debug it 😅</TypingAnimation>

            <AnimatedSpan>{`>`} status</AnimatedSpan>
            <TypingAnimation>🟢 Open to remote opportunities</TypingAnimation>
        </Terminal>
    )
}
