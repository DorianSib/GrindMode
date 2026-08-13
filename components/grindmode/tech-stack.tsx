import { Code2, Palette, Braces, Server, Database, BrainCircuit } from 'lucide-react'
import { Reveal } from './reveal'

const STACK = [
  { icon: Code2, name: 'HTML5', desc: 'Estructura semántica' },
  { icon: Palette, name: 'CSS3', desc: 'Diseño responsive' },
  { icon: Braces, name: 'JavaScript', desc: 'Interactividad' },
  { icon: Server, name: 'PHP / Node.js', desc: 'Lógica de servidor' },
  { icon: Database, name: 'MySQL', desc: 'Base de datos' },
  { icon: BrainCircuit, name: 'API de IA', desc: 'Mentor inteligente' },
]

export function TechStack() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-ui text-sm uppercase tracking-widest text-[var(--color-cyan)]">
            Stack técnico
          </span>
          <h2 className="mt-3 font-sans text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Construido con <span className="text-gradient-brand">tecnología moderna</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {STACK.map((tech, i) => (
            <Reveal key={tech.name} delay={(i % 6) * 70}>
              <article className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-[var(--color-border-1)] bg-[var(--color-card)] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-cyan)]">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--color-elevated)] transition-colors group-hover:glow-cyan">
                  <tech.icon className="h-6 w-6 text-[var(--color-cyan)]" />
                </span>
                <div className="font-sans text-sm font-semibold text-[var(--color-text)]">
                  {tech.name}
                </div>
                <div className="font-body text-xs text-[var(--color-text-3)]">{tech.desc}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
