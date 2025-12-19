/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./data/**/*.{js,ts,jsx,tsx}",
        "./hooks/**/*.{js,ts,jsx,tsx}",
        "./utils/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0EA5E9',
                secondary: '#8B5CF6',
                accent: {
                    green: '#10B981',
                    pink: '#EC4899',
                },
                dark: {
                    bg: '#0F172A',
                    surface: '#1E293B',
                    border: '#334155',
                }
            },
            fontFamily: {
                heading: ['Space Grotesk', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
                code: ['Fira Code', 'monospace'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'particle': 'particle 3s linear infinite',
                'magnetic': 'magnetic 0.3s ease-out',
                'shimmer': 'shimmer 2s linear infinite',
                'spin-slow': 'spin 8s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(14, 165, 233, 0.5), 0 0 10px rgba(14, 165, 233, 0.3)' },
                    '100%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.8), 0 0 30px rgba(14, 165, 233, 0.5)' },
                },
                particle: {
                    '0%': { transform: 'translateY(0) scale(1)', opacity: '1' },
                    '100%': { transform: 'translateY(-100px) scale(0)', opacity: '0' },
                },
                magnetic: {
                    '0%': { transform: 'translate(0, 0)' },
                    '100%': { transform: 'translate(var(--x), var(--y))' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
