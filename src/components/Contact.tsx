import React, { FormEvent, useState } from 'react';
import {
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  Calendar,
  Clock,
  DollarSign,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
      alert("Thanks for your interest! I'll review your project details and get back to you within 24 hours.");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gray-100 dark:bg-black relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-5/12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-green-200 dark:border-green-800">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Available for new projects
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Build <br />
                <span className="text-cinema-accent">Your Vision.</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-10">
                Looking for a dedicated editor to elevate your content? I handle the technical details so you can focus on the big picture.
              </p>

              <div className="bg-white dark:bg-cinema-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-none mb-10 group cursor-pointer hover:border-cinema-accent dark:hover:border-cinema-accent transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cinema-accent/10 rounded-lg text-cinema-accent">
                    <Calendar size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-cinema-accent transition-colors">
                      Book a Discovery Call
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Free 15-min consultation to discuss your project needs.</p>
                    <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-cinema-accent hover:underline">
                      Schedule now <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                  <div className="w-12 h-12 bg-white dark:bg-cinema-800 rounded-full flex items-center justify-center text-cinema-accent shadow-sm border border-gray-200 dark:border-transparent shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
                    <a href="mailto:faysiseifu@gmail.com" className="hover:text-cinema-accent dark:hover:text-white transition-colors">
                      faysiseifu@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                  <div className="w-12 h-12 bg-white dark:bg-cinema-800 rounded-full flex items-center justify-center text-cinema-accent shadow-sm border border-gray-200 dark:border-transparent shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Base</p>
                    <p>Addis Ababa, Ethiopia (Remote Friendly)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-gray-500 text-sm font-bold uppercase mb-4">Connect</p>
              <div className="flex gap-4">
                <SocialLink href="https://twitter.com/SeifuFaysa65143" icon={<Twitter size={20} />} />
                <SocialLink href="https://www.linkedin.com/in/faysal-seifu-038443297/" icon={<Linkedin size={20} />} />
                <SocialLink href="https://instagram.com/faysiseifu" icon={<Instagram size={20} />} />
                <SocialLink href="https://facebook.com/faysiseifu" icon={<Facebook size={20} />} />
              </div>
            </div>
          </div>

          <div className="lg:w-7/12 bg-white dark:bg-cinema-900 p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl dark:shadow-none transition-colors duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Project Inquiry</h3>
              <p className="text-gray-500 text-sm">Fill out the details below and I'll get back to you with a quote.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-50 dark:bg-cinema-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-cinema-accent transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-gray-50 dark:bg-cinema-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-cinema-accent transition-colors"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400">Project Type</label>
                <select className="w-full bg-gray-50 dark:bg-cinema-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-cinema-accent transition-colors">
                  <option>TV Production / Documentary</option>
                  <option>Commercial / Ad Spot</option>
                  <option>Social Media (Reels/TikTok)</option>
                  <option>YouTube Long-form</option>
                  <option>Corporate / Event</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400">Estimated Budget</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 text-gray-400" size={18} />
                    <select className="w-full pl-10 bg-gray-50 dark:bg-cinema-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-cinema-accent transition-colors">
                      <option>Less than $500</option>
                      <option>$500 - $1,000</option>
                      <option>$1,000 - $5,000</option>
                      <option>$5,000+</option>
                      <option>To be discussed</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400">Deadline</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 text-gray-400" size={18} />
                    <select className="w-full pl-10 bg-gray-50 dark:bg-cinema-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-cinema-accent transition-colors">
                      <option>ASAP (Rush)</option>
                      <option>Within 1 week</option>
                      <option>Within 1 month</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400">Project Details</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-gray-50 dark:bg-cinema-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-cinema-accent transition-colors"
                  placeholder="Tell me about your vision, goals, and any reference videos..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 bg-cinema-accent text-cinema-900 font-bold rounded-lg hover:bg-cinema-accentHover dark:hover:bg-white transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-md flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <>Sending...</>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 size={20} /> Request Sent!
                  </>
                ) : (
                  <>
                    Send Inquiry <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-gray-200 dark:border-gray-900 text-center text-gray-500 dark:text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Faysal Media. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-cinema-accent hover:border-cinema-accent dark:hover:text-cinema-accent dark:hover:border-cinema-accent transition-all hover:scale-110"
  >
    {icon}
  </a>
);

export default Contact;