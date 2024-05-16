import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="flex justify-between items-center p-5 bg-black border-t border-gray-800 mt-12 text-white">
            <div>
                Copyright © 2024. All rights reserved.
            </div>
            <div className="flex items-center gap-2.5">
                Follow Us
                <a href="https://github.com/OptiKube" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                    <FaGithub className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/company/OptiKube" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                    <FaLinkedin className="w-6 h-6" />
                </a>
            </div>
        </div>
    );
};

export default Footer;
