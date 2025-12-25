import React from 'react';
import { Download, Briefcase, GraduationCap, Award, ChevronDown } from 'lucide-react';
import { CERTIFICATIONS, EDUCATION, EXPERIENCES } from '../lib/constants';

const Resume: React.FC = () => {
  return (
    <section
      id="resume"
      className="relative py-24 bg-gray-900 dark:bg-black text-white overflow-hidden border-y border-gray-800"
    >
      <div className="absolute inset-0 opacity-30 dark:opacity-60 bg-gradient-to-br from-cinema-900/60 via-gray-900 to-black" />
      <div className="absolute -left-24 -top-24 w-72 h-72 rounded-full bg-cinema-accent/10 blur-3xl" />
      <div className="absolute -right-24 -bottom-24 w-72 h-72 rounded-full bg-cinema-accent/10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">My Resume</h2>
          <p className="text-gray-300 leading-relaxed">
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
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-full bg-cinema-accent/20 flex items-center justify-center text-cinema-accent">
                <Briefcase size={20} />
              </span>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <Timeline items={EXPERIENCES.map((exp) => ({
              id: exp.id,
              title: exp.title,
              subtitle: exp.company,
              period: exp.period,
              points: exp.highlights,
            }))} />
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-full bg-cinema-accent/20 flex items-center justify-center text-cinema-accent">
                <GraduationCap size={20} />
              </span>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <Timeline items={EDUCATION.map((edu) => ({
              id: edu.id,
              title: edu.program,
              subtitle: edu.institution,
              period: edu.period,
              points: edu.details,
            }))} />
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-full bg-cinema-accent/20 flex items-center justify-center text-cinema-accent">
              <Award size={20} />
            </span>
            <h3 className="text-xl font-bold">Certifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-lg"
              >
                <p className="text-sm text-cinema-accent font-bold mb-2">{cert.year}</p>
                <p className="text-lg font-semibold">{cert.title}</p>
                <p className="text-sm text-gray-400 mt-2">{cert.issuer}</p>
              </div>
            ))}
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
  const [openIds, setOpenIds] = React.useState<number[]>([]);

  const toggle = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

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
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="inline-flex items-center gap-2 text-cinema-accent text-sm font-semibold mb-2 hover:text-white transition-colors"
              aria-expanded={openIds.includes(item.id)}
              aria-controls={`timeline-points-${item.id}`}
            >
              <span>{openIds.includes(item.id) ? 'Hide details' : 'Show details'}</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${openIds.includes(item.id) ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              id={`timeline-points-${item.id}`}
              className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                openIds.includes(item.id) ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <ul className="list-disc list-outside ml-6 space-y-2.5 text-gray-300 text-sm leading-relaxed">
                {item.points.map((point, i) => (
                  <li key={`${item.id}-${i}`}>{point}</li>
                ))}
              </ul>
            </div>
            {idx !== items.length - 1 && <div className="mt-8" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
