import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import { About, ProblemStatements, Rewards, Sponsors } from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter text-slate-800 bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProblemStatements />
        <Timeline />
        <Rewards />
        <Sponsors />
        {/* Team, Mentors, Judges, FAQs, Swag, Contact placeholders */}
        <section id="team" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Team</h2>
            <p className="mt-2 text-slate-600">Meet the organizers behind the bricks.</p>
            <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="p-6 bg-white border rounded-xl shadow-sm text-center">
                  <div className="mx-auto w-20 h-20 rounded-xl bg-orange-100" />
                  <p className="mt-3 font-semibold">Member {i}</p>
                  <p className="text-sm text-slate-600">Organizer</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="mentors" className="py-20 bg-orange-50/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Mentors</h2>
            <p className="mt-2 text-slate-600">Guides to help you click ideas into place.</p>
            <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1,2,3].map((i) => (
                <div key={i} className="p-6 bg-white border rounded-xl shadow-sm text-center">
                  <div className="mx-auto w-20 h-20 rounded-xl bg-orange-100" />
                  <p className="mt-3 font-semibold">Mentor {i}</p>
                  <p className="text-sm text-slate-600">Domain Expert</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="judges" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Judges</h2>
            <p className="mt-2 text-slate-600">Leaders evaluating creativity and impact.</p>
            <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1,2,3].map((i) => (
                <div key={i} className="p-6 bg-white border rounded-xl shadow-sm text-center">
                  <div className="mx-auto w-20 h-20 rounded-xl bg-orange-100" />
                  <p className="mt-3 font-semibold">Judge {i}</p>
                  <p className="text-sm text-slate-600">Industry Leader</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faqs" className="py-20 bg-orange-50/60">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">FAQs</h2>
            <div className="mt-6 divide-y divide-slate-200 rounded-xl border bg-white">
              {[
                { q: 'Who can participate?', a: 'Open to all college students. Freshers are encouraged!' },
                { q: 'Team size?', a: '2-4 members per team.' },
                { q: 'Is it offline or online?', a: 'Hybrid-friendly. Demo Day is on-site.' },
              ].map((f, i) => (
                <details key={i} className="group p-5">
                  <summary className="cursor-pointer list-none font-medium text-slate-800 flex justify-between items-center">
                    {f.q}
                    <span className="text-orange-600 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-2 text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="swag" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Swag</h2>
            <p className="mt-2 text-slate-600">Stickers, tees, and collectible blocks for participants.</p>
            <div className="mt-6 grid sm:grid-cols-3 gap-6">
              {[1,2,3].map((i) => (
                <div key={i} className="p-6 bg-white border rounded-xl shadow-sm text-center">
                  <div className="mx-auto w-28 h-28 rounded-2xl bg-orange-100" />
                  <p className="mt-3 font-semibold">Item {i}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-orange-50/60">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Contact</h2>
            <form className="mt-6 grid gap-4 bg-white p-6 rounded-xl border">
              <input className="w-full border rounded-lg px-4 py-2" placeholder="Your Name" />
              <input className="w-full border rounded-lg px-4 py-2" placeholder="Email" />
              <textarea className="w-full border rounded-lg px-4 py-2" rows="4" placeholder="Message" />
              <button className="inline-flex justify-center px-5 py-3 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700">Send Message</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;