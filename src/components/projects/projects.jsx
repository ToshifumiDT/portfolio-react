// Projects.jsx
import React from 'react';
import './projects.css';
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation();

    const projectList = [
        {
            key: 'portfolio',
            imageUrl: '../image0001.png',
            link: 'https://toshifumidt.github.io/portfolio/'
        },
        {
            key: 'favoriteFood',
            imageUrl: '../image0002.png',
            link: 'https://nextpractice-taupe.vercel.app/'
        },
        {
            key: 'eldenring',
            imageUrl: '../image0003.png',
            link: 'https://eldenringapi-r7ik.vercel.app/'
        },
        {
            key: 'flagQuiz',
            imageUrl: '../image0004.png',
            link: 'https://flag-quiz-orcin.vercel.app/'
        },
    ];

    return (
        <section className="projects-section">
            <h2>{t('projectsTitle')}</h2>
            <div className="project-list">
                {projectList.map((project, index) => (
                    <div key={index} className="project-item">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img 
                                src={project.imageUrl} 
                                alt={t(`projects.${project.key}.title`)} 
                                className="project-image" 
                            />
                            <div className="project-item-text">
                                <h3>{t(`projects.${project.key}.title`)}</h3>
                                <p>{t(`projects.${project.key}.description`)}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
