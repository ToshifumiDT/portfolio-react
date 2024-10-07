import React from 'react';
import SkillIcon from './SkillIcon'; 
import skillsData from '../../../Skills.json'; 
import './SkillSection.css'; 


const SkillSection = () => {
    return (
        <div className="skill-section">
            <h2 className="section-title">My Skills</h2>
            <p className="section-description">
             {/*add text?*/}
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
