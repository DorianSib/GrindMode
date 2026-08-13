import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Reveal } from './reveal'

const POINTS = ['100% Gratuito para estudiantes', 'Sin anuncios', 'IA incluida']

export function Cta() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-[2rem] gradient-brand px-6 py-16 text-center sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(60% 60% at 50% 50%, black, transparent 75%)',
            }}
          />
          <div className="relative">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-white text-balance sm:text-5xl">
              ¿Listo para subir de nivel?
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-lg text-white/90 text-pretty">
              Únete a miles de estudiantes que ya transformaron su forma de estudiar.
            </p>

            <div className="mt-9 flex justify-center">
              <Link
                href="/dashboard"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-ui text-base font-bold text-[var(--color-purple)] shadow-2xl transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Crear cuenta gratis
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {POINTS.map((p) => (
                <li key={p} className="inline-flex items-center gap-2 font-ui text-sm text-white">
                  <Check className="h-4 w-4" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
