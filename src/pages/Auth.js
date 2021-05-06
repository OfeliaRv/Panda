import { BrowserRouter as Switch, Route } from 'react-router-dom'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'

const Auth = () => {
    return (
        <div className="auth-container">
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </div>
    );
}

export default Auth;