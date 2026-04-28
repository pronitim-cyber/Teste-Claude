import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import HeroSection from './components/HeroSection'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => setLoading(false), 600)
    }, 2800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <LoadingScreen fadeOut={fadeOut} />}
      {!loading && <HeroSection />}
    </>
  )
}
