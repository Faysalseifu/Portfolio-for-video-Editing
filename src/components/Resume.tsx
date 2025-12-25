import React from 'react';
import { Download, Briefcase, GraduationCap, ChevronDown } from 'lucide-react';
import { CERTIFICATIONS, EDUCATION, EXPERIENCES } from '../lib/constants';

const Resume: React.FC = () => {
  const [expandedCards, setExpandedCards] = React.useState({
    experience: false,
    education: false,
  });

  const toggleCard = (key: 'experience' | 'education') => {
    setExpandedCards((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  return (
    <section
      id="resume"
      className="relative py-24 bg-gray-50 dark:bg-black text-gray-900 dark:text-white overflow-hidden border-y border-gray-200 dark:border-gray-800"
    >
      <div className="absolute inset-0 opacity-30 dark:opacity-60 bg-gradient-to-br from-white/60 via-gray-100 to-gray-200 dark:from-cinema-900/60 dark:via-gray-900 dark:to-black" />
      <div className="absolute -left-24 -top-24 w-72 h-72 rounded-full bg-cinema-accent/10 blur-3xl" />
      <div className="absolute -right-24 -bottom-24 w-72 h-72 rounded-full bg-cinema-accent/10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">My Resume</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Here's a summary of my professional experience and education. Download my full CV for more details.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-3 mt-6 rounded-full bg-cinema-accent text-cinema-900 font-bold shadow-lg hover:bg-white transition-all"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Experience Card */}
          <div className="bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-xl">
            <button
              type="button"
              onClick={() => toggleCard('experience')}
              className="w-full flex items-center justify-between gap-3 mb-2 text-left"
              aria-expanded={expandedCards.experience}
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-cinema-accent/20 flex items-center justify-center text-cinema-accent">
                  <Briefcase size={20} />
                </span>
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>
              <ChevronDown
                size={18}
                className={`text-gray-300 transition-transform ${expandedCards.experience ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                expandedCards.experience ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <Timeline
                items={EXPERIENCES.map((exp) => ({
                  id: exp.id,
                  title: exp.title,
                  subtitle: exp.company,
                  period: exp.period,
                  points: exp.highlights,
                }))}
              />
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-xl">
            <button
              type="button"
              onClick={() => toggleCard('education')}
              className="w-full flex items-center justify-between gap-3 mb-2 text-left"
              aria-expanded={expandedCards.education}
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-cinema-accent/20 flex items-center justify-center text-cinema-accent">
                  <GraduationCap size={20} />
                </span>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <ChevronDown
                size={18}
                className={`text-gray-300 transition-transform ${expandedCards.education ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                expandedCards.education ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <Timeline
                items={EDUCATION.map((edu) => ({
                  id: edu.id,
                  title: edu.program,
                  subtitle: edu.institution,
                  period: edu.period,
                  points: edu.details,
                }))}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  points: string[];
}

const Timeline = ({ items }: { items: TimelineItemProps[] }) => {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cinema-accent via-white/40 to-cinema-accent/20" />
      <div className="space-y-10">
        {items.map((item, idx) => (
          <div key={item.id} className="relative">
            <div className="absolute -left-[12px] top-1 w-3.5 h-3.5 rounded-full border-2 border-cinema-accent bg-gray-900" />
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <span className="text-sm text-gray-400">{item.period}</span>
            </div>
            <p className="text-sm font-semibold text-gray-200 mb-3">{item.subtitle}</p>
            <ul className="list-disc list-outside ml-6 space-y-2.5 text-gray-300 text-sm leading-relaxed">
              {item.points.map((point, i) => (
                <li key={`${item.id}-${i}`}>{point}</li>
              ))}
            </ul>
            {idx !== items.length - 1 && <div className="mt-8" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
