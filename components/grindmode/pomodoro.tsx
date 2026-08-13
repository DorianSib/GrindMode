'use client'

import { useEffect, useRef, useState } from 'react'
import { Play, Pause, RotateCcw, Check, Sprout } from 'lucide-react'
import { burstConfetti } from './confetti'

const TOTAL = 25 * 60 // demo uses a compressed feel but real 25 min

export function Pomodoro({ onComplete }: { onComplete?: () => void }) {
  const [remaining, setRemaining] = useState(TOTAL)
  const [running, setRunning] = useState(false)
  const [done, setDone] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!running) return
    intervalRef.current = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(intervalRef.current!)
          setRunning(false)
          setDone(true)
          burstConfetti()
          onComplete?.()
          return 0
        }
        return r - 1
      })
    }, 1000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [running, onComplete])

  const progress = 1 - remaining / TOTAL
  const R = 84
  const CIRC = 2 * Math.PI * R
  const mm = String(Math.floor(remaining / 60)).padStart(2, '0')
  const ss = String(remaining % 60).padStart(2, '0')

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setRunning(false)
    setDone(false)
    setRemaining(TOTAL)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-52 w-52">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="pomo-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8b3dff" />
              <stop offset="100%" stopColor="#00d9ff" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r={R} fill="none" stroke="#1f222b" strokeWidth="12" />
          <circle
            cx="100"
            cy="100"
            r={R}
            fill="none"
            stroke="url(#pomo-grad)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            strokeDashoffset={CIRC * (1 - progress)}
            style={{ transition: 'stroke-dashoffset 0.5s linear' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {done ? (
            <span className="grid h-14 w-14 place-items-center rounded-full" style={{ background: 'rgba(0,200,150,0.15)' }}>
              <Check className="h-8 w-8" style={{ color: '#00c896' }} />
            </span>
          ) : (
            <span className="font-display text-4xl font-bold tabular-nums text-[var(--color-text)]">
              {mm}:{ss}
            </span>
          )}
          <span className="mt-1 font-ui text-xs uppercase tracking-widest text-[var(--color-text-3)]">
            {done ? 'Sesión completa' : 'Enfoque'}
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        {!done && (
          <button
            type="button"
            onClick={() => setRunning((v) => !v)}
            className="inline-flex items-center gap-2 rounded-xl gradient-btn px-5 py-2.5 font-ui text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {running ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {running ? 'Pausar' : 'Iniciar'}
          </button>
        )}
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-xl border-2 border-[var(--color-border-2)] px-5 py-2.5 font-ui text-sm font-semibold text-[var(--color-text-2)] transition-colors hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)]"
        >
          <RotateCcw className="h-4 w-4" />
          Reiniciar
        </button>
      </div>

      {done && (
        <p className="mt-4 inline-flex items-center gap-2 font-ui text-sm" style={{ color: '#00c896' }}>
          <Sprout className="h-4 w-4" />
          ¡Plantaste un árbol en tu Jardín Académico!
        </p>
      )}
    </div>
  )
}
