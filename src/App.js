import { DataProvider } from './DataContext'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory();

const App = () => {
    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/register" component={Auth} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/news" component={Dashboard} />
                    <Route path="/addnews" component={Dashboard} />
                    <Route path="/products" component={Dashboard} />
                    <Route path="/addproduct" component={Dashboard} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;