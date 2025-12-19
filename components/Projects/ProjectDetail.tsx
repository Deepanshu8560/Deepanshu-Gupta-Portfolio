









import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectDetailProps {
    project: Project;
    onClose: () => void;
}

export const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-6 overflow-y-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

                {/* Modal */}
                <motion.div
                    className="relative glass-strong rounded-3xl p-8 max-w-4xl w-full my-8"
                    initial={{ scale: 0.8, y: 50 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.8, y: 50 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors z-10"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h2 className="text-4xl font-heading font-bold text-white mb-2">
                                    {project.title}
                                </h2>
                                <span className="inline-block px-4 py-1 rounded-full text-sm bg-primary/20 text-primary">
                                    {project.category}
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-300 text-lg mb-6">{project.description}</p>

                        {/* Project Image */}
                        {project.image && (
                            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden glass">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>
                        )}
                    </div>

                    {/* Problem & Solution */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="glass rounded-2xl p-6">
                            <h3 className="text-xl font-heading font-semibold text-white mb-3">
                                The Problem
                            </h3>
                            <p className="text-gray-300">{project.problem}</p>
                        </div>
                        <div className="glass rounded-2xl p-6">
                            <h3 className="text-xl font-heading font-semibold text-white mb-3">
                                The Solution
                            </h3>
                            <p className="text-gray-300">{project.solution}</p>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-heading font-semibold text-white mb-4">
                            Key Features
                        </h3>
                        <div className="grid md:grid-cols-2 gap-3">
                            {project.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start space-x-3 glass rounded-lg p-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <span className="text-gray-300">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-heading font-semibold text-white mb-4">
                            Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <motion.span
                                    key={index}
                                    className="px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium border border-secondary/30"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.03 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4">
                        {project.liveUrl && (
                            <motion.a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary flex items-center space-x-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ExternalLink className="w-5 h-5" />
                                <span>View Live</span>
                            </motion.a>
                        )}
                        {project.githubUrl && (
                            <motion.a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 rounded-full font-semibold border-2 border-white/20 text-white hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Github className="w-5 h-5" />
                                <span>View Code</span>
                            </motion.a>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
