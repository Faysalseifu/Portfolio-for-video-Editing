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
import thumb7 from '../assets/8.png';
import thumb8 from '../assets/9.png';
import thumb9 from '../assets/10.png';
import thumb10 from '../assets/11.png';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Africa TV-Shows Series',
    category: 'TV Shows',
    thumbnail: thumb1,
    videoUrl: 'https://drive.google.com/file/d/1SHloUL30NHICOHxGbPinrvnY2IlyeLpi/preview',
    client: 'Africa TV',
    description: 'Lead editor for a 4-part documentary series focusing on urban development.',
    tools: ['Premiere Pro', 'After Effects','Cap cut'],
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
  {
    id: 7,
    title: 'Indehsab Podcast - Episode 8',
    category: 'Podcast',
    thumbnail: thumb7,
    videoUrl: 'https://www.youtube.com/embed/LGGqWkstB8A',
    client: 'Africa TV',
    description: 'Podcast episode edit with polished audio mix and pacing for broadcast.',
    tools: ['Premiere Pro', 'Audition'],
  },
  {
    id: 8,
    title: 'Indehsab Podcast - Episode 9',
    category: 'Podcast',
    thumbnail: thumb8,
    videoUrl: 'https://www.youtube.com/embed/fxvkRz7pn8w',
    client: 'Africa TV',
    description: 'Podcast episode cut with dialogue clean-up and supporting visuals.',
    tools: ['Premiere Pro', 'Audition'],
  },
  {
    id: 9,
    title: 'Indehsab Podcast - Episode 2',
    category: 'Podcast',
    thumbnail: thumb9,
    videoUrl: 'https://www.youtube.com/embed/2PjJOTaDuYo',
    client: 'Africa TV',
    description: 'Podcast storytelling focused on clear narration and rhythm.',
    tools: ['Premiere Pro', 'Audition'],
  },
  {
    id: 10,
    title: 'Indehsab Podcast - Episode 4',
    category: 'Podcast',
    thumbnail: thumb10,
    videoUrl: 'https://www.youtube.com/embed/FjBIf0-Tdgg',
    client: 'Africa TV',
    description: 'Podcast mix balancing interviews, beds, and transitions.',
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
    name: 'Abdulaziz Mudawi',
    role: 'Producer, Africa TV',
    quote:
      "Faysal has an incredible eye for detail. He doesn't just cut footage; he builds a narrative that keeps viewers hooked.",
  },
  {
    id: 2,
    name: 'Abdulahkim Nasir',
    role: 'Marketing Director,MSL',
    quote: 'Fast, reliable, and extremely creative. The promotional video he made for us doubled our engagement rates.',
  },
  {
    id: 3,
    name: 'Aymen muhammedzayn',
    role: 'Socialmedia manager, Africa TV',
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
    title: 'Freelance Video Editor',
    company: 'Independent',
    period: 'Jan 2022 - Present',
    highlights: [
      'Produced engaging video content for diverse clients: promotional videos, event coverage, TV programs, and YouTube content',
      'Edited raw footage into compelling narratives aligned with client branding and messaging',
      'Specialized in interview editing with smooth transitions and captivating storytelling while meeting deadlines and budgets',
      'Continuously updated skills and stayed informed on latest video editing trends and technologies',
      'Flexible and adaptable to changing project requirements and timelines',
    ],
  },
  {
    id: 2,
    title: 'Video Editor & Assistant Camera Operator',
    company: 'Africa TV1',
    period: '2024 - 2025',
    highlights: [
      'Collaborated with production teams to edit and assemble raw footage into engaging content',
      'Assisted with camera operation and setup during shoots and live broadcasts',
      'Contributed creative ideas to enhance overall production quality',
    ],
  },
  {
    id: 3,
    title: 'Volunteer Video Editor & Graphic Designer',
    company: 'MS League',
    period: '2023 - 2024',
    highlights: [
      'Created promotional materials and edited event coverage as a volunteer',
      'Supported community initiatives with visual communication assets',
    ],
  },
  {
    id: 4,
    title: 'Video Editor',
    company: 'Allcan Development Center',
    period: '2024',
    highlights: [
      'Edited educational and organizational content to support training and outreach',
      'Delivered on tight deadlines while maintaining quality standards',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 1,
    program: 'BSc in Information Science',
    institution: 'Addis Ababa University',
    period: '2021 - 2025 (expected)',
    details: [
      'Built foundations in information systems, digital media, and communication',
      'Applied principles to video production workflows and asset management',
    ],
  },
  {
    id: 2,
    program: 'Videography & Editing Certification',
    institution: 'Bilalul Habashi Center',
    period: '2024',
    details: [
      'Training in camera operations, editing workflows, and post-production techniques',
    ],
  },
  {
    id: 3,
    program: 'Leadership & Islamic Studies',
    institution: 'Risala Center for Youth Empowerment',
    period: '2022 - 2026 (in progress)',
    details: [
      'Certification focused on leadership, community service, and ethics',
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 1,
    year: '2024',
    title: 'Video Editing Certifications',
    issuer: 'Udemy',
  },
  {
    id: 2,
    year: '2024',
    title: 'Videography & Editing Certification',
    issuer: 'Bilalul Habashi Center',
  },
];