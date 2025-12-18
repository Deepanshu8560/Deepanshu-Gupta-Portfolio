export interface Experience {
    id: string;
    company: string;
    role: string;
    period: string;
    description: string;
    achievements: Array<{
        text: string;
        metric?: string;
    }>;
    technologies: string[];
    projects: string[];
    logo?: string;
}

export const experiences: Experience[] = [
    {
        id: 'exp-1',
        company: 'Internship Studio',
        role: 'Web Design and Development Intern',
        period: 'Jul 2024 - Aug 2024',
        description: 'Leading frontend development for enterprise SaaS products, focusing on performance optimization and user experience.',
        achievements: [
            { text: 'Improved application performance', metric: '↑ 45%' },
            { text: 'Reduced bundle size', metric: '↓ 30%' },
            { text: 'Increased user engagement', metric: '↑ 60%' }
        ],
        technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL'],
        projects: ['Enterprise Dashboard', 'Analytics Platform', 'Customer Portal']
    },

];
