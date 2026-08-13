import Link from 'next/link'
import Image from 'next/image'
import { Globe, MessageCircle, Share2, Send } from 'lucide-react'

const COLUMNS = [
  {
    title: 'Enlaces rápidos',
    links: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Funciones', href: '#funciones' },
      { label: 'Gamificación', href: '#gamificacion' },
      { label: 'Dashboard', href: '/dashboard' },
    ],
  },
  {
    title: 'Funciones',
    links: [
      { label: 'Organización', href: '#funciones' },
      { label: 'Sistema XP', href: '#gamificacion' },
      { label: 'Mentor IA', href: '#ia' },
      { label: 'Jardín Académico', href: '#gamificacion' },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { label: 'Soporte', href: '#' },
      { label: 'Sugerencias', href: '#' },
      { label: 'Docentes', href: '#' },
    ],
  },
]

const SOCIALS = [Globe, MessageCircle, Share2, Send]

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-1)] bg-[var(--color-sidebar-bg)]">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <span className="relative grid place-items-center rounded-2xl bg-[#F5E6D3] p-2 shadow-[0_0_28px_rgba(139,61,255,0.5)] ring-1 ring-[color-mix(in_oklab,var(--color-purple)_40%,transparent)]">
              <Image
                src="/logo.png"
                alt="GrindMode"
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
              />
            </span>
            <p className="mt-4 max-w-xs font-body text-sm text-[var(--color-text-3)] text-pretty">
              Level Up Your Learning. La plataforma que transforma el estudio en una experiencia
              gamificada e inteligente.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Red social"
                  className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-elevated)] text-[var(--color-cyan)] transition-colors hover:text-[var(--color-purple)]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-sans text-sm font-semibold text-[var(--color-text)]">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="font-body text-sm text-[var(--color-text-3)] transition-colors hover:text-[var(--color-cyan)]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[var(--color-border-1)] pt-7 text-center sm:flex-row sm:text-left">
          <p className="font-ui text-sm text-gradient-brand">Made with GAnMA</p>
          <p className="font-body text-xs text-[var(--color-text-3)]">
            Unidad Educativa Prof. Nelly Aguirre Cárdenas · Año Lectivo 2026-2027
          </p>
        </div>
      </div>
    </footer>
  )
}
