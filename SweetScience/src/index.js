import React from 'react';
import {render} from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';

import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const target = document.getElementById('root');

render(
    <Provider store={store}>    
        <App />
    </Provider>,
    target
)
