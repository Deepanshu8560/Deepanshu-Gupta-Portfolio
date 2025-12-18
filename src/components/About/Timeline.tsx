import { motion } from 'framer-motion';
import { Briefcase, Award, Rocket } from 'lucide-react';

const milestones = [
    {
        year: '2022',
        title: 'Started Web Development',
        description: 'Began journey into web development',
        icon: Rocket,
    },
    {
        year: '2024',
        title: 'First Professional Role',
        description: 'Joined Internship Studio',
        icon: Briefcase,
    },
    {
        year: '2024',
        title: 'Advanced Certifications',
        description: 'Meta Frontend Developer',
        icon: Award,
    },
    {
        year: '2025',
        title: 'Advanced Certifications',
        description: 'Generative Ai By Microsoft and Upgrad',
        icon: Award,
    },
];

export const Timeline = () => {
    return (
        <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent-pink" />

            {/* Milestones */}
            <div className="space-y-12">
                {milestones.map((milestone, index) => {
                    const Icon = milestone.icon;
                    const isLeft = index % 2 === 0;

                    return (
                        <motion.div
                            key={milestone.year}
                            className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Content */}
                            <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                                <motion.div
                                    className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="flex items-center space-x-3 mb-2">
                                        {!isLeft && <Icon className="w-6 h-6 text-primary" />}
                                        <h3 className="text-xl font-heading font-semibold text-white">
                                            {milestone.title}
                                        </h3>
                                        {isLeft && <Icon className="w-6 h-6 text-primary ml-auto" />}
                                    </div>
                                    <p className="text-gray-400 text-sm mb-2">{milestone.description}</p>
                                    <span className="text-primary font-semibold">{milestone.year}</span>
                                </motion.div>
                            </div>

                            {/* Center dot */}
                            <motion.div
                                className="w-2/12 flex justify-center"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                            >
                                <div className="w-6 h-6 rounded-full bg-primary glow-primary border-4 border-dark-bg" />
                            </motion.div>

                            {/* Spacer */}
                            <div className="w-5/12" />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};
