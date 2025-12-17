export interface Project {
	id: number;
	title: string;
	category: 'TV Shows' | 'Promotional' | 'Social Media' | 'Sports' | 'Commercials' | 'Podcast';
	thumbnail: string;
	videoUrl: string;
	client: string;
	description: string;
	tools: string[];
}

export interface Service {
	id: number;
	title: string;
	description: string;
	iconName: string;
}

export interface Testimonial {
	id: number;
	name: string;
	role: string;
	quote: string;
}

export interface SkillData {
	subject: string;
	A: number;
	fullMark: number;
	description: string;
}

export interface ExperienceItem {
	id: number;
	title: string;
	company: string;
	period: string;
	highlights: string[];
}

export interface EducationItem {
	id: number;
	program: string;
	institution: string;
	period: string;
	details: string[];
}

export interface CertificationItem {
	id: number;
	year: string;
	title: string;
	issuer: string;
}