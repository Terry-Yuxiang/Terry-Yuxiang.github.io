import React from 'react';
import { Link } from 'react-router-dom';
import runbookImage from '../assets/ai_agent_runbook_cover.png';
import deployImage from '../assets/deploy_react_github_pages.png';

const BlogPostCard = ({ image, title, excerpt, author, slug }) => (
    <Link to={`/blog/${slug}`} className="blog-card" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="blog-card-image">
            <img src={image} alt={title} />
        </div>
        <div className="blog-card-content">
            <div className="blog-card-meta-top">
                <span className="blog-author-icon">YX</span>
                <span className="blog-author-name">{author}</span>
                <span className="blog-more-options">⋮</span>
            </div>
            <h3>{title}</h3>
            <p>{excerpt}</p>
        </div>
    </Link>
);

const Blog = () => {
    const posts = [
        {
            id: 0,
            slug: 'deploy-react-to-github-pages',
            image: deployImage,
            title: "How to Deploy React to GitHub Pages",
            excerpt: "A step-by-step guide to deploying your Vite-based React application to GitHub Pages, covering both user and project sites.",
            author: "Yuxiang",
            date: "Nov 21, 2025",
            views: "156",
            likes: 42
        },
        {
            id: 1,
            slug: 'google-ai-agent-runbook',
            image: runbookImage,
            title: "Google AI Agent Runbook",
            excerpt: "A comprehensive guide on how AI agents operate, including objectives, workflows, and guardrails for consistent results.",
            author: "Yuxiang",
            date: "Nov 19, 2025",
            views: "1.2k",
            likes: 342
        },
        {
            id: 2,
            slug: '#',
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "The Future of Web Design",
            excerpt: "Exploring the latest trends in web design, from glassmorphism to immersive 3D experiences and micro-interactions.",
            author: "Yuxiang",
            date: "Oct 24, 2025",
            views: "856",
            likes: 128
        },
        {
            id: 3,
            slug: '#',
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Mastering React Hooks",
            excerpt: "A deep dive into React Hooks, understanding how to manage state and side effects in functional components efficiently.",
            author: "Yuxiang",
            date: "Sep 15, 2025",
            views: "2.1k",
            likes: 567
        }
    ];

    return (
        <section className="blog-section">
            <div className="blog-container">
                <div className="blog-header">
                    <h1>Latest Insights</h1>
                    <p>Thoughts on coding, design, and technology.</p>
                </div>
                <div className="blog-grid">
                    {posts.map(post => (
                        <BlogPostCard key={post.id} {...post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
