import { useEffect, useState } from 'react'
import Logo from './Logo'
import './HeroSection.css'

export default function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true))
  }, [])

  return (
    <section className={`hero ${visible ? 'hero--visible' : ''}`}>
      {/* Background elements */}
      <div className="hero-bg-grid" />
      <div className="hero-glow hero-glow--purple" />
      <div className="hero-glow hero-glow--cyan" />
      <div className="hero-particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="hero-particle" style={{ '--i': i }} />
        ))}
      </div>

      {/* Nav bar */}
      <nav className="hero-nav">
        <div className="hero-nav-logo">
          <Logo size={36} />
          <span>ProNitim</span>
        </div>
        <ul className="hero-nav-links">
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
        <a href="#contato" className="hero-nav-cta">Fale conosco</a>
      </nav>

      {/* Hero content */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Soluções em Cybersegurança
        </div>

        <h1 className="hero-title">
          Proteja o que
          <br />
          mais <span className="hero-title-highlight">importa</span> para
          <br />
          o seu negócio
        </h1>

        <p className="hero-subtitle">
          A <strong>ProNitim Cyber</strong> oferece soluções avançadas de segurança digital
          para proteger sua empresa contra ameaças modernas com tecnologia de ponta.
        </p>

        <div className="hero-actions">
          <a href="#servicos" className="hero-btn hero-btn--primary">
            Conheça nossos serviços
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#sobre" className="hero-btn hero-btn--ghost">
            Saiba mais
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">500<span className="hero-stat-plus">+</span></span>
            <span className="hero-stat-label">Clientes protegidos</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-value">99.9<span className="hero-stat-percent">%</span></span>
            <span className="hero-stat-label">Uptime garantido</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-value">24<span className="hero-stat-unit">h</span></span>
            <span className="hero-stat-label">Monitoramento</span>
          </div>
        </div>
      </div>

      {/* Floating card */}
      <div className="hero-card">
        <div className="hero-card-header">
          <div className="hero-card-dot hero-card-dot--green" />
          <span>Sistema protegido</span>
        </div>
        <div className="hero-card-shield">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path
              d="M24 4L8 11.2V24c0 9.6 6.88 18.56 16 20.8C33.12 42.56 40 33.6 40 24V11.2L24 4Z"
              fill="url(#shield-grad)"
              opacity="0.2"
            />
            <path
              d="M24 4L8 11.2V24c0 9.6 6.88 18.56 16 20.8C33.12 42.56 40 33.6 40 24V11.2L24 4Z"
              stroke="url(#shield-grad)"
              strokeWidth="1.5"
            />
            <path d="M18 24l4 4 8-8" stroke="#6c63ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="shield-grad" x1="8" y1="4" x2="40" y2="44.8" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6c63ff" />
                <stop offset="1" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <p className="hero-card-status">Todas as ameaças bloqueadas</p>
        <div className="hero-card-metrics">
          <div className="hero-card-metric">
            <span className="hero-card-metric-value">0</span>
            <span className="hero-card-metric-label">Vulnerabilidades</span>
          </div>
          <div className="hero-card-metric">
            <span className="hero-card-metric-value" style={{ color: '#22c55e' }}>↑ 100%</span>
            <span className="hero-card-metric-label">Segurança</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <div className="hero-scroll-mouse">
          <div className="hero-scroll-wheel" />
        </div>
        <span>Role para ver mais</span>
      </div>
    </section>
  )
}
