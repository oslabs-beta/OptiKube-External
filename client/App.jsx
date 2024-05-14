import React from 'react';
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Setup from './components/Setup.jsx'
import Team from './components/Team.jsx'
import Footer from './components/Footer.jsx'
import Features from './components/Features.jsx';

import Svg1 from './images/svg-2.svg'

import './stylesheets/styles.scss'

const App = () => {
    return (
        <>
            <div id="home">
                <Nav/>
                <Hero/>
            </div>
            <Setup/>
            <Features 
                title="Customizable event-driven autoscalers"
                description="Deploy autoscalers according to your application needs to manage your cluster deployments and optimize resource usage."
                svg={Svg1}
            />
            <Team/>
            <Footer/>
        </>
        
    )
}

export default App