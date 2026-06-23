import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import './NavbarStyle.css'

const navLinks = [
  { to: '/',        label: 'Home'     },
  { to: '/project', label: 'Projects' },
  { to: '/about',   label: 'About'    },
  { to: '/skills',  label: 'Skills'   },
  { to: '/resume',  label: 'Resume'   },
]

/* ── Animated Sun/Moon toggle ─────────────────────── */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      className={`theme-toggle${isDark ? ' theme-toggle--dark' : ''}`}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      id="theme-toggle-btn"
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {/* Track */}
      <span className="theme-toggle-track" aria-hidden="true">
        {/* Thumb */}
        <motion.span
          className="theme-toggle-thumb"
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      </span>

      {/* Animated icon */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className="theme-toggle-icon"
          initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
          animate={{ scale: 1,   opacity: 1, rotate: 0   }}
          exit={{    scale: 0.5, opacity: 0, rotate: 90  }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          aria-hidden="true"
        >
          {isDark
            ? <Moon size={15} strokeWidth={2.5} />
            : <Sun  size={15} strokeWidth={2.5} />
          }
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

/* ── Main Navbar ──────────────────────────────────── */
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled,  setScrolled]  = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  return (
    <header
      className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}
      role="banner"
    >
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" aria-label="Gourav Banswal — Home">
          <span className="navbar-logo-mark">G</span>
          <span className="navbar-logo-text">Gourav Banswal</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar-nav" aria-label="Main navigation">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`navbar-link${location.pathname === to ? ' active' : ''}`}
              aria-current={location.pathname === to ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          <a
            href="https://github.com/gouravbanswal"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon-link"
            title="GitHub"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/gouravbanswal"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon-link"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>

          {/* ← Theme Toggle */}
          <ThemeToggle />

          <Link to="/contact" className="btn btn-primary btn-sm" id="navbar-hire-btn">
            Hire Me
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="navbar-mobile" aria-label="Mobile navigation">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`navbar-mobile-link${location.pathname === to ? ' active' : ''}`}
            >
              {label}
            </Link>
          ))}
          <div className="navbar-mobile-footer">
            <ThemeToggle />
            <Link
              to="/contact"
              className="btn btn-primary"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              Hire Me
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar