import { motion } from 'framer-motion';
import { Calendar, TrendingUp, Code } from 'lucide-react';
import { experiences } from '@/data/experience';
import { ExperienceBackground } from './ExperienceBackground';
import { staggerContainer, staggerItem } from '@/utils/animations';

export const Experience = () => {
    return (
        <section id="experience" className="section bg-dark-surface/30 relative overflow-hidden">
            {/* 3D Background */}
            <ExperienceBackground />

            <motion.div
                className="max-w-7xl mx-auto"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Section Header */}
                <motion.div variants={staggerItem} className="text-center mb-20">
                    <h2 className="text-gradient mb-4">Work Experience</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        My professional journey building exceptional digital products
                    </p>
                </motion.div>

                {/* Experience Timeline */}
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className="relative"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="gradient-border-animated p-8 md:p-12">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                                    <div>
                                        <h3 className="text-3xl font-heading font-bold text-white mb-2">
                                            {exp.role}
                                        </h3>
                                        <p className="text-xl text-primary font-semibold mb-2">{exp.company}</p>
                                        <div className="flex items-center text-gray-400">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                                {/* Achievements */}
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                                        <TrendingUp className="w-5 h-5 mr-2 text-accent-green" />
                                        Key Achievements
                                    </h4>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        {exp.achievements.map((achievement, i) => (
                                            <motion.div
                                                key={i}
                                                className="glass rounded-xl p-4"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <p className="text-gray-300 text-sm mb-2">{achievement.text}</p>
                                                {achievement.metric && (
                                                    <p className="text-2xl font-bold text-gradient">{achievement.metric}</p>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                                        <Code className="w-5 h-5 mr-2 text-secondary" />
                                        Technologies Used
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, i) => (
                                            <motion.span
                                                key={i}
                                                className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/30"
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.05 }}
                                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(14, 165, 233, 0.2)' }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {/* Projects */}
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Notable Projects:</h4>
                                    <p className="text-gray-300">{exp.projects.join(' • ')}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
