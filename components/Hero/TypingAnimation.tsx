import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const roles = ['Software Developer', 'Web Developer', 'UI Engineer', 'SaaS Builder', 'Creative Coder'];

export const TypingAnimation = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseDuration = isDeleting ? 500 : 2000;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (displayedText.length < currentRole.length) {
                    setDisplayedText(currentRole.substring(0, displayedText.length + 1));
                } else {
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                // Deleting
                if (displayedText.length > 0) {
                    setDisplayedText(currentRole.substring(0, displayedText.length - 1));
                } else {
                    // Move to next role
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentRoleIndex]);

    return (
        <div className="flex items-center space-x-2">
            <span className="text-2xl md:text-4xl font-heading text-white">I'm a </span>
            <span className="text-2xl md:text-4xl font-heading text-gradient">
                {displayedText}
                <motion.span
                    className="inline-block w-1 h-8 md:h-10 bg-primary ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                />
            </span>
        </div>
    );
};
