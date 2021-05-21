import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory();

const App = () => {
    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/login" component={Auth} />
                    <Route path="/register" component={Auth} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/news" component={Dashboard} />
                    <Route path="/addnews" component={Dashboard} />
                    <Route exact path="/editnews" component={Dashboard} />
                    <Route path="/editnews/:id" component={Dashboard} />
                    <Route path="/products" component={Dashboard} />
                    <Route path="/addproduct" component={Dashboard} />
                    <Route path="/reviews" component={Dashboard} />
                    <Route path="/addreview" component={Dashboard} />
                    <Route path="/requests" component={Dashboard} />
                    <Route path="/messages" component={Dashboard} />
                    <Route path="/companies" component={Dashboard} />
                    <Route path="/addcompany" component={Dashboard} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;