import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Skill } from '@/data/skills';

interface SkillDetailProps {
    skill: Skill;
    onClose: () => void;
}

export const SkillDetail = ({ skill, onClose }: SkillDetailProps) => {
    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

                {/* Modal */}
                <motion.div
                    className="relative glass-strong rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                    initial={{ scale: 0.8, y: 50 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.8, y: 50 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Header */}
                    <div className="mb-6">
                        <h3 className="text-3xl font-heading font-bold text-white mb-2">{skill.name}</h3>
                        <span className="inline-block px-4 py-1 rounded-full text-sm bg-primary/20 text-primary">
                            {skill.category}
                        </span>
                    </div>



                    {/* Projects */}
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Projects Using {skill.name}</h4>
                        <div className="space-y-2">
                            {skill.projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    className="glass rounded-lg p-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <span className="text-gray-300">{project}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    {skill.certifications && skill.certifications.length > 0 && (
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Certifications</h4>
                            <div className="space-y-2">
                                {skill.certifications.map((cert, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <div className="w-2 h-2 rounded-full bg-accent-green" />
                                        <span className="text-gray-300">{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
