import ReactDOM from 'react-dom';
import App from './App';
import '../src/assets/styles/css/style.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
