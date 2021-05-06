import { DataProvider } from './DataContext'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { store } from './actions/store'

const history = createBrowserHistory();

const App = () => {
    return (
        <DataProvider>
        {/* <Provider store={store}> */}
            <div className="App">
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/register" component={Auth} />
                        <Route path="/dashboard" component={Dashboard} />
                    </Switch>
                </Router>
            </div>
        {/* </Provider> */}
        </DataProvider>
    );
}

export default App;