export interface Project {
    id: string;
    title: string;
    description: string;
    category: 'Web App' | 'SaaS' | 'E-commerce' | '3D Experience' | 'Mobile';
    technologies: string[];
    features: string[];
    problem: string;
    solution: string;
    image?: string;
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: 'proj-1',
        title: 'SXA Nexus - Component Orchestration Platform',
        description: 'A comprehensive analytics and management platform for enterprise clients with real-time data visualization.',
        category: 'SaaS',
        technologies: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'jQuery', 'Bootstrap 5', 'Storybook'],
        features: [
            'Multi-dimensional theme engine with 3 distinct palettes',
            'Bidirectional language matrix (English, Arabic RTL, French)',
            'Experience Editor virtualization with drag-and-drop',
            '13+ production-ready SXA components',
            'Real-time theme switching with CSS Custom Properties',
            'Comprehensive Storybook documentation'
        ],
        problem: 'Sitecore developers need a rapid prototyping environment to build and test SXA components before integration, with support for multiple themes, languages, and realistic editing experience.',
        solution: 'Built an isolated component library simulator with Storybook, enabling parallel development streams, multi-theme testing, RTL layout verification, and Experience Editor simulation without Sitecore backend dependencies.',
        image: '/assets/1.png',
        liveUrl: 'https://sxa-component-orchestration-platfor.vercel.app/',
        githubUrl: 'https://github.com/Deepanshu8560/SXA_Component_Orchestration_Platform',
        featured: true
    },

    {
        id: 'proj-2',
        title: 'Ai Code Reviewer',
        description: 'Full-featured online shopping platform with advanced search, recommendations, and payment integration.',
        category: 'E-commerce',
        technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Algolia', 'AWS'],
        features: [
            'Advanced product search',
            'AI-powered recommendations',
            'Multi-currency support',
            'Inventory management',
            'Analytics dashboard'
        ],
        problem: 'Small businesses needed an affordable, feature-rich e-commerce solution.',
        solution: 'Created a modular platform with headless CMS, serverless functions, and third-party integrations.',
        image: '/assets/2.png',
        liveUrl: 'https://ai-code-reviewer-six-eta.vercel.app/',
        githubUrl: 'https://github.com/Deepanshu8560/Ai-Code-Reviewer',
        featured: true
    },
    {
        id: 'proj-3',
        title: 'Ai Career Coach',
        description: 'Team collaboration platform with live editing, video calls, and project management features.',
        category: 'Web App',
        technologies: ['React', 'WebRTC', 'Socket.io', 'Node.js', 'MongoDB', 'Redis'],
        features: [
            'Real-time document editing',
            'Video conferencing',
            'Task management',
            'File sharing',
            'Team analytics'
        ],
        problem: 'Remote teams needed a unified platform for collaboration without switching between multiple tools.',
        solution: 'Built an all-in-one collaboration suite with WebRTC for video, WebSocket for real-time updates, and CRDT for conflict resolution.',
        image: '/assets/3.png',
        liveUrl: 'https://coachify-seven.vercel.app/',
        githubUrl: 'https://github.com/Deepanshu8560/Coachify',
        featured: true
    },
    {
        id: 'proj-4',
        title: 'LinkSnap - A Modern URL Shortener',
        description: 'A production-ready URL shortening web application with analytics, built using modern web technologies and cloud infrastructure.',
        category: 'Web App',
        technologies: ['React', 'Next', 'PostgreSQL', 'JavaScript', 'ZOD'],
        features: [
            'Custom short link creation with optional user-defined codes',
            'Real-time click tracking and analytics dashboard',
            'Responsive UI with search, filter, and copy-to-clipboard functionality',
            'Health monitoring endpoints for production observability',
            'Responsive UI with search, filter, and copy-to-clipboard functionality'
        ],
        problem: 'Content creators spent too much time on initial drafts and ideation.',
        solution: 'Integrated GPT models with custom prompts and fine-tuning for specific content types and industries.',
        image: '/assets/4.png',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/example',
        featured: true
    },
    {
        id: 'proj-5',
        title: 'Personal Finance Dashboard',
        description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics.',
        category: 'Mobile',
        technologies: ['React Native', 'TypeScript', 'Firebase', 'HealthKit', 'Google Fit'],
        features: [
            'Workout tracking',
            'Nutrition logging',
            'Progress analytics',
            'Social challenges',
            'Wearable integration'
        ],
        problem: 'Fitness enthusiasts wanted a comprehensive app that integrates with various health platforms.',
        solution: 'Developed a React Native app with native module integration for health APIs and real-time sync.',
        image: '/assets/5.png',
        liveUrl: 'https://financebot-two.vercel.app/',
        githubUrl: 'https://github.com/Deepanshu8560/Financebot',
        featured: true
    },
    {
    id: 'proj-6',
    title: 'Code Complexity Visualizer',
    description: 'A powerful, real-time code analysis tool that visualizes Time and Space complexity while providing AI-driven optimization suggestions.',
    category: 'Web App',
    technologies: ['React', 'Tailwind CSS', 'FastAPI', 'Groq API', 'Python', 'Recharts'],
    features: [
        'Real-Time Visualization',
        'AI Optimization & Refactoring',
        'Deep Metric Analysis',
        'Modern UI/UX',
        'Complexity Badges'
    ],
    problem: 'Developers often struggle to visualize and optimize the time and space complexity of their algorithms in real-time.',
    solution: 'A real-time visualizer that plots complexity curves and provides instant AI-powered suggestions using Groq Llama 3.1.',
    image: '/assets/6.png',
    liveUrl: 'https://code-complexity-visualizer-azure.vercel.app/',
    githubUrl: 'https://github.com/Deepanshu8560/Code-Complexity-Visualizer',
    featured: true
}
    
];

export const projectCategories = ['All', 'Web App', 'SaaS', 'Mobile'] as const;
