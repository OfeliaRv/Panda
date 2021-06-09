import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';
import authService from './components/api-authorization/AuthorizeService'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './actions/AuthAction'

const App = ({ userData }) => {
    const dispatch = useDispatch();
    // const [user, setUser] = useState({});

    useEffect(() => {
        authService.getUser()
            .then(user => { console.log("user", user); dispatch(login(user)) });
    }, []);

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
                    { userData.user == null || userData == undefined || Object.keys(userData.user).length == 0 ?
                        <Route exact path="/" component={Auth} /> :
                        <Route exact path="/" component={Dashboard} />
                    }
                    <Route path="/register" component={Auth} />
                    <Route path="/news" component={Dashboard} />
                    <Route path="/addnews" component={Dashboard} />
                    <Route exact path="/editnews/:id" component={Dashboard} />
                    <Route path="/products" component={Dashboard} />
                    <Route path="/addproduct" component={Dashboard} />
                    <Route exact path="/editproduct/:id" component={Dashboard} />
                    <Route path="/reviews" component={Dashboard} />
                    <Route path="/addreview" component={Dashboard} />
                    <Route exact path="/editreview/:id" component={Dashboard} />
                    <Route path="/auth-requests" component={Dashboard} />
                    <Route path="/topic-requests" component={Dashboard} />
                    <Route path="/messages" component={Dashboard} />
                    <Route path="/companies" component={Dashboard} />
                    <Route path="/addcompany" component={Dashboard} />
                    <Route exact path="/editcompany/:id" component={Dashboard} />
                    <Route path="*"> <h1>Page not found</h1></Route>
                </Switch>
            </Router>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        userData: state.auth
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchUser: () => dispatch(fetchUser())
//     }
// }

export default connect(
    mapStateToProps //,
    // mapDispatchToProps
)(App)