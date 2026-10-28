import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/blog', label: 'Articles' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-sky-50/85 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between sm:h-20">
        <Link to="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-900 font-serif text-lg font-semibold text-sky-50 transition-transform duration-300 group-hover:scale-105">
            M
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight text-sky-900">
            MinimalLife
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `link-underline text-sm font-medium tracking-wide transition-colors ${
                  isActive ? 'text-sky-900' : 'text-sky-700/70 hover:text-sky-900'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-sky-800 transition-colors hover:bg-sky-100 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <div className="container-px flex flex-col gap-1 bg-sky-50/95 pb-6 pt-2 backdrop-blur-md">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-sky-100 text-sky-900'
                    : 'text-sky-700 hover:bg-sky-100/60'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
