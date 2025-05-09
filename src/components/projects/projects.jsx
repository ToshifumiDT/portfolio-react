import React from 'react';
import './projects.css';

const Projects = () => {
    const projectList = [
        { 
            title: 'Portfolio', 
            description: 'This is the first portfolio I made.',
            imageUrl: '../image0001.png',
            link: 'https://toshifumidt.github.io/portfolio/'
        },
        { 
            title: 'Favorite food', 
            description: 'I created a simple page using Next.js to introduce my favorite foods.',
            imageUrl: '../image0002.png',
            link: 'https://nextpractice-taupe.vercel.app/'
        },
        { 
            title: 'Eldenring API', 
            description: 'This is a page using the Elden Ring API.',
            imageUrl: '../image0003.png',
            link: 'https://eldenringapi-r7ik.vercel.app/'
        },
        { 
            title: 'Flag Quiz', 
            description: 'A React-based Flag Quiz web app built with Tailwind CSS that challenges users to identify 30 national flags per game. \nIt features dark mode, real-time correct/incorrect sound effects, and a top-10 high-score leaderboard stored in localStorage.',
            imageUrl: '../image0004.png',
            link: 'https://flag-quiz-orcin.vercel.app/'
        },
    ];

    return (
        <section className="projects-section">
            <h2>My Projects</h2> 
            <div className="project-list">
                {projectList.map((project, index) => (
                    <div key={index} className="project-item">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img 
                                src={project.imageUrl} 
                                alt={project.title} 
                                className="project-image" 
                            />
                            <div className="project-item-text">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
