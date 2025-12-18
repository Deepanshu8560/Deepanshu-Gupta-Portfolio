import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

function App() {
    return (
        <div className="relative">
            {/* Custom Cursor */}
            <CustomCursor />

            {/* Scroll Progress */}
            <ScrollProgress />

            {/* Navigation */}
            <Navigation />

            {/* Main Content */}
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
            </main>

            {/* Footer */}
            <footer className="bg-dark-surface/50 py-12 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-gray-400">
                        © 2025 Deepanshu Gupta. Built with React, Three.js, Next.js and Framer Motion.
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                        Designed & Developed with ❤️
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default App;
