import { useEffect, useRef } from 'react'
import './HangingCard.css'

export default function HangingCard() {
  const stageRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const cordRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    const badge = badgeRef.current
    const cord = cordRef.current
    if (!stage || !badge || !cord) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let dragging = false
    let lastX = 0
    let lastY = 0
    let angle = 3
    let velocity = 0
    let offsetX = 0
    let offsetY = -20

    const point = (e: PointerEvent) => e

    function render() {
      badge!.style.transform = `translate(calc(-50% + ${offsetX}px), ${offsetY}px) rotate(${angle}deg)`
      cord!.style.transform = `translateX(-50%) rotate(${angle * 0.72}deg)`
    }

    function down(e: PointerEvent) {
      dragging = true
      badge!.classList.add('dragging')
      const p = point(e)
      lastX = p.clientX
      lastY = p.clientY
      badge!.setPointerCapture?.(e.pointerId)
    }
    function move(e: PointerEvent) {
      if (!dragging) return
      const p = point(e)
      const dx = p.clientX - lastX
      const dy = p.clientY - lastY
      lastX = p.clientX
      lastY = p.clientY
      angle = Math.max(-28, Math.min(28, angle + dx * 0.14))
      velocity = dx * 0.11
      offsetX += dx
      offsetY += dy
      offsetY = Math.max(-45, Math.min(85, offsetY))
      render()
    }
    function up() {
      if (!dragging) return
      dragging = false
      badge!.classList.remove('dragging')
    }

    badge.addEventListener('pointerdown', down)
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
    window.addEventListener('pointercancel', up)

    let raf = 0
    function physics() {
      if (!dragging) {
        angle += velocity
        velocity *= 0.93
        angle *= 0.985
        if (Math.abs(angle) < 0.02) angle = 0
        offsetX *= 0.985
        offsetY += (-20 - offsetY) * 0.045
        render()
      }
      raf = requestAnimationFrame(physics)
    }

    render()
    if (!reduceMotion) {
      raf = requestAnimationFrame(physics)
    }

    return () => {
      badge.removeEventListener('pointerdown', down)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
      window.removeEventListener('pointercancel', up)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="stage" ref={stageRef}>
      <div className="ceiling" />
      <div className="cord" ref={cordRef}>
        <div className="strap">
          <span>VISUAL ARTIST · 2026</span>
        </div>
        <div className="ring" />
      </div>
      <article className="badge" ref={badgeRef} aria-hidden="true">
        <div className="badge-top">
          <strong>SB</strong>
          <span>NO. 001</span>
        </div>
        <div className="rule" />
        <p>
          CREATIVE
          <br />
          VISUAL WORK
        </p>
        <h2>
          Sangeeth
          <br />
          <span>Bandara</span>
        </h2>
        <small>
          PHOTOGRAPHER
          <br />
          FILMMAKER
        </small>
        <div className="badge-bottom">
          <span>sangeeth.dev</span>
          <b>01</b>
        </div>
      </article>
      <div className="hint">
        DRAG THE CARD <span>↗</span>
      </div>
      <div className="glow" />
    </div>
  )
}
