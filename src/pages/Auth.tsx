import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Lottie from 'lottie-react'
import lottieGoldPulse from '../lib/lottieGoldPulse'
import GoldParticles from '../components/GoldParticles'
import LiquidGlow from '../components/LiquidGlow'
import './Auth.css'

type Mode = 'login' | 'signup'

const cardMotion = {
  initial: { opacity: 0, scale: 0.94, filter: 'blur(10px)', y: 14 },
  animate: { opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 },
  transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
}

const switchMotion = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
  transition: { duration: 0.35, ease: [0.2, 0.7, 0.2, 1] },
}

export default function Auth() {
  const [mode, setMode] = useState<Mode>('login')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // UI demo only — no backend wired up.
  }

  return (
    <div className="auth-page">
      <GoldParticles density={28} />
      <LiquidGlow />

      <Link to="/" className="auth-back">
        ← Back to portfolio
      </Link>

      <motion.div className="auth-card" {...cardMotion}>
        <div className="auth-mark" aria-hidden="true">
          <Lottie animationData={lottieGoldPulse} loop autoplay style={{ width: 46, height: 46 }} />
        </div>

        <AnimatePresence mode="wait">
          {mode === 'login' ? (
            <motion.div key="login" {...switchMotion}>
              <h1>Welcome Back</h1>
              <p className="auth-sub">Sign in to continue to your account.</p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="login-email">Email</label>
                  <input id="login-email" type="email" name="email" autoComplete="email" required placeholder="you@example.com" />
                </div>
                <div className="field">
                  <label htmlFor="login-password">Password</label>
                  <input id="login-password" type="password" name="password" autoComplete="current-password" required placeholder="••••••••" />
                </div>

                <div className="field-row">
                  <label className="checkbox">
                    <input type="checkbox" name="remember" />
                    <span>Remember me</span>
                  </label>
                  <a className="link-muted" href="#forgot">
                    Forgot Password?
                  </a>
                </div>

                <button type="submit" className="btn-gold">
                  Login
                </button>
              </form>

              <p className="switch-line">
                Don't have an account?{' '}
                <button type="button" className="link-gold" onClick={() => setMode('signup')}>
                  Create Account
                </button>
              </p>
            </motion.div>
          ) : (
            <motion.div key="signup" {...switchMotion}>
              <h1>Create Account</h1>
              <p className="auth-sub">Join to start building something remarkable.</p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="signup-name">Full Name</label>
                  <input id="signup-name" type="text" name="name" autoComplete="name" required placeholder="Jane Doe" />
                </div>
                <div className="field">
                  <label htmlFor="signup-email">Email</label>
                  <input id="signup-email" type="email" name="email" autoComplete="email" required placeholder="you@example.com" />
                </div>
                <div className="field">
                  <label htmlFor="signup-password">Password</label>
                  <input id="signup-password" type="password" name="password" autoComplete="new-password" required placeholder="••••••••" />
                </div>
                <div className="field">
                  <label htmlFor="signup-confirm">Confirm Password</label>
                  <input id="signup-confirm" type="password" name="confirm" autoComplete="new-password" required placeholder="••••••••" />
                </div>

                <button type="submit" className="btn-gold">
                  Create Account
                </button>
              </form>

              <p className="switch-line">
                Already have an account?{' '}
                <button type="button" className="link-gold" onClick={() => setMode('login')}>
                  Login
                </button>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
