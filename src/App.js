import { DataProvider } from './DataContext'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Login from './components/auth/Login'

const history = createBrowserHistory({ forceRefresh: true });

const App = () => {
    return (
        <DataProvider>
            <div className="App">
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/register" component={Auth} />
                        <Route path="/dashboard" component={Dashboard} />
                    </Switch>
                </Router>
            </div>
        </DataProvider>
    );
}

export default App;