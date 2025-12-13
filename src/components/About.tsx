import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { SKILL_DATA } from '../lib/constants';
import { useTheme } from '../context/ThemeContext';

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="about" className="py-24 bg-white dark:bg-cinema-800 border-y border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Who is <span className="text-cinema-accent">Faysi?</span>
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a versatile video editor based in Addis Ababa, with extensive experience in TV production and digital media. My journey started at Africa TV, where I learned the art of pacing and narrative structure under tight deadlines.
              </p>
              <p>
                Whether it's a high-energy commercial, a touching documentary, or a snappy social media reel, I bring a unique blend of technical precision and creative flair to every project.
              </p>
              <p>
                I don't just cut footage; I craft experiences. I believe every frame matters and sound is half the picture.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex gap-8">
              <div>
                <span className="block text-3xl font-bold text-gray-900 dark:text-white">2+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Years Exp.</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-gray-900 dark:text-white">100+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Projects</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-gray-900 dark:text-white">20+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Clients</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 self-start">Technical Proficiency</h3>
            <div className="w-full h-[400px] bg-gray-50 dark:bg-cinema-900/50 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-300 shadow-inner">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={SKILL_DATA} margin={{ top: 0, right: 20, left: 0, bottom: 0 }} barGap={10}>
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis
                    dataKey="subject"
                    type="category"
                    width={120}
                    tick={{
                      fill: theme === 'dark' ? '#D1D5DB' : '#374151',
                      fontSize: 14,
                      fontWeight: 600,
                      fontFamily: 'Montserrat, sans-serif'
                    }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    cursor={{ fill: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)' }}
                    content={<CustomTooltip theme={theme} />}
                  />
                  <Bar
                    dataKey="A"
                    barSize={24}
                    radius={[0, 4, 4, 0]}
                    background={{ fill: theme === 'dark' ? '#333' : '#e5e7eb', radius: [0, 4, 4, 0] }}
                    animationDuration={1500}
                  >
                    {SKILL_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill="#EAB308" />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 text-center text-xs text-gray-400 dark:text-gray-500 italic">Hover over bars for details</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CustomTooltip = ({ active, payload, theme }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className={`p-4 rounded-lg shadow-xl border ${theme === 'dark' ? 'bg-cinema-900 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900'}`}>
        <p className="font-bold text-lg mb-1">{data.subject}</p>
        <div className="flex items-center gap-2 mb-2">
          <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden flex-1">
            <div className="h-full bg-cinema-accent" style={{ width: `${data.A}%` }}></div>
          </div>
          <span className="text-sm font-bold text-cinema-accent">{data.A}%</span>
        </div>
        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{data.description}</p>
      </div>
    );
  }
  return null;
};

export default About;