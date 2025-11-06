import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 ring-1 ring-orange-200">LEGO Themed Ideathon</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Build bold ideas with playful blocks
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Join the creative marathon where student innovators stack ideas like LEGO bricks to solve real-world problems.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#about" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-orange-600 text-white font-semibold shadow hover:bg-orange-700 transition-colors">
              Explore Event <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#timeline" className="inline-flex items-center px-5 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50">
              View Timeline
            </a>
          </div>
        </div>
        <div className="hidden lg:block" />
      </div>
    </section>
  );
}
