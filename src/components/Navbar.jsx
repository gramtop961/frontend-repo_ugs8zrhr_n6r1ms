import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'problems', label: 'Problem Statements' },
  { id: 'tracks', label: 'Tracks' },
  { id: 'rewards', label: 'Rewards' },
  { id: 'sponsors', label: 'Sponsors' },
  { id: 'team', label: 'Team' },
  { id: 'mentors', label: 'Mentors' },
  { id: 'judges', label: 'Judges' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'swag', label: 'Swag' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const Item = ({ id, label }) => (
    <a
      href={`#${id}`}
      onClick={() => setOpen(false)}
      className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-colors"
    >
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-orange-500 text-white shadow-sm">
              <Rocket className="w-5 h-5" />
            </span>
            <span>LEGO Ideathon</span>
          </a>

          <nav className="hidden lg:flex items-center space-x-1">
            {links.map((l) => (
              <Item key={l.id} {...l} />
            ))}
          </nav>

          <button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-200 text-slate-700"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200">
          <div className="px-4 py-3 grid grid-cols-2 gap-2">
            {links.map((l) => (
              <Item key={l.id} {...l} />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
