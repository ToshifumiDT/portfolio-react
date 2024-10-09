import React from 'react';
import './introduction.css';

const Introduction = () => {
    return (
        <section className="introduction-section" id='home'>
            <div className="intro-text">
                <h3>Hello!</h3>
                <p>I'm Toshifumi and I do Web development and video editing.</p>
            </div>
            <div className="intro-image">
                <img src="./IMG_4899_0.jpg" alt="Toshifumi" />
            </div>
        </section>
    );
};

export default Introduction;
