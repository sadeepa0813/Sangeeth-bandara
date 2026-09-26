import './LiquidGlow.css'

/**
 * Slow, blurred, morphing gradient blobs. Pure CSS so it stays GPU-friendly
 * (transform + border-radius only, no per-frame JS).
 */
export default function LiquidGlow() {
  return (
    <div className="liquid-glow" aria-hidden="true">
      <span className="blob blob-a" />
      <span className="blob blob-b" />
      <span className="blob blob-c" />
    </div>
  )
}
