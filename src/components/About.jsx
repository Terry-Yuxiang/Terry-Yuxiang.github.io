import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { resumeData } from '../data/resume';

const About = () => {
    return (
        <main className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-10 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                    About Me.
                </h1>

                {/* Introduction */}
                <section className="mb-20">
                    <p className="text-xl md:text-2xl text-[#a1a1aa] leading-relaxed max-w-3xl">
                        I am a <span className="text-white font-medium">Computer Science graduate</span> currently working at <span className="text-white font-medium">TikTok</span>.
                    </p>
                </section>

                {/* Connect Section - Requested Feature */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-8 h-[2px] bg-blue-500 inline-block"></span>
                        Connect
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        {/* GitHub Link */}
                        <a
                            href="https://github.com/Terry-Yuxiang"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-6 py-4 bg-[#1c1c1e] hover:bg-[#2c2c2e] rounded-xl transition-all group border border-white/5"
                        >
                            <Github className="text-white group-hover:scale-110 transition-transform" />
                            <div>
                                <div className="text-sm text-[#86868b] font-medium uppercase tracking-wider">GitHub</div>
                                <div className="text-white font-semibold">@Terry-Yuxiang</div>
                            </div>
                        </a>

                        {/* Email Link */}
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=yuxiangfan.work@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-6 py-4 bg-[#1c1c1e] hover:bg-[#2c2c2e] rounded-xl transition-all group border border-white/5"
                        >
                            <Mail className="text-blue-400 group-hover:scale-110 transition-transform" />
                            <div>
                                <div className="text-sm text-[#86868b] font-medium uppercase tracking-wider">Email</div>
                                <div className="text-white font-semibold">yuxiangfan.work@gmail.com</div>
                            </div>
                        </a>

                        {/* LinkedIn (Bonus) */}
                        <a
                            href={resumeData.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-6 py-4 bg-[#1c1c1e] hover:bg-[#2c2c2e] rounded-xl transition-all group border border-white/5"
                        >
                            <Linkedin className="text-blue-500 group-hover:scale-110 transition-transform" />
                            <div>
                                <div className="text-sm text-[#86868b] font-medium uppercase tracking-wider">LinkedIn</div>
                                <div className="text-white font-semibold">/in/yuxiangf</div>
                            </div>
                        </a>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <span className="w-8 h-[2px] bg-purple-500 inline-block"></span>
                        Experience
                    </h2>
                    <div className="space-y-12">
                        {resumeData.experience.map((exp, index) => (
                            <div key={index} className="relative pl-8 border-l border-white/10">
                                <span className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-black"></span>
                                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                                    <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                                    <span className="text-sm text-[#86868b] font-mono">{exp.period}</span>
                                </div>

                                <div className="text-sm text-[#86868b] mb-4 flex items-center gap-2">
                                    <MapPin size={14} /> {exp.location}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((tech, i) => (
                                        <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-[#d4d4d8] font-mono">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education Section (Static from resume for now) */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <span className="w-8 h-[2px] bg-green-500 inline-block"></span>
                        Education
                    </h2>
                    <div className="space-y-8">
                        <div className="bg-[#1c1c1e] p-6 rounded-2xl border border-white/5">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-bold text-white">University of Southern California</h3>
                                    <div className="text-blue-400">Master of Science in Computer Science</div>
                                </div>
                                <div className="text-sm text-[#86868b] font-mono text-right">
                                    <div>Los Angeles, CA</div>
                                    <div>Dec 2024</div>
                                </div>
                            </div>
                            <div className="text-sm text-[#a1a1aa]">GPA: 3.75/4.00</div>
                        </div>

                        <div className="bg-[#1c1c1e] p-6 rounded-2xl border border-white/5">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-bold text-white">Central South University</h3>
                                    <div className="text-blue-400">Bachelor of Engineering in Software Engineering</div>
                                </div>
                                <div className="text-sm text-[#86868b] font-mono text-right">
                                    <div>China</div>
                                    <div>June 2022</div>
                                </div>
                            </div>
                            <div className="text-sm text-[#a1a1aa]">GPA: 3.51/4.00 (Major GPA 3.7/4.0)</div>
                        </div>
                    </div>
                </section>

            </motion.div>
        </main>
    );
};

export default About;
