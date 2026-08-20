'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Gamepad2, Flame, Sparkles, ArrowRight, PlayCircle } from 'lucide-react'
import { CountUp } from './count-up'

export function Hero() {
  const layerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = layerRef.current
    if (!el) return
    const mq = window.matchMedia('(pointer: fine)')
    if (!mq.matches) return
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      const dx = (e.clientX - cx) / cx
      const dy = (e.clientY - cy) / cy
      el.style.setProperty('--px', `${dx * 14}px`)
      el.style.setProperty('--py', `${dy * 14}px`)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* background mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 55% at 20% 25%, rgba(139,61,255,0.16), transparent 60%), radial-gradient(50% 50% at 85% 30%, rgba(0,217,255,0.14), transparent 60%), linear-gradient(180deg, #09090b, #121318)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(70% 60% at 50% 40%, black, transparent 80%)',
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-purple)] bg-[var(--color-card)] px-4 py-1.5 font-ui text-xs uppercase tracking-wider text-[var(--color-cyan)]">
            <Gamepad2 className="h-4 w-4" />
            Plataforma Educativa Gamificada
          </span>

          <h1 className="mt-6 font-sans text-5xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            <span className="text-gradient-brand">Level Up</span>
            <br />
            Your Learning
          </h1>

          <p className="mt-6 max-w-md font-body text-lg text-[var(--color-text-2)] text-pretty">
            Organiza tu estudio. Mantén la motivación. Deja que la IA te guíe.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#gamificacion"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[var(--color-cyan)] px-7 py-3.5 font-ui text-base font-semibold text-[var(--color-cyan)] transition-colors hover:bg-[color-mix(in_oklab,var(--color-cyan)_12%,transparent)]"
            >
              <PlayCircle className="h-5 w-5" />
              Ver Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid max-w-lg grid-cols-3 gap-4">
            {[
              { value: <CountUp end={10000} suffix="+" />, label: 'Estudiantes' },
              { value: 'XP', label: 'Sistema de puntos' },
              { value: 'IA', label: 'Mentor integrado' },
            ].map((s, i) => (
              <div
                key={i}
                className="glass rounded-2xl border border-[var(--color-border-1)] px-4 py-4"
              >
                <div className="font-display text-2xl font-bold text-gradient-brand">{s.value}</div>
                <div className="mt-1 font-ui text-xs text-[var(--color-text-3)]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div ref={layerRef} className="relative mx-auto w-full max-w-md">
          <div
            className="relative"
            style={{ transform: 'translate3d(var(--px,0), var(--py,0), 0)', transition: 'transform 0.2s ease-out' }}
          >
            <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(139,61,255,0.28),transparent_65%)] blur-2xl" />
            <Image
              src="/hero-avatar.png"
              alt="Avatar de estudiante gamificado con elementos flotantes de XP y nivel"
              width={520}
              height={520}
              priority
              className="relative z-10 mx-auto rounded-[2rem] border border-[var(--color-border-1)] shadow-2xl"
            />
          </div>

          {/* floating cards */}
          <div className="absolute -left-2 top-10 z-20 animate-float-slow rounded-2xl border border-[var(--color-border-1)] glass px-4 py-3">
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5" style={{ color: '#fbbf24' }} />
              <span className="font-display text-xl font-bold" style={{ color: '#fbbf24' }}>
                12
              </span>
            </div>
            <div className="font-ui text-[11px] text-[var(--color-text-3)]">días de racha</div>
          </div>

          <div
            className="absolute -right-2 top-24 z-20 animate-float-slow rounded-2xl border border-[var(--color-border-1)] glass px-4 py-3"
            style={{ animationDelay: '1.2s' }}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[var(--color-cyan)]" />
              <span className="font-display text-xl font-bold text-[var(--color-cyan)]">2,450</span>
            </div>
            <div className="font-ui text-[11px] text-[var(--color-text-3)]">XP total</div>
          </div>

          <div
            className="absolute bottom-6 left-6 z-20 animate-float-slow rounded-2xl border border-[var(--color-border-1)] glass px-4 py-3"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="font-badge text-sm text-gradient-brand">NIVEL 7</div>
            <div className="font-ui text-[11px] text-[var(--color-text-3)]">Aprendiz</div>
          </div>
        </div>
      </div>
    </section>
  )
}
