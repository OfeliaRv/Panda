import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/css/style.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './reducers'
import thunk from 'redux-thunk'
import authService from './components/api-authorization/AuthorizeService'

// axios.defaults.baseURL = 'https://localhost:44344/api';
axios.defaults.baseURL = 'https://pandanavigation.azurewebsites.net/api';

axios.defaults.withCredentials = true;
// authService.getAccessToken().then(t => { console.log(t);axios.defaults.headers.common['Authorization'] = 'Bearer ' + t; });

// Store
const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
