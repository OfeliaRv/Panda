import ReactDOM from 'react-dom';
import App from './App';
import '../src/assets/styles/css/style.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

axios.defaults.baseURL = 'http://localhost:42998/api';
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

// const store = createStore(allReducers, applyMiddleware(thunk));

const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(logger, thunk))
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
