import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import Product from './store/Products';

ReactDOM.render(
    <Provider Product={Product}>
        <App />
    </Provider>,
    document.getElementById('root'));


