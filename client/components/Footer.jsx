import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <div>
                Copyright © 2024. All rights reserved.
            </div>
            <div className="social-links">
                Follow Us
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon" />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon" />
                </a>
            </div>
        </div>
    );
};

export default Footer;
