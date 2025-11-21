import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

const CodeBlock = ({ filename, code, language = 'javascript' }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="code-block-container" style={{ marginBottom: '1.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
            {filename && (
                <div className="code-block-header" style={{
                    background: 'var(--code-header-bg)',
                    padding: '0.5rem 1rem',
                    borderBottom: '1px solid var(--card-border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'var(--secondary-text)',
                    fontSize: '0.85rem',
                    fontFamily: 'monospace'
                }}>
                    <span>{filename}</span>
                    <button
                        onClick={handleCopy}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            padding: '4px',
                            cursor: 'pointer',
                            color: 'inherit',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '0.75rem'
                        }}
                    >
                        {copied ? <Check size={14} /> : <Copy size={14} />}
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            )}
            <div className="code-block-content" style={{
                background: 'var(--code-bg)',
                padding: '1rem',
                overflowX: 'auto',
                color: 'var(--code-text)',
                fontFamily: 'monospace',
                fontSize: '0.9rem',
                lineHeight: '1.5'
            }}>
                <pre style={{ margin: 0 }}>
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
};

export default CodeBlock;
