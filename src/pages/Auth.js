import { Route } from 'react-router-dom'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'

const Auth = () => {
    return (
        <div className="auth-container">
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
        </div>
    );
}

export default Auth;