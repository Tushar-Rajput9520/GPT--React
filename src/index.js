import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Get the root DOM element
const rootElement = document.getElementById('root');

// Create root and render App inside it
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
