// About.jsx
import React from 'react';
import './about.css';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section className="about-section">
            <h2 id="about">{t('aboutTitle')}</h2>
            <p dangerouslySetInnerHTML={{ __html: t('aboutText') }} />
        </section>
    );
};

export default About;
