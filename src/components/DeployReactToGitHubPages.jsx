import React from 'react';
import deployImage from '../assets/deploy_react_github_pages.png';

const DeployReactToGitHubPages = () => {
    return (
        <section className="blog-post-section" style={{ padding: '120px 2rem 4rem', maxWidth: '800px', margin: '0 auto' }}>
            <img src={deployImage} alt="Deploy React to GitHub Pages" style={{ width: '100%', borderRadius: '8px', marginBottom: '2rem' }} />
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'left' }}>How to Deploy a React Project to GitHub Pages</h1>

            <div style={{ textAlign: 'left', lineHeight: '1.6', fontSize: '1.1rem', color: '#333' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                    Deploying a React application to GitHub Pages is a great way to host your portfolio or personal projects for free. This guide will walk you through the steps to deploy your Vite-based React app.
                </p>

                <h2 style={{ fontSize: '2rem', marginTop: '2rem', marginBottom: '1rem' }}>Scenario 1: Repository is <code>username.github.io</code></h2>
                <p style={{ marginBottom: '1rem' }}>
                    If your repository is named <code>username.github.io</code> (e.g., <code>Terry-Yuxiang.github.io</code>), follow these steps:
                </p>

                <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Configure <code>vite.config.js</code></h3>
                <p style={{ marginBottom: '1rem' }}>
                    Set the <code>base</code> property to <code>'/'</code>.
                </p>
                <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '5px', overflowX: 'auto', marginBottom: '1.5rem' }}>
                    <code>{`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/'
})`}</code>
                </pre>

                <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>2. Configure <code>package.json</code></h3>
                <p style={{ marginBottom: '1rem' }}>
                    Add the <code>homepage</code> field and update your scripts.
                </p>
                <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '5px', overflowX: 'auto', marginBottom: '1.5rem' }}>
                    <code>{`// Add this line
"homepage": "https://terry-yuxiang.github.io",

// Update scripts
"scripts": {
  // ... other scripts
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}`}</code>
                </pre>

                <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>3. Install <code>gh-pages</code> and Deploy</h3>
                <p style={{ marginBottom: '1rem' }}>
                    Run the following commands in your terminal:
                </p>
                <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '5px', overflowX: 'auto', marginBottom: '1.5rem' }}>
                    <code>{`npm install gh-pages --save-dev
npm run deploy`}</code>
                </pre>
                <p style={{ marginBottom: '1rem' }}>
                    After running <code>npm run deploy</code>, push your code to the repository.
                </p>

                <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>4. Configure GitHub Pages Settings</h3>
                <p style={{ marginBottom: '1rem' }}>
                    Once the deploy command finishes successfully:
                </p>
                <ol style={{ paddingLeft: '20px', marginBottom: '1.5rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}>Go to your GitHub repository: <a href="https://github.com/Terry-Yuxiang/Terry-Yuxiang.github.io" target="_blank" rel="noopener noreferrer">https://github.com/Terry-Yuxiang/Terry-Yuxiang.github.io</a></li>
                    <li style={{ marginBottom: '0.5rem' }}>Click on <strong>Settings</strong> (top tab).</li>
                    <li style={{ marginBottom: '0.5rem' }}>On the left sidebar, click <strong>Pages</strong>.</li>
                    <li style={{ marginBottom: '0.5rem' }}>Under <strong>Build and deployment &gt; Branch</strong>:
                        <ul style={{ listStyleType: 'circle', paddingLeft: '20px', marginTop: '0.5rem' }}>
                            <li>Change the branch from <code>main</code> to <code>gh-pages</code>.</li>
                            <li>Ensure the folder is set to <code>/ (root)</code>.</li>
                        </ul>
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>Click <strong>Save</strong>.</li>
                </ol>

                <h2 style={{ fontSize: '2rem', marginTop: '2rem', marginBottom: '1rem' }}>Scenario 2: Repository is <code>[repository_name]</code></h2>
                <p style={{ marginBottom: '1rem' }}>
                    If your repository is a project site (e.g., <code>my-project</code>), you need to update the base URL.
                </p>
                <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Configure <code>vite.config.js</code></h3>
                <p style={{ marginBottom: '1rem' }}>
                    Set the <code>base</code> property to your repository name.
                </p>
                <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '5px', overflowX: 'auto', marginBottom: '1.5rem' }}>
                    <code>{`export default defineConfig({
  plugins: [react()],
  base: '/[repository_name]/' // e.g. '/my-project/'
})`}</code>
                </pre>
            </div>
        </section>
    );
};

export default DeployReactToGitHubPages;
