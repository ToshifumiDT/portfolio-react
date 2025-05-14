// SkillSection.jsx
import React from 'react';
import SkillIcon from './SkillIcon'; 
import skillsData from '../../../Skills.json'; 
import './SkillSection.css';
import { useTranslation } from 'react-i18next';

const SkillSection = () => {
    const { t } = useTranslation();

    return (
        <div className="skill-section">
            <h2 className="section-title">{t('skillsTitle')}</h2>
            <p className="section-description">
                {t('skillsDescription')}
            </p>
            <div className="skills-container">
                {skillsData.map((skill, index) => (
                    <SkillIcon 
                        key={index}
                        icon={skill.icon}
                        skillName={skill.name}
                        tooltip={skill.tooltip}
                    />
                ))}
            </div>
        </div>
    );
};

export default SkillSection;
