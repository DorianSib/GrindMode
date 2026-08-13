import {
  CalendarX,
  AlarmClockOff,
  BatteryLow,
  LineChart,
  Ban,
  BookMarked,
  Gamepad2,
  Bot,
} from 'lucide-react'
import { Reveal } from './reveal'

const PROBLEMS = [
  { icon: CalendarX, text: 'Falta de hábitos de estudio' },
  { icon: AlarmClockOff, text: 'Estudio solo antes de exámenes' },
  { icon: BatteryLow, text: 'Baja motivación' },
  { icon: LineChart, text: 'Sin herramientas de progreso' },
  { icon: Ban, text: 'Distracciones constantes' },
]

const PILLARS = [
  {
    icon: BookMarked,
    title: 'Organización Académica',
    desc: 'Materias, tareas, proyectos y sesiones Pomodoro en un solo lugar, siempre bajo control.',
    color: 'var(--color-cyan)',
    glow: 'glow-cyan',
  },
  {
    icon: Gamepad2,
    title: 'Gamificación',
    desc: 'Gana XP, sube de nivel, desbloquea insignias y mantén rachas que te empujan a seguir.',
    color: 'var(--color-purple-2)',
    glow: 'glow-purple',
  },
  {
    icon: Bot,
    title: 'Inteligencia Artificial',
    desc: 'Un mentor académico que explica, planifica y resuelve tus dudas paso a paso, 24/7.',
    color: 'var(--color-cyan)',
    glow: 'glow-mix',
    gradient: true,
  },
]

export function ProblemSolution() {
  return (
    <section id="funciones" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* Problems */}
          <Reveal>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              ¿Por qué nace <span className="text-gradient-brand">GrindMode</span>?
            </h2>
            <p className="mt-4 max-w-md font-body text-[var(--color-text-3)]">
              Detectamos los obstáculos que frenan a los estudiantes cada día. GrindMode los
              convierte en oportunidades.
            </p>
            <ul className="mt-8 flex flex-col gap-3">
              {PROBLEMS.map((p) => (
                <li
                  key={p.text}
                  className="flex items-center gap-4 rounded-2xl border border-[var(--color-border-1)] bg-[var(--color-card)] px-5 py-4"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--color-elevated)]">
                    <p.icon className="h-5 w-5 text-[var(--color-text-disabled)]" />
                  </span>
                  <span className="font-body text-[var(--color-text-2)]">{p.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Pillars */}
          <div className="flex flex-col gap-5">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 120}>
                <article
                  className={`group rounded-3xl border border-[var(--color-border-1)] bg-[var(--color-card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-2)] hover:${pillar.glow}`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[var(--color-elevated)] ${
                        pillar.gradient ? 'gradient-brand' : ''
                      }`}
                    >
                      <pillar.icon
                        className="h-7 w-7"
                        style={{ color: pillar.gradient ? '#fff' : pillar.color }}
                      />
                    </span>
                    <div>
                      <h3 className="font-sans text-xl font-bold">{pillar.title}</h3>
                      <p className="mt-2 font-body text-sm text-[var(--color-text-3)] text-pretty">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
