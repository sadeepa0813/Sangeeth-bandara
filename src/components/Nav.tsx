import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import lottieGoldPulse from '../lib/lottieGoldPulse'
import './Nav.css'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const closeMenu = () => setOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <Link className="brand" to="/" onClick={closeMenu}>
        <span className="brand-mark" aria-hidden="true">
          <Lottie animationData={lottieGoldPulse} loop autoplay style={{ width: 26, height: 26 }} />
        </span>
        SB / 01
      </Link>

      <div className="navlinks">
        <a href="#work"><span>Work</span></a>
        <a href="#services"><span>Services</span></a>
        <a href="#about"><span>About</span></a>
        <a href="#contact"><span>Contact</span></a>
      </div>

      <Link className="nav-login" to="/login">
        <span className="nav-login-text">Login</span>
        <span className="nav-login-arrow">↗</span>
      </Link>

      <button
        className={`nav-burger ${open ? 'is-open' : ''}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-drawer ${open ? 'is-open' : ''}`}>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <Link className="nav-drawer-login" to="/login" onClick={closeMenu}>
          Login <span>↗</span>
        </Link>
      </div>

      {open && <div className="nav-backdrop" onClick={closeMenu} />}
    </nav>
  )
}