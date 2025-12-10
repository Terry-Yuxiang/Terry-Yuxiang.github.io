import React, { useState } from 'react';
import { Mail, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Contact from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        window.location.href = `mailto:yuxiang.fan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="contact-page" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div className="contact-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-color)' }}>Get in Touch</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--secondary-text)', maxWidth: '600px', margin: '0 auto' }}>
                    Have a question, a project in mind, or just want to say hi? I'd love to hear from you.
                </p>
            </div>

            <div className="contact-content" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem',
                alignItems: 'start'
            }}>
                {/* Contact Info Section */}
                <div className="contact-info">
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--text-color)' }}>Contact Information</h2>

                    <div className="info-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'var(--card-bg)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid var(--card-border)',
                            color: 'var(--primary-color)'
                        }}>
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-color)' }}>Email</h3>
                            <a href="mailto:yuxiang.fan@gmail.com" style={{ color: 'var(--secondary-text)', textDecoration: 'none' }}>yuxiang.fan@gmail.com</a>
                        </div>
                    </div>

                    <div className="info-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'var(--card-bg)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid var(--card-border)',
                            color: 'var(--primary-color)'
                        }}>
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-color)' }}>Location</h3>
                            <p style={{ margin: 0, color: 'var(--secondary-text)' }}>San Jose, CA</p>
                        </div>
                    </div>

                    <div className="social-connect" style={{ marginTop: '3rem' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-color)' }}>Connect with me</h3>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://www.linkedin.com/in/yuxiangf/" target="_blank" rel="noopener noreferrer" style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: 'var(--card-bg)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--text-color)',
                                border: '1px solid var(--card-border)',
                                transition: 'transform 0.2s'
                            }}>
                                <Linkedin size={20} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: 'var(--card-bg)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--text-color)',
                                border: '1px solid var(--card-border)',
                                transition: 'transform 0.2s'
                            }}>
                                <Github size={20} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: 'var(--card-bg)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--text-color)',
                                border: '1px solid var(--card-border)',
                                transition: 'transform 0.2s'
                            }}>
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="contact-form-container" style={{
                    background: 'var(--card-bg)',
                    padding: '2.5rem',
                    borderRadius: '16px',
                    border: '1px solid var(--card-border)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                }}>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-color)', fontWeight: '500' }}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--card-border)',
                                    background: 'var(--bg-color)',
                                    color: 'var(--text-color)',
                                    fontSize: '1rem',
                                    outline: 'none'
                                }}
                                required
                            />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-color)', fontWeight: '500' }}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--card-border)',
                                    background: 'var(--bg-color)',
                                    color: 'var(--text-color)',
                                    fontSize: '1rem',
                                    outline: 'none'
                                }}
                                required
                            />
                        </div>
                        <div style={{ marginBottom: '2rem' }}>
                            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-color)', fontWeight: '500' }}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can I help you?"
                                rows="5"
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--card-border)',
                                    background: 'var(--bg-color)',
                                    color: 'var(--text-color)',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    resize: 'vertical'
                                }}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" style={{
                            width: '100%',
                            padding: '1rem',
                            borderRadius: '8px',
                            background: 'var(--primary-color)',
                            color: 'white',
                            border: 'none',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            transition: 'opacity 0.2s'
                        }}>
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
