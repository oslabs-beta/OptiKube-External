import React from 'react';

const Features = ({ title, description, svg }) => {
    return (
        <div className="feature-container">
            <div className="feature-text">
                <h2 className="feature-title">{title}</h2>
                <p className="feature-description">{description}</p>
            </div>
            <div className="feature-svg">
                <img src={svg}/>
            </div>
        </div>
    );
};

export default Features;
