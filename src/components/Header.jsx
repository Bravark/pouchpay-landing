import { useState } from 'react';
import Button from './Button';
import './Header.css';
import logo from '../assets/pouchLogo.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container-nav">
        <div className="header__content">
          {/* Logo */}
          <a href="/" className="header__logo">
            <img src={logo} alt="PouchPay Logo" className="header__logo-img" />
            <span className="text-h2">PouchPay</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="header__nav">
            <a href="#features" className="header__link text-body">Features</a>
            <a href="#how-it-works" className="header__link text-body">How It Works</a>
            <a href="#integration" className="header__link text-body">Integration</a>
            <a href="https://api.pouch.finance/docs" target="_blank" rel="noopener noreferrer" className="header__link text-body">
              Docs
            </a>
            <a href="https://widget.pouch.finance" target="_blank" rel="noopener noreferrer" className="header__link text-body">
              Widget
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="header__actions">
            <Button
              variant="ghost"
              size="small"
              onClick={() => window.open('https://app.pouch.finance', '_blank')}
            >
              For Users
            </Button>
            <Button
              variant="primary"
              size="small"
              onClick={() => window.open('https://dash.pouch.finance', '_blank')}
            >
              For Developers
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="header__mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="header__mobile-menu">
            <nav className="header__mobile-nav">
              <a href="#features" className="header__mobile-link text-body" onClick={() => setMobileMenuOpen(false)}>
                Features
              </a>
              <a href="#how-it-works" className="header__mobile-link text-body" onClick={() => setMobileMenuOpen(false)}>
                How It Works
              </a>
              <a href="#integration" className="header__mobile-link text-body" onClick={() => setMobileMenuOpen(false)}>
                Integration
              </a>
              <a href="https://api.pouch.finance/docs" target="_blank" rel="noopener noreferrer" className="header__mobile-link text-body">
                Docs
              </a>
              <a href="https://widget.pouch.finance" target="_blank" rel="noopener noreferrer" className="header__mobile-link text-body">
                Widget
              </a>
            </nav>
            <div className="header__mobile-actions">
              <Button
                variant="ghost"
                size="medium"
                onClick={() => window.open('https://app.pouch.finance', '_blank')}
              >
                For Users
              </Button>
              <Button
                variant="primary"
                size="medium"
                onClick={() => window.open('https://dash.pouch.finance', '_blank')}
              >
                For Developers
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
