import {
  FolderKanban,
  ListChecks,
  Timer,
  Zap,
  ArrowUpCircle,
  Award,
  Flame,
  BarChart3,
} from 'lucide-react'
import { Reveal } from './reveal'

const STEPS = [
  { icon: FolderKanban, title: 'Organizar materias' },
  { icon: ListChecks, title: 'Registrar tareas y proyectos' },
  { icon: Timer, title: 'Planificar sesiones Pomodoro' },
  { icon: Zap, title: 'Obtener experiencia (XP)' },
  { icon: ArrowUpCircle, title: 'Subir de nivel' },
  { icon: Award, title: 'Desbloquear insignias' },
  { icon: Flame, title: 'Mantener rachas de estudio' },
  { icon: BarChart3, title: 'Visualizar tu progreso' },
]

export function HowItWorks() {
  return (
    <section className="relative bg-[var(--color-bg-2)] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-ui text-sm uppercase tracking-widest text-[var(--color-cyan)]">
            ¿Cómo funciona?
          </span>
          <h2 className="mt-3 font-sans text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Tu camino hacia el <span className="text-gradient-brand">éxito</span>
          </h2>
          <p className="mt-4 font-body text-[var(--color-text-3)]">
            Ocho pasos que convierten el estudio diario en una progresión constante y medible.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={(i % 4) * 90}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-[var(--color-border-1)] bg-[var(--color-card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-2)]">
                <span
                  aria-hidden
                  className="absolute right-4 top-3 font-display text-5xl font-bold text-transparent opacity-70"
                  style={{ WebkitTextStroke: '1px rgba(139,61,255,0.35)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--color-elevated)] transition-colors group-hover:gradient-brand">
                  <step.icon className="h-6 w-6 text-[var(--color-cyan)] transition-colors group-hover:text-white" />
                </span>
                <h3 className="mt-5 font-sans text-lg font-semibold leading-tight text-balance">
                  {step.title}
                </h3>
                <div className="mt-4 h-1 w-full rounded-full bg-[var(--color-divider)]">
                  <div
                    className="h-1 rounded-full gradient-brand transition-all duration-500"
                    style={{ width: `${((i + 1) / STEPS.length) * 100}%` }}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
