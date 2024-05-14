import React from "react";
import { FaGithub } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className="hero">
          <div className="content">
            <h1>Optimizing Kubernetes</h1>
            <p>Enhance your cluster experience with OptiKube</p>
            <div className="buttons">
              <button className="button primary">Get Started</button>
              <button className="button secondary">
                <a href='https://github.com/' target="_blank" rel="noopener noreferrer">
                      <FaGithub className="icon" style={{ verticalAlign: 'middle', marginRight:'5px' }}/>
                </a>
                GitHub
                </button>
            </div>
          </div>
        </div>
    )
}

export default Hero;