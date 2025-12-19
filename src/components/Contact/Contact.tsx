import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, CheckCircle, XCircle } from 'lucide-react';
import { ContactBackground } from './ContactBackground';
import { staggerContainer, staggerItem } from '@/utils/animations';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setStatus('sending');

        try {
            // EmailJS integration
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                console.error('EmailJS credentials not configured. Please check your .env file.');
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
                return;
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: 'Deepanshu Gupta',
                },
                publicKey
            );

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
        // Clear error when user starts typing
        if (errors[e.target.name]) {
            setErrors(prev => ({ ...prev, [e.target.name]: '' }));
        }
    };

    const socialLinks = [
        { icon: Github, href: 'https://github.com/Deepanshu8560', label: 'GitHub', color: '#333' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/deepanshuguptadev/', label: 'LinkedIn', color: '#0077B5' },

    ];

    return (
        <section id="contact" className="section bg-dark-surface/30 relative overflow-hidden">
            {/* 3D Background */}
            <ContactBackground />

            <motion.div
                className="max-w-7xl mx-auto"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Section Header */}
                <motion.div variants={staggerItem} className="text-center mb-20">
                    <h2 className="text-gradient mb-4">Get In Touch</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a project in mind? Let's create something extraordinary together
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <motion.div variants={staggerItem}>
                        <div className="gradient-border-animated p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Input */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg bg-dark-bg border ${errors.name ? 'border-red-500' : 'border-dark-border'
                                            } text-white focus:outline-none focus:border-primary transition-colors`}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && (
                                        <motion.p
                                            className="text-red-500 text-sm mt-1"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            {errors.name}
                                        </motion.p>
                                    )}
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg bg-dark-bg border ${errors.email ? 'border-red-500' : 'border-dark-border'
                                            } text-white focus:outline-none focus:border-primary transition-colors`}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && (
                                        <motion.p
                                            className="text-red-500 text-sm mt-1"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            {errors.email}
                                        </motion.p>
                                    )}
                                </div>

                                {/* Message Input */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className={`w-full px-4 py-3 rounded-lg bg-dark-bg border ${errors.message ? 'border-red-500' : 'border-dark-border'
                                            } text-white focus:outline-none focus:border-primary transition-colors resize-none`}
                                        placeholder="Tell me about your project..."
                                    />
                                    {errors.message && (
                                        <motion.p
                                            className="text-red-500 text-sm mt-1"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            {errors.message}
                                        </motion.p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    className="w-full btn-primary relative overflow-hidden"
                                    disabled={status === 'sending'}
                                    whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                                    whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                                >
                                    {status === 'sending' && (
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                                            initial={{ x: '-100%' }}
                                            animate={{ x: '100%' }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center justify-center space-x-2">
                                        {status === 'idle' && (
                                            <>
                                                <Send className="w-5 h-5" />
                                                <span>Send Message</span>
                                            </>
                                        )}
                                        {status === 'sending' && <span>Sending...</span>}
                                        {status === 'success' && (
                                            <>
                                                <CheckCircle className="w-5 h-5" />
                                                <span>Message Sent!</span>
                                            </>
                                        )}
                                        {status === 'error' && (
                                            <>
                                                <XCircle className="w-5 h-5" />
                                                <span>Failed to Send</span>
                                            </>
                                        )}
                                    </span>
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Info & Social Links */}
                    <motion.div variants={staggerItem} className="space-y-8">
                        {/* Status Indicator */}
                        <div className="glass rounded-2xl p-6">
                            <h3 className="text-xl font-heading font-semibold text-white mb-4">
                                Current Status
                            </h3>
                            <div className="flex items-center space-x-3">
                                <motion.div
                                    className="w-3 h-3 rounded-full bg-accent-green"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <span className="text-gray-300">Available for New Project</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="glass rounded-2xl p-6">
                            <h3 className="text-xl font-heading font-semibold text-white mb-6">
                                Connect With Me
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-3 p-4 rounded-xl bg-dark-bg hover:bg-dark-surface transition-colors group"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ scale: 1.05, y: -5 }}
                                        >
                                            <Icon className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
                                            <span className="text-gray-300 group-hover:text-white transition-colors">
                                                {social.label}
                                            </span>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Quick Info */}
                        <div className="glass rounded-2xl p-6">
                            <h3 className="text-xl font-heading font-semibold text-white mb-4">
                                Quick Info
                            </h3>
                            <div className="space-y-3 text-gray-300">
                                <p>📍 Based in Bengaluru, India</p>
                                <p>⏰ IST (UTC+5:30)</p>
                                <p>💼 Open to opportunities</p>
                                <p>⚡ Response time: Within 24 hours</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};
