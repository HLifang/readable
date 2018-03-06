import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import store from './Store.js';

ReactDOM.render(
    <Routes store={store}/>, 
    document.getElementById('root')
);
registerServiceWorker();
