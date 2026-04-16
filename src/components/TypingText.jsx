import { useState, useEffect } from 'react'

const PHRASES = [
  'Siagie v3',
  'Soporte Técnico',
  'Gestión Educativa',
  'Asistencia Rápida',
]

export default function TypingText() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const current = PHRASES[phraseIndex]

    if (paused) {
      const timer = setTimeout(() => {
        setPaused(false)
        setDeleting(true)
      }, 1800)
      return () => clearTimeout(timer)
    }

    if (!deleting) {
      if (displayed.length < current.length) {
        const timer = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1))
        }, 90)
        return () => clearTimeout(timer)
      } else {
        setPaused(true)
      }
    } else {
      if (displayed.length > 0) {
        const timer = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 50)
        return () => clearTimeout(timer)
      } else {
        setDeleting(false)
        setPhraseIndex((i) => (i + 1) % PHRASES.length)
      }
    }
  }, [displayed, deleting, paused, phraseIndex])

  return (
    <h1 style={styles.heading}>
      <span style={styles.text}>{displayed}</span>
      <span style={styles.cursor}>|</span>
    </h1>
  )
}

const styles = {
  heading: {
    fontSize: '1.55em',
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: '0',
    minHeight: '1.8em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2px',
    fontWeight: 700,
    textShadow: '0 1px 4px rgba(0,0,0,0.2)',
  },
  text: {
    display: 'inline-block',
  },
  cursor: {
    display: 'inline-block',
    animation: 'blink 0.8s step-end infinite',
    color: 'rgba(255,255,255,0.7)',
    fontWeight: 300,
  },
}
