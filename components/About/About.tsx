import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { ProfilePhoto } from './ProfilePhoto';
import { Timeline } from './Timeline';
import { SkillDNA } from './SkillDNA';
import { AboutBackground } from './AboutBackground';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/animations';

export const About = () => {
    return (
        <section id="about" className="section bg-dark-surface/30 relative overflow-hidden">
            {/* 3D Background */}
            <AboutBackground />

            <motion.div
                className="max-w-7xl mx-auto"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Section Header */}
                <motion.div variants={staggerItem} className="text-center mb-20">
                    <h2 className="text-gradient mb-4">About Me</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A passionate developer dedicated to creating exceptional digital experiences
                    </p>
                </motion.div>

                {/* Avatar and Bio */}
                <motion.div
                    variants={staggerItem}
                    className="flex flex-col lg:flex-row items-center gap-12 mb-32"
                >
                    {/* Profile Photo */}
                    <div className="flex-shrink-0">
                        <ProfilePhoto />
                    </div>

                    {/* Bio Content */}
                    <div className="flex-1 space-y-6">
                        <motion.h3
                            className="text-3xl font-heading font-semibold text-white"
                            variants={fadeInUp}
                        >
                            Crafting Digital Excellence
                        </motion.h3>

                        <motion.p className="text-gray-300 leading-relaxed" variants={fadeInUp}>
                            With experience in web development, I specialize in building
                            modern, performant, and visually stunning applications. My expertise spans
                            across frontend technologies, 3D graphics, and full-stack development.
                        </motion.p>

                        <motion.p className="text-gray-300 leading-relaxed" variants={fadeInUp}>
                            I'm passionate about pushing the boundaries of what's possible on the web,
                            combining cutting-edge technologies like React, Three.js, and advanced
                            animations to create immersive user experiences.
                        </motion.p>

                        {/* Download Resume Button and Stats in One Line */}
                        <motion.div
                            className="flex flex-col md:flex-row items-center justify-between gap-12 pt-6 w-full"
                            variants={fadeInUp}
                        >
                            {/* Download Resume Button */}
                            <motion.a
                                href="/assets/Deepanshu_Gupta _Resume.pdf"
                                download="Deepanshu_Gupta_Resume.pdf"
                                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold glow-primary transition-all duration-300"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                            >
                                <Download className="w-5 h-5" />
                                <span>Download Resume</span>
                            </motion.a>

                            {/* Projects Completed */}
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className="text-3xl font-bold text-gradient mb-2">20+</div>
                                <div className="text-sm text-gray-400">Projects Completed</div>
                            </motion.div>

                            {/* Technologies */}
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="text-3xl font-bold text-gradient mb-2">20+</div>
                                <div className="text-sm text-gray-400">Technologies</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Journey Timeline */}
                <motion.div variants={staggerItem} className="mb-32">
                    <h3 className="text-3xl font-heading font-semibold text-center text-white mb-16">
                        My Journey
                    </h3>
                    <Timeline />
                </motion.div>

                {/* Skill DNA */}
                <motion.div variants={staggerItem}>
                    <h3 className="text-3xl font-heading font-semibold text-center text-white mb-8">
                        Skill Connections
                    </h3>
                    <p className="text-center text-gray-400 mb-12">
                        Interactive visualization of my interconnected skill set
                    </p>
                    <SkillDNA />
                </motion.div>
            </motion.div>
        </section>
    );
};
