import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/css/style.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './reducers'
import thunk from 'redux-thunk'
import { user } from '../src/reducers/authReducer'
import { OidcProvider } from 'redux-oidc'

axios.defaults.baseURL = 'http://localhost:42998/api';
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.user.token;

// Store
const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        {/* <OidcProvider userManager={userManager} store={store}> */}
            <App />
        {/* </OidcProvider> */}
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
