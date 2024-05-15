import React from 'react';

const Features = ({ title, description, svg }) => {
    return (
        <div className="flex items-center justify-between p-5 mb-5">
            <div className="text-white w-3/5 pr-5 pl-20">
                <h2 className="text-6xl mb-2.5">{title}</h2>
                <p className="text-lg leading-6">{description}</p>
            </div>
            <div className="w-2/5 flex justify-center items-center">
                <img src={svg} className="w-full h-auto object-contain"/>
            </div>
        </div>
    );
};

export default Features;
