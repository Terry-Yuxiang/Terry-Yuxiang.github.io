import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import DeployReactToGitHubPages from './components/DeployReactToGitHubPages'
import Footer from './components/Footer'
import Skiing from './components/Skiing'
import Contact from './components/Contact'

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skiing" element={<Skiing />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/google-ai-agent-runbook" element={<BlogPost />} />
                    <Route path="/blog/deploy-react-to-github-pages" element={<DeployReactToGitHubPages />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
