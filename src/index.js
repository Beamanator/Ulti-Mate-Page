import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './App';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

// NOTE: BrowserRouter doesn't work nicely with Github Pages :(
const app = (
    <HashRouter>
        <App />
    </HashRouter>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
