import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';

export const CustomCursor = () => {
    const { x, y } = useMousePosition();
    const [isHovering, setIsHovering] = useState(false);
    const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

    useEffect(() => {
        // Add hover listeners to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, [role="button"]');

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    // Create particle trail
    useEffect(() => {
        const particleId = Date.now();
        setParticles(prev => [...prev, { id: particleId, x, y }]);

        const timer = setTimeout(() => {
            setParticles(prev => prev.filter(p => p.id !== particleId));
        }, 1000);

        return () => clearTimeout(timer);
    }, [x, y]);

    // Hide on mobile
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    if (isMobile) return null;

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-primary pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: x - 12,
                    y: y - 12,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 28,
                }}
            />

            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: x - 4,
                    y: y - 4,
                    scale: isHovering ? 0 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 1000,
                    damping: 50,
                }}
            />

            {/* Particle trail */}
            {particles.slice(-5).map((particle, index) => (
                <motion.div
                    key={particle.id}
                    className="fixed top-0 left-0 w-1 h-1 rounded-full bg-primary pointer-events-none z-[9998]"
                    initial={{ x: particle.x, y: particle.y, opacity: 0.8, scale: 1 }}
                    animate={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    style={{
                        opacity: (5 - index) / 5,
                    }}
                />
            ))}
        </>
    );
};
