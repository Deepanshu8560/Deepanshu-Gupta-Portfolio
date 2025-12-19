import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills, skillCategories, Skill } from '@/data/skills';
import { SkillSolarSystem } from './SkillSolarSystem';
import { SkillDetail } from './SkillDetail';
import { SkillsBackground } from './SkillsBackground';
import { staggerContainer, staggerItem } from '@/utils/animations';

export const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

    const filteredSkills = selectedCategory === 'All'
        ? skills
        : skills.filter(skill => skill.category === selectedCategory);

    return (
        <section id="skills" className="section relative overflow-hidden">
            {/* 3D Background */}
            <SkillsBackground />

            <motion.div
                className="max-w-7xl mx-auto"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Section Header */}
                <motion.div variants={staggerItem} className="text-center mb-12">
                    <h2 className="text-gradient mb-4">Skills & Expertise</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Interactive 3D visualization of my technical skill set
                    </p>
                </motion.div>

                {/* Category Filters */}
                <motion.div
                    variants={staggerItem}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {skillCategories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                                ? 'bg-gradient-to-r from-primary to-secondary text-white glow-primary'
                                : 'glass text-gray-300 hover:text-white'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* 3D Solar System */}
                <motion.div
                    variants={staggerItem}
                    className="mb-12"
                >
                    <SkillSolarSystem
                        skills={filteredSkills}
                        onSkillClick={setSelectedSkill}
                    />
                    <p className="text-center text-gray-400 text-sm mt-4">
                        Click on any skill planet to view details
                    </p>
                </motion.div>

                {/* Skill Grid (Alternative View) */}
                <motion.div
                    variants={staggerItem}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {filteredSkills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="glass rounded-2xl p-6 cursor-pointer hover:scale-105 transition-transform duration-300"
                            onClick={() => setSelectedSkill(skill)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                        >
                            <div
                                className="w-12 h-12 rounded-full mb-4 flex items-center justify-center"
                                style={{ backgroundColor: `${skill.color}20`, border: `2px solid ${skill.color}` }}
                            >
                                <div
                                    className="w-6 h-6 rounded-full"
                                    style={{ backgroundColor: skill.color }}
                                />
                            </div>
                            <h3 className="text-lg font-heading font-semibold text-white mb-2">
                                {skill.name}
                            </h3>
                            <div className="text-sm">
                                <span className="text-gray-400">{skill.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Skill Detail Modal */}
            {selectedSkill && (
                <SkillDetail
                    skill={selectedSkill}
                    onClose={() => setSelectedSkill(null)}
                />
            )}
        </section>
    );
};
