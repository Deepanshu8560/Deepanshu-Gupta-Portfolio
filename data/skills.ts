export interface Skill {
    name: string;
    category: 'Frontend' | 'Backend' | 'DevOps' | 'Tools' | 'Other';
    projects: string[];
    certifications?: string[];
    color: string;
}

export const skills: Skill[] = [
    // Frontend
    {
        name: 'React',
        category: 'Frontend',
        projects: ['E-commerce Platform', 'SaaS Dashboard', 'Portfolio Website'],
        certifications: ['React Developer Certification'],
        color: '#61DAFB'
    },
    {
        name: 'TypeScript',
        category: 'Frontend',
        projects: ['Enterprise App', 'Type-Safe API Client'],
        color: '#3178C6'
    },
    {
        name: 'Three.js',
        category: 'Frontend',
        projects: ['3D Product Viewer', 'Interactive Portfolio'],
        color: '#000000'
    },
    {
        name: 'Next.js',
        category: 'Frontend',
        projects: ['Blog Platform', 'E-commerce Site'],
        color: '#000000'
    },
    {
        name: 'Tailwind CSS',
        category: 'Frontend',
        projects: ['Multiple UI Projects'],
        color: '#06B6D4'
    },

    // Backend
    {
        name: 'Node.js',
        category: 'Backend',
        projects: ['REST API', 'Real-time Chat'],
        color: '#339933'
    },
    {
        name: 'Python',
        category: 'Backend',
        projects: ['Data Processing', 'ML Integration'],
        color: '#3776AB'
    },
    {
        name: 'PostgreSQL',
        category: 'Backend',
        projects: ['Database Design', 'Query Optimization'],
        color: '#4169E1'
    },
    {
        name: 'MongoDB',
        category: 'Backend',
        projects: ['NoSQL Solutions'],
        color: '#47A248'
    },

    // DevOps
    {
        name: 'Docker',
        category: 'DevOps',
        projects: ['Containerized Apps'],
        color: '#2496ED'
    },
    {
        name: 'AWS',
        category: 'DevOps',
        projects: ['Cloud Deployments'],
        color: '#FF9900'
    },
    {
        name: 'Git',
        category: 'Tools',
        projects: ['All Projects'],
        color: '#F05032'
    },
    {
        name: 'Figma',
        category: 'Tools',
        projects: ['UI/UX Design'],
        color: '#F24E1E'
    }
];

export const skillCategories = ['All', 'Frontend', 'Backend', 'DevOps', 'Tools'] as const;
