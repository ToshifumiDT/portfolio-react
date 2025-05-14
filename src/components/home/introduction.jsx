// Introduction.jsx
import React from 'react';
import './introduction.css';
import { useTranslation } from 'react-i18next';

const Introduction = () => {
    const { t } = useTranslation();

    return (
        <section className="introduction-section" id="home">
            <div className="intro-text">
                <h3>{t('introGreeting')}</h3>
                <p>{t('introDescription')}</p>
            </div>
            <div className="intro-image">
                <img src="./IMG_4899_0.jpg" alt="Toshifumi" />
            </div>
        </section>
    );
};

export default Introduction;
