import React, { useState, useEffect, useMemo } from 'react';
import { Play, X } from 'lucide-react';
import { PROJECTS } from '../lib/constants';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [playlist, setPlaylist] = useState<Project[]>([]);

  const groupedCategories = useMemo(() => {
    const order = ['Podcast', 'TV Shows', 'Commercials', 'Promotional', 'Social Media', 'Sports'];
    return order
      .map((name) => ({
        name,
        items: PROJECTS.filter((p) => p.category === name).slice(0, 4),
      }))
      .filter((group) => group.items.length > 0);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const openProject = (project: Project, groupItems: Project[]) => {
    setSelectedProject(project);
    const items = groupItems.filter((p) => p.id !== project.id).slice(0, 3);
    setPlaylist([project, ...items]);
  };

  return (
    <section id="portfolio" className="py-24 bg-gray-50 dark:bg-cinema-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 dark:border-gray-800 pb-6 transition-colors duration-300">
          <div>
            <h2 className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-2">Selected Work</h2>
            <p className="text-gray-600 dark:text-gray-400">Each folder shows one cover video; click it to open the playlist of up to four projects.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groupedCategories.map((group) => {
            const cover = group.items[0];
            const remaining = group.items.length - 1;
            return (
              <div key={group.name} className="bg-white dark:bg-cinema-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col">
                <div className="flex items-center justify-between px-5 py-4 bg-gray-50 dark:bg-cinema-900 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cinema-accent/20 text-cinema-900 dark:text-cinema-900 flex items-center justify-center font-bold">{group.name.charAt(0)}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{group.name} Folder</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{group.items.length} project(s) · showing up to 4</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 flex-1">
                  <ProjectCard
                    project={cover}
                    onClick={() => openProject(cover, group.items)}
                    meta={remaining > 0 ? `+${remaining} more in this folder` : undefined}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>

          <div className="relative w-full max-w-6xl bg-white dark:bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col md:flex-row max-h-[90vh]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-cinema-accent rounded-full text-white hover:text-black transition-colors"
            >
              <X size={24} />
            </button>

            <div className="aspect-video w-full bg-black shrink-0 md:flex-1">
              {(() => {
                const url = selectedProject.videoUrl;
                const isDrive = url.includes('drive.google.com');
                const hasQuery = url.includes('?');
                const separator = hasQuery ? '&' : '?';
                const embedUrl = isDrive ? url : `${url}${separator}autoplay=1&rel=0&modestbranding=1`;
                return (
                  <iframe
                    src={embedUrl}
                    title={selectedProject.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                );
              })()}
            </div>

            <div className="p-6 bg-white dark:bg-cinema-800 overflow-y-auto transition-colors duration-300 md:w-[360px] border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h3>
                <span className="text-xs font-bold text-cinema-accent px-2 py-1 bg-gray-100 dark:bg-cinema-900 rounded uppercase tracking-wider">
                  {selectedProject.client}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-cinema-900 px-2 py-1 rounded border border-gray-200 dark:border-gray-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Playlist */}
              {playlist.length > 1 && (
                <div className="mt-6">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Playlist</h4>
                  <div className="space-y-3">
                    {playlist.slice(0, 4).map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setSelectedProject(p)}
                        className={`w-full flex items-center gap-3 p-2 rounded-lg border transition-colors ${
                          p.id === selectedProject.id
                            ? 'border-cinema-accent bg-cinema-accent/10 text-gray-900 dark:text-white'
                            : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-cinema-900 text-gray-700 dark:text-gray-300 hover:border-cinema-accent'
                        }`}
                      >
                        <div className="w-16 h-10 rounded overflow-hidden shrink-0">
                          <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 text-left">
                          <p className="text-sm font-semibold line-clamp-1">{p.title}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">{p.client}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  meta?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, meta }) => {
  return (
    <div
      onClick={onClick}
      className="group relative bg-white dark:bg-cinema-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-lg hover:shadow-cinema-accent/10 transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 cursor-pointer"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-95 dark:opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-cinema-accent/90 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
            <Play className="text-cinema-900 ml-1" size={32} fill="currentColor" />
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 dark:bg-black/60 backdrop-blur-sm text-xs font-bold text-gray-900 dark:text-white rounded-md border border-gray-200 dark:border-white/10 shadow-sm">
            {project.category}
          </span>
        </div>
        {meta && (
          <div className="absolute bottom-4 right-4">
            <span className="px-3 py-1 bg-cinema-900 text-white text-xs font-semibold rounded-md shadow-md">
              {meta}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cinema-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tools.map((tool) => (
            <span key={tool} className="text-xs text-gray-500 bg-gray-100 dark:bg-cinema-900 px-2 py-1 rounded border border-gray-100 dark:border-transparent">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;