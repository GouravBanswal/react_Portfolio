import React, { createContext, useContext, useEffect, useState } from 'react'

/**
 * ThemeContext — provides `theme` ('light' | 'dark') and `toggleTheme()`.
 *
 * Priority order for initial theme:
 *  1. Value stored in localStorage ('portfolio-theme')
 *  2. OS/browser prefers-color-scheme
 *  3. Default: 'light'
 */

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

const STORAGE_KEY = 'portfolio-theme'
const TRANSITION_DURATION = 300 // ms — matches CSS 300ms

/** Detect system preference */
const getSystemTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

/** Read saved preference or fall back to system */
const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'dark' || saved === 'light') return saved
  } catch {
    // localStorage blocked (private browsing etc.)
  }
  return getSystemTheme()
}

/** Apply data-theme attribute to <html> and persist to localStorage */
const applyTheme = theme => {
  document.documentElement.setAttribute('data-theme', theme)
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // ignore
  }
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme)

  // Apply on mount (handles SSR-safe initial render)
  useEffect(() => {
    applyTheme(theme)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleTheme = () => {
    // 1. Inject transition class so CSS picks up the 300ms animation
    document.documentElement.classList.add('theme-transitioning')

    // 2. Flip the theme
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light'
      applyTheme(next)
      return next
    })

    // 3. Remove the transition class after the animation completes
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning')
    }, TRANSITION_DURATION + 20)
  }

  // Also listen for OS preference changes
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = e => {
      // Only auto-switch if user hasn't manually chosen a theme
      const saved = localStorage.getItem(STORAGE_KEY)
      if (!saved) {
        const next = e.matches ? 'dark' : 'light'
        setTheme(next)
        applyTheme(next)
      }
    }
    mq.addEventListener('change', handleChange)
    return () => mq.removeEventListener('change', handleChange)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
