import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export const Navigation = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Detect active section
            const sections = navItems.map(item => item.href.substring(1));
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'py-6'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.div
                            className="text-2xl font-heading font-bold text-gradient"
                            whileHover={{ scale: 1.05 }}
                        >
                            Portfolio
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="relative group"
                                >
                                    <span
                                        className={`text-sm font-medium transition-colors ${activeSection === item.href.substring(1)
                                                ? 'text-primary'
                                                : 'text-gray-300 hover:text-white'
                                            }`}
                                    >
                                        {item.name}
                                    </span>
                                    {activeSection === item.href.substring(1) && (
                                        <motion.div
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                                            layoutId="activeSection"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <motion.div
                className="fixed inset-0 z-40 md:hidden"
                initial={{ opacity: 0, x: '100%' }}
                animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    x: isMobileMenuOpen ? 0 : '100%',
                }}
                transition={{ duration: 0.3 }}
                style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
            >
                <div className="glass-strong h-full pt-24 px-6">
                    <div className="flex flex-col space-y-6">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className={`text-left text-2xl font-heading ${activeSection === item.href.substring(1)
                                        ? 'text-primary'
                                        : 'text-white'
                                    }`}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{
                                    opacity: isMobileMenuOpen ? 1 : 0,
                                    x: isMobileMenuOpen ? 0 : 50,
                                }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {item.name}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    );
};
