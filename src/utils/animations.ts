import { Variants } from 'framer-motion';

// Fade in animation
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

// Fade in up animation
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

// Slide in from left
export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

// Slide in from right
export const slideInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

// Scale in animation
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
};

// Stagger children animation
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

// Stagger item animation
export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

// Rotate in animation
export const rotateIn: Variants = {
    hidden: { opacity: 0, rotate: -180 },
    visible: {
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
};

// Page transition
export const pageTransition: Variants = {
    initial: { opacity: 0, x: -20 },
    animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: 'easeInOut' }
    },
    exit: {
        opacity: 0,
        x: 20,
        transition: { duration: 0.4, ease: 'easeInOut' }
    }
};

// Hover scale animation
export const hoverScale = {
    scale: 1.05,
    transition: { duration: 0.3, ease: 'easeOut' }
};

// Tap scale animation
export const tapScale = {
    scale: 0.95,
    transition: { duration: 0.1 }
};

// Float animation
export const float: Variants = {
    animate: {
        y: [0, -20, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    }
};

// Glow animation
export const glow: Variants = {
    animate: {
        boxShadow: [
            '0 0 5px rgba(14, 165, 233, 0.5)',
            '0 0 20px rgba(14, 165, 233, 0.8)',
            '0 0 5px rgba(14, 165, 233, 0.5)'
        ],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    }
};
