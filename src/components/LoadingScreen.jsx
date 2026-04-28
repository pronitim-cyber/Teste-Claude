import Logo from './Logo'
import './LoadingScreen.css'

export default function LoadingScreen({ fadeOut }) {
  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-bg-grid" />
      <div className="loading-glow loading-glow--1" />
      <div className="loading-glow loading-glow--2" />

      <div className="loading-content">
        <div className="loading-logo-wrapper">
          <div className="loading-logo-ring loading-logo-ring--outer" />
          <div className="loading-logo-ring loading-logo-ring--inner" />
          <div className="loading-logo-icon">
            <Logo size={80} />
          </div>
        </div>

        <p className="loading-company">ProNitim</p>

        <div className="loading-bar-track">
          <div className="loading-bar-fill" />
        </div>

        <p className="loading-label">Carregando...</p>
      </div>
    </div>
  )
}
