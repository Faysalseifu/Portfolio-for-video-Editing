import React from 'react';
import { Play, ChevronDown } from 'lucide-react';
import heroBg from '../assets/1.png';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Cinematic Background"
          className="w-full h-full object-cover opacity-30 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-900/50 to-gray-900/50 dark:from-cinema-900 dark:via-cinema-900/80 dark:to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-cinema-accent font-medium tracking-[0.2em] mb-4 animate-fade-in-up drop-shadow-md">
          VIDEO EDITOR • STORYTELLER • CREATOR
        </p>
        <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 text-white drop-shadow-lg">
          CRAFTING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">VISUAL STORIES</span>
        </h1>
        <p className="text-gray-200 dark:text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          I transform raw footage into compelling narratives. Specializing in TV production, promotional content, and dynamic social media edits.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#portfolio"
            className="group flex items-center gap-3 px-8 py-4 bg-cinema-accent text-cinema-900 rounded-full font-bold hover:bg-white transition-all transform hover:scale-105 shadow-lg"
          >
            <Play size={20} className="fill-current" />
            Watch My Reel
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-4 border border-gray-400 text-white bg-black/30 backdrop-blur-sm rounded-full font-bold hover:bg-white hover:text-black hover:border-white transition-all shadow-lg"
          >
            Hire Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;