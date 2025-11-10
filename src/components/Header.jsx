import { Rocket, Github, Mail } from 'lucide-react';

export default function Header({ onBack, canGoBack }) {
  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <button
          onClick={canGoBack ? onBack : undefined}
          className={`flex items-center gap-2 font-semibold tracking-tight transition-colors ${
            canGoBack ? 'text-white hover:text-cyan-300' : 'text-white/60 cursor-default'
          }`}
        >
          <Rocket className="h-5 w-5" />
          <span>My Portfolio</span>
        </button>

        <nav className="flex items-center gap-4 text-sm">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <Mail className="h-4 w-4" /> Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
