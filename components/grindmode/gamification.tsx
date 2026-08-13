'use client'

import { useState, useCallback } from 'react'
import {
  Flame,
  Sprout,
  TreePine,
  Gem,
  Sparkles,
  Trophy,
  Star,
  Crown,
  Rocket,
  Lock,
  BookOpen,
  Target,
  Zap,
} from 'lucide-react'
import { Reveal } from './reveal'
import { Pomodoro } from './pomodoro'
import { burstConfetti } from './confetti'

const LEVELS = [
  { name: 'Novato', icon: Star },
  { name: 'Aprendiz', icon: Sparkles },
  { name: 'Experto', icon: Rocket },
  { name: 'Maestro', icon: Crown },
]

const BADGES = [
  { icon: Flame, label: 'Racha x7', threshold: 0 },
  { icon: BookOpen, label: 'Lector', threshold: 0 },
  { icon: Target, label: 'Enfocado', threshold: 2600 },
  { icon: Zap, label: 'Veloz', threshold: 2800 },
  { icon: Trophy, label: 'Campeón', threshold: 3000 },
  { icon: TreePine, label: 'Jardinero', threshold: -1 },
]

const XP_GOAL = 3000
const CURRENT_LEVEL = 1 // Aprendiz (index)

export function Gamification() {
  const [xp, setXp] = useState(2450)
  const [streak] = useState(12)
  const [seeds, setSeeds] = useState(48)
  const [trees, setTrees] = useState(6)
  const [gardenPlanted, setGardenPlanted] = useState(false)

  const pct = Math.min((xp / XP_GOAL) * 100, 100)

  const completeTask = useCallback((e: React.MouseEvent) => {
    setXp((x) => Math.min(x + 120, XP_GOAL))
    setSeeds((s) => s + 5)
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    burstConfetti({ x: rect.left + rect.width / 2, y: rect.top })
  }, [])

  const onPomodoro = useCallback(() => {
    setTrees((t) => t + 1)
    setGardenPlanted(true)
    setXp((x) => Math.min(x + 150, XP_GOAL))
    setSeeds((s) => s + 10)
  }, [])

  const unlockedCount = BADGES.filter(
    (b) => b.threshold === 0 || (b.threshold === -1 ? gardenPlanted : xp >= b.threshold),
  ).length

  return (
    <section
      id="gamificacion"
      className="relative py-24"
      style={{ background: 'linear-gradient(180deg, #09090b, #0d0e12)' }}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-ui text-sm uppercase tracking-widest text-[var(--color-purple-2)]">
            Gamificación
          </span>
          <h2 className="mt-3 font-badge text-2xl leading-snug text-balance sm:text-4xl">
            Aprender como si fuera un <span className="text-gradient-brand">videojuego</span>
          </h2>
          <p className="mt-4 font-body text-[var(--color-text-3)]">
            Cada tarea suma. Cada sesión cuenta. Convierte tu esfuerzo en progreso visible.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* XP + Levels + Streak column */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {/* XP bar */}
            <Reveal className="rounded-3xl border border-[var(--color-border-1)] bg-[var(--color-card)] p-6 glow-mix">
              <div className="flex items-end justify-between">
                <div>
                  <div className="font-ui text-sm text-[var(--color-text-3)]">Experiencia</div>
                  <div className="font-display text-2xl font-bold text-gradient-brand tabular-nums">
                    {xp.toLocaleString('es')} / {XP_GOAL.toLocaleString('es')} XP
                  </div>
                </div>
                <button
                  type="button"
                  onClick={completeTask}
                  className="inline-flex items-center gap-2 rounded-xl gradient-btn px-4 py-2.5 font-ui text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Zap className="h-4 w-4" />
                  Simular tarea completada
                </button>
              </div>
              <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-[var(--color-divider)]">
                <div
                  className="h-3 rounded-full gradient-brand"
                  style={{ width: `${pct}%`, transition: 'width 0.7s cubic-bezier(0.2,0.8,0.2,1)' }}
                />
              </div>

              {/* Levels */}
              <div className="mt-8 grid grid-cols-4 gap-3">
                {LEVELS.map((lvl, i) => {
                  const active = i === CURRENT_LEVEL
                  const reached = i <= CURRENT_LEVEL
                  return (
                    <div
                      key={lvl.name}
                      className={`flex flex-col items-center gap-2 rounded-2xl border p-3 text-center transition-all ${
                        active
                          ? 'border-[var(--color-cyan)] bg-[var(--color-elevated)] glow-cyan'
                          : 'border-[var(--color-border-1)] bg-[var(--color-bg-2)]'
                      }`}
                    >
                      <span
                        className={`grid h-11 w-11 place-items-center rounded-full ${
                          reached ? 'gradient-brand' : 'bg-[var(--color-elevated)]'
                        }`}
                      >
                        <lvl.icon
                          className="h-5 w-5"
                          style={{ color: reached ? '#fff' : '#727a8a' }}
                        />
                      </span>
                      <span
                        className={`font-ui text-xs font-semibold ${
                          active ? 'text-[var(--color-cyan)]' : 'text-[var(--color-text-3)]'
                        }`}
                      >
                        {lvl.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </Reveal>

            {/* Streak + Seeds row */}
            <div className="grid gap-6 sm:grid-cols-2">
              <Reveal className="flex items-center justify-between rounded-3xl border border-[var(--color-border-1)] bg-[var(--color-card)] p-6">
                <div>
                  <div className="font-ui text-sm text-[var(--color-text-3)]">Racha de estudio</div>
                  <div className="mt-1 font-display text-4xl font-bold" style={{ color: '#fbbf24' }}>
                    {streak}
                  </div>
                  <div className="font-ui text-xs text-[var(--color-text-disabled)]">días seguidos</div>
                </div>
                <Flame className="h-14 w-14" style={{ color: '#fbbf24' }} />
              </Reveal>

              <Reveal
                delay={100}
                className="flex items-center justify-between rounded-3xl border border-[var(--color-border-1)] bg-[var(--color-card)] p-6"
              >
                <div>
                  <div className="font-ui text-sm text-[var(--color-text-3)]">Semillas de enfoque</div>
                  <div className="mt-1 font-display text-4xl font-bold text-[var(--color-cyan)]">
                    {seeds}
                  </div>
                  <div className="font-ui text-xs text-[var(--color-text-disabled)]">monedas ganadas</div>
                </div>
                <Gem className="h-14 w-14 text-[var(--color-cyan)]" />
              </Reveal>
            </div>

            {/* Badges */}
            <Reveal className="rounded-3xl border border-[var(--color-border-1)] bg-[var(--color-card)] p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-sans text-lg font-bold">Insignias</h3>
                <span className="font-ui text-sm text-[var(--color-text-3)]">
                  {unlockedCount}/{BADGES.length} desbloqueadas
                </span>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-4 sm:grid-cols-6">
                {BADGES.map((badge) => {
                  const unlocked =
                    badge.threshold === 0
                      ? true
                      : badge.threshold === -1
                        ? gardenPlanted
                        : xp >= badge.threshold
                  return (
                    <div key={badge.label} className="flex flex-col items-center gap-2 text-center">
                      <span
                        className={`grid h-16 w-16 place-items-center rounded-2xl border transition-all ${
                          unlocked
                            ? 'border-[var(--color-border-2)] bg-[var(--color-elevated)] glow-purple'
                            : 'border-[var(--color-border-1)] bg-[var(--color-bg-2)] opacity-40'
                        }`}
                      >
                        {unlocked ? (
                          <badge.icon className="h-7 w-7 text-[var(--color-cyan)]" />
                        ) : (
                          <Lock className="h-6 w-6 text-[var(--color-text-disabled)]" />
                        )}
                      </span>
                      <span
                        className={`font-ui text-[11px] ${
                          unlocked ? 'text-[var(--color-text-2)]' : 'text-[var(--color-text-disabled)]'
                        }`}
                      >
                        {badge.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </Reveal>
          </div>

          {/* Right column: Pomodoro + Garden */}
          <div className="flex flex-col gap-6">
            <Reveal className="rounded-3xl border border-[var(--color-border-1)] bg-[var(--color-card)] p-6">
              <h3 className="text-center font-sans text-lg font-bold">Sesión Pomodoro</h3>
              <p className="mb-4 text-center font-body text-sm text-[var(--color-text-3)]">
                Concéntrate y planta tu árbol.
              </p>
              <Pomodoro onComplete={onPomodoro} />
            </Reveal>

            <Reveal delay={100} className="rounded-3xl border border-[var(--color-border-1)] bg-[var(--color-card)] p-6">
              <div className="flex items-center gap-2">
                <Sprout className="h-5 w-5" style={{ color: '#00c896' }} />
                <h3 className="font-sans text-lg font-bold">Jardín Académico</h3>
              </div>
              <p className="mt-1 font-body text-sm text-[var(--color-text-3)]">
                Cada sesión completada planta vida. Abandona una y se marchita, sin castigos.
              </p>
              <div className="mt-4 grid grid-cols-5 gap-3 rounded-2xl bg-[var(--color-bg-2)] p-4">
                {Array.from({ length: 10 }).map((_, i) => {
                  const alive = i < trees
                  return (
                    <span
                      key={i}
                      className="grid aspect-square place-items-center rounded-xl"
                      style={{ background: alive ? 'rgba(0,200,150,0.12)' : 'rgba(114,122,138,0.08)' }}
                    >
                      <TreePine
                        className="h-6 w-6"
                        style={{ color: alive ? '#00c896' : '#3a3f4a', opacity: alive ? 1 : 0.6 }}
                      />
                    </span>
                  )
                })}
              </div>
              <div className="mt-3 text-center font-ui text-xs text-[var(--color-text-3)]">
                {trees} plantas vivas
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
