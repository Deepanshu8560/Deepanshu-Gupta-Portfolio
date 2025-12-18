import { useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';

interface MagneticButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export const MagneticButton = ({ children, onClick }: MagneticButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
    const mousePosition = useMousePosition();

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsHovered(true);
        const rect = e.currentTarget.getBoundingClientRect();
        setButtonPosition({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const magneticStrength = 0.3;
    const offsetX = isHovered ? (mousePosition.x - buttonPosition.x) * magneticStrength : 0;
    const offsetY = isHovered ? (mousePosition.y - buttonPosition.y) * magneticStrength : 0;

    return (
        <motion.button
            className="btn-primary relative overflow-hidden group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            animate={{
                x: offsetX,
                y: offsetY,
            }}
            transition={{
                type: 'spring',
                stiffness: 150,
                damping: 15,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Liquid fill effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary to-accent-pink"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
            />

            {/* Button text */}
            <span className="relative z-10 flex items-center space-x-2">
                {children}
            </span>

            {/* Particle explosion on click */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ scale: 0, opacity: 1 }}
                whileTap={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary rounded-full"
                        style={{
                            left: '50%',
                            top: '50%',
                        }}
                        animate={{
                            x: Math.cos((i * Math.PI * 2) / 8) * 50,
                            y: Math.sin((i * Math.PI * 2) / 8) * 50,
                            opacity: 0,
                        }}
                        transition={{ duration: 0.5 }}
                    />
                ))}
            </motion.div>
        </motion.button>
    );
};
