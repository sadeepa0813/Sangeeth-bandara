import { useEffect, useRef } from 'react'
import './GoldParticles.css'

interface Orb {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  hue: number
  alpha: number
}

export default function GoldParticles({ density = 34 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let w = 0
    let h = 0
    let orbs: Orb[] = []
    let mouseX = 0.5
    let mouseY = 0.5

    function resize() {
      const dpr = Math.min(devicePixelRatio || 1, 2)
      w = canvas!.width = canvas!.offsetWidth * dpr
      h = canvas!.height = canvas!.offsetHeight * dpr
    }

    function init() {
      resize()
      const isMobile = window.innerWidth < 700
      const count = isMobile ? Math.round(density * 0.5) : density
      orbs = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: (Math.random() * 2 + 0.7) * (Math.min(devicePixelRatio || 1, 2)),
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.42) * 0.16,
        hue: 36 + Math.random() * 24,
        alpha: Math.random() * 0.45 + 0.22,
      }))
    }

    function frame() {
      ctx!.clearRect(0, 0, w, h)
      const px = (mouseX - 0.5) * 22
      const py = (mouseY - 0.5) * 22
      for (const o of orbs) {
        o.x += o.vx
        o.y += o.vy
        if (o.y < -30) o.y = h + 30
        if (o.x < -30) o.x = w + 30
        if (o.x > w + 30) o.x = -30
        const cx = o.x + px
        const cy = o.y + py
        const glow = ctx!.createRadialGradient(cx, cy, 0, cx, cy, o.r * 8)
        glow.addColorStop(0, `hsla(${o.hue}, 85%, 70%, ${o.alpha})`)
        glow.addColorStop(1, 'hsla(38, 80%, 60%, 0)')
        ctx!.fillStyle = glow
        ctx!.beginPath()
        ctx!.arc(cx, cy, o.r * 8, 0, Math.PI * 2)
        ctx!.fill()
      }
      if (!reduceMotion) raf = requestAnimationFrame(frame)
    }

    init()
    frame()

    const onResize = () => init()
    const onMouse = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth
      mouseY = e.clientY / window.innerHeight
    }
    window.addEventListener('resize', onResize)
    if (!reduceMotion) window.addEventListener('mousemove', onMouse)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [density])

  return <canvas ref={canvasRef} className="gold-particles" aria-hidden="true" />
}
