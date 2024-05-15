import React from 'react';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import './stylesheets/styles.css'

const root = createRoot(document.getElementById('root'))
root.render(<App/>)
