import { Route } from 'react-router-dom'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'

const Auth = () => {
    return (
        <div className="auth-container">
            {/* <Router>
                <Switch> */}
                    <Route exact path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                {/* </Switch>
            </Router> */}
        </div>
    );
}

export default Auth;