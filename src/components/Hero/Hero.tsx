import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { ParticleBackground } from './ParticleBackground';
import { TypingAnimation } from './TypingAnimation';
import { MagneticButton } from './MagneticButton';
import { FloatingElements } from './FloatingElements';
import { staggerContainer, staggerItem } from '@/utils/animations';

export const Hero = () => {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="section min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* 3D Particle Background */}
            <ParticleBackground />

            {/* Floating Elements */}
            <FloatingElements />

            {/* Content */}
            <motion.div
                className="relative z-10 text-center max-w-5xl mx-auto"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={staggerItem}>
                    <motion.h1
                        className="text-6xl md:text-8xl font-heading font-bold mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-white">Hello, I'm </span>
                        <span className="text-gradient">Deepanshu Gupta</span>
                    </motion.h1>
                </motion.div>

                <motion.div variants={staggerItem} className="mb-8">
                    <TypingAnimation />
                </motion.div>

                <motion.p
                    variants={staggerItem}
                    className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                    Crafting extraordinary digital experiences with cutting-edge technologies.
                    Specializing in modern web development, 3D graphics, and performance optimization.
                </motion.p>

                <motion.div variants={staggerItem} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
                    <MagneticButton onClick={scrollToProjects}>
                        <span>Explore My Work</span>
                        <ArrowDown className="w-5 h-5" />
                    </MagneticButton>

                    <motion.a
                        href="#contact"
                        className="px-8 py-4 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get In Touch
                    </motion.a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >

                </motion.div>
            </motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg pointer-events-none" />
        </section>
    );
};
