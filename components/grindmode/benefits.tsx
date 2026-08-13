import { UserRound, GraduationCap, Check } from 'lucide-react'
import { Reveal } from './reveal'

const STUDENT = [
  'Mejor organización',
  'Mayor motivación',
  'Seguimiento del progreso',
  'Aprendizaje autónomo',
  'Desarrollo de hábitos',
]

export function Benefits() {
  return (
    <section className="relative bg-[var(--color-bg-2)] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-ui text-sm uppercase tracking-widest text-[var(--color-purple-2)]">
            Beneficios
          </span>
          <h2 className="mt-3 font-sans text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Valor para <span className="text-gradient-brand">todos</span>
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <Reveal className="glass rounded-3xl border border-[var(--color-border-1)] p-7">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--color-elevated)]">
              <UserRound className="h-7 w-7 text-[var(--color-cyan)]" />
            </span>
            <h3 className="mt-5 font-sans text-xl font-bold">Para el estudiante</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {STUDENT.map((b) => (
                <li key={b} className="flex items-center gap-3 font-body text-[var(--color-text-2)]">
                  <span
                    className="grid h-6 w-6 shrink-0 place-items-center rounded-full"
                    style={{ background: 'rgba(0,200,150,0.15)' }}
                  >
                    <Check className="h-4 w-4" style={{ color: '#00c896' }} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="glass rounded-3xl border border-[var(--color-border-1)] p-7">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--color-elevated)]">
              <GraduationCap className="h-7 w-7 text-[var(--color-purple-2)]" />
            </span>
            <h3 className="mt-5 font-sans text-xl font-bold">Para el docente</h3>
            <p className="mt-5 font-body leading-relaxed text-[var(--color-text-2)] text-pretty">
              El estudiante genera reportes de progreso para compartir como evidencia de esfuerzo y
              mejora, dando al docente una visión clara y objetiva del avance de cada alumno.
            </p>
            <div className="mt-6 rounded-2xl border border-[var(--color-border-1)] bg-[var(--color-bg)] p-4">
              <div className="font-ui text-xs uppercase tracking-wider text-[var(--color-text-3)]">
                Reporte de ejemplo
              </div>
              <div className="mt-3 flex items-end justify-between gap-2">
                {[60, 80, 45, 95, 70, 88].map((h, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-1">
                    <div
                      className="w-full rounded-md gradient-brand"
                      style={{ height: `${h * 0.7}px` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
