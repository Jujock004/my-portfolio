import { GithubIcon } from "@/assets/icons/GithubIcon"
import { Section } from "./Section"
import { buttonVariants } from "./ui/button"
import { LinkedinIcon } from "@/assets/icons/LinkedinIcon"
import { cn } from "@/lib/utils"

export const Header = () => {
    return (
        <header className="bg-background/80 backdrop-blur-sm text-foreground sticky top-0 z-50 border-b border-b-muted-foreground">
            <Section className="flex items-center justify-between">
                <h1 className="text-lg font-bold text-primary">JJ</h1>
                <nav className="hidden md:flex items-center gap-6">
                    <a href="#about" className="hover:text-primary transition-colors">About</a>
                    <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                    <a href="#stack" className="hover:text-primary transition-colors">Stack</a>
                    <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                </nav>
                <nav className="flex items-center gap-2">
                    <a
                        href="https://github.com/Jujock004/"
                        target="_blank"
                        className={cn(buttonVariants({ variant: "outline" }), "size-10 p-0")}>
                        <GithubIcon size={18} className="text-foreground" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/julien-joecker/"
                        target="_blank"
                        className={cn(buttonVariants({ variant: "outline" }), "size-10 p-0")}>
                        <LinkedinIcon size={18} className="text-foreground" />
                    </a>
                </nav>
            </Section>
        </header>
    )
}