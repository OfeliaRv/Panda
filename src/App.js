import { DataProvider } from './DataContext'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Site from './Site'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

const history = createBrowserHistory();

const App = () => {
    return (
        <DataProvider>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Site} />
                    <Route exact path="/products" component={Site} />
                    <Route path="/products/:id" component={Site} />
                    <Route path="/customers" component={Site} />
                    <Route path="/reviews" component={Site} />
                    <Route path="/news" component={Site} />
                    <Route path="/contacts" component={Site} />
                    <Route exact path="/forum" component={Site} />
                    <Route path="/forum/:id" component={Site} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="*">
                        <div style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <h1 style={{ textAlign: 'center', color: '#6D7587' }}>PAGE NOT FOUND</h1>
                            <a href="/"><p style={{ color: '#4d545e' }}>Go to Homepage</p></a>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </DataProvider>
    );
}

export default App;
