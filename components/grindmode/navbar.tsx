'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Funciones', href: '#funciones' },
  { label: 'Gamificación', href: '#gamificacion' },
  { label: 'IA', href: '#ia' },

]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-[var(--color-border-1)]' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link href="#inicio" className="flex items-center gap-3" aria-label="GrindMode inicio">
          <span className="relative grid place-items-center rounded-2xl bg-[#F5E6D3] p-1.5 shadow-[0_0_22px_rgba(139,61,255,0.45)] ring-1 ring-[color-mix(in_oklab,var(--color-purple)_40%,transparent)]">
            <Image
              src="/logo.png"
              alt="GrindMode"
              width={48}
              height={48}
              priority
              className="h-12 w-12 object-contain"
            />
          </span>
          <span className="hidden font-sans text-xl font-bold tracking-tight sm:inline">
            Grind<span className="text-gradient-brand">Mode</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-ui text-sm text-[var(--color-text-3)] transition-colors hover:text-[var(--color-cyan)]"
            >
              {l.label}
            </Link>
          ))}
        </div>

       

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--color-border-1)] text-[var(--color-text)] md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--color-border-1)] bg-[var(--color-card)] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-ui text-base text-[var(--color-text-2)] transition-colors hover:bg-[var(--color-elevated)] hover:text-[var(--color-cyan)]"
              >
                {l.label}
              </Link>
            ))}
           
          </div>
        </div>
      )}
    </header>
  )
}
