import { Trophy, Award, Users, Blocks, Shield, Star, Building2, Crown } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">About the Ideathon</h2>
          <p className="mt-4 text-slate-600">
            An immersive, LEGO-themed innovation sprint where teams rapidly prototype playful yet powerful solutions to real problems. Expect creativity, mentorship, and a celebratory showcase.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-4">
            <li className="p-4 rounded-lg border bg-white shadow-sm flex items-center gap-3"><Blocks className="text-orange-600" /> LEGO-inspired challenges</li>
            <li className="p-4 rounded-lg border bg-white shadow-sm flex items-center gap-3"><Users className="text-orange-600" /> Team-based collaboration</li>
            <li className="p-4 rounded-lg border bg-white shadow-sm flex items-center gap-3"><Shield className="text-orange-600" /> Expert mentorship</li>
            <li className="p-4 rounded-lg border bg-white shadow-sm flex items-center gap-3"><Star className="text-orange-600" /> Recognition & rewards</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-8 rounded-2xl border border-orange-200">
          <h3 className="text-2xl font-semibold text-slate-900">Tracks</h3>
          <p className="mt-2 text-slate-600">Choose your arena and stack solutions:</p>
          <div id="tracks" className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white border shadow-sm">
              <h4 className="font-semibold">EdTech</h4>
              <p className="text-sm text-slate-600">Gamified learning blocks for classrooms.</p>
            </div>
            <div className="p-5 rounded-xl bg-white border shadow-sm">
              <h4 className="font-semibold">HealthTech</h4>
              <p className="text-sm text-slate-600">Wellness tools that click together.</p>
            </div>
            <div className="p-5 rounded-xl bg-white border shadow-sm">
              <h4 className="font-semibold">Sustainability</h4>
              <p className="text-sm text-slate-600">Green solutions, brick by brick.</p>
            </div>
            <div className="p-5 rounded-xl bg-white border shadow-sm">
              <h4 className="font-semibold">Open Innovation</h4>
              <p className="text-sm text-slate-600">Build anything that inspires you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProblemStatements() {
  return (
    <section id="problems" className="py-20 bg-orange-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Problem Statements</h2>
        <p className="mt-2 text-slate-600">A set of themed challenges to spark your builds.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {['Accessibility in Learning', 'Campus Productivity', 'Community Wellbeing', 'Waste Reduction', 'Smart Play', 'Open Category'].map((t) => (
            <div key={t} className="p-6 bg-white border rounded-xl shadow-sm">
              <h4 className="font-semibold text-slate-900">{t}</h4>
              <p className="mt-2 text-sm text-slate-600">Craft a focused solution with measurable impact.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Rewards() {
  const rewards = [
    { title: 'Winners', prize: '₹ 5,000', notes: 'Certificate • Trophy', icon: Crown },
    { title: 'Runner-Ups', prize: '₹ 3,000', notes: 'Certificate • Trophy', icon: Trophy },
    { title: "Best Fresher's Team", prize: 'Special Recognition', notes: 'All members must be First Year students', icon: Award },
  ];

  return (
    <section id="rewards" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Rewards</h2>
        <p className="mt-2 text-slate-600">Celebrate the best builds with shiny accolades.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {rewards.map(({ title, prize, notes, icon: Icon }) => (
            <div key={title} className="relative p-6 rounded-2xl border bg-white shadow-sm overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-orange-100" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-600 text-white shadow">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-1 text-orange-700 font-bold">{prize}</p>
                <p className="mt-1 text-sm text-slate-600">{notes}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Sponsors() {
  const tiers = [
    { name: 'Platinum', icon: Building2, color: 'bg-slate-900 text-white', ring: 'ring-slate-300' },
    { name: 'Gold', icon: Star, color: 'bg-amber-500 text-white', ring: 'ring-amber-200' },
    { name: 'Silver', icon: Shield, color: 'bg-slate-200 text-slate-900', ring: 'ring-slate-200' },
    { name: 'Community', icon: Users, color: 'bg-orange-100 text-orange-800', ring: 'ring-orange-200' },
  ];

  return (
    <section id="sponsors" className="py-20 bg-orange-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Sponsors</h2>
        <p className="mt-2 text-slate-600">Thanks to the partners who power the play.</p>

        <div className="mt-8 space-y-10">
          {tiers.map(({ name, icon: Icon, color, ring }) => (
            <div key={name} className="">
              <div className="flex items-center gap-3">
                <span className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${color} ring-2 ${ring}`}>
                  <Icon className="w-5 h-5" />
                </span>
                <h3 className="text-2xl font-semibold">{name} Sponsors</h3>
              </div>
              <div className="mt-4 grid sm:grid-cols-3 gap-4">
                {[1,2,3].map((i) => (
                  <div key={i} className="h-24 rounded-xl bg-white border shadow-sm flex items-center justify-center text-slate-500">
                    Your Logo Here
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
