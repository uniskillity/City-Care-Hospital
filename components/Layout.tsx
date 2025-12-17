import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Process Analysis', path: '/#analysis' },
    { name: 'Book Appointment', path: '/booking' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex-col" style={{ minHeight: '100vh', display: 'flex' }}>
      {/* Header */}
      <header className="app-header">
        <div className="container h-full flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--primary)', padding: '0.5rem', borderRadius: '0.5rem', display: 'flex' }}>
                <Activity size={24} color="white" />
              </div>
              <div>
                <h1 style={{ fontSize: '1.125rem', fontWeight: 'bold', lineHeight: 1.2 }}>City Care Hospital</h1>
                <p style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 500 }}>HEALTHCARE OPERATIONS</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="md-flex gap-8" style={{ display: 'none' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={() => {
                     if (link.path.includes('#')) {
                        const sectionId = link.path.split('#')[1];
                        setTimeout(() => scrollToSection(sectionId), 100);
                     }
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md-hidden"
              style={{ color: 'var(--text-muted)' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'white', borderBottom: '1px solid var(--border)', padding: '1rem' }}>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="nav-link"
                  style={{ display: 'block', padding: '0.5rem' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main style={{ flexGrow: 1 }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{ background: 'var(--bg-dark)', color: 'var(--text-light)', padding: '3rem 0' }}>
        <div className="container">
          <div className="grid grid-4" style={{ marginBottom: '2rem' }}>
            <div className="col-span-9" style={{ gridColumn: 'span 2' }}>
              <div className="flex items-center gap-2" style={{ marginBottom: '1rem' }}>
                <Activity size={24} style={{ color: 'var(--primary)' }} />
                <span className="text-xl font-bold text-white">City Care Hospital</span>
              </div>
              <p className="text-sm" style={{ maxWidth: '300px' }}>
                Transforming healthcare operations through digital innovation and process optimization.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold" style={{ marginBottom: '1rem' }}>Quick Links</h4>
              <ul className="flex flex-col gap-2 text-sm">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/booking">Book Appointment</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold" style={{ marginBottom: '1rem' }}>Contact</h4>
              <ul className="flex flex-col gap-2 text-sm">
                <li>info@citycare.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm" style={{ borderTop: '1px solid #334155', paddingTop: '2rem' }}>
            &copy; {new Date().getFullYear()} City Care Hospital. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};