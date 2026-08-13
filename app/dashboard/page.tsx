import type { Metadata } from 'next'
import { Sidebar } from '@/components/dashboard/sidebar'
import {
  Zap,
  Flame,
  Gem,
  Trophy,
  CheckCircle2,
  Circle,
  Clock,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dashboard — GrindMode',
  description: 'Tu progreso académico gamificado en GrindMode.',
}

const STATS = [
  { icon: Zap, label: 'XP total', value: '2,450', accent: 'var(--color-cyan)' },
  { icon: Trophy, label: 'Nivel actual', value: '7', accent: 'var(--color-purple-2)', sub: 'Aprendiz' },
  { icon: Flame, label: 'Racha', value: '12', accent: '#fbbf24', sub: 'días' },
  { icon: Gem, label: 'Semillas', value: '48', accent: 'var(--color-cyan)' },
]

const TASKS = [
  { title: 'Ensayo de Historia', subject: 'Historia', due: 'Hoy · 18:00', done: false, priority: 'error' },
  { title: 'Ejercicios de Álgebra', subject: 'Matemáticas', due: 'Mañana', done: false, priority: 'warning' },
  { title: 'Lectura Capítulo 5', subject: 'Lengua', due: 'Vie 15', done: true, priority: 'success' },
  { title: 'Práctica de Laboratorio', subject: 'Química', due: 'Lun 18', done: false, priority: 'pending' },
]

const SUBJECTS = [
  { name: 'Matemáticas', pct: 82 },
  { name: 'Historia', pct: 64 },
  { name: 'Química', pct: 48 },
  { name: 'Lengua', pct: 91 },
  { name: 'Programación', pct: 73 },
]

const WEEKDAYS = ['L', 'M', 'X', 'J', 'V', 'S', 'D']
const EVENT_DAYS = [3, 12, 18, 22]
const TODAY = 12

const PRIORITY_COLOR: Record<string, string> = {
  error: '#ff4d4d',
  warning: '#fbbf24',
  success: '#00c896',
  pending: '#8b3dff',
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] lg:flex">
      <Sidebar />

      <main className="flex-1 px-5 py-8 lg:px-10">
        <header className="flex flex-col gap-1">
          <p className="font-ui text-sm text-[var(--color-text-3)]">Bienvenida de vuelta,</p>
          <h1 className="font-sans text-3xl font-bold tracking-tight">
            Hola, <span className="text-gradient-brand">Sofía</span>
          </h1>
        </header>

        {/* Stat cards */}
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[var(--color-border-1)] bg-[var(--color-card)] p-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-ui text-xs uppercase tracking-wider text-[var(--color-text-3)]">
                  {s.label}
                </span>
                <span
                  className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-elevated)]"
                >
                  <s.icon className="h-4 w-4" style={{ color: s.accent }} />
                </span>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold" style={{ color: s.accent }}>
                  {s.value}
                </span>
                {s.sub && (
                  <span className="font-ui text-xs text-[var(--color-text-3)]">{s.sub}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* XP progress */}
        <div className="mt-6 rounded-2xl border border-[var(--color-border-1)] bg-[var(--color-card)] p-6 glow-mix">
          <div className="flex items-end justify-between">
            <div>
              <div className="font-ui text-sm text-[var(--color-text-3)]">Progreso al Nivel 8</div>
              <div className="font-display text-xl font-bold text-gradient-brand">
                2,450 / 3,000 XP
              </div>
            </div>
            <span className="font-ui text-sm text-[var(--color-text-3)]">550 XP restantes</span>
          </div>
          <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-[var(--color-divider)]">
            <div className="h-3 rounded-full gradient-brand" style={{ width: '82%' }} />
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Tasks */}
          <section className="rounded-2xl border border-[var(--color-border-1)] bg-[var(--color-card)] p-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="font-sans text-lg font-bold">Próximas tareas</h2>
              <span className="font-ui text-xs text-[var(--color-cyan)]">Ver todas</span>
            </div>
            <ul className="mt-5 flex flex-col gap-3">
              {TASKS.map((t) => (
                <li
                  key={t.title}
                  className="flex items-center gap-4 rounded-2xl border border-[var(--color-border-1)] bg-[var(--color-bg-2)] p-4"
                >
                  {t.done ? (
                    <CheckCircle2 className="h-6 w-6 shrink-0" style={{ color: '#00c896' }} />
                  ) : (
                    <Circle className="h-6 w-6 shrink-0 text-[var(--color-text-disabled)]" />
                  )}
                  <div className="min-w-0 flex-1">
                    <div
                      className={`font-ui text-sm font-semibold ${
                        t.done ? 'text-[var(--color-text-disabled)] line-through' : 'text-[var(--color-text)]'
                      }`}
                    >
                      {t.title}
                    </div>
                    <div className="mt-0.5 flex items-center gap-2 font-body text-xs text-[var(--color-text-3)]">
                      <span
                        className="inline-block h-2 w-2 rounded-full"
                        style={{ background: PRIORITY_COLOR[t.priority] }}
                      />
                      {t.subject}
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1 font-ui text-xs text-[var(--color-text-3)]">
                    <Clock className="h-3.5 w-3.5" />
                    {t.due}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Mini calendar */}
          <section className="rounded-2xl border border-[var(--color-border-1)] bg-[var(--color-card)] p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-sans text-lg font-bold">Marzo</h2>
              <div className="flex gap-1">
                <button
                  type="button"
                  aria-label="Mes anterior"
                  className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--color-elevated)] text-[var(--color-text-3)]"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Mes siguiente"
                  className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--color-elevated)] text-[var(--color-text-3)]"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-7 gap-1 text-center">
              {WEEKDAYS.map((d) => (
                <span key={d} className="font-ui text-xs text-[var(--color-text-disabled)]">
                  {d}
                </span>
              ))}
              {Array.from({ length: 31 }).map((_, idx) => {
                const day = idx + 1
                const isToday = day === TODAY
                const hasEvent = EVENT_DAYS.includes(day)
                return (
                  <div
                    key={day}
                    className={`relative grid aspect-square place-items-center rounded-lg font-ui text-xs ${
                      isToday
                        ? 'gradient-brand font-bold text-white'
                        : 'text-[var(--color-text-2)] hover:bg-[var(--color-elevated)]'
                    }`}
                  >
                    {day}
                    {hasEvent && !isToday && (
                      <span
                        className="absolute bottom-1 h-1 w-1 rounded-full"
                        style={{ background: '#8b3dff' }}
                      />
                    )}
                  </div>
                )
              })}
            </div>
            <div className="mt-4 flex items-center gap-4 font-ui text-xs text-[var(--color-text-3)]">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full gradient-brand" /> Hoy
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full" style={{ background: '#8b3dff' }} /> Evento
              </span>
            </div>
          </section>
        </div>

        {/* Subject progress */}
        <section className="mt-6 rounded-2xl border border-[var(--color-border-1)] bg-[var(--color-card)] p-6">
          <h2 className="font-sans text-lg font-bold">Progreso por materia</h2>
          <div className="mt-5 flex flex-col gap-4">
            {SUBJECTS.map((sub) => (
              <div key={sub.name}>
                <div className="flex items-center justify-between font-ui text-sm">
                  <span className="text-[var(--color-text-2)]">{sub.name}</span>
                  <span className="font-stat font-semibold text-[var(--color-cyan)]">{sub.pct}%</span>
                </div>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-[var(--color-divider)]">
                  <div className="h-2.5 rounded-full gradient-brand" style={{ width: `${sub.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
