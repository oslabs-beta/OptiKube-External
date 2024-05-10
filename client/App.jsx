import React from 'react';
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Setup from './components/Setup.jsx'
import Team from './components/Team.jsx'

import './stylesheets/styles.scss'

const App = () => {
    return (
        <div id="home">
            <Nav/>
            <Hero/>
            <Setup/>
            <Team/>
        </div>
    )
}

export default App