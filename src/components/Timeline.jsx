import { motion } from 'framer-motion';
import { CalendarDays, Clock, Rocket, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Registrations Open',
    date: 'Nov 10',
    icon: CalendarDays,
    description: 'Kick off your journey — form teams and register.',
  },
  {
    title: 'Problem Statements Release',
    date: 'Nov 15',
    icon: Rocket,
    description: 'Receive the LEGO-inspired challenges to tackle.',
  },
  {
    title: 'Build Sprint',
    date: 'Nov 20 - Nov 24',
    icon: Clock,
    description: 'Prototype and iterate; mentors will be available.',
  },
  {
    title: 'Demo Day & Judging',
    date: 'Nov 25',
    icon: CheckCircle2,
    description: 'Showcase your builds to judges and the community.',
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Timeline</h2>
        <p className="mt-2 text-slate-600">A smooth, vertical journey from idea to impact.</p>

        <div className="mt-10 relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-300 via-orange-400 to-orange-200" />

          <div className="space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`relative flex gap-4 ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-start`}
                >
                  <div className="relative shrink-0 ml-2 sm:ml-0 sm:top-2">
                    <span className="absolute -left-[23px] sm:left-1/2 sm:-translate-x-1/2 top-2 inline-flex w-12 h-12 items-center justify-center rounded-full bg-white ring-4 ring-orange-100 shadow-md">
                      <Icon className="w-6 h-6 text-orange-600" />
                    </span>
                  </div>

                  <div className={`w-full sm:w-1/2 ${isLeft ? 'sm:pl-10' : 'sm:pr-10'}`}>
                    <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                        <span className="text-sm font-medium text-orange-700 bg-orange-100 px-2 py-1 rounded">{step.date}</span>
                      </div>
                      <p className="mt-2 text-slate-600">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
