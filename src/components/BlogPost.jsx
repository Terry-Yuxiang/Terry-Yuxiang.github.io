import React from 'react';
import runbookImage from '../assets/ai_agent_runbook_cover.png';

const BlogPost = () => {
    return (
        <section className="blog-post-section" style={{ padding: '120px 2rem 4rem', maxWidth: '800px', margin: '0 auto' }}>
            <img src={runbookImage} alt="Google AI Agent Runbook" style={{ width: '100%', borderRadius: '8px', marginBottom: '2rem' }} />
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'left' }}>Google AI Agent Runbook</h1>

            <div style={{ textAlign: 'left', lineHeight: '1.6', fontSize: '1.1rem' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                    A Google AI agent runbook serves as a comprehensive set of instructions or guidelines that dictate how an artificial intelligence (AI) agent operates and interacts within specific workflows or systems. These runbooks translate business expertise into actionable, natural language instructions that AI agents can follow to achieve consistent and reliable results.
                </p>

                <h2 style={{ fontSize: '2rem', marginTop: '2rem', marginBottom: '1rem' }}>Key Components</h2>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '1.5rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Clear Objectives:</strong> A defined mission statement for the AI agent.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Essential Business Context:</strong> Information to help the agent understand its operational environment.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Structured Workflows:</strong> Step-by-step processes for the agent to follow, breaking down complex tasks.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Guardrails:</strong> Boundaries and rules that ensure the agent operates safely and effectively.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Examples:</strong> Practical scenarios that demonstrate ideal interaction flows.</li>
                </ul>

                <h2 style={{ fontSize: '2rem', marginTop: '2rem', marginBottom: '1rem' }}>Applications</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    Google AI agent runbooks are being applied across various domains including Security Operations (SecOps), Business Process Automation, Engineering, and IT Support. They enable agents to automate complex tasks, interpret data, optimize processes, and provide consistent support.
                </p>
            </div>
        </section>
    );
};

export default BlogPost;
