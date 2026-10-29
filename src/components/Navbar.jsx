import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import BrandMark from './BrandMark';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/style', label: 'AI Styling' },
  { to: '/trends', label: 'Trends' },
  { to: '/categories', label: 'Categories' },
];

function itemClass(isActive) {
  return `text-[0.78rem] uppercase tracking-[0.18em] transition duration-300 hover:text-bronze ${
    isActive ? 'text-bronze' : 'text-ink'
  }`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    function onKey(event) {
      if (event.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b border-line ${open ? 'bg-paper' : 'bg-paper/90 backdrop-blur-md'}`}>
      <div className="page-wrap flex h-16 items-center justify-between gap-4">
        <BrandMark />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={({ isActive }) => itemClass(isActive)}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/style" className="btn-primary hidden sm:inline-flex">
            Style me
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className={`h-px bg-ink transition ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
              <span className={`h-px bg-ink transition ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {open &&
        createPortal(
          <div id="mobile-nav" role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-40 bg-ink pt-20 text-ivory lg:hidden">
            <nav className="flex h-full flex-col justify-between px-6 py-8" aria-label="Mobile">
              <ul className="space-y-6">
                {links.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.end}
                      className="display block text-5xl text-ivory transition hover:text-mist"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <Link to="/style" className="btn-light w-full">
                Style me
              </Link>
            </nav>
          </div>,
          document.body,
        )}
    </header>
  );
}
