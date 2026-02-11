export const resumeData = {
    name: "Yuxiang Fan",
    title: "Software Development Engineer in Test (SDET)",
    summary: "Software Development Engineer in Test at TikTok. Passionate about building intelligent automation systems, scalable testing infrastructure, and high-performance backend services.",
    socials: {
        email: "mailto:yuxiangfan.work@gmail.com",
        linkedin: "https://www.linkedin.com/in/yuxiangf",
        github: "https://github.com/Terry-Yuxiang"
    },
    experience: [
        {
            company: "TikTok",
            role: "Software Development Engineer in Test",
            period: "Feb 2025 – Present",
            location: "San Jose, CA",
            description: "Architecting intelligent release automation using Python and Lark Open Platform. Integrating AI agents for validation and developing scalable UI automation with Appium.",
            tech: ["Python", "Lark API", "Appium", "Pytest", "AI Agents"]
        },
        {
            company: "IMPORT",
            role: "Software Development Engineer Intern",
            period: "Aug 2023 – Nov 2023",
            location: "Los Angeles, CA",
            description: "Integrated Kafka for high-concurrency event buffering and engineered a distributed messaging system with near-100% reliability.",
            tech: ["Kafka", "Distributed Systems", "Java"]
        },
        {
            company: "China Railway No.5 Engineering Group",
            role: "Software Development Engineer Intern",
            period: "Jul 2021 – Aug 2021",
            location: "Guizhou, China",
            description: "Developed a visualized time-tracking system and optimized Django ORM queries for reliability and scalability.",
            tech: ["Django", "Python", "SQL"]
        }
    ],
    projects: [
        {
            title: "Distributed RPC Framework",
            description: "High-performance distributed RPC framework using Netty and custom serialization. Integrated Zookeeper for service registry and load balancing.",
            tech: ["Java", "Netty", "Zookeeper"],
            category: "System Architecture"
        },
        {
            title: "Distributed Group Chat System",
            description: "Messaging system supporting P2P and group chat with offline delivery, achieving sub-second latency and high reliability.",
            tech: ["Java", "Distributed Systems", "Networking"],
            category: "Backend System"
        },
        {
            title: "Weenix OS",
            description: "Implemented kernel components including thread scheduling, processes, virtual memory, and file systems for a Unix-like OS.",
            tech: ["C", "Kernel", "OS Internals"],
            category: "Operating Systems"
        },
        {
            title: "Video/Audio Indexing Engine",
            description: "Implemented PHASH, SIFT, and MFCC algorithms to index and locate original frame positions from short media clips.",
            tech: ["Python", "Computer Vision", "Algorithms"],
            category: "AI / Algorithms"
        },
        {
            title: "Community Forum",
            description: "Designed a scalable forum using Kafka, Redis, Elasticsearch, and Quartz. Implemented dual-level caching (Caffeine + Redis) and real-time analytics with HyperLogLog & Bitmap.",
            tech: ["Kafka", "Redis", "Elasticsearch", "Quartz"],
            category: "Distributed Systems"
        },
        {
            title: "Event Query Platform & iOS App",
            description: "Full-stack event platform with Angular web frontend, SwiftUI iOS app, and Node.js/Express backend. Features REST APIs and local data storage.",
            tech: ["Angular", "SwiftUI", "Node.js", "Express"],
            category: "Full Stack",
            link: "https://www.youtube.com/watch?v=lnREpQenEAI"
        },
        {
            title: "Socket Meeting Scheduler",
            description: "Simulated socket communication across four servers using UDP and TCP for distributed meeting scheduling.",
            tech: ["C++", "C", "Socket", "UDP/TCP"],
            category: "Networking"
        }
    ],
    skills: {
        languages: ["Python", "Java", "Go", "TypeScript", "SQL", "C++"],
        tools: ["Spring Boot", "Pytest", "Kafka", "Redis", "Docker", "K8s", "AWS", "Appium"]
    }
};
