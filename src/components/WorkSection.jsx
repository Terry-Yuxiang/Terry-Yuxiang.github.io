import React from 'react';
import work1 from '../assets/work-1.png';
import work2 from '../assets/work-2.png';
import work3 from '../assets/work-3.png';

const projects = [
    {
        id: 1,
        title: 'Canberra vs South Sydney',
        description: 'Creating a lean design system',
        category: 'Design system',
        image: work1,
    },
    {
        id: 2,
        title: "What today's home buyer wants",
        description: 'Interior design news feed',
        category: 'Side project',
        image: work2,
    },
    {
        id: 3,
        title: 'Qantas map search',
        description: 'Qantas map search',
        category: 'Product design',
        image: work3,
    },
];

const WorkSection = () => {
    return (
        <section className="work-section" id="portfolio">
            <div className="work-header">
                <h2>SOME OF MY LATEST WORK</h2>
            </div>

            <div className="work-grid">
                {projects.map((project) => (
                    <div key={project.id} className="work-card">
                        <div className="card-image-container">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="card-content">
                            <h3>{project.title}</h3>
                            <p className="card-description">{project.description}</p>
                            <p className="card-category">{project.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkSection;
