import { Navbar } from '@/components/grindmode/navbar'
import { Hero } from '@/components/grindmode/hero'
import { ProblemSolution } from '@/components/grindmode/problem-solution'
import { HowItWorks } from '@/components/grindmode/how-it-works'
import { Gamification } from '@/components/grindmode/gamification'
import { AiMentor } from '@/components/grindmode/ai-mentor'
import { Benefits } from '@/components/grindmode/benefits'
import { Cta } from '@/components/grindmode/cta'
import { Footer } from '@/components/grindmode/footer'

export default function Page() {
  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--color-card)] focus:px-4 focus:py-2 focus:text-[var(--color-cyan)]"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Gamification />
        <AiMentor />
        <Benefits />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
