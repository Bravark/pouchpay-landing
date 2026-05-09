import { useState, useEffect } from 'react';
import './styles/global.css';
import Header from './components/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import HowItWorks from './sections/HowItWorks';
import Integration from './sections/Integration';
import CTA from './sections/CTA';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentPage(hash || 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'privacy':
        return <Privacy />;
      case 'terms':
        return <Terms />;
      default:
        return (
          <>
            <Hero />
            <Features />
            <HowItWorks />
            <Integration />
            <CTA />
          </>
        );
    }
  };

  return (
    <div className="app">
      {currentPage === 'home' && <Header />}
      {renderPage()}
    </div>
  );
}
