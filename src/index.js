import ReactDOM from 'react-dom'
import App from './App'
import '../src/assets/styles/css/style.css'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import authService from './components/api-authorization/AuthorizeService'

axios.defaults.baseURL = 'https://localhost:44344/api';
axios.defaults.withCredentials = true;
authService.getAccessToken().then(t => { console.log(t);axios.defaults.headers.common['Authorization'] = 'Bearer ' + t; });

const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
