import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import lottieGoldPulse from '../lib/lottieGoldPulse'
import './Nav.css'

export default function Nav() {
  return (
    <nav className="site-nav">
      <Link className="brand" to="/">
        <span className="brand-mark" aria-hidden="true">
          <Lottie animationData={lottieGoldPulse} loop autoplay style={{ width: 26, height: 26 }} />
        </span>
        SB / 01
      </Link>
      <div className="navlinks">
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <Link className="nav-login" to="/login">
        Login <span>↗</span>
      </Link>
    </nav>
  )
}
