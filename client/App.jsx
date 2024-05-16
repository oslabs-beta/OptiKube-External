import React from 'react';
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Team from './components/Team.jsx'
import Footer from './components/Footer.jsx'
import Features from './components/Features.jsx';



const App = () => {
    return (
        <>
            <Nav/>
            <Hero/>
            <Features />
            <Team/>
            <Footer/>
        </>
        
    )
}

export default App