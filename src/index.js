import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/css/style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './reducers'
import thunk from 'redux-thunk';

// axios.defaults.baseURL = '';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

// Store
const store = createStore(allReducers, applyMiddleware(thunk));
console.log(store.getState());


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
