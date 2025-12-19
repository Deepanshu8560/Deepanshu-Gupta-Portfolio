import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export const ScrollProgress = () => {
    const scrollProgress = useScrollProgress();

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-dark-border z-[9999]">
            <motion.div
                className="h-full bg-gradient-to-r from-primary via-secondary to-accent-pink"
                style={{ width: `${scrollProgress}%` }}
                initial={{ width: 0 }}
                transition={{ duration: 0.1 }}
            />
        </div>
    );
};
