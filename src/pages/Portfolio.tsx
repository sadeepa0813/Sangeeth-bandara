import Nav from '../components/Nav'
import HangingCard from '../components/HangingCard'
import GoldParticles from '../components/GoldParticles'
import TiltCard from '../components/TiltCard'
import Reveal from '../components/Reveal'
import './Portfolio.css'

const WORK = [
  { small: 'Portrait / Editorial', title: 'Human, naturally.', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=85' },
  { small: 'Commercial / Brand', title: 'Built to be seen.', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85' },
  { small: 'Film / Production', title: 'Motion with meaning.', img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85' },
  { small: 'Events / Stories', title: 'Moments that stay.', img: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85' },
]

const SERVICES = [
  { num: '01', title: 'Photography', desc: 'Portraits · Events · Fashion · Commercial' },
  { num: '02', title: 'Videography', desc: 'Cinematic films · Events · Brand stories' },
  { num: '03', title: 'Video Editing', desc: 'Reels · Music videos · Commercial edits' },
  { num: '04', title: 'Creative Advertising', desc: 'Concept · Production · Social campaigns' },
]

export default function Portfolio() {
  return (
    <div className="portfolio">
      <Nav />

      <header className="hero">
        <GoldParticles density={40} />
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="kicker">Photographer · Filmmaker · Visual Creator</div>
            <h1>
              Sangeeth
              <br />
              <span>Bandara</span>
            </h1>
            <p className="hero-sub">
              Creating photographs, films and visual campaigns with a cinematic eye — built for
              people and brands that want to be remembered.
            </p>
          </div>
          <div className="hero-stage-wrap">
            <HangingCard />
          </div>
        </div>
        <div className="scroll">Scroll to explore</div>
      </header>

      <Reveal as="section" className="intro">
        <div>
          <div className="eyebrow">01 — The Vision</div>
        </div>
        <div>
          <div className="big">
            I turn <em>moments</em> into visual stories that feel as good as they look.
          </div>
          <p>
            From photography and cinematic films to commercial edits and creative advertising,
            every frame is crafted with intention.
          </p>
        </div>
      </Reveal>

      <section id="work" className="work-section">
        <Reveal className="work-head">
          <div>
            <div className="eyebrow">02 — Selected Work</div>
            <h2>Recent stories.</h2>
          </div>
          <span className="eyebrow">2024—2026</span>
        </Reveal>
        <div className="grid">
          {WORK.map((w, i) => (
            <Reveal key={w.title} delay={i * 80} className={`card-wrap ${i % 2 === 1 ? 'offset' : ''}`}>
              <TiltCard className="card">
                <img src={w.img} alt={w.title} loading="lazy" />
                <div className="meta">
                  <small>{w.small}</small>
                  <strong>{w.title}</strong>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="services-wrap">
        <div id="services">
          <div className="eyebrow" style={{ marginBottom: 35 }}>
            03 — What I Do
          </div>
          {SERVICES.map((s) => (
            <div className="service" key={s.num}>
              <span className="num">{s.num}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <span className="arrow">↗</span>
            </div>
          ))}
        </div>
      </Reveal>

      <section id="about" className="about">
        <Reveal className="about-img" />
        <Reveal className="about-copy">
          <div className="eyebrow">04 — About Sangeeth</div>
          <div className="big" style={{ marginTop: 18 }}>
            Not just a <em>camera.</em>
            <br />A point of view.
          </div>
          <p>
            Sangeeth Bandara is a photographer and visual creator focused on turning real moments
            into polished visual experiences. Photography, video, editing and advertising come
            together under one creative direction.
          </p>
          <a className="btn" href="#contact">
            Let's create something
          </a>
        </Reveal>
      </section>

      <Reveal as="section" id="contact" className="contact">
        <div className="eyebrow">05 — Start a project</div>
        <h2>
          Have a story?
          <br />
          <span>Let's make it visual.</span>
        </h2>
        <a className="btn" href="mailto:sangeeth@example.com">
          Get in touch ↗
        </a>
      </Reveal>

      <footer>
        <span>© 2026 Sangeeth Bandara</span>
        <span>Photography · Film · Creative</span>
      </footer>
    </div>
  )
}
