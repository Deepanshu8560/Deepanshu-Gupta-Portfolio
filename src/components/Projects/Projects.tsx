import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { projects, projectCategories, Project } from '@/data/projects';
import { ProjectDetail } from './ProjectDetail';
import { ProjectsBackground } from './ProjectsBackground';
import { staggerContainer, staggerItem } from '@/utils/animations';

export const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <section id="projects" className="section relative overflow-hidden">
            {/* 3D Background */}
            <ProjectsBackground />

            <motion.div
                className="max-w-7xl mx-auto"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Section Header */}
                <motion.div variants={staggerItem} className="text-center mb-12">
                    <h2 className="text-gradient mb-4">Featured Projects</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Showcasing my best work across various domains
                    </p>
                </motion.div>

                {/* Category Filters */}
                <motion.div
                    variants={staggerItem}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {projectCategories.map((category) => (
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

                {/* Projects Grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    layout
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="group relative glass rounded-3xl overflow-hidden cursor-pointer"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            onClick={() => setSelectedProject(project)}
                            layout
                        >
                            {/* Featured Badge */}
                            {project.featured && (
                                <div className="absolute top-4 right-4 z-10">
                                    <motion.div
                                        className="flex items-center space-x-1 px-3 py-1 rounded-full bg-accent-pink/20 border border-accent-pink"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: index * 0.1 + 0.3 }}
                                    >
                                        <Star className="w-4 h-4 text-accent-pink fill-accent-pink" />
                                        <span className="text-xs text-accent-pink font-semibold">Featured</span>
                                    </motion.div>
                                </div>
                            )}

                            {/* Image Placeholder with Gradient */}
                            <div className="relative h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent-pink/20 overflow-hidden">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        className="text-6xl font-bold text-white/10"
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                    >
                                        {project.title.charAt(0)}
                                    </motion.div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-gradient transition-all">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 3).map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="px-3 py-1 rounded-full bg-gray-700 text-gray-300 text-xs font-medium">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* Links */}
                                <div className="flex items-center space-x-4">
                                    {project.liveUrl && (
                                        <motion.a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-1 text-primary hover:text-secondary transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            <span className="text-sm">Live</span>
                                        </motion.a>
                                    )}
                                    {project.githubUrl && (
                                        <motion.a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <Github className="w-4 h-4" />
                                            <span className="text-sm">Code</span>
                                        </motion.a>
                                    )}
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Project Detail Modal */}
            {selectedProject && (
                <ProjectDetail
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
};
