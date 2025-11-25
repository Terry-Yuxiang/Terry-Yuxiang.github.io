import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/" className="logo-circle" style={{ textDecoration: 'none' }}>
                    <span>YX</span>
                </Link>
            </div>

            <ul className="nav-links">
                <li><Link to="/about">about</Link></li>
                <li><a href="/#portfolio">portfolio</a></li>
                <li><Link to="/skiing">ski</Link></li>
                <li><a href="/#book">book</a></li>
                <li><Link to="/blog">blog</Link></li>
                <li><a href="/#contact">contact</a></li>
            </ul>

            <div className="social-links">
                <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                <a href="https://www.linkedin.com/in/yuxiangf/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
