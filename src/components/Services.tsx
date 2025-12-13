import React from 'react';
import { SERVICES, TESTIMONIALS } from '../lib/constants';
import { MonitorPlay, Wand2, Youtube, Scissors, Quote } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Scissors: <Scissors size={32} />,
  Wand2: <Wand2 size={32} />,
  MonitorPlay: <MonitorPlay size={32} />,
  Youtube: <Youtube size={32} />,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-cinema-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-4">What I Do</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Providing end-to-end post-production services to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-cinema-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-cinema-accent dark:hover:border-cinema-accent hover:-translate-y-2 transition-all duration-300 group shadow-sm hover:shadow-lg"
            >
              <div className="w-14 h-14 bg-gray-100 dark:bg-cinema-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-300 group-hover:bg-cinema-accent group-hover:text-cinema-900 transition-colors mb-6">
                {iconMap[service.iconName]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="relative bg-white dark:bg-cinema-800 rounded-3xl p-8 md:p-16 overflow-hidden border border-gray-200 dark:border-gray-800 transition-colors duration-300">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-black dark:text-white">
            <Quote size={200} />
          </div>

          <div className="relative z-10 text-center mb-12">
            <h3 className="font-display text-3xl font-bold text-gray-900 dark:text-white">Client Stories</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-gray-50 dark:bg-cinema-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700/50 backdrop-blur-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-cinema-accent text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600"></div>
                  <div className="text-left">
                    <p className="text-gray-900 dark:text-white font-bold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;