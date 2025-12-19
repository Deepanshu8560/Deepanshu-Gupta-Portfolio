import { motion } from 'framer-motion';

export const ProfilePhoto = () => {
    return (
        <motion.div
            className="relative w-80 h-80"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent-pink animate-spin-slow"
                style={{ padding: '4px' }}>
                <div className="w-full h-full rounded-full bg-dark-bg"></div>
            </div>

            {/* Photo container */}
            <div className="absolute inset-1 rounded-full overflow-hidden border-4 border-dark-bg">
                {/* Profile Photo */}
                <img
                    src="/assets/profile.png"
                    alt="Deepanshu Gupta"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        // Fallback to placeholder if image not found
                        e.currentTarget.style.display = 'none';
                        const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                        if (placeholder) placeholder.style.display = 'flex';
                    }}
                />

                {/* Placeholder (shown only if image fails to load) */}
                <div style={{ display: 'none' }} className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent-pink/20 flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-6xl mb-2">👤</div>
                        <p className="text-gray-400 text-sm">Add your photo</p>
                        <p className="text-gray-500 text-xs mt-1">
                            <code className="text-primary">public/assets/profile.png</code>
                        </p>
                    </div>
                </div>
            </div>

            {/* Glow effect */}
            <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl -z-10"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </motion.div>
    );
};
