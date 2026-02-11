import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Github,
    Linkedin,
    Mail,
    Terminal,
    Layers,
    ExternalLink,
    Zap,
    ChevronRight,
    Database,
    Cpu,
    Ticket
} from 'lucide-react';

// Import Legacy Components
import Skiing from './components/Skiing';
import About from './components/About';
import Blog from './components/Blog'; // Assuming this exists or using placeholder
// import WorkSection from './components/WorkSection'; // Deprecated


import { resumeData } from './data/resume';

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                <Link to="/" className="text-sm font-semibold tracking-tighter flex items-center gap-2 text-white no-underline">
                    {/* Restored the YX branding from old site */}
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs">YX</div>
                    <span className="hidden md:inline">YUXIANG (TERRY) FAN</span>
                </Link>

                <div className="hidden md:flex gap-10 text-[12px] uppercase tracking-widest text-[#86868b] font-medium">
                    <Link to="/" className={`hover:text-white transition-colors cursor-pointer ${isHome ? 'text-white' : ''}`}>Home</Link>
                    {/* Removed Blog link as it is empty/irrelevant for now */}
                    {isHome && (
                        <>
                            <a href="#stack" className="hover:text-white transition-colors cursor-pointer">Stack</a>
                            <a href="#work" className="hover:text-white transition-colors cursor-pointer">Work</a>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

// New Landing Page Component
const LandingPage = () => {
    const itemSlideUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    };

    const springConfig = { type: "spring", stiffness: 200, damping: 20 };

    return (
        <main className="max-w-6xl mx-auto px-6 pt-32 pb-32">
            {/* --- Hero Section --- */}
            <section className="mb-40">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Restored <coder> tag from old site as a subtle intro */}
                    <div className="mb-6 font-mono text-blue-500 font-bold tracking-widest text-sm">&lt;Hello AI World /&gt;</div>
                    <h1 className="text-[14vw] md:text-[100px] leading-[0.9] font-bold tracking-tighter mb-10 bg-gradient-to-b from-white via-white to-white/30 bg-clip-text text-transparent">
                        Yuxiang <br /> (Terry) Fan.
                    </h1>

                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                        <p className="text-xl md:text-2xl text-[#86868b] max-w-xl leading-tight font-medium">
                            A Computer Science graduate born in the <span className="text-white">AI era</span>.
                            I enjoy the craft of coding—building resilient systems and intelligent automation that ensure quality at scale.
                        </p>
                        <Link to="/about" className="flex items-center gap-2 text-blue-500 font-semibold cursor-pointer group no-underline">
                            More about me
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* --- Bento Grid (Stack) --- */}
            <section id="stack" className="mb-40">
                <motion.h2
                    {...itemSlideUp}
                    className="text-xs font-bold tracking-[0.4em] text-[#86868b] uppercase mb-10"
                >
                    Technical Foundation
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-full md:h-[600px]">
                    {/* Core Languages - Large Card */}
                    <motion.div
                        {...itemSlideUp}
                        className="md:col-span-2 md:row-span-2 bg-[#1c1c1e] rounded-[40px] p-10 flex flex-col justify-between border border-white/5 relative overflow-hidden group"
                    >
                        <div className="z-10">
                            <div className="flex gap-4 mb-6">
                                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 italic font-serif text-xl">Py</div>
                                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 italic font-serif text-xl">Java</div>
                                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 italic font-serif text-xl">Go</div>
                            </div>
                            <h3 className="text-4xl font-bold tracking-tight mb-4">Core Stack</h3>
                            <p className="text-[#86868b] text-lg max-w-xs leading-relaxed">
                                Expert in Python and Java for backend systems and automation frameworks.
                            </p>
                        </div>
                        <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none">
                            <Terminal size={400} />
                        </div>
                    </motion.div>

                    {/* Automation & Tools - Square Card */}
                    <motion.div
                        {...itemSlideUp}
                        className="md:col-span-2 bg-[#1c1c1e] rounded-[40px] p-8 border border-white/5 flex flex-col justify-between group"
                    >
                        <div className="flex justify-between items-start">
                            <Layers className="text-blue-500" size={32} />
                            <div className="flex gap-2">
                                <span className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-[10px] font-bold">Appium</span>
                                <span className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-[10px] font-bold">Pytest</span>
                                <span className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-[10px] font-bold">Kafka</span>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold tracking-tight mb-2">Test Infrastructure</h4>
                            <p className="text-[#86868b]">Building scalable automation and release pipelines.</p>
                        </div>
                    </motion.div>

                    {/* AI/LLM - Small Card */}
                    <motion.div
                        {...itemSlideUp}
                        className="bg-[#1c1c1e] rounded-[40px] p-8 border border-white/5 flex flex-col justify-between hover:bg-[#252529] transition-all"
                    >
                        <Cpu className="text-purple-500" size={24} />
                        <h4 className="text-xl font-bold tracking-tight mt-4">AI Integration</h4>
                        <p className="text-xs text-[#86868b] mt-1 uppercase tracking-widest">Release Automation</p>
                    </motion.div>

                    {/* Database - Small Card */}
                    <motion.div
                        {...itemSlideUp}
                        className="bg-[#1c1c1e] rounded-[40px] p-8 border border-white/5 flex flex-col justify-between hover:bg-[#252529] transition-all"
                    >
                        <Database className="text-green-500" size={24} />
                        <h4 className="text-xl font-bold tracking-tight mt-4">Cloud Native</h4>
                        <p className="text-xs text-[#86868b] mt-1 uppercase tracking-widest">AWS / K8s</p>
                    </motion.div>
                </div>
            </section>

            {/* --- Work Section --- */}
            <section id="work" className="mb-40">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <motion.h2 {...itemSlideUp} className="text-xs font-bold tracking-[0.4em] text-[#86868b] uppercase mb-4">Selected Work</motion.h2>
                        <motion.h3 {...itemSlideUp} className="text-4xl font-bold tracking-tight">Featured Projects.</motion.h3>
                    </div>
                </div>

                <div className="space-y-4">
                    {resumeData.projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            {...itemSlideUp}
                            whileHover={{ scale: 0.99, backgroundColor: "#1c1c1e" }}
                            transition={springConfig}
                            onClick={() => project.link && window.open(project.link, '_blank')}
                            className={`p-8 rounded-[32px] border border-transparent hover:border-white/10 flex flex-col md:flex-row justify-between items-center group bg-[#1c1c1e]/50 backdrop-blur-md ${project.link ? 'cursor-pointer' : 'cursor-default'}`}
                        >
                            <div className="flex-1 flex items-center gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 md:block hidden">
                                    <Terminal className="text-white/50 m-auto mt-4" size={32} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[10px] font-black tracking-widest text-blue-500 uppercase">{project.category}</span>
                                    </div>
                                    <h4 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                                    <p className="text-[#86868b] max-w-xl text-sm leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                            <div className="flex gap-2 mt-6 md:mt-0 flex-wrap justify-end max-w-[300px]">
                                {project.tech.map(t => (
                                    <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-semibold border border-white/5 text-[#86868b]">{t}</span>
                                ))}
                                {project.link && (
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ExternalLink size={16} />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>


        </main>
    );
}

const App = () => {
    return (
        <div className="min-h-screen bg-black text-[#f5f5f7] font-sans selection:bg-[#0066cc] selection:text-white overflow-x-hidden">
            <Navbar />

            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/skiing" element={<Skiing />} />
                <Route path="/about" element={<About />} />
                {/* Placeholder for Blog until we migrate it properly */}
                <Route path="/blog" element={<div className="pt-32 text-center"><h1>Blog Coming Soon</h1></div>} />
                {/* Add redirects or other routes as needed */}
            </Routes>

            {/* --- Footer (Restored) --- */}
            <footer className="py-20 bg-[#0a0a0a] border-t border-white/5">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="text-center md:text-left">
                        <h4 className="font-bold tracking-tighter text-2xl mb-2">YX_ARCHITECT</h4>
                        <p className="text-[#86868b] text-sm italic">Engineered for the future.</p>
                    </div>

                    <div className="flex gap-12 text-[#86868b]">
                        {[
                            { icon: Github, label: "Code", action: () => window.open("https://github.com/Terry-Yuxiang", "_blank") },
                            { icon: Linkedin, label: "Network", action: () => window.open("https://www.linkedin.com/in/yuxiangf/", "_blank") },
                            { icon: Mail, label: "Message", action: () => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=yuxiangfan.work@gmail.com", "_blank") }
                        ].map((social, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5, color: "#f5f5f7" }}
                                className="flex items-center gap-2 cursor-pointer transition-colors"
                                onClick={social.action}
                            >
                                <social.icon size={20} />
                                <span className="text-[12px] font-bold uppercase tracking-widest">{social.label}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-col items-end gap-2 text-[10px] text-[#424245] uppercase tracking-widest font-bold">
                        <Link to="/skiing" className="hover:text-[#86868b] transition-colors">SKI LOG</Link>
                        <span>&copy; 2026 / ALL SYSTEMS OPERATIONAL</span>
                    </div>
                </div>
            </footer>

            {/* Background Decorative Gradient */}
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-purple-500/5 blur-[100px] rounded-full -z-10 pointer-events-none" />
        </div>
    );
};

export default App;
