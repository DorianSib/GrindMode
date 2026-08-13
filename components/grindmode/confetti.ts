const COLORS = ['#8b3dff', '#a855f7', '#00d9ff', '#00e5ff', '#00c896', '#fbbf24']

export function burstConfetti(origin?: { x: number; y: number }) {
  if (typeof document === 'undefined') return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) return

  const count = 90
  const cx = origin?.x ?? window.innerWidth / 2
  const cy = origin?.y ?? window.innerHeight / 2

  const container = document.createElement('div')
  container.style.cssText =
    'position:fixed;inset:0;pointer-events:none;z-index:9999;overflow:hidden'
  document.body.appendChild(container)

  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div')
    const size = 6 + Math.random() * 8
    const color = COLORS[Math.floor(Math.random() * COLORS.length)]
    const angle = Math.random() * Math.PI * 2
    const velocity = 120 + Math.random() * 260
    const dx = Math.cos(angle) * velocity
    const dy = Math.sin(angle) * velocity - 160
    const rot = Math.random() * 720 - 360
    const duration = 900 + Math.random() * 800

    piece.style.cssText = `position:absolute;left:${cx}px;top:${cy}px;width:${size}px;height:${size * 0.6}px;background:${color};border-radius:2px;opacity:1;will-change:transform,opacity`
    container.appendChild(piece)

    piece.animate(
      [
        { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
        {
          transform: `translate(${dx}px, ${dy + 380}px) rotate(${rot}deg)`,
          opacity: 0,
        },
      ],
      { duration, easing: 'cubic-bezier(0.2,0.6,0.3,1)', fill: 'forwards' },
    )
  }

  setTimeout(() => container.remove(), 1900)
}
