import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Site from './Site'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import authService from './components/api-authorization/AuthorizeService'
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes'
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants'
import { login } from './actions/authAction'

const history = createBrowserHistory(); 

const App = () => {
    const dispatch = useDispatch();

    //for testing
    // useEffect(() => {
    //     authService.getUser()
    //         .then(user => { console.log("user", user); dispatch(login(user)) });
    // }, []);

    return (
        <Router history={history}>
            <Switch>
                {/* <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} /> */}
                <Route exact path="/" component={Site} />
                <Route exact path="/products" component={Site} />
                <Route path="/products/:id" component={Site} />
                <Route path="/customers" component={Site} />
                <Route path="/reviews" component={Site} />
                <Route exact path="/news" component={Site} />
                <Route path="/news/:id" component={Site} />
                <Route path="/contacts" component={Site} />
                {/* <Route exact path="/forum" component={Site} />
                <Route path="/forum/:id" component={Site} />
                <Route path="/starttopic" component={Site} /> */}
                {/* <Route path="/login" component={Login} />
                <Route path="/register" component={Register} /> */}
                <Route path="*">
                    <div style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <h1 style={{ textAlign: 'center', color: '#6D7587' }}>PAGE NOT FOUND</h1>
                        <a href="/"><p style={{ color: '#4d545e' }}>Go to Homepage</p></a>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
