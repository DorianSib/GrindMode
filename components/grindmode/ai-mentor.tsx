'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  Lightbulb,
  CalendarClock,
  ListTree,
  FileText,
  Clock,
  GraduationCap,
  Send,
  ShieldCheck,
} from 'lucide-react'
import { Reveal } from './reveal'

const CAPABILITIES = [
  { icon: Lightbulb, title: 'Explicar conceptos', desc: 'Método socrático, nunca la respuesta directa.' },
  { icon: CalendarClock, title: 'Planes de estudio', desc: 'Personalizados según tus metas.' },
  { icon: ListTree, title: 'Resolver dudas', desc: 'Paso a paso, a tu ritmo.' },
  { icon: FileText, title: 'Flashcards y resúmenes', desc: 'Desde tus PDFs o fotos.' },
  { icon: Clock, title: 'Analizar hábitos', desc: 'Sugiere tus horarios óptimos.' },
  { icon: GraduationCap, title: 'Simulacros de examen', desc: 'Prepárate con confianza.' },
]

type Msg = { from: 'user' | 'ai'; text: string }

const SCRIPT: Msg[] = [
  { from: 'user', text: '¿Cuál es la fórmula del área de un triángulo?' },
  {
    from: 'ai',
    text: 'Buena pregunta. Antes de dártela: ¿qué dos medidas de un triángulo crees que necesitas para calcular su superficie?',
  },
  { from: 'user', text: 'La base y la altura, creo.' },
  {
    from: 'ai',
    text: 'Exacto. Ahora piensa en un rectángulo con esa misma base y altura: su área es base × altura. ¿Qué fracción de ese rectángulo ocupa el triángulo?',
  },
]

export function AiMentor() {
  const [messages, setMessages] = useState<Msg[]>([SCRIPT[0], SCRIPT[1]])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [step, setStep] = useState(2)
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  const send = (e: React.FormEvent) => {
    e.preventDefault()
    if (typing) return
    const text = input.trim()
    const userMsg: Msg = { from: 'user', text: text || SCRIPT[2]?.text || 'La base y la altura.' }
    setMessages((m) => [...m, userMsg])
    setInput('')
    setTyping(true)

    const reply =
      step < SCRIPT.length
        ? SCRIPT[step + 1] ?? SCRIPT[3]
        : {
            from: 'ai' as const,
            text: 'Vas muy bien. Sigue razonando así: cuando descubres el "porqué", el resultado se queda contigo para siempre.',
          }

    window.setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, reply])
      setStep((s) => Math.min(s + 2, SCRIPT.length + 2))
    }, 1300)
  }

  return (
    <section
      id="ia"
      className="relative border-y border-[var(--color-border-1)] bg-[var(--color-card)] py-24"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: intro + capabilities */}
          <div>
            <Reveal>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-full bg-[radial-gradient(circle,rgba(0,217,255,0.35),transparent_70%)] blur-lg" />
                  <Image
                    src="/ai-mentor.png"
                    alt="Mentor de IA, un búho robot digital con aura cian"
                    width={88}
                    height={88}
                    className="relative"
                  />
                </div>
                <span className="font-ui text-sm uppercase tracking-widest text-[var(--color-cyan)]">
                  Mentor Académico IA
                </span>
              </div>
              <h2 className="mt-6 font-sans text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Tu mentor inteligente, disponible{' '}
                <span className="text-gradient-brand">24/7</span>
              </h2>
              <p className="mt-4 max-w-md font-body text-[var(--color-text-2)] text-pretty">
                No te da la respuesta: te ayuda a encontrarla. Un apoyo que potencia al docente,
                nunca lo reemplaza.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {CAPABILITIES.map((cap, i) => (
                <Reveal
                  key={cap.title}
                  delay={(i % 2) * 80}
                  className="flex gap-3 rounded-2xl border border-[var(--color-border-1)] bg-[var(--color-bg-2)] p-4"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--color-elevated)]">
                    <cap.icon className="h-5 w-5 text-[var(--color-cyan)]" />
                  </span>
                  <div>
                    <div className="font-ui text-sm font-semibold text-[var(--color-text)]">
                      {cap.title}
                    </div>
                    <div className="mt-0.5 font-body text-xs text-[var(--color-text-3)]">
                      {cap.desc}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border-1)] bg-[var(--color-bg-2)] px-4 py-2 font-ui text-xs text-[var(--color-text-3)]">
              <ShieldCheck className="h-4 w-4" style={{ color: '#00c896' }} />
              Apoyo al aprendizaje, no reemplazo del docente.
            </p>
          </div>

          {/* Right: chat demo */}
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl border border-[var(--color-border-1)] bg-[var(--color-bg-2)] shadow-2xl glow-cyan">
              <div className="flex items-center gap-3 border-b border-[var(--color-border-1)] bg-[var(--color-elevated)] px-5 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-full gradient-brand">
                  <GraduationCap className="h-5 w-5 text-white" />
                </span>
                <div>
                  <div className="font-ui text-sm font-semibold">Mentor GrindMode</div>
                  <div className="flex items-center gap-1.5 font-ui text-xs text-[var(--color-text-3)]">
                    <span className="h-2 w-2 rounded-full" style={{ background: '#00c896' }} />
                    En línea
                  </div>
                </div>
              </div>

              <div ref={scrollRef} className="flex h-80 flex-col gap-3 overflow-y-auto p-5">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 font-body text-sm leading-relaxed ${
                        m.from === 'user'
                          ? 'gradient-btn text-white'
                          : 'border border-[var(--color-border-2)] bg-[var(--color-elevated)] text-[var(--color-text)]'
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
                {typing && (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-1 rounded-2xl border border-[var(--color-border-2)] bg-[var(--color-elevated)] px-4 py-3">
                      {[0, 1, 2].map((d) => (
                        <span
                          key={d}
                          className="h-2 w-2 animate-bounce rounded-full bg-[var(--color-cyan)]"
                          style={{ animationDelay: `${d * 0.15}s` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <form
                onSubmit={send}
                className="flex items-center gap-2 border-t border-[var(--color-border-1)] p-4"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu pregunta..."
                  aria-label="Pregunta al mentor IA"
                  className="w-full rounded-xl border border-[var(--color-border-1)] bg-[var(--color-bg)] px-4 py-3 font-body text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-text-disabled)] focus:border-[var(--color-purple)]"
                />
                <button
                  type="submit"
                  aria-label="Enviar"
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-btn text-white transition-transform hover:scale-105 active:scale-95"
                >
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
