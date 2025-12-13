import {
  CertificationItem,
  EducationItem,
  ExperienceItem,
  Project,
  Service,
  SkillData,
  Testimonial,
} from '../types';
import thumb1 from '../assets/2.png';
import thumb2 from '../assets/3.png';
import thumb3 from '../assets/4.png';
import thumb4 from '../assets/5.png';
import thumb5 from '../assets/6.png';
import thumb6 from '../assets/7.png';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Africa TV Documentary Series',
    category: 'TV Shows',
    thumbnail: thumb1,
    videoUrl: 'https://www.youtube.com/embed/LXb3EKWsInQ',
    client: 'Africa TV',
    description: 'Lead editor for a 4-part documentary series focusing on urban development.',
    tools: ['Premiere Pro', 'After Effects'],
  },
  {
    id: 2,
    title: 'Nike Summer Campaign',
    category: 'Commercials',
    thumbnail: thumb2,
    videoUrl: 'https://www.youtube.com/embed/ysz5S6P_8-k',
    client: 'Nike Ethiopia',
    description: 'High-energy commercial spot featuring local athletes.',
    tools: ['DaVinci Resolve', 'Premiere Pro'],
  },
  {
    id: 3,
    title: 'Startup Launch Promo',
    category: 'Promotional',
    thumbnail: thumb3,
    videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
    client: 'TechHub',
    description: 'Explainer video and hype reel for a new fintech startup.',
    tools: ['After Effects', 'Illustrator'],
  },
  {
    id: 4,
    title: 'Marathon Highlights',
    category: 'Sports',
    thumbnail: thumb4,
    videoUrl: 'https://www.youtube.com/embed/HhFmvJ2i_gY',
    client: 'Addis Sports',
    description: 'Fast-paced highlight reel capturing the emotion of the race.',
    tools: ['Premiere Pro', 'SpeedGrade'],
  },
  {
    id: 5,
    title: 'Fashion Week Reels',
    category: 'Social Media',
    thumbnail: thumb5,
    videoUrl: 'https://www.youtube.com/embed/EngW7tLk6R8',
    client: 'Vogue Local',
    description: 'Vertical short-form content optimized for Instagram and TikTok.',
    tools: ['CapCut', 'Premiere Pro'],
  },
  {
    id: 6,
    title: 'Corporate Annual Report',
    category: 'Promotional',
    thumbnail: thumb6,
    videoUrl: 'https://www.youtube.com/embed/ysz5S6P_8-k',
    client: 'Bank of Abyssinia',
    description: 'Professional corporate communication video combining interviews and b-roll.',
    tools: ['Premiere Pro', 'Audition'],
  },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Video Editing',
    description: 'Professional cutting, pacing, and storytelling for TV, web, and film.',
    iconName: 'Scissors',
  },
  {
    id: 2,
    title: 'Color Grading',
    description: 'Cinematic color correction to set the perfect mood and tone.',
    iconName: 'Wand2',
  },
  {
    id: 3,
    title: 'Motion Graphics',
    description: 'Dynamic text animations, lower thirds, and intro sequences.',
    iconName: 'MonitorPlay',
  },
  {
    id: 4,
    title: 'YouTube Production',
    description: 'End-to-end post-production for high-retention YouTube content.',
    iconName: 'Youtube',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Producer, Africa TV',
    quote:
      "Faysi has an incredible eye for detail. He doesn't just cut footage; he builds a narrative that keeps viewers hooked.",
  },
  {
    id: 2,
    name: 'Dawit Kebede',
    role: 'Marketing Director',
    quote: 'Fast, reliable, and extremely creative. The promotional video he made for us doubled our engagement rates.',
  },
  {
    id: 3,
    name: 'Elena Ross',
    role: 'Filmmaker',
    quote: 'His color grading transformed my flat footage into a cinematic masterpiece. Highly recommended.',
  },
];

export const SKILL_DATA: SkillData[] = [
  {
    subject: 'Storytelling',
    A: 95,
    fullMark: 100,
    description: 'Crafting compelling narratives that keep the audience engaged from start to finish.',
  },
  {
    subject: 'Color Grading',
    A: 85,
    fullMark: 100,
    description: 'Enhancing the mood and tone of footage using DaVinci Resolve and Lumetri.',
  },
  {
    subject: 'Motion Gfx',
    A: 75,
    fullMark: 100,
    description: 'Creating dynamic text animations and lower thirds in After Effects.',
  },
  {
    subject: 'Sound Design',
    A: 80,
    fullMark: 100,
    description: 'Layering SFX and mixing audio for an immersive experience.',
  },
  {
    subject: 'Pacing',
    A: 90,
    fullMark: 100,
    description: 'Mastering the rhythm of the edit to evoke the right emotion.',
  },
  {
    subject: 'Software',
    A: 95,
    fullMark: 100,
    description: 'Expert proficiency in Premiere Pro, CapCut, and Adobe Suite.',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'WeyaTart',
    period: 'Feb 2025 - Present',
    highlights: [
      'Converted Figma designs into responsive interfaces using React.js, Next.js, and Tailwind CSS',
      'Developed interactive UIs with React.js, Next.js, and Tailwind CSS',
      'Collaborated with backend teams to integrate frontend with business applications',
    ],
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'Vision Vertiz Solutions',
    period: 'May 2025 - Sep 2025',
    highlights: [
      'Developed business solutions using Microsoft Power Platform, including Power Apps, Power Automate, Power BI, and SharePoint sites',
      'Created and maintained automated workflows to improve efficiency',
    ],
  },
  {
    id: 3,
    title: 'Software Developer Intern',
    company: 'Oromia State University',
    period: 'Oct 2024 - Jun 2025',
    highlights: [
      'Designed and built a university management system to streamline admin tasks',
      'Developed a React.js frontend and a secure Django/PostgreSQL backend with role-based access control',
      'Integrated document management and workflow automation',
      'Conducted testing, debugging, and deployment while collaborating with stakeholders to refine features',
    ],
  },
  {
    id: 4,
    title: 'Frontend Developer Intern',
    company: 'CodeSoft',
    period: 'Sep 2023 - Nov 2023',
    highlights: [
      'Developed responsive web apps with React.js, HTML, CSS, and JavaScript',
      'Improved UI/UX for accessibility and performance',
      'Integrated RESTful APIs, managed state with React Hooks and Context API, and optimized performance',
      'Gained experience in Git, Agile, and deployment strategies',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 1,
    program: 'AI & Data Engineering Program',
    institution: 'IO Academy',
    period: 'Dec 2024 - Jun 2025',
    details: [
      'Hands-on experience in AI, Generative AI, Machine Learning, and Data Engineering',
      'Built and deployed ML models for real-world applications with a focus on data-driven decision making',
      'Worked with Python, TensorFlow, PyTorch, and cloud platforms for AI development',
      'Developed data pipelines and ETL workflows for large-scale data processing',
      'Explored LLMs and their applications in NLP and automation',
    ],
  },
  {
    id: 2,
    program: 'BSc in Information Systems',
    institution: 'Addis Ababa University',
    period: 'Oct 2021 - Jan 2025',
    details: [
      'Comprehensive study of information systems, software development, and business processes',
      'Built strong foundations in programming, database management, and system analysis',
      'Participated in multiple hackathons and led the university web development club',
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 1,
    year: '2025',
    title: 'IO Academy',
    issuer: 'Generative AI Engineering, Machine Learning Engineering, and Data Engineering',
  },
  {
    id: 2,
    year: '2024',
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
  },
  {
    id: 3,
    year: '2024',
    title: 'Addis Ababa University hackathon',
    issuer: 'Addis Ababa University',
  },
];