'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  LayoutDashboard,
  BookOpen,
  ListTodo,
  Timer,
  Trophy,
  Bot,
  BarChart3,
  Settings,
  TrendingUp,
  Menu,
  X,
} from 'lucide-react'

const NAV = [
  { icon: LayoutDashboard, label: 'Inicio', active: true },
  { icon: BookOpen, label: 'Materias' },
  { icon: ListTodo, label: 'Tareas' },
  { icon: Timer, label: 'Pomodoro' },
  { icon: Trophy, label: 'Logros' },
  { icon: Bot, label: 'Mentor IA' },
  { icon: BarChart3, label: 'Progreso' },
  { icon: Settings, label: 'Ajustes' },
]

export function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile top bar */}
      <div className="flex items-center justify-between border-b border-[var(--color-border-1)] bg-[var(--color-sidebar-bg)] px-4 py-3 lg:hidden">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg gradient-brand">
            <TrendingUp className="h-4 w-4 text-white" strokeWidth={2.5} />
          </span>
          <span className="font-sans font-bold">GrindMode</span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--color-border-1)]"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <aside
        className={`${
          open ? 'block' : 'hidden'
        } border-b border-[var(--color-border-1)] bg-[var(--color-sidebar-bg)] lg:sticky lg:top-0 lg:block lg:h-screen lg:w-64 lg:shrink-0 lg:border-b-0 lg:border-r`}
      >
        <div className="hidden items-center gap-2.5 px-6 py-6 lg:flex">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl gradient-brand">
              <TrendingUp className="h-5 w-5 text-white" strokeWidth={2.5} />
            </span>
            <span className="font-sans text-lg font-bold">
              Grind<span className="text-gradient-brand">Mode</span>
            </span>
          </Link>
        </div>

        <nav className="flex flex-col gap-1 p-4">
          {NAV.map((item) => (
            <button
              key={item.label}
              type="button"
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left font-ui text-sm transition-colors ${
                item.active
                  ? 'bg-[var(--color-elevated)] text-[var(--color-cyan)] glow-cyan'
                  : 'text-[var(--color-text-3)] hover:bg-[var(--color-elevated)] hover:text-[var(--color-text)]'
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 lg:absolute lg:bottom-4 lg:w-64">
          <div className="rounded-2xl border border-[var(--color-border-1)] bg-[var(--color-card)] p-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full gradient-brand font-display text-sm font-bold text-white">
                7
              </span>
              <div>
                <div className="font-ui text-sm font-semibold">Sofía R.</div>
                <div className="font-ui text-xs text-[var(--color-text-3)]">Nivel 7 · Aprendiz</div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
