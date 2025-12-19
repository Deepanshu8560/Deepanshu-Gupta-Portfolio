import { motion } from 'framer-motion';
import { Code, Sparkles, Zap } from 'lucide-react';

const floatingElements = [
    { icon: Code, text: 'Clean Code', delay: 0, x: -100, y: -50 },
    { icon: Sparkles, text: 'Beautiful UI', delay: 0.2, x: 150, y: -20 },
    { icon: Zap, text: 'Fast Performance', delay: 0.4, x: -350, y: -100 },
];

export const FloatingElements = () => {
    return (
        <div className="absolute inset-0 pointer-events-none">
            {floatingElements.map((element, index) => {
                const Icon = element.icon;
                return (
                    <motion.div
                        key={index}
                        className="absolute glass rounded-2xl p-4 flex items-center space-x-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: [0.6, 0.8, 0.6],
                            y: [element.y, element.y - 20, element.y],
                            x: element.x,
                        }}
                        transition={{
                            opacity: { duration: 3, repeat: Infinity, delay: element.delay },
                            y: { duration: 4, repeat: Infinity, delay: element.delay },
                            x: { duration: 0 },
                        }}
                        style={{
                            left: '50%',
                            top: '50%',
                        }}
                    >
                        <Icon className="w-6 h-6 text-primary" />
                        <span className="text-sm font-medium text-white">{element.text}</span>
                    </motion.div>
                );
            })}
        </div>
    );
};
