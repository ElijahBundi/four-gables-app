import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HomeProvider } from './components/context/homeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HomeProvider>
        <App />
    </HomeProvider>        
)

