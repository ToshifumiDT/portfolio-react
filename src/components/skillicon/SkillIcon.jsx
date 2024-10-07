import React from 'react';
import './SkillIcon.css';


const SkillIcon = ({ icon, skillName, tooltip }) => {
    return (
        <div className="skill-icon-container" title={tooltip}>
            <img src={icon} alt={skillName} className="skill-icon" />
            {skillName && <p className="skill-name">{skillName}</p>}
        </div>
    );
};

export default SkillIcon;
