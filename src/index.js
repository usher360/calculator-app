import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App/App';
import {Provider, useSelector} from 'react-redux'
import configureStore from "./State/configureStore";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
